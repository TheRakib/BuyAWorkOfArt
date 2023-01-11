import { client, urlFor } from "../../Client";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";

//const builder = imageUrlBuilder(client);

//function urlFor(source: any) {
//return builder.image(source);
//}

export const Art = () => {
  const [singleProduct, setSingleProduct] = useState<any[]>([]);
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
      .then((data: any) => setSingleProduct(data[0]))
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
            src={urlFor(singleProduct[0].image.asset).url()}
            alt={singleProduct[0].name}
          />
          <p> </p>
        </div>
      </div>
    </>
  );
};
