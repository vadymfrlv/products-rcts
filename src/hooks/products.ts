import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

import { IProduct } from '../models/models';

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    void fetchData();

    async function fetchData() {
      setLoading(true);
      setError('');
      try {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (e) {
        const error = e as AxiosError;
        setLoading(false);
        setError(error.message);
      }
    }
  }, []);

  async function getProducts(): Promise<IProduct[]> {
    const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=9 ');
    return response.data;
  }

  return { products, loading, error };
};
