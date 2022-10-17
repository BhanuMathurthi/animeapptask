import { Route, Routes } from "react-router-dom";
import "./App.css";
import DragAndDropAnimes from "./Components/DragAndDrop/DragAndDropAnime";
import Home from "./Components/Home";
import EachAnimeDetails from "./Components/IndividualAnimes/EachAnimeDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/anime/:id" element={<EachAnimeDetails />}></Route>
        <Route path="/dragandropanimes" element={<DragAndDropAnimes />}></Route>
      </Routes>
    </div>
  );
}

export default App;
