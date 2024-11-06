import Input from "../../utils/Input.jsx";

export default function Form({
  onSubmit,
  closeHandler,
  error,
  messageHandler,
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className="control">
        <Input title="Full Name" id="name" type="text" />
      </div>

      <div className="control">
        <Input title="E-mail Address" id="email" type="email" />
      </div>

      <div className="control">
        <Input title="Street" id="street" type="text" />
      </div>

      <div className="control-row">
        <div className="control">
          <Input
            title="Postal Code"
            id="postal-code"
            type="text"
            inputMode="numeric"
          />
        </div>

        <div className="control">
          <Input title="City" id="city" type="text" />
        </div>
      </div>

      {error && <p className="danger">{error.message}</p>}

      <div className="modal-actions">
        <button
          className="text-button"
          type="reset"
          onClick={() => {
            closeHandler();
          }}
        >
          Close
        </button>

        <button
          className="button"
          type="submit"
          onClick={() => {
            closeHandler();
            messageHandler();
          }}
        >
          Submit Order
        </button>
      </div>
    </form>
  );
}
