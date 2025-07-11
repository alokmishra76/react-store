import { useEffect, useRef, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import "./ProductCard.css";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../modal/Modal";
import Login from "../container/Login";
import { addToWhishList } from "../../state/slices/whishListProductSlice";

const ProductCard = ({ product, onClick }) => {
  const { title, price, description, category, images } = product;

  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [pendingProduct, setPendingProduct] = useState(null);

  const intervalRef = useRef(null);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  const isUserLoggedIn = userData?.isAuthenticated;

  useEffect(() => {
    if (isHovered) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 2000);
    } else {
      setIndex(0);
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered, images.length]);

  useEffect(() => {
    if (isUserLoggedIn && pendingProduct) {
      setWishlisted(true);
      dispatch(addToWhishList(pendingProduct));
      setPendingProduct(null);
      setShowLoginModal(false);
    }
  }, [isUserLoggedIn, pendingProduct, dispatch]);

  const truncate = (text, len = 80) =>
    text.length > len ? text.slice(0, len) + "…" : text;

  const handleWishlistClick = () => {
    if (!isUserLoggedIn) {
      setPendingProduct(product);
      setShowLoginModal(true);
      return;
    }
    setWishlisted((prev) => !prev);
    dispatch(addToWhishList(product));
  };

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
            className={`product-card__image ${i === index ? "visible" : "hidden"}`}
          />
        ))}

        <button className="wishlist-icon" onClick={handleWishlistClick}>
          {wishlisted ? (
            <AiFillHeart color="#ef4444" size={22} />
          ) : (
            <AiOutlineHeart color="#fff" size={22} />
          )}
        </button>

        {isHovered && (
          <div className="product-card__dots">
            {images.map((_, i) => (
              <span key={i} className={`dot ${i === index ? "active" : ""}`} />
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
          <button className="product-card__btn" onClick={onClick}>
            Go to Product
          </button>
        </div>
      </div>
      {showLoginModal && (
        <Modal
          show={showLoginModal}
          title="Please login"
          onClose={() => setShowLoginModal(false)}
        >
          <Login />
        </Modal>
      )}
    </div>
  );
};

export default ProductCard;
