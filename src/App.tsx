import { useProducts } from './hooks/products';
import { Product } from './components/Product';
import { Loader } from './components/Loader';
import { ErrorMsg } from './components/ErrorMsg';

function App() {
  const { products, loading, error } = useProducts();

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMsg error={error} />}

      {products.map(product => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default App;
