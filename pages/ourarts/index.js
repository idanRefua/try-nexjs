import ArtsImagesComponent from "../../components/artsImagesComponent";
import { motion } from "framer-motion";
import { Fragment } from "react";
function OurArts() {
  const photosArr2 = [];
  photosArr2.push(
    "/images/haircut1.jpg",
    "/images/haircut2.jpg",
    "/images/haircut3.jpg",
    "/images/haircut4.jpg",
    "/images/haircut5.jpg",
    "/images/haircut6.jpg"
  );

  return (
    <Fragment>
      <h1 className="arts-title d-flex align-items-center justify-content-center">
        Our Stlyes
      </h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.58,
            },
          },
        }}
        className="mb-3"
      >
        <ArtsImagesComponent photos={photosArr2}></ArtsImagesComponent>
      </motion.div>
    </Fragment>
  );
}

export default OurArts;
