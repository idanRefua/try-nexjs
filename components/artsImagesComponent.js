import { Fragment } from "react";
function ArtsImagesComponent({ photos }) {
  return (
    <div>
      {photos.map((photo) => {
        return (
          <Fragment>
            <img
              src={photo}
              alt="haircut"
              width={350}
              height={350}
              className="photo-haircut"
            />
          </Fragment>
        );
      })}
    </div>
  );
}

export default ArtsImagesComponent;
