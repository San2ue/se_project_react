import "../blocks/ItemModal.css";
import close from "../images/close.svg";

function ItemModal({ activeModal, closeActiveModal, card }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal__open"}`}>
      <div className="modal__content_img">
        <button
          onClick={closeActiveModal}
          className="modal__close"
          type="button"
        >
          <img src={close} alt="Close" className="modal__close-img" />
        </button>
        <img src={card.link} alt={card.name} className="modal__img" />
        <div className="modal__footer">
          <section className="modal__footer-section">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
