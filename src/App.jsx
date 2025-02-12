import Form from "./Components/Form";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className=" h-full box-border text-white">
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <Form />
      </div>
    </div>
  );
}

export default App;
