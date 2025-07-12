import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <h3>Page Not Found</h3>
      <Link to="/" className="underline hover:no-underline">
        Go To Homepage.
      </Link>
    </div>
  );
};

export default NotFound;
