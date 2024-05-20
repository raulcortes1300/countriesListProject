import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="container">
      <Link to="countries">
        <button className="button">Get Countries</button>
      </Link>
    </div>
  );
};
