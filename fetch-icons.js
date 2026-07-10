// fetch icons

const icons = {
  'i-doc': 'document-text-linear',
  'i-house': 'home-2-linear',
  'i-stamp': 'medal-star-linear',
  'i-clock': 'clock-circle-linear',
  'i-warn': 'danger-triangle-linear',
  'i-check': 'check-circle-linear',
  'i-scale': 'libra-linear', // if libra doesn't exist, we'll try scale
  'i-arrow-d': 'arrow-down-linear',
  'i-chevron': 'alt-arrow-down-linear',
  'i-x': 'close-circle-linear',
  'i-pin': 'map-point-linear',
  'i-book': 'notebook-linear'
};

async function fetchIcons() {
  for (const [id, solarName] of Object.entries(icons)) {
    let url = `https://api.iconify.design/solar/${solarName}.svg`;
    let res = await fetch(url);
    if (!res.ok) {
      if (solarName === 'libra-linear') {
        url = `https://api.iconify.design/solar/scale-linear.svg`;
        res = await fetch(url);
      }
    }
    
    if (res.ok) {
      let svg = await res.text();
      // Extract the inner HTML of the SVG
      const match = svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
      if (match) {
        let paths = match[1].trim();
        // ensure stroke width and color are handled by CSS (current-color)
        paths = paths.replace(/stroke="[^"]+"/g, 'stroke="currentColor"');
        console.log(`<symbol id="${id}" viewBox="0 0 24 24" fill="none">\n${paths}\n</symbol>`);
      }
    } else {
      console.log(`<!-- Failed to fetch ${solarName} for ${id} -->`);
    }
  }
}
fetchIcons();
