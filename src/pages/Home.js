import React from "react";
import { Link } from "react-router-dom";
import { getData } from "../api/apiHelper";
import { useEffect } from "react";

function Home({
  setPage,
  setFlickrPayload,
  currentPage,
  flickrPayload,
  pickPhoto,
}) {
  function scrollHandler(e) {
    const target = e.target;
    if (target.scrollHeight - target.scrollTop <= target.clientHeight) {
      setPage(currentPage + 1);
      getData(setFlickrPayload, currentPage);

      console.log("Bottom");
    }
  }

  useEffect(async () => {
    await getData(setFlickrPayload, currentPage);

    console.log(`current Page: ${currentPage}`);
  }, []);
  return (
    <>
      {currentPage}
      <div
        style={{ width: "100%", height: "100vh", overflowY: "scroll" }}
        className='box'
        onScroll={(e) => scrollHandler(e)}>
        {flickrPayload.photos.map((photo) => {
          let suffix = "q";
          let photoSrc = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${suffix}.jpg`;
          return (
            <Link key={photo.id} to={`photo/${photo.id}`}>
              <img onClick={() => pickPhoto(photo)} src={photoSrc} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Home;
