import MenuSub from "./MenuSub";
import "./style.scss";
const Menu = () => {
  return (
    <div className="Menu">
      <div className="container">
        <ul className="Menu__list">
          <li className="Menu__item">
            <a href="1">TRANG CHỦ</a>
          </li>
          <li className="Menu__item">
            <a href="1">THỂ LOẠI</a>
            <div className="Menu__help">
              <MenuSub sl={19} width={800} li={20} />
            </div>
          </li>
          <li className="Menu__item">
            <a href="1">QUỐC GIA</a>
            <div className="Menu__help">
              <MenuSub sl={13} width={685} li={20} />
            </div>
          </li>
          <li className="Menu__item">
            <a href="1">PHIM MỚI</a>
            <div className="Menu__help">
              <MenuSub sl={12} width={200} li={100} />
            </div>
          </li>
          <li className="Menu__item">
            <a href="1">PHIM BỘ</a>
          </li>
          <li className="Menu__item">
            <a href="1">PHIM LẺ</a>
          </li>
          <li className="Menu__item">
            <a href="1">PHIM THUYẾT MINH</a>
          </li>
          <li className="Menu__item">
            <a href="1">PHIM CHIẾU RẠP</a>
          </li>
          <li className="Menu__item">
            <a href="1">TV SHOW</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
