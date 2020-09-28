import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <div className="card__container">
        <div className="card__image-container">
          <img className="card__image" src={props.card.link} onClick={handleClick} />
        </div>
        <button className="card__remove-button link-translucence" />
        <h3 className="card__title">{props.card.name}</h3>
        <button className="card__like-button link-translucence" />
        <p className="card__like-score">{props.card.likes.length}</p>
      </div>
    </li>
  );
}

export default Card;
