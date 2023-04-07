import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { appPath } from "../../config/appPath";
import Baner from "../../components/Baner";

const detailsFilm = () => {
  const data = {
    img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
    Trainer: "abcd",
    url: "bacd",
    Name: "Vinh quang trong thù hận",
    Staus: "Full 8/8 Vietsub",
    Director: "Ahn Gil Ho",
    Time: "60",
    Episode: "8",
    Language: "Phụ đề Việt",
    TinhTrang: "Hoàn Tất",
    Year: "2023",
    National: "Hàn Quốc",
    Category: ["Tâm Lý - Tình cảm", "Gia Đình - Học Đường"],
    Actor: [
      "Jung Sung Il",
      "Yeom Hye Ran",
      "Park Sung Hoon",
      "Im Ji Yeon",
      "Lee Do Hyun",
      "Song Hye Kyo",
    ],
    Content:
      "Vinh Quang Trong Thù Hận (Phần 2) kể về Moon Dong Eun với ước mơ trở thành kiến trúc sư nhưng lại trở thành nạn nhân của bạo lực học đường và buộc phải nghỉ học. Về sau Moon Dong Eun phát hiện ra con của kẻ thù lại là học sinh lớp mình chủ nhiệm. Cô lên kế hoạch trả thù kẻ bắt nạt mình và những người cổ vũ, dửng dưng nhìn cô bị bạo hành lúc đó.",
    DsTap: [
      {
        Tap: 1,
        url: "bacd",
      },
      {
        Tap: 2,
        url: "bacd",
      },
      {
        Tap: 3,
        url: "bacd",
      },
      {
        Tap: 4,
        url: "bacd",
      },
      {
        Tap: 5,
        url: "bacd",
      },
      {
        Tap: 6,
        url: "bacd",
      },
      {
        Tap: 7,
        url: "bacd",
      },
      {
        Tap: "8 (Tập Cuối)",
        url: "bacd",
      },
    ],
  };
  return (
    <div style={{ backgroundColor: `rgba(52, 52, 52, 0.85)` }}>
      <Header />
      <div className="container">
        <div className="detailFilm">
          <div className="detailsFilm__viedo">
            <video controls>
              <source src="movie.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="phim__episodes">
            <span className="phim__title">Tập:</span>
            {data.DsTap.map((item, index) => (
              <Link
                to={appPath.xemphim + "/" + data.Name + " Tập-" + item.Tap}
                key={index}
                className={`phim__episode ${index === 0 ? "phim__active" : ""}`}
              >
                Tập {item.Tap}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Baner/>
      <Footer />
    </div>
  );
};

export default detailsFilm;
