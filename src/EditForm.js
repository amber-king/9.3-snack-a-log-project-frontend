import { useEffect, useState } from "react";
import Form from "./Form";
import { useParams } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

export default function EditForm() {
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
    <main>
      <Form onSubmit={onSubmit} initialValues={singleSnack} />;
    </main>
  );
}
