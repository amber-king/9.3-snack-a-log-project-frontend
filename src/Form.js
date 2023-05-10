import { useEffect, useState } from "react";

const defaultValues = {
  snack_name: "",
  calorie_count: 0,
  food_group: "",
  is_healthy: true,
  time_eaten: "",
};

export default function Form({ onSubmit, initialValues = defaultValues }) {
  const [snack, setSnack] = useState({ ...initialValues });

  useEffect(() => setSnack(initialValues), [initialValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(snack);
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={snack.snack_name} />
        <label htmlFor="calories">Calorie Count</label>
        <input
          type="number"
          id="calories"
          min={0}
          step={1}
          value={snack.calorie_count}
        />
        <label htmlFor="foodGroup">Food Group</label>
        <input type="text" id="foodGroup" value={snack.food_group} />
        <label htmlFor="isHealthy">Is Healthy</label>
        <input type="checkbox" id="isHealthy" checked={snack.is_healthy} />
        <label htmlFor="timeEaten">Time Eaten </label>
        <input type="text" id="timeEaten" value={snack.time_eaten} />
        <input type="submit" />
      </form>
    </main>
  );
}
