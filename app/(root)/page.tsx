import { getLatestProducts } from "@/lib/actions/product.action";
import ProductList from "@/components/shared/product/product-list";
const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <ProductList data={latestProducts} title="Newest arrivals" />
  );
};
export default Homepage;
