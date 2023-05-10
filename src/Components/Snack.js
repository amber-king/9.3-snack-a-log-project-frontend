// TODO: http://localhost:3033/snacks -> connects to Snack.js;snack,js will NOT work w/o it
import { Link } from "react-router-dom";

function Snack({ snack }) {
  return (
    <tr>
      <td className="Snack">
        <Link to={`/snacks/${snack.snack_id}`}>{snack.snack_name}</Link>
      </td>
      <td>{snack.time_eaten}</td>
      <td>{snack.food_group}</td>
      <td>{snack.is_healthy ? <span>❤️</span> : <span>🫤</span>}</td>

      <td>{snack.calorie_count}</td>
      <td>{snack.quantity}</td>

      <td></td>
    </tr>
  );
}

export default Snack;
