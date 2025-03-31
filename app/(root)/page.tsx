import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/product/product-list";
const Homepage = async () => {
  return (
    <ProductList data={sampleData.products} 
    title="Newest arrivals" 
    limit={4} />
  );
};
export default Homepage;
