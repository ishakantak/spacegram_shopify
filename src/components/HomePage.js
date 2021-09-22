import React, {useState, useEffect} from "react";
import sync from './sync.svg';
import CardList from './CardList';

function HomePage() {
  const getImages = async () => {
    const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=rpf2PXcZhgOIA7Tjek38tFq5HDa7a5dsUgDiuVo1&count=8');
    return res.json();
 }

 const [photos, setPhotos] = useState([]);
 const [loading, setLoading] = useState(true);
 const handleImages = () => {
   setLoading(true);
     getImages().then((photoList) => {
         setPhotos((curr) => [...curr, ...photoList]);
         setLoading(false);
     });
 };
 useEffect(() => {
   handleImages();
}, []);
 
  return (<>
            <div className="stars"></div>
            <div className="stars2"></div>
            <div className="container">
            <h1>Spaceagram</h1>
            <h2>Image sharing from the Frontier</h2>
            <h3 className="headingtwo">Imported by NASA'S APOD (Astronomy Picture of the Day) </h3>
            <div className="cardFlex">
              {photos.length > 0 &&
              photos.map((photo) =>
                photo.media_type === "image" && (
                <CardList
                title={photo.title}
                date={photo.date}
                url={photo.url}
                key={photo.title}
                />))}
              {loading && <div className="load">Loading...</div>}
              </div>
              <div className="sync"> <img src={sync} alt="load more" onClick={handleImages} /> </div>
            </div>
            </>);
}

export default HomePage;