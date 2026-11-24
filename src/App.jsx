import { useState } from "react";
import UploadBox from "./components/UploadBox";
import ViewerPane from "./components/ViewerPane";

export default function App() {
  const [images, setImages] = useState([]);

  return (
    <div>
      <h1>Street360</h1>

      <UploadBox onLoaded={setImages} />

      {images.length > 0 && (
        <ViewerPane images={images} />
      )}
    </div>
  );
}
