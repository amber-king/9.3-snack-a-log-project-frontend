import SnackForm from "../Components/SnackForm";
import { useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function NewSnack() {
  const navigate = useNavigate();
  const onSubmit = async (snack) => {
    const result = await fetch(`${API}/snacks/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(snack),
    });
    if (result.ok) {
      navigate(`/snacks`);
    }
  };

  return (
    <div>
      <h2>New</h2>
      <SnackForm onSubmit={onSubmit} />
    </div>
  );
}

export default NewSnack;
