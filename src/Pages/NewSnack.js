import SnackForm from "../Components/SnackForm";
import { useNavigate } from "react-router-dom";
const API = process.env.NODE_ENV.REACT_APP_API_URL;

function NewSnack() {
  const navigate = useNavigate();
  const onSubmit = async (snack) => {
    await fetch(`${API}/snacks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(snack),
    });
    navigate("/snacks");
  };

  return (
    <div>
      <h2>New</h2>
      <SnackForm onSubmit={onSubmit} />;
    </div>
  );
}

export default NewSnack;
