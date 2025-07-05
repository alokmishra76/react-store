import { useEffect, useRef, useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { title, price, description, category, images } = product;

  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  // Handle carousel only during hover
  useEffect(() => {
    if (isHovered) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 2000);
    } else {
      setIndex(0); // reset to first image
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered, images.length]);

  const truncate = (text, len = 80) =>
    text.length > len ? text.slice(0, len) + '…' : text;

  return (
    <div
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-card__image-wrapper">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${title} ${i + 1}`}
            className={`product-card__image ${
              i === index ? 'visible' : 'hidden'
            }`}
          />
        ))}

        {isHovered && (
          <div className="product-card__dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === index ? 'active' : ''}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="product-card__content">
        <span className="product-card__badge">{category?.name}</span>
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__desc">{truncate(description)}</p>
        <div className="product-card__footer">
          <span className="product-card__price">${price}</span>
          <button className="product-card__btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
