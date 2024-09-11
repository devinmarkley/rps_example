import "./styles.css";
import React from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import image  from "./images/somePano.JPG"

function App() {
    const photoSphereRef = React.useRef();
    return (
    <div className="App">
        <ReactPhotoSphereViewer
            ref={photoSphereRef}
            // src={"Test_Pano.jpg"}
            src={image}
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
