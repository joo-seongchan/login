import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Globalstyled } from "./style/Globalstyled";

function App() {
  return (
    <Router>
      <Globalstyled />
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
