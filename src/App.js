import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/snacks" element={<h1>Index Page</h1>} />
          <Route path="/snacks/:id" element={<h1>Snacks Show</h1>} />
          <Route path="/snacks/:id/edit" element={<h1>Edit Show</h1>} />
          <Route path="/snacks/new" element={<h1>Create New Snack</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
