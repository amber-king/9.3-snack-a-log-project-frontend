import "./App.css";
import SnackShow from "./SnackShow";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditForm from "./EditForm";
import NewForm from "./NewForm";

// Pages
// import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";

// Components
import NavBar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/snacks" element={<Index />} />
            <Route path="/snacks/:id" element={<SnackShow />} />
            <Route path="/snacks/:id/edit" element={<EditForm />} />
            <Route path="/snacks/new" element={<NewForm />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
