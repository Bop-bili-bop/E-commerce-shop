import { getProductBySlug } from "@/lib/actions/product.action";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ProductPrice from "@/components/shared/product/product-price";
import ProductImages from "@/components/shared/product/product-images";

const ProductDetailPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;

  const product = await getProductBySlug(slug);
  if (!product) {
    notFound();
  }

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="col-span-2">
            <ProductImages 
            images={product.images}
            />
          </div>
          <div className="col-span-2 p-5">
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-col gap-6">
                  <p>
                    {product.brand} {product.category}
                  </p>
                  <h1 className="h3-bold">{product.name}</h1>
                  <p>
                    {product.rating} of {product.numReviews} Reviews
                  </p>
                  <div>
                    <div className="mb-2 flex space-x-4">
                      <div>Price</div>
                      <div>
                        <ProductPrice
                          value={Number(product.price)}
                          className="font-semibold"
                        />
                      </div>
                    </div>
                    <div className="mb-2 flex space-x-4">
                      <div>Status</div>
                      {product.stock > 0 ? (
                        <Badge variant="outline" className="bg-green-400">
                          In Stock
                        </Badge>
                      ) : (
                        <Badge variant="destructive">Out Of Stock</Badge>
                      )}
                    </div>
                    <div className="mt-8 flex-center">
                      {product.stock > 0 ? (
                        <Button className="w-full">Add To Cart</Button>
                      ) : (
                        <Button disabled className="w-full">
                          Add To Cart
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <div className="font-semibold">
                    <p>Description</p>
                    <p>{product.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Action Column */}
        </div>
      </section>
    </>
  );
};

export default ProductDetailPage;
