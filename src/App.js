import { BrowserRouter } from "react-router-dom";
import Catagory from "./components/Catagory";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Catagory />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
