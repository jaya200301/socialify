import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Komunitas from "./pages/komunitas";
import Live1 from "./pages/liveaudio1";
import Live2 from "./pages/liveaudio2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/komunitas" element={<Komunitas />} />
        <Route path="/liveaudio1" element={<Live1 />} />
        <Route path="/liveaudio2" element={<Live2 />} />
      </Routes>
    </Router>
  )
}

export default App
