import "../blocks/ModalWithForm.css";
import close from "../images/close.svg";

function ModalWithForm({
  closeActiveModal,
  children,
  buttonText,
  titleText,
  isOpen,
}) {
  return (
    <div className={`modal ${isOpen ? "modal__open" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{titleText}</h2>
        <button
          onClick={closeActiveModal}
          className="modal__close"
          type="button"
        >
          <img src={close} alt="Close" className="modal__close-img" />
        </button>
        <form className="modal__form">
          {children}
          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
