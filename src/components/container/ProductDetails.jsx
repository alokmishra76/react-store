import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductsDetailsThunk } from '../../state/thunk/fetchProductsDetailsThunk';
import './ProductDetails.css';

const ProductDetails = () => {
  const [index, setIndex] = useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();

  const { productDetails, loading } = useSelector(state => state.productDetails);

  useEffect(() => {
    dispatch(fetchProductsDetailsThunk(id));
  }, [dispatch, id]);

  if (loading) return <div className="shimmer"></div>;
  if (!productDetails || !productDetails.images) return <p className="error">Product not found.</p>;

  const { title, price, description, images, category } = productDetails;

  return (
    <div className="product-details-container">
      <div className="product-gallery">
        <div className="thumbnails">
          {images.map((img, i) => (
            <button
              type="button"
              key={`${img}-${i}`}
              className={`thumb ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') setIndex(i);
              }}
              tabIndex={0}
              aria-label={`Show image ${i + 1}`}
            >
              <img src={img} alt={`thumb-${i}`} />
            </button>
          ))}
        </div>

        <div className="main-image-container">
          <img src={images[index]} alt={title} className="main-image" />
        </div>
      </div>

      <div className="product-info">
        <h1>{title}</h1>
        <p className="category">{category?.name}</p>
        <p className="price">${price}</p>
        <p className="description">{description}</p>

        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
