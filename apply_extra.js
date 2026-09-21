import fs from 'fs';

const replacements = [
  { file: 'src/data/userHerbsPart1.ts', oldStr: 'Styrax_benzoin_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-133.jpg', newStr: 'https://images.unsplash.com/photo-1601051515281-a9f972b22ec3?w=800&q=80' },
  { file: 'src/data/userHerbsPart1.ts', oldStr: 'Citrus_aurantium_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-042.jpg', newStr: 'https://images.unsplash.com/photo-1590502593747-422e157eb108?w=800&q=80' },
  { file: 'src/data/userHerbsPart1.ts', oldStr: 'Acacia_catechu_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-003.jpg', newStr: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&q=80' }
];

for (const rep of replacements) {
  if (fs.existsSync(rep.file)) {
    let content = fs.readFileSync(rep.file, 'utf8');
    // Replace the entire line containing the oldStr with the newStr
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(rep.oldStr)) {
        lines[i] = `    image: '${rep.newStr}',`;
        console.log(`Replaced in ${rep.file}`);
      }
    }
    fs.writeFileSync(rep.file, lines.join('\n'));
  }
}
