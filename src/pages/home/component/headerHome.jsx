import { useState } from "react";
import "./headerHome.scss";
const HeaderHome = () => {
  const [check, setCheck] = useState("tab1");
  const handleTab1 = () => {
    setCheck("tab1");
  };
  const handleTab2 = () => {
    setCheck("tab2");
  };

  const handleTab3 = () => {
    setCheck("tab3");
  };
  return (
    <div className="HeaderHome">
      <div
        className={`HeaderHome__tab ${check === "tab1" ? "active" : ""} `}
        onClick={handleTab1}
      >
        Phim bộ mới cập nhật
      </div>
      <div
        className={`HeaderHome__tab ${check === "tab2" ? "active" : ""} `}
        onClick={handleTab2}
      >
        Phim lẻ mới cập nhật
      </div>
      <div
        className={`HeaderHome__tab ${check === "tab3" ? "active" : ""} `}
        onClick={handleTab3}
      >
        Phim đã hoàn thành
      </div>
    </div>
  );
};

export default HeaderHome;
