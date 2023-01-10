import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/signin";
import Welcome from "./pages/welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
