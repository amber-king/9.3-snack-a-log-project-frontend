import { useEffect, useState } from "react";

const defaultValues = {
  snack_name: "",
  calorie_count: 0,
  food_group: "",
  is_healthy: false,
  time_eaten: "",
  quantity: "",
};

function SnackForm({ onSubmit, initialValues = defaultValues }) {
  const [snack, setSnack] = useState({ ...initialValues });
  useEffect(() => setSnack(initialValues), [initialValues]);

  const onChange = (e) => {
    if (e.target.id === "name") {
      setSnack({ ...snack, snack_name: e.target.value });
    }
    if (e.target.id === "calories") {
      setSnack({ ...snack, calorie_count: e.target.value });
    }
    if (e.target.id === "foodGroup") {
      setSnack({ ...snack, food_group: e.target.value });
    }
    if (e.target.id === "isHealthy") {
      setSnack({ ...snack, is_healthy: e.target.checked });
    }
    if (e.target.id === "timeEaten") {
      setSnack({ ...snack, time_eaten: e.target.value });
    }
    if (e.target.id === "quantity") {
      setSnack({ ...snack, quantity: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(snack);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={snack.snack_name}
        onChange={onChange}
      />
      <label htmlFor="calories">Calorie Count</label>
      <input
        type="number"
        id="calories"
        min={0}
        step={1}
        value={snack.calorie_count}
        onChange={onChange}
      />
      <label htmlFor="foodGroup">Food Group</label>
      <input
        type="text"
        id="foodGroup"
        value={snack.food_group}
        onChange={onChange}
      />
      <label htmlFor="isHealthy">Is Healthy</label>
      <input
        type="checkbox"
        id="isHealthy"
        checked={snack.is_healthy}
        onChange={onChange}
      />
      <label htmlFor="timeEaten">Time Eaten </label>
      <select id="timeEaten" value={snack.time_eaten} onChange={onChange}>
        <option value="Morning">Morning</option>
        <option value="Afternoon">Afternoon</option>
        <option value="Evening">Evening</option>
      </select>
      <label htmlFor="quantity">Quantity </label>
      <input
        type="text"
        id="quantity"
        value={snack.quantity}
        onChange={onChange}
      />
      <input type="submit" />
    </form>
  );
}
export default SnackForm;
