import React from 'react';
import Card from './Card.js';
import iconPen from '../images/icon_pen.svg';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({ cards, onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section id="profile" className="lead">
        <figure className="profile">
          <div className="profile__avatar-continer">
            <img src={currentUser.avatar} alt="Аватар" className="profile__avatar-image" />
            <button className="profile__avatar-button" onClick={onEditAvatar}>
              <img src={iconPen} alt="" className="profile__avatar-button-img" />
            </button>
          </div>
          <figcaption className="profile__info">
            <h1 className="profile__title">{currentUser.name}</h1>
            <p className="profile__subtitle">{currentUser.about}</p>
            <button className="profile__edit-button link-translucence" onClick={onEditProfile} />
          </figcaption>
        </figure>
        <button className="add-button link-translucence" onClick={onAddPlace} />
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map(card => <Card
            card={card}
            key={card._id}
            onClick={onCardClick}
            onLikeClick={onCardLike}
            onCardDelete={onCardDelete} />)}
        </ul>
      </section>
    </main>
  );
}

export default Main;
