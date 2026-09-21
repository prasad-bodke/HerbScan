const fs = require('fs');
const https = require('https');

const files = [
  'src/data/herbalDatabase.ts',
  'src/data/expandedHerbs.ts',
  'src/data/userHerbsPart1.ts',
  'src/data/userHerbsPart2.ts'
];

async function scrapeWikiImage(query) {
    return new Promise(resolve => {
        https.get('https://en.wikipedia.org/wiki/' + encodeURIComponent(query), res => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                // follow redirect
                https.get(res.headers.location, res2 => {
                    let data = '';
                    res2.on('data', chunk => data += chunk);
                    res2.on('end', () => {
                        const match = data.match(/<meta property="og:image" content="([^"]+)"/);
                        if (match) {
                            resolve(match[1]);
                        } else {
                            resolve(null);
                        }
                    });
                }).on('error', () => resolve(null));
                return;
            }

            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const match = data.match(/<meta property="og:image" content="([^"]+)"/);
                if (match) {
                    resolve(match[1]);
                } else {
                    resolve(null);
                }
            });
        }).on('error', () => resolve(null));
    });
}

async function processFiles() {
  for (const file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf-8');
    
    const regex = /id:\s*'([^']+)',[\s\S]*?name:\s*'([^']+)',[\s\S]*?botanicalName:\s*'([^']+)',[\s\S]*?image:\s*'([^']+)',/g;
    
    let match;
    const updates = [];
    while ((match = regex.exec(content)) !== null) {
      updates.push({
        fullMatch: match[0],
        id: match[1],
        name: match[2],
        botanicalName: match[3],
        currentImage: match[4]
      });
    }

    for (const update of updates) {
      if (update.currentImage.includes('Ash_Tree') || update.currentImage.includes('unsplash.com')) {
        const cleanBotanical = update.botanicalName.split(' (')[0].split(' / ')[0].split(' ').slice(0, 2).join(' ');
        let newImageUrl = await scrapeWikiImage(cleanBotanical);
        
        if (!newImageUrl) {
            const genus = cleanBotanical.split(' ')[0];
            newImageUrl = await scrapeWikiImage(genus);
        }

        if (!newImageUrl) {
          const commonName = update.name.split(' (')[0].trim();
          newImageUrl = await scrapeWikiImage(commonName);
        }

        if (newImageUrl) {
          console.log('Found image for', update.botanicalName, ':', newImageUrl);
          const replacedMatch = update.fullMatch.replace(update.currentImage, newImageUrl);
          content = content.replace(update.fullMatch, replacedMatch);
        } else {
          console.log('Still no image for', update.botanicalName);
        }
      }
    }
    
    fs.writeFileSync(file, content, 'utf-8');
    console.log('Updated', file);
  }
}

processFiles();
