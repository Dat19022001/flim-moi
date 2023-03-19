import Header from "../../components/header";
import Banner from "../../components/Baner";
import Content from "../../components/content";
import HeaderHome from "./component/headerHome";
const Home = () => {
  return (
    <div style={{ backgroundColor: `rgba(52, 52, 52, 0.85)` }}>
      <Header />
      <Banner />
      <div className="container">
        <HeaderHome/>
        <Content />
      </div>
    </div>
  );
};

export default Home;
