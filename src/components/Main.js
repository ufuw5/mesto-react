import React from 'react';
import Card from './Card.js';
import api from '../utils/api.js';
import iconPen from '../images/icon_pen.svg';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([info, initialCard]) => {
        setUserName(info.name);
        setUserDescription(info.about);
        setUserAvatar(info.avatar);
        setCards(initialCard);
      }).catch(err => { console.log(err) });
  }, []);

  return (
    <main className="content">
      <section id="profile" className="lead">
        <figure className="profile">
          <div className="profile__avatar-continer">
            <img src={userAvatar} alt="Аватар" className="profile__avatar-image" />
            <button className="profile__avatar-button" onClick={onEditAvatar}>
              <img src={iconPen} alt="" className="profile__avatar-button-img" />
            </button>
          </div>
          <figcaption className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <p className="profile__subtitle">{userDescription}</p>
            <button className="profile__edit-button link-translucence" onClick={onEditProfile} />
          </figcaption>
        </figure>
        <button className="add-button link-translucence" onClick={onAddPlace} />
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map(card => <Card card={card} key={card._id} onCardClick={onCardClick} />)}
        </ul>
      </section>
    </main>
  );
}

export default Main;
