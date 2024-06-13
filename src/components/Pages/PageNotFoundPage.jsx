import "./PageNotFoundPage.css";
import cryingSquirrel from "./../../assets/crying-squirrel@2x.png";

const PageNotFound = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      {/* <img id="not-found-img" src="/crying-squirrel@2x.png" alt="" /> */}
      <img id="not-found-img" src={cryingSquirrel} alt="" />
      <p>
        <a href="/">Go to Home</a>
      </p>
    </div>
  );
};

export default PageNotFound;
