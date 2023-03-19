
import { useRef } from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import "./style.scss";

const Baner = () => {
  const data = [
    {
      tap: " Tập 13 Vietsub",
      img: "Tình Yêu Tử Thần",
      Name: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_225023_pandora-phia-duoi-thien-duong-pandora-beneath-the-paradise.jpg",
    },
    {
      tap: " Tập 13 Vietsub",
      img: "Tình Yêu Tử Thần",
      Name: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
    },
    {
      tap: " Tập 13 Vietsub",
      img: "Tình Yêu Tử Thần",
      Name: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_225023_pandora-phia-duoi-thien-duong-pandora-beneath-the-paradise.jpg",
    },
    {
      tap: " Tập 13 Vietsub",
      img: "Tình Yêu Tử Thần",
      Name: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
    },
    {
      tap: " Tập 13 Vietsub",
      img: "Tình Yêu Tử Thần",
      Name: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_225023_pandora-phia-duoi-thien-duong-pandora-beneath-the-paradise.jpg",
    },
    {
      tap: " Tập 13 Vietsub",
      img: "Tình Yêu Tử Thần",
      Name: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
    },
    {
      tap: " Tập 13 Vietsub",
      img: "Tình Yêu Tử Thần",
      Name: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_225023_pandora-phia-duoi-thien-duong-pandora-beneath-the-paradise.jpg",
    },
    {
      tap: " Tập 13 Vietsub",
      img: "Tình Yêu Tử Thần",
      Name: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_225023_pandora-phia-duoi-thien-duong-pandora-beneath-the-paradise.jpg",
    },
  ];
  const slick = useRef()
  

  return (
    <div className="container">
      <div className="baner">
        <h2 className="baner__title">Phim Hot</h2>
        <div className="baner__slick" ref={slick}>
          {data.map((item, index) => (
            <div className="baner__item" key={index}>
              <div className="baner__content">
                <span className="baner__tap">{item.tap}</span>
                <div className="baner__img">
                  <img src={item.Name} alt="anh" />
                </div>
                <div className="baner__name">{item.img}</div>
                <BsFillPlayCircleFill />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Baner;
