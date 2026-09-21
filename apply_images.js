import fs from 'fs';

const replacements = [
  { id: 'shankhpushpi', img: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Convolvulus_prostratus_kz03.jpg' },
  { id: 'clove', img: 'https://images.unsplash.com/photo-1610452391054-ff1500d07525?w=800&q=80' },
  { id: 'coriander', img: 'https://images.unsplash.com/photo-1596660601552-331086eb015f?w=800&q=80' },
  { id: 'ephedra', img: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Ephedra_sinica_alexlomas.jpg' },
  { id: 'ergot', img: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Claviceps_purpurea.JPG' },
  { id: 'fennel', img: 'https://images.unsplash.com/photo-1621644788390-349f783cb2b0?w=800&q=80' },
  { id: 'garlic', img: 'https://images.unsplash.com/photo-1588667622941-2b0f4dfb2907?w=800&q=80' },
  { id: 'ginger', img: 'https://images.unsplash.com/photo-1615486171439-fd0575d1d643?w=800&q=80' },
  { id: 'lavender', img: 'https://images.unsplash.com/photo-1498842812179-c81beecf902c?w=800&q=80' },
  { id: 'lemon', img: 'https://images.unsplash.com/photo-1590502593747-422e157eb108?w=800&q=80' },
  { id: 'myrrh', img: 'https://images.unsplash.com/photo-1601051515281-a9f972b22ec3?w=800&q=80' },
  { id: 'peppermint', img: 'https://images.unsplash.com/photo-1628172828776-69e1c45952d9?w=800&q=80' },
  { id: 'tea', img: 'https://images.unsplash.com/photo-1582793988951-9aed53148380?w=800&q=80' },
  { id: 'tragacanth', img: 'https://images.unsplash.com/photo-1618221528657-6db27f8a3791?w=800&q=80' },
  { id: 'vinca', img: 'https://images.unsplash.com/photo-1594951460309-17bfbf7c7be9?w=800&q=80' },
  { id: 'asafoetida', img: 'https://images.unsplash.com/photo-1596700080649-0d4d42ec4cfb?w=800&q=80' },
  { id: 'castor', img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&q=80' },
  { id: 'ginseng', img: 'https://images.unsplash.com/photo-1582236319762-cb03f27476e3?w=800&q=80' }
];

const files = [
  'src/data/herbalDatabase.ts',
  'src/data/expandedHerbs.ts',
  'src/data/userHerbsPart1.ts',
  'src/data/userHerbsPart2.ts'
];

for (const file of files) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  for (const rep of replacements) {
    const idStr = `id: '${rep.id}'`;
    let idx = content.indexOf(idStr);
    while (idx !== -1) {
      const imgIdx = content.indexOf('image: ', idx);
      if (imgIdx !== -1 && imgIdx < idx + 500) {
        const endIdx = content.indexOf(',', imgIdx);
        const oldLine = content.slice(imgIdx, endIdx);
        const newLine = `image: '${rep.img}'`;
        if (oldLine !== newLine) {
          content = content.replace(oldLine, newLine);
          changed = true;
          console.log(`Replaced ${rep.id} in ${file}`);
        }
      }
      idx = content.indexOf(idStr, idx + 1);
    }
  }

  if (changed) {
    fs.writeFileSync(file, content);
  }
}

console.log('Done replacing fallbacks');
