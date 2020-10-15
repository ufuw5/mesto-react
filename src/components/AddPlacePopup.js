import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onAdd, onClose }) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onAdd({ name, link });
  }

  return (
    <PopupWithForm
      name='addCard'
      title='Новое место'
      submitText='Создать'
      submitWaitText='Сохранение...'
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}>
      <input
        type="text"
        placeholder="Название"
        name="name"
        id="card-name-input"
        className="form__input"
        value={name}
        onChange={handleNameChange}
        minLength="1"
        maxLength="30"
        required />
      <span
        id="card-name-input-error"
        className="form__input-error" />
      <input
        type="url"
        placeholder="Ссылка на изображение"
        name="link"
        id="card-link-input"
        className="form__input"
        value={link}
        onChange={handleLinkChange}
        required />
      <span
        id="card-link-input-error"
        className="form__input-error" />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
