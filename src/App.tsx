import { useContext } from 'react';

import { useProducts } from './hooks/products';

import { Product } from './components/Product';
import { CreateProduct } from './components/CreateProduct';
import { Modal } from './components/Modal';
import { Loader } from './components/Loader';
import { ErrorMsg } from './components/ErrorMsg';
import { IProduct } from './models/models';
import { ModalContext } from './context/ModalContext';

function App() {
  const { products, loading, error, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: IProduct) => {
    addProduct(product);
    close();
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMsg error={error} />}

      {products.map(product => (
        <Product product={product} key={product.id} />
      ))}

      {modal && (
        <Modal title="Create new product" onClose={close}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}

      <div className="fixed bottom-4 right-4">
        <button
          onClick={open}
          className="w-[50px] h-[50px] rounded-full bg-slate-400 text-4xl items-center font-bold text-white flex justify-center align-middle"
        >
          &#10010;
        </button>
      </div>
    </div>
  );
}

export default App;
