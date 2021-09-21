import React, {useState, useEffect} from "react";
import sync from './sync.svg';
import CardList from './CardList';

function HomePage() {
  const getImages = async () => {
    const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=rpf2PXcZhgOIA7Tjek38tFq5HDa7a5dsUgDiuVo1&count=6');
    const data = await res.json();
    return data;
 }

 const [photos, setPhotos] = useState([]);
 const [loading, setLoading] = useState(true);
 const handleImages = () => {
   setLoading(true);
     getImages().then((photos) => {
         setPhotos((curr) => [...curr, ...photos]);
         setLoading(false);
     });
 };
 useEffect(() => {
   handleImages();
}, []);
 
  return (

<>
  <div className="container">
<h1>Spaceagram</h1>
<h1>NASA Images source </h1>
<p>Click the like button under the image</p>
        <div className="cardFlex">
           
            {photos.length > 0 &&
            photos.map(
              (photo) =>
                photo.media_type === "image" && (
                  <CardList
                    title={photo.title}
                    date={photo.date}
                    url={photo.url}
                    key={photo.title}
                    // explanation={photo.explanation}
                  />
                )
            )}
            {loading && <div className="load">Loading...</div>}

</div>
           <div className="sync"> <img src={sync} alt="load more" onClick={handleImages}></img> </div>
            </div>
            </>

  );
}

export default HomePage;