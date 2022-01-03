const api_key = "20fcb0c38deb054791a413b32ab21f56";

export async function getData(currentPage) {
  const p = currentPage + 1;
  let url = `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${api_key}&format=json&nojsoncallback=1&page=${p}`;

  const res = await fetch(url);
  const data = await res.json();
  return data;
}
