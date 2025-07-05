import './ShimmerProductCard.css';

const ShimmerProductCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-image shimmer" />
      <div className="shimmer-content">
        <div className="shimmer-badge shimmer" />
        <div className="shimmer-title shimmer" />
        <div className="shimmer-text shimmer" />
        <div className="shimmer-footer">
          <div className="shimmer-price shimmer" />
          <div className="shimmer-button shimmer" />
        </div>
      </div>
    </div>
  );
};

export default ShimmerProductCard;
