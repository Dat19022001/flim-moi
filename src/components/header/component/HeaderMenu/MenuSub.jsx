const MenuSub = ({ sl, width, li }) => {
  let data = [];

  for (let i = 1; i <= sl; i++) {
    data.push({
      id: i,
      Name: `Cổ Trang `,
    });
  }
  return (
    <ul className="Menu__sub" style={{ width: width }}>
      {data.map((item) => (
        <li key={item.id} className="Menu__item1" style={{ width: `${li}%` }}>
          <a href={item.id}>{item.Name}</a>
        </li>
      ))}
    </ul>
  );
};

export default MenuSub;
