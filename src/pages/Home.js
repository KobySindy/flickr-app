import React from "react";
import { Link } from "react-router-dom";
import { getData } from "../api/apiHelper";
import { useEffect, useState } from "react";

function Home({ pickPhoto }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [photos, setPhotos] = useState([]);
  let isLoading = false;

  function scrollHandler(e) {
    if (totalPages === currentPage) {
      return;
    }
    const target = e.target;
    if (target.scrollHeight - target.scrollTop <= target.clientHeight) {
      fetchMorePhotos();
    }
  }

  const fetchMorePhotos = async () => {
    if (isLoading) {
      return;
    }
    isLoading = true;
    const data = await getData(currentPage);
    setCurrentPage(data.photos.page);
    setTotalPages(data.photos.pages);
    setPhotos((prevState) => {
      return [...prevState, ...data.photos.photo];
    });
    isLoading = false;
  };

  useEffect(async () => {
    await fetchMorePhotos();
  }, []);

  return (
    <>
      {currentPage}
      <div
        style={{ width: "100%", height: "100vh", overflowY: "scroll" }}
        className='box'
        onScroll={(e) => scrollHandler(e)}>
        {photos.map((photo, index) => {
          let suffix = "q";
          let photoSrc = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${suffix}.jpg`;
          return (
            <Link key={index} to={`photo/${photo.id}`}>
              <img onClick={() => pickPhoto(photo)} src={photoSrc} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Home;
