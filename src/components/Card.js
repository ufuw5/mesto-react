import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card({ card, onClick, onLikeClick, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(item => item._id === currentUser._id);
  const removeButtonClassName = `card__remove-button ${isOwn ? 'card__remove-button_active' : ''} link-translucence`;
  const cardLikeButtonClassName = `card__like-button ${isLiked ? 'card__like-button_active' : ''} link-translucence`;

  function handleClick() {
    onClick(card);
  }

  function handleLikeClick() {
    onLikeClick(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="card">
      <div className="card__container">
        <div className="card__image-container">
          <img
            className="card__image"
            src={card.link}
            alt={card.name}
            onClick={handleClick} />
        </div>
        <button
          className={removeButtonClassName}
          onClick={handleDeleteClick} />
        <h3 className="card__title">{card.name}</h3>
        <button
          className={cardLikeButtonClassName}
          onClick={handleLikeClick} />
        <p className="card__like-score">{card.likes.length}</p>
      </div>
    </li>
  );
}

export default Card;
