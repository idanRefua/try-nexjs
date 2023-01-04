import ProductCardComponent from "../../components/productCardComponent";
import { motion } from "framer-motion";
import { Fragment } from "react";
export default function Products() {
  const productsArr = [
    {
      title: "Oil Beard",
      description:
        "This is good oil for beard , make your beark to look so sharp !",
      img: "/images/andrea-donato-V3NNg858vkA-unsplash.jpg",
    },
    {
      title: "Shampo",
      description:
        "This is good Shampo for your hair , make your hair to look so clean with light",
      img: "/images/bottle-gc3a8d2cbe_1920.png",
    },
    {
      title: "dawdawdawdawd",
      description:
        "This is good oil for beard , make your beark to look so sharp !",
      img: "/images/electronics-ga619d3315_1920.jpg",
    },
    {
      title: "gawyd awdhawj",
      description:
        "This is good oil for beard , make your beark to look so sharp !",
      img: "/images/glass-g5a7117835_1920.jpg",
    },
    {
      title: "Good ",
      description:
        "This is good oil for beard , make your beark to look so sharp !",
      img: "/images/glass-g5a7117835_1920.jpg",
    },
    {
      title: "Good ",
      description:
        "This is good oil for beard , make your beark to look so sharp !",
      img: "/images/electronics-ga619d3315_1920.jpg",
    },
    {},
  ];
  return (
    <Fragment>
      <h1 className="product-title d-flex align-items-center justify-content-center">
        Our Products
      </h1>
      <br />
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
        <div className="row">
          {productsArr.map((product) => {
            return (
              <ProductCardComponent
                img={product.img}
                title={product.title}
                description={product.description}
              ></ProductCardComponent>
            );
          })}
        </div>
      </motion.div>
    </Fragment>
  );
}
