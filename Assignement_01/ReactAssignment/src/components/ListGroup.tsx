interface ListGroupProps {
 heading: string;
 items: string[];
}
const ListGroup: React.FC<ListGroupProps> = ({ heading, items }) => {
  return (
    <>
      <h3>{heading}</h3>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
export default ListGroup;