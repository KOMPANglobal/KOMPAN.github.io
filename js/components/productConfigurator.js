// productConfigurator.js

export function initializeProductConfigurator() {
  const colorSelector = document.getElementById('color');
  const materialSelector = document.getElementById('material');
  
  colorSelector.addEventListener('change', updateProductPreview);
  materialSelector.addEventListener('change', updateProductPreview);
}

function updateProductPreview() {
  const selectedColor = document.getElementById('color').value;
  const selectedMaterial = document.getElementById('material').value;
  console.log(`Produkt z kolorem: ${selectedColor} i materiałem: ${selectedMaterial}`);
  // Zaktualizowanie podglądu produktu
}
