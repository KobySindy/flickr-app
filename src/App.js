import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DisplayPhoto from "./pages/DisplayPhoto";

function App() {
  const [photoToDisplay, setPhotoToDisplay] = useState({});

  function pickPhoto(photo) {
    setPhotoToDisplay(photo);
  }

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home pickPhoto={pickPhoto} />} />
          <Route
            path='photo/:id'
            element={<DisplayPhoto photoToDisplay={photoToDisplay} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
