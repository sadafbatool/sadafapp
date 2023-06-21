function Modal({ closeModel }) {
  return (
    <div>
      <br />

      <button className="btn cancel" onClick={() => closeModel(false)}>
        X
      </button>
      <h1 className="text">Are you sure to want to continue?</h1>
      <p className="text">The next page is awesome!</p>
      <button className="btn cancel" onClick={() => closeModel(false)}>
        Cancel
      </button>
      <button className="btn continue">Continue</button>
    </div>
  );
}
export default Modal;
