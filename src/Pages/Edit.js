import { useEffect, useState } from "react";
import SnackForm from "../Components/SnackForm";
import { useNavigate, useParams } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function Edit() {
  const [singleSnack, setSingleSnack] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const asyncFetch = async () => {
      const response = await fetch(`/snacks/${id}`);
      const data = await response.json();
      setSingleSnack(data);
    };
    asyncFetch();
  }, [id]);

  const onSubmit = async (snack) => {
    const response = await fetch(`${API}/snacks/${id}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(snack),
    });
    if (response.ok) {
      navigate(`/snacks/${id}`);
    }
  };

  return (
    <div className="New Edit">
      <h2>Edit</h2>
      <SnackForm onSubmit={onSubmit} initialValues={singleSnack} />;
    </div>
  );
}

export default Edit;
