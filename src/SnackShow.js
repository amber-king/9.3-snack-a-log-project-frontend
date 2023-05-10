import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function SnackShow() {
  const { id } = useParams();
  const [snack, setSnack] = useState({
    calorie_count: 0,
    food_group: "",
    is_healthy: true,
    snack_id: 1,
    snack_name: "",
    time_eaten: "",
  });

  useEffect(() => {
    const asyncFetch = async () => {
      const result = await fetch(`${API}/snacks/${id}`);
      const data = await result.json();
      setSnack(data);
    };

    asyncFetch();
  }, [id]);

  const handleDelete = () => {};

  return (
    <main>
      <div>
        <h1>{snack.snack_name}</h1>
        <h1>{snack.food_group}</h1>
        <h1>In the {snack.time_eaten}</h1>
        <h1>Calorie count: {snack.calorie_count}</h1>
        {snack.is_healthy && <h1>⭐️</h1>}
        <button onClick={handleDelete()}>Delete</button>
        <Link to={`/snacks/${id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
    </main>
  );
}
