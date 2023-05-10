import { useEffect, useState } from "react";
import SnackForm from "../Components/SnackForm";
import { useParams } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function Edit() {
  const [singleSnack, setSingleSnack] = useState();
  const { id } = useParams();

  useEffect(() => {
    const asyncFetch = async () => {
      const response = await fetch(`${API}/snacks/${id}`);
      const data = await response.json();
      setSingleSnack(data);
    };
    asyncFetch();
  }, [id]);

  const onSubmit = async (snack) => {
    await fetch(`${API}/snacks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(snack),
    });
  };

  return (
    <div className="New Edit">
      <h2>Edit</h2>
      <SnackForm onSubmit={onSubmit} initialValues={singleSnack} />;
    </div>
  );
}

export default Edit;
