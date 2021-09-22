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
            {/* <p style={{color:"white"}}>This is a website that display photos from NASA's APOD API.</p> */}
            {/* <p style={{color:"white"}}>1) You can like or unlike a photo by clicking the heart icon under the photo</p>
            <p style={{color:"white"}}>2) You can also load more photo by clicking the button at the bottom of the page</p> */}

            {/* <p>Click the like button to like the photos</p>
            <p>Click the refresh button below to see and like more images.</p> */}
            <div className="cardFlex">
              {photos.length > 0 &&
              photos.map((photo) =>
                photo.media_type === "image" && (
                <CardList
                title={photo.title}
                date={photo.date}
                url={photo.url}
                key={photo.title}
                // explanation={photo.explanation}
                />))}
              {loading && <div className="load">Loading...</div>}
              </div>
              <div className="sync"> <img src={sync} alt="load more" onClick={handleImages} /> </div>
            </div>
            </>);
}

export default HomePage;