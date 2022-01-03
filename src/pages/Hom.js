import React from "react";
import { Link } from "react-router-dom";
import { getData } from "../api/apiHelper";
import { useEffect, useRef, useState } from "react";

function Hom({
  setFlickrPayload,
  currentPage,
  setPage,
  flickrPayload,
  pickPhoto,
}) {
  const containerRef = useRef(null);

  const observerHandler = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      getData(setFlickrPayload, currentPage, setPage);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerHandler);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef]);

  return (
    <>
      <div id='image-container'>
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
      <div id='trigger' ref={containerRef}></div>
    </>
  );
}

export default Hom;
