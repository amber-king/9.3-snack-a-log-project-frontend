import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function Show() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [snack, setSnack] = useState({});
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
    <main>
      <div>
        <h1>Show</h1>
        <h1>{snack.snack_name}</h1>
        <h1>{snack.food_group}</h1>
        <h1>In the {snack.time_eaten}</h1>
        <h1>Calorie count: {snack.calorie_count}</h1>
        {snack.is_healthy && <h1>⭐️</h1>}
        <button onClick={handleDelete}>Delete</button>
        <Link to={`/snacks/${id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
    </main>
  );
}

export default Show;
