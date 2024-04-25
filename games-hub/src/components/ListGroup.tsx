function ListGroup() {
  let items = ["New York", "San Francisco", "Dubai", "Toronto"];
  items = [];

  const message = items.length === 0 ? <p>No item found.</p> : null;

  const getMessage = () => {
    
  }
  return (
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
