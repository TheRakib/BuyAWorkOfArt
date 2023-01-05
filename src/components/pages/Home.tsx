import { Link } from "react-router-dom";
import colorDrop from "../../images/colorDrop.png";
export const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-text-image-div">
          <img className="color-drop" src={colorDrop} alt="colorDrop" />
          <div className="btnDiv">
            <div className="btn-Exhibition">
              <Link to="/artwork">To The Exhibition</Link>
            </div>
          </div>
        </div>
        <div className="hero-image"></div>
      </section>

      <div className="main-home-wrapper">
        <h2 className="newTitle">New Featured Art</h2>
        <div className="artSection">
          <p>img1</p>
          <p>img2</p>
          <p>img3</p>
          <p>img4</p>
        </div>
      </div>
    </>
  );
};
