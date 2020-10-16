import React from 'react';

function ImagePopup({ card, onClose }) {
  return (
    <section
      id="imagePopup"
      className="popup popup_transparency-hard popup_opened">
      <figure className="image-popup">
        <button
          className="popup__close-button link-translucence"
          onClick={onClose} />
        <img
          className="image-popup__image"
          src={card.link}
          alt={card.name} />
        <figcaption className="image-popup__title">{card.name}</figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;
