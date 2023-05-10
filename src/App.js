import "./App.css";
import SnackShow from "./SnackShow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditForm from "./EditForm";
import NewForm from "./NewForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/snacks" element={<h1>Index Page</h1>} />
          <Route path="/snacks/:id" element={<SnackShow />} />
          <Route path="/snacks/:id/edit" element={<EditForm />} />
          <Route path="/snacks/new" element={<NewForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
