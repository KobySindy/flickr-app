import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getData, getThisPhoto } from "./api/apiHelper";
import Home from "./pages/Home";
import Hom from "./pages/Hom";
import DisplayPhoto from "./pages/DisplayPhoto";

function App() {
  const [currentPage, setPage] = useState(0);
  const [photoToDisplay, setPhotoToDisplay] = useState({});
  const [flickrPayload, setFlickrPayload] = useState({
    photos: [],
    page: 1,
    pages: null,
  });

  function pickPhoto(photo) {
    setPhotoToDisplay(photo);
  }

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <Hom
                setFlickrPayload={setFlickrPayload}
                currentPage={currentPage}
                setPage={setPage}
                pickPhoto={pickPhoto}
                flickrPayload={flickrPayload}
                setPage={setPage}
              />
            }
          />
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
