import Attendee from "./Components/Attendee";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="mt-6 h-full box-border text-white">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/generate" element={<Attendee />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
