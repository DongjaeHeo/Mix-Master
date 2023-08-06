import { Link, useRouteError } from "react-router-dom";

const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h2>there was an error</h2>
      <Link className="btn" to="/" style={{ marginTop: "2rem" }}>
        Back Home
      </Link>
    </div>
  );
};
export default SinglePageError;
