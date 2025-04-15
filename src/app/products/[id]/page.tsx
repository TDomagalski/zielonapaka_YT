import NotFound from '@/app/not-found';
import ProductInfo from '@/components/product-info';
import { getProductByID } from '@/lib/server-utils';

export default async function Product({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await getProductByID(id);

  if (!product) return NotFound();

  return <ProductInfo product={product} />;
}
