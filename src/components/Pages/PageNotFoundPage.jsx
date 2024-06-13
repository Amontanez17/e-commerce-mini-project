import "./PageNotFoundPage.css";
import cryingSquirrel from "./../../assets/crying-squirrel@2x.png";
// import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h2>404 - Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      {/* <img id="not-found-img" src="/crying-squirrel@2x.png" alt="" /> */}
      <img id="not-found-img" src={cryingSquirrel} alt="" />
      <p>
        {/* <Link to="/">Go to Home</Link> */}
      </p>
    </div>
  );
};

export default PageNotFound;
