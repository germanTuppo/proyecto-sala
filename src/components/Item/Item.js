function Item(props) {
  const { titulo, detalle, precio, cantidad } = props;

  return (
    <div>
      <ul>
        <li>
          {titulo}
        </li>
        <li>
          {detalle}
        </li>
        <li>
          {precio}
        </li>
        <li>
          {cantidad}
        </li>
      </ul>
    </div>
  );
}

export default Item;