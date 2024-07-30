import { notFound } from "next/navigation";
import { Metadata } from "next";
// import Page from "../../_lib/public";

interface IProductProps {
  params: {
    productId: string;
  };
}

// generateMetadata function recives props and return metadata
export const generateMetadata = ({params}: IProductProps): Metadata => {
  const productId = parseInt(params.productId);
  if((isNaN(productId)) || productId > 10 || productId < 1){
    return {
      title: `Not found`
    }
  }else{
    return {
      title: `Product ${params.productId} Details`,
    }
  }
}
//async 
// export const generateMetadata = async ({params}: IProductProps): Promise<Metadata> => {
//   const productId = await new Promise((resolve) => setTimeout(() => resolve(parseInt(params.productId)), 10000));
//   //@ts-ignore
//   if((isNaN(productId)) || productId > 10 || productId < 1){
//     return {
//       title: `Not found`
//     }
//   }else{
//     return {
//       title: `Product ${params.productId} Details`,
//     }
//   }
// }
function ProductDetailsPage({ params }: IProductProps) {
  const productId = parseInt(params.productId);
  return (
    <>
      {((isNaN(productId)) || productId > 10 || productId < 1) ? (
        notFound() //search for nearset not page found
      ) : (
        <>
            <h1>Product Details Page {params.productId}</h1>
            {/* <Page/> */}
        </>
      )}
    </>
  );
}

export default ProductDetailsPage;
