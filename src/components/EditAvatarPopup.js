import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onUpdateAvatar, onClose }) {
  const inputRef = React.useRef();

  function handleSubmit() {
    onUpdateAvatar({ avatar: inputRef.current.value });
  }

  return (
    <PopupWithForm
      name='editProfileAvatar'
      title='Обновить аватар'
      submitText='Создать'
      submitWaitText='Сохранение...'
      isOpen={isOpen}
      onSubmit={handleSubmit}
      onClose={onClose}>
      <input
        type="url"
        placeholder="Ссылка на изображение"
        name="avatar"
        id="avatar-link-input"
        className="form__input"
        ref={inputRef}
        required />
      <span
        id="avatar-link-input-error"
        className="form__input-error" />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
