import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductThunk } from '../../state/thunk/fetchProductThunk';
import ProductCard from './ProductCard';
import ShimmerProductCard from './ShimmerProductCard';
import './ProdcutContainer.css';
import { useNavigate } from 'react-router-dom';

const ProductContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productsList, loading, error } = useSelector((s) => s.products);

  useEffect(() => {
    dispatch(fetchProductThunk());
  }, [dispatch]);

  const shimmerArray = new Array(6).fill(0);
  
   const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };

  let content;
  if (loading) {
    content = (
      <div className="product-list">
        {shimmerArray.map((_, i) => (
          <ShimmerProductCard key={i} />
        ))}
      </div>
    );
  } else if (error) {
    content = <p className="text-red-500 text-center">{error}</p>;
  } else {
    content = (
      <div className="product-list">
        {productsList.map((product) => (
          <ProductCard key={product.id} product={product} onClick={() => handleCardClick(product?.id)} />
        ))}
      </div>
    );
  }

  return (
    <>
      {content}
    </>
  );
};

export default ProductContainer;
