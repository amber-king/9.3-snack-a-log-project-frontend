import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import DeleteButton from "../Components/DeleteButton/DeleteButton";
const API = process.env.REACT_APP_API_URL;

function Show() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [snack, setSnack] = useState({ time_eaten: "" });
  const [error, setError] = useState(false);

  useEffect(() => {
    const asyncFetch = async () => {
      const result = await fetch(`${API}/snacks/${id}`);
      if (result.ok) {
        const data = await result.json();
        setSnack(data);
      } else {
        setError(true);
      }
    };

    asyncFetch();
  }, [id]);

  const handleDelete = async () => {
    const result = await fetch(`${API}/snacks/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(snack),
    });
    if (result.ok) {
      navigate("/snacks");
    }
  };

  if (error) {
    return (
      <main>
        <h1>There appears to be an error</h1>
      </main>
    );
  }
  return (
    <div>
      <h1>Show</h1>
      <div className="snack-show">
        <h1>{snack.snack_name}</h1>
        <h3>Eaten in the {snack.time_eaten.toLowerCase()}</h3>
        <h3>Food group: {snack.food_group}</h3>
        <h3>Calorie count: {snack.calorie_count} calories</h3>
        <h3>Quantity: {snack.quantity}</h3>
        {snack.is_healthy ? <h1>❤️</h1> : <h1>😕</h1>}
        <DeleteButton handleDelete={handleDelete} />
        <Link to={`/snacks/${id}/edit`}>
          <button className="mauve">Edit</button>
        </Link>
      </div>
    </div>
  );
}

export default Show;
