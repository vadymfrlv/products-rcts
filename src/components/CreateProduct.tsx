import React, { useState } from 'react';
import axios from 'axios';

import { IProduct } from '../models/models';
import { ErrorMsg } from './ErrorMsg';

const productData: IProduct = {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 42,
    count: 10,
  },
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export const CreateProduct = ({ onCreate }: CreateProductProps) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (e: React.FormEvent): Promise<IProduct | void> => {
    e.preventDefault();
    setError('');

    if (value.trim().length === 0) {
      setError('Please enter valid title!');
      return;
    }

    productData.title = value;
    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);
    onCreate(response.data);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className="mb-1" onSubmit={submitHandler}>
      <input
        type="text"
        value={value}
        onChange={changeHandler}
        className="border-r-transparent border py-2 px-4 rounded-l-md outline-none"
        placeholder="Enter product title..."
      />

      <button
        type="submit"
        className="py-2 px-4 rounded-r-md border border-l-transparent bg-[#b2ff19a8] hover:bg-[#b2ff19]"
      >
        Create
      </button>
      {error && <ErrorMsg error={error} />}
    </form>
  );
};
