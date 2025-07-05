import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductThunk } from '../../state/thunk/fetchProductThunk';
import ProductCard from './ProductCard';
import ShimmerProductCard from './ShimmerProductCard';
import './ProdcutContainer.css';

const ProductContainer = () => {
  const dispatch = useDispatch();
  const { productsList, loading, error } = useSelector((s) => s.products);

  useEffect(() => {
    dispatch(fetchProductThunk({offset: 0, limit: 10}));
  }, [dispatch]);

  const shimmerArray = new Array(6).fill(0); // render 6 shimmer cards

  return (
   <>
   {loading ? (
      <div className="product-list">
        {shimmerArray.map((_, i) => (
          <ShimmerProductCard key={i} />
        ))}
      </div>
    ) : error ? (
      <p className="text-red-500 text-center">{error}</p>
    ) : (
      <div className="product-list">
        {productsList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    )}
   </>
  );
};

export default ProductContainer;
