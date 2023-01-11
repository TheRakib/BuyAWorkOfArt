import { client, urlFor } from "../../Client";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";

export const Art = () => {
  const [singleProduct, setSingleProduct] = useState<any>(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
    slug,
    image,
    name, 
    price,
    details
  }`
      )
      .then((data: any) => setSingleProduct(data))
      .catch(console.error);
  }, [slug]);

  console.log(singleProduct);

  if (!singleProduct) return <div>Loading...</div>;

  return (
    <>
      <div className="mainSigleArt">
        <h2>Single art</h2>
        <div className="imageDiv">
          <img
            src={urlFor(singleProduct.image.asset).url()}
            alt={singleProduct.name}
          />
          <p> </p>
        </div>
      </div>
    </>
  );
};
