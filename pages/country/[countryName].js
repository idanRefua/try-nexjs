import { Fragment } from "react";

function Country({ country }) {
  const product = country.product;
  console.log(product);
  return (
    <Fragment>
      <div>
        {product.title}
        <p>{product.price}$</p>
      </div>
      <div>
        {product.reviews.map((review) => {
          return <p key={review._id}>{review.review}</p>;
        })}
      </div>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const result = await fetch("http://localhost:8181/api/products");
  const data = await result.json();

  const paths = data.allProducts.map((country) => {
    return {
      params: { countryName: country._id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const countryName = context.params.countryName;
  const result = await fetch(
    `http://localhost:8181/api/products/moreinfo/${countryName}`
  );
  const data = await result.json();
  return {
    props: { country: data },
  };
}

export default Country;
