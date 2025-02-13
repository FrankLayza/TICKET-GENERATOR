import Attendee from "./Components/Attendee";
import Form from "./Components/Form";
import Navbar from "./Components/Navbar";
import {FormProvider} from './Context/FormContent'; 
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Ticket from "./Components/Ticket";

function App() {
   

   
  return (
    <BrowserRouter>
      <FormProvider>
        <div className="mt-6 h-full box-border text-white">
          <Navbar />
          <div className="flex flex-col justify-center items-center">
            <Routes>
              <Route path="/" element={<Form   />} />
              <Route path="/generate" element={<Attendee />} />
              <Route path="/ticket" element={<Ticket />} />
            </Routes>
          </div>
        </div>
      </FormProvider>
    </BrowserRouter>
  );
}

export default App;
