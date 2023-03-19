import { BsFillPlayCircleFill } from "react-icons/bs";
import "./item.scss";
const Item = ({ data1 }) => {
  return (
    <div className="item">
      <div className="item__content">
        <span className="item__title">{data1.tap}</span>
        <a href={data1.url}>
          <img className="item__img" src={data1.img} alt="" />
          <BsFillPlayCircleFill />
        </a>
        <div className="item__name">
          <span>{data1.Name}</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
