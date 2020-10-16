import React from 'react';

function PopupWithForm({ name, title, submitText, submitWaitText, isOpen, onSubmit, onClose, children }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit();
    onClose();
  }

  return (
    <section
      id={`${name}Popup`}
      className={`popup popup_transparency-norm ${isOpen ? 'popup_opened' : ''}`}>
      <form
        action="#"
        name={name}
        className="form"
        onSubmit={handleSubmit}
        noValidate>
        <button
          type="reset"
          className="popup__close-button link-translucence"
          onClick={onClose} />
        <label
          className="form__label">{title}</label>
        {children}
        <button
          type="submit"
          className="form__submit form__submit_active link-translucence">
          <span
            id="submitText"
            className="form__submit-text">{submitText}</span>
          <span
            id="submitWaitText"
            className="form__submit-text form__submit-text_hide">{submitWaitText}</span>
        </button>
      </form>
    </section>
  );
}

export default PopupWithForm;
