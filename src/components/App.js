import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick} />
      <Footer />
      <PopupWithForm
        name='editProfile'
        title='Редактировать профиль'
        submitText='Сохранить'
        submitWaitText='Сохранение...'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>
        <input type="text" placeholder="Имя" name="name" id="profile-name-input" className="form__input" minLength="2"
          maxLength="40" required />
        <span id="profile-name-input-error" className="form__input-error"></span>
        <input type="text" placeholder="Характеристика" name="about" id="profile-description-input" className="form__input"
          minLength="2" maxLength="200" required />
        <span id="profile-description-input-error" className="form__input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name='editProfileAvatar'
        title='Обновить аватар'
        submitText='Создать'
        submitWaitText='Сохранение...'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <input type="url" placeholder="Ссылка на изображение" name="avatar" id="avatar-link-input" className="form__input"
          required />
        <span id="avatar-link-input-error" className="form__input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name='addCard'
        title='Новое место'
        submitText='Создать'
        submitWaitText='Сохранение...'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <input type="text" placeholder="Название" name="name" id="card-name-input" className="form__input" minLength="1"
          maxLength="30" required />
        <span id="card-name-input-error" className="form__input-error"></span>
        <input type="url" placeholder="Ссылка на изображение" name="link" id="card-link-input" className="form__input"
          required />
        <span id="card-link-input-error" className="form__input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        name='deleteCard'
        title='Вы уверены?'
        submitText='Да'
        submitWaitText='Удаление...' />
      {selectedCard && <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups} />}
    </div>
  );
}

export default App;
