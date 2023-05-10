import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        {" "}
        <Link to="/">Snack-a-Log 🫒</Link>{" "}
      </h1>
      <h3>
        <Link to="/snacks">Snacks 🥑</Link>
      </h3>
      <button>
        <Link to="/snacks/new">New Snack</Link>
      </button>
    </nav>
  );
}
