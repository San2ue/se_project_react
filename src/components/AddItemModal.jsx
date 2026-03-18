import ModalWithForm from "./ModalWithForm";

function AddItemModal({ activeModal, buttonText, closeActiveModal }) {
  return (
    <ModalWithForm
      activeModal={activeModal}
      isOpen={activeModal === "add-garment"}
      titleText="New garment"
      buttonText={buttonText}
      closeActiveModal={closeActiveModal}
    >
      <label className="modal__label" htmlFor="garment-name">
        Name{" "}
        <input
          className="modal__input"
          type="text"
          id="garment-name"
          placeholder="Name"
          minLength="2"
          maxLength="40"
          required
        />
      </label>
      <label className="modal__label" htmlFor="garment-img">
        Image{" "}
        <input
          className="modal__input"
          type="url"
          id="garment-img"
          placeholder="Image URL"
          minLength="2"
          maxLength="40"
          required
        />
      </label>
      <fieldset className="modal__radio-btns">
        <legend className="modal__legend">Select the weather type:</legend>
        <label className="modal__label modal__label-type-radio" htmlFor="hot">
          <input className="modal__radio-input" type="radio" id="hot" />
          Hot
        </label>
        <label className="modal__label modal__label-type-radio" htmlFor="warm">
          <input className="modal__radio-input" type="radio" id="warm" />
          Warm
        </label>
        <label className="modal__label modal__label-type-radio" htmlFor="cold">
          <input className="modal__radio-input" type="radio" id="cold" />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
}

export default AddItemModal;
