import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Edit from "./Pages/Edit";
// import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import NewSnack from "./Pages/NewSnack";
import Show from "./Pages/Show";

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
            <Route path="/snacks/:id" element={<Show />} />
            <Route path="/snacks/:id/edit" element={<Edit />} />
            <Route path="/snacks/new" element={<NewSnack />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
