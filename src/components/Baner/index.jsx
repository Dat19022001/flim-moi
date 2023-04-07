
import { useRef } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { appPath } from "../../config/appPath";
import "./style.scss";

const Baner = () => {
  const data = [
    {
      id:1,
      tap: " Tập 13 Vietsub",
      Name: "Tình Yêu Tử Thần",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_225023_pandora-phia-duoi-thien-duong-pandora-beneath-the-paradise.jpg",
    },
    {
      id:2,
      tap: " Tập 13 Vietsub",
      Name: "Tình Yêu Tử Thần",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
    },
    {
      id:3,
      tap: " Tập 13 Vietsub",
      Name: "Tình Yêu Tử Thần",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_225023_pandora-phia-duoi-thien-duong-pandora-beneath-the-paradise.jpg",
    },
    {
      id:4,
      tap: " Tập 13 Vietsub",
      Name: "Tình Yêu Tử Thần",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
    },
    {
      id:5,
      tap: " Tập 13 Vietsub",
      Name: "Tình Yêu Tử Thần",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_225023_pandora-phia-duoi-thien-duong-pandora-beneath-the-paradise.jpg",
    },
    {
      id:6,
      tap: " Tập 13 Vietsub",
      Name: "Tình Yêu Tử Thần",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
    },
    {
      id:7,
      tap: " Tập 13 Vietsub",
      Name: "Tình Yêu Tử Thần",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_225023_pandora-phia-duoi-thien-duong-pandora-beneath-the-paradise.jpg",
    },
    {
      id:8,
      tap: " Tập 13 Vietsub",
      Name: "Tình Yêu Tử Thần",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_225023_pandora-phia-duoi-thien-duong-pandora-beneath-the-paradise.jpg",
    },
  ];
  const slick = useRef()
  

  return (
    <div className="container">
      <div className="baner">
        <h2 className="baner__title">Phim Hot</h2>
        <div className="baner__slick" ref={slick}>
          {data.map((item, index) => (
            <Link to={appPath.phim+"/"+item.Name+" "+item.id} className="baner__item" key={index}>
              <div className="baner__content">
                <span className="baner__tap">{item.tap}</span>
                <div className="baner__img">
                  <img src={item.img} alt="anh" />
                </div>
                <div className="baner__name">{item.Name}</div>
                <BsFillPlayCircleFill />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Baner;
