import Link from "next/link"
function Products() {
  return (
    <>
      <h1>All Products: </h1>
      {Array.from({length:10}).map((_, i) => (
        <h3 className="links" key={i}>
          <Link href={`/products/${i+1}`}>Product Page {i+1}</Link>
        </h3>
      ))}
    </>
  )
}
export default Products