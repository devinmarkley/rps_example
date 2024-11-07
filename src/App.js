import React from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";

function App() {
  const photoSphereRef = React.useRef();
  return (
    <div className="App">
      <ReactPhotoSphereViewer
        ref={photoSphereRef}
        /* defaultZoomLvl will only work with images in the public directory */
        src={"https://i.ibb.co/23KMzTN/GSAA5125.jpg"}
        defaultZoomLvl={0}
        hideNavbarButton={true}
        width={"100vw"}
        height={"100vh"}
        navbar={false}
      />
    </div>
  );
}

export default App;
