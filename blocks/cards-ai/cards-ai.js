
export default function decorate(block) {
  // Add class for styling
  block.classList.add('cards-ai');

  // Iterate over each card
  const cards = block.querySelectorAll('.cards-ai > div');

  cards.forEach((card) => {
    // Add card class
    card.classList.add('card');

    // Extract and wrap image
    const imageContainer = card.querySelector('picture');
    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('card-image');
    imageWrapper.appendChild(imageContainer);
    card.insertBefore(imageWrapper, card.firstChild);

    // Extract and wrap text
    const textContainer = document.createElement('div');
    textContainer.classList.add('card-text');
    while (card.children.length > 1) {
      textContainer.appendChild(card.children[1]);
    }
    card.appendChild(textContainer);
  });
}
