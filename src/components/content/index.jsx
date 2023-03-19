import Item from "./conponent/item";
import "./style.scss"

const Content = ({ title }) => {
  const data = [
    {
      tap: "Tập 5 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
      Name: "Tình yêu tử thần",
    },
    {
      tap: "Tập 6 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
      Name: "Tình yêu tử thần",
    },
    {
      tap: "Tập 7 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
      Name: "Tình yêu tử thần",
    },
    {
      tap: "Tập 8 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
      Name: "Tình yêu tử thần",
    },
    {
      tap: "Tập 9 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
      Name: "Tình yêu tử thần",
    },
    {
      tap: "Tập 10 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
      Name: "Tình yêu tử thần",
    },
    {
      tap: "Tập 11 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
      Name: "Tình yêu tử thần",
    },
    {
      tap: "Tập 12 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
      Name: "Tình yêu tử thần",
    },
    {
      tap: "Tập 13 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
      Name: "Tình yêu tử thần",
    },
    {
      tap: "Tập 14 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
      Name: "Tình yêu tử thần",
    },
    {
      tap: "Tập 15 Vietsub",
      url: "https://motphimtv.me/",
      img: "https://cdn6.kenhvn2.com/temp/phimmoi/230_306_260766_vinh-quang-trong-thu-han-phan-2.jpg",
      Name: "Tình yêu tử thần",
    },
  ];
  return (
    <div className="Content">
      {data.map((item, index) => (
        <div key={index}>
          <Item data1={item} />
        </div>
      ))}
    </div>
  );
};

export default Content;
