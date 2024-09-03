import React from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import image from "./images/somePano.JPG";

export default function ImageViewer() {
    const pSRef = React.createRef();

  return (
    <>
          <ReactPhotoSphereViewer
            ref={pSRef}
            width={"100vw"}
            height={"100vh"}
            container={"container-360"}
            src={image}
            navbar={false}
            defaultZoomLvl={0}
          />
    </>
  );
};
