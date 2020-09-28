import React from 'react';

function ImagePopup(props) {
  return (
    <section id="imagePopup" className={`popup popup_transparency-hard ${props.isOpen ? 'popup_opened' : ''}`}>
      <figure className="image-popup">
        <button className="popup__close-button link-translucence" onClick={props.onClose}></button>
        <img className="image-popup__image" src={props.card.link} />
        <figcaption className="image-popup__title">{props.card.name}</figcaption>
      </figure>
    </section>
  );
}

export default ImagePopup;
