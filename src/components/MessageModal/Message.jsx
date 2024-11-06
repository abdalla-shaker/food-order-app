export default function Message({ closeClickHandler }) {
  return (
    <div className={`cart`}>
      <h2>Success!</h2>
      <p>Your order was submitted successfully.</p>
      <p>
        We will get back to you with more details via email within the next few
        minutes.
      </p>
      <div className="modal-actions">
        <button className="button" onClick={closeClickHandler}>
          Okay
        </button>
      </div>
    </div>
  );
}
