function DisplayPhoto({ photoToDisplay }) {
  console.log(photoToDisplay);
  let photoSrc = `https://live.staticflickr.com/${photoToDisplay.server}/${photoToDisplay.id}_${photoToDisplay.secret}.jpg`;
  return (
    <div>
      <h1>Display</h1>
      <img src={photoSrc} alt='' />
    </div>
  );
}

export default DisplayPhoto;
