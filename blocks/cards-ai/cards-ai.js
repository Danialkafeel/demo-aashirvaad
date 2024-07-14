
export default function decorate(block) {
  block.style.display = 'grid';
  block.style.gridTemplateColumns = 'repeat(3, 1fr)';
  block.style.gap = '40px';
  block.style.justifyItems = 'center';
  block.style.alignItems = 'center';
  block.style.padding = '40px';
  block.style.backgroundColor = '#f9f4ef';

  const cards = block.querySelectorAll('.cards-ai > div');
  cards.forEach((card) => {
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';
    card.style.textAlign = 'center';

    const imgWrapper = card.querySelector('div:first-child');
    imgWrapper.style.position = 'relative';
    imgWrapper.style.width = '200px';
    imgWrapper.style.height = '200px';
    imgWrapper.style.display = 'flex';
    imgWrapper.style.justifyContent = 'center';
    imgWrapper.style.alignItems = 'center';
    imgWrapper.style.borderRadius = '50%';
    imgWrapper.style.backgroundColor = '#f0e1d1';

    const img = imgWrapper.querySelector('img');
    img.style.maxWidth = '100%';
    img.style.maxHeight = '100%';
    img.style.borderRadius = '50%';

    const link = card.querySelector('a');
    link.style.marginTop = '20px';
    link.style.fontSize = '24px';
    link.style.fontWeight = 'bold';
    link.style.textDecoration = 'none';
    link.style.color = '#444';

    link.addEventListener('mouseover', () => {
      link.style.color = '#000';
    });

    link.addEventListener('mouseout', () => {
      link.style.color = '#444';
    });
  });
}
