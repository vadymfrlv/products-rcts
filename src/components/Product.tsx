import { useState } from 'react';

import { IProduct } from '../models/models';

interface ProductProps {
  product: IProduct;
}

export const Product = ({ product }: ProductProps) => {
  const [details, setDetails] = useState(false);

  const btnBgClassName = details ? 'bg-[#b2ff19a8]' : 'bg-[#b2ff19]';
  const btnClassName = ['py-2 px-4 rounded-md', btnBgClassName];

  return (
    <div className="border py-2 px-2 bg- rounded flex flex-col items-center mb-2">
      <img className="w-1/12" src={product.image} alt={product.title} />
      <p>{product.title}</p>
      <p className="font-bold">{product.price}</p>
      <button className={btnClassName.join(' ')} onClick={() => setDetails(prev => !prev)}>
        {details ? 'Hide details' : 'Show details'}
      </button>

      {details && (
        <div>
          <p>{product.description}</p>
          <p className="font-bold">Rate: {product.rating?.rate}</p>
        </div>
      )}
    </div>
  );
};
