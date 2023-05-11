import axios from "axios";
import React, { useState, useEffect } from "react";
import Snack from "./Snack";

// const API = process.env.REACT_APP_API_URL;

function Snacks() {
  const [snacks, setSnacks] = useState([]);
  // let { index } = useParams();
  // let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3033/snacks/`)
      .then((response) => {
        setSnacks(response.data);
      })
      .catch((error) => {
        console.warn("catch", error);
      });
  }, []);

  const calculatesTotal = (array) => {
    return array.reduce((acc, { calorie_count }) => {
      return acc + calorie_count;
    }, 0);
  };
  const totalCalories = snacks.length > 0 ? calculatesTotal(snacks) : 0;
  return (
    <div className="Snacks">
      {/* <h2>All Snacks:</h2> */}
      <h3>Total Calories: {totalCalories} calories</h3>
      <section>
        <table>
          <thead>
            <tr>
              <th>Snack Name</th>
              <th>Time Eaten</th>
              <th>Food Group</th>
              <th>Is Healthy? </th>
              <th>Calorie Count</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {snacks.map((snack) => {
              return <Snack key={snack.snack_id} snack={snack} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Snacks;
