function List({ array, handleDelete, handleEdit, handleComplete }) {
  return (
    <div>
      <ol className="updated-text">
        {array.map((item) => (
          <li className={item.completed && "completed"}>
            <input onChange={() => handleComplete(item.id)} type="checkbox" />
            {item.value}
            <button className="btn del" onClick={() => handleDelete(item.id)}>
              {" "}
              DELETE
            </button>
            <button className="btn edit" onClick={() => handleEdit(item)}>
              {" "}
              EDIT
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default List;
