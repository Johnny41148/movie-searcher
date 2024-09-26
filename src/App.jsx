import { BrowserRouter, Route, Routes } from "react-router-dom";
import Serchpage from "./components/Serchpage";
import Getmovie from "./context/Getmovie";

function App() {
  return (
    <Getmovie>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Serchpage />} />
        </Routes>
      </BrowserRouter>
    </Getmovie>
  );
}

export default App;
