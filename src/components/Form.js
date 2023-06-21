function Form({ input, setInput, editedId, handleSave, handleUpdate }) {
  return (
    <div>
      <label className="paragraph-text">INPUT</label>

      <input
        className="input"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />

      {editedId ? (
        <button className="btn update" onClick={handleUpdate}>
          {" "}
          UPDATE
        </button>
      ) : (
        <button className="btn add" onClick={handleSave}>
          ADD
        </button>
      )}
    </div>
  );
}
export default Form;
