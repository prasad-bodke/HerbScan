import fs from 'fs';

const plants = [
  { file: 'herbalDatabase.ts', id: 'shankhpushpi', name: 'Convolvulus prostratus' },
  { file: 'expandedHerbs.ts', id: 'vacha', name: 'Acorus calamus' },
  { file: 'expandedHerbs.ts', id: 'sarpgandha', name: 'Rauvolfia serpentina' },
  { file: 'expandedHerbs.ts', id: 'chitrak', name: 'Plumbago zeylanica' },
  
  { file: 'userHerbsPart1.ts', id: 'cinchona', name: 'Cinchona officinalis' },
  { file: 'userHerbsPart1.ts', id: 'cinnamon', name: 'Cinnamomum verum' },
  { file: 'userHerbsPart1.ts', id: 'clove', name: 'Syzygium aromaticum' },
  { file: 'userHerbsPart2.ts', id: 'coffee', name: 'Coffea arabica' },
  { file: 'userHerbsPart2.ts', id: 'coriander', name: 'Coriandrum sativum' },
  { file: 'userHerbsPart2.ts', id: 'datura', name: 'Datura metel' },
  { file: 'userHerbsPart2.ts', id: 'ephedra', name: 'Ephedra sinica' },
  { file: 'userHerbsPart2.ts', id: 'ergot', name: 'Claviceps purpurea' },
  { file: 'userHerbsPart2.ts', id: 'fennel', name: 'Foeniculum vulgare' },
  { file: 'userHerbsPart2.ts', id: 'garlic', name: 'Garlic' },
  { file: 'userHerbsPart2.ts', id: 'ginger', name: 'Ginger' },
  { file: 'userHerbsPart2.ts', id: 'lavender', name: 'Lavandula' },
  { file: 'userHerbsPart2.ts', id: 'lemon', name: 'Lemon' },
  { file: 'userHerbsPart2.ts', id: 'myrrh', name: 'Myrrh' },
  { file: 'userHerbsPart2.ts', id: 'peppermint', name: 'Peppermint' },
  { file: 'userHerbsPart2.ts', id: 'tea', name: 'Camellia sinensis' },
  { file: 'userHerbsPart2.ts', id: 'tragacanth', name: 'Tragacanth' },
  { file: 'userHerbsPart2.ts', id: 'vinca', name: 'Catharanthus roseus' },
  { file: 'userHerbsPart2.ts', id: 'asafoetida', name: 'Asafoetida' },
  { file: 'userHerbsPart1.ts', id: 'castor', name: 'Ricinus' },
  { file: 'userHerbsPart1.ts', id: 'ginseng', name: 'Ginseng' }
];

async function run() {
  for (const plant of plants) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${encodeURIComponent(plant.name)}`;
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const data = await res.json();
      const pages = data.query.pages;
      const pageId = Object.keys(pages)[0];
      if (pageId !== '-1' && pages[pageId].original) {
        plant.img = pages[pageId].original.source;
      } else {
        plant.img = 'NOT_FOUND';
      }
    } catch (e) {
      plant.img = 'ERROR';
    }
    // sleep
    await new Promise(r => setTimeout(r, 500));
  }
  fs.writeFileSync('images_results2.json', JSON.stringify(plants, null, 2));

  // Now replace in files
  const byFile = {};
  for (const plant of plants) {
    if (plant.img && plant.img.startsWith('http')) {
      if (!byFile[plant.file]) byFile[plant.file] = [];
      byFile[plant.file].push(plant);
    }
  }

  for (const file of Object.keys(byFile)) {
    const filePath = 'src/data/' + file;
    let content = fs.readFileSync(filePath, 'utf8');
    
    for (const plant of byFile[file]) {
      const idStr = `id: '${plant.id}'`;
      const idx = content.indexOf(idStr);
      if (idx !== -1) {
        const imgIdx = content.indexOf('image: ', idx);
        if (imgIdx !== -1 && imgIdx < idx + 500) {
          const endIdx = content.indexOf(',', imgIdx);
          const oldLine = content.slice(imgIdx, endIdx);
          const newLine = `image: '${plant.img}'`;
          content = content.replace(oldLine, newLine);
          console.log(`Replaced ${plant.id} in ${file}`);
        }
      }
    }
    fs.writeFileSync(filePath, content);
  }
  console.log('Finished updating files');
}

run();
