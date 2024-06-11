import "./PageNotFoundPage.css";

const PageNotFound = () => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <img id="not-found-img" src="./src/assets/cry.png" alt="" />
      <p>
        <a href="/">Go to Home</a>
      </p>
    </div>
  );
};

export default PageNotFound;
