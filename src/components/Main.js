import React from 'react';
import Card from './Card.js';
import api from '../utils/Api.js';

function Main(props) {
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
      }).catch();
  }, []);

  return (
    <main className="content">
      <section id="profile" className="lead">
        <figure className="profile">
          <div className="profile__avatar-continer">
            <img src={userAvatar} alt="Аватар" className="profile__avatar-image" />
            <button className="profile__avatar-button" onClick={props.onEditAvatar}>
              <img src="./images/icon_pen.svg" alt="" className="profile__avatar-button-img" />
            </button>
          </div>
          <figcaption className="profile__info">
            <h1 className="profile__title">{userName}</h1>
            <p className="profile__subtitle">{userDescription}</p>
            <button className="profile__edit-button link-translucence" onClick={props.onEditProfile} />
          </figcaption>
        </figure>
        <button className="add-button link-translucence" onClick={props.onAddPlace} />
      </section>
      <section className="cards">
        <ul className="cards__list">
          {cards.map(card => <Card card={card} key={card._id} onCardClick={props.onCardClick} />)}
        </ul>
      </section>
    </main>
  );
}

export default Main;
