import fs from 'fs';

const files = ['inicio.html', 'contacto.html', 'pintura.html', 'catalogo.html'];

for (const file of files) {
  let content = fs.readFileSync(`./stitch_screens/${file}`, 'utf-8');
  
  // Remove Tailwind CDN
  content = content.replace(/<script src="https:\/\/cdn\.tailwindcss\.com\?.*?"><\/script>/g, '');
  
  // Remove tailwind config script block
  content = content.replace(/<script id="tailwind-config">[\s\S]*?<\/script>/g, '');
  
  // Remove style blocks (we moved them to style.css)
  content = content.replace(/<style>[\s\S]*?<\/style>/g, '');
  
  // Add Vite entry point and meta tags if missing
  content = content.replace('</head>', `
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>COR-MAG 3D - Forged in Eternal Conflict</title>
    <script type="module" src="/main.js"></script>
</head>`);

  // Fix HTML syntax
  if (!content.includes('<!DOCTYPE html>')) {
    content = '<!DOCTYPE html>\n' + content;
  }
  
  if (!content.includes('<html')) {
    content = content.replace(/<head>/, '<html lang="es" class="dark">\n<head>');
    content = content + '\n</html>';
  } else if (!content.includes('class="dark"')) {
      content = content.replace(/<html(.*?)>/, '<html$1 class="dark">');
  }

  // Rewrite file to root
  fs.writeFileSync(`./${file}`, content);
}

// Set up index.html
fs.renameSync('./inicio.html', './index.html');

console.log("HTML processing complete.");
