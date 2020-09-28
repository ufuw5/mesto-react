import React from 'react';

function PopupWithForm(props) {
  return (
    <section id={`${props.name}Popup`} className={`popup popup_transparency-norm ${props.isOpen ? 'popup_opened' : ''}`}>
      <form action="#" name={props.name} className="form" noValidate>
        <button type="reset" className="popup__close-button link-translucence" onClick={props.onClose}></button>
        <label className="form__label">{props.title}</label>
        {props.children}
        <button type="submit" className="form__submit form__submit_nonactive link-translucence">
          <span id="submitText" className="form__submit-text">{props.submitText}</span>
          <span id="submitWaitText" className="form__submit-text form__submit-text_hide">{props.submitWaitText}</span>
        </button>
      </form>
    </section>
  );
}

export default PopupWithForm;
