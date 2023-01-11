import { Link } from "react-router-dom";
import bawoaLogo from "../../images/bawoaLogo.png";

export const NoMatch = () => {
  return (
    <div className="not-found-container">
      <div className="textContainer">
        <img className="logo" src={bawoaLogo} alt="logo" />
        <h2>Sorry</h2>
        <h4>we couldn't find that page</h4>
        <Link to="/">Back</Link>
      </div>
    </div>
  );
};
