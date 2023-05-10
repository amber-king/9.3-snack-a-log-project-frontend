import { useNavigate } from "react-router-dom";
import Form from "./Form";
const API = process.env.NODE_ENV.REACT_APP_API_URL;

export default function NewForm() {
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
    <main>
      <Form onSubmit={onSubmit} />;
    </main>
  );
}
