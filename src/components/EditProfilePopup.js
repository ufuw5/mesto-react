import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onUpdateUser, onClose }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit() {
    onUpdateUser({ name, about: description });
  }

  return (
    <PopupWithForm
      name='editProfile'
      title='Редактировать профиль'
      submitText='Сохранить'
      submitWaitText='Сохранение...'
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}>
      <input
        type="text"
        placeholder="Имя"
        name="name"
        id="profile-name-input"
        className="form__input"
        value={name || ''}
        onChange={handleNameChange}
        minLength="2"
        maxLength="40"
        required />
      <span
        id="profile-name-input-error"
        className="form__input-error" />
      <input
        type="text"
        placeholder="Характеристика"
        name="about"
        id="profile-description-input"
        className="form__input"
        value={description || ''}
        onChange={handleDescriptionChange}
        minLength="2"
        maxLength="200"
        required />
      <span
        id="profile-description-input-error"
        className="form__input-error" />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
