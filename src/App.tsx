import { Product } from './components/Product';
import { products } from './data/products';

function App() {
  return (
    <div>
      {products.map(product => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default App;
