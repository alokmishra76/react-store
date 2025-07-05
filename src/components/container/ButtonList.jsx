import React, { useState } from 'react';

import './ButtonList.css';
import Button from './Button';

const categories = [
  'All', 'Sports', 'Music', 'Gaming', 'News', 'Movies', 'Technology', 'Fashion', 'Comedy'
];

const ButtonList = () => {
 const [activeCategory, setActiveCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    // You can dispatch Redux action or call an API here
  };

  return (
    <div className="category-bar">
      {categories.map((cat) => (
        <Button
          key={cat}
          label={cat}
          isActive={cat === activeCategory}
          onClick={handleCategoryClick}
        />
      ))}
    </div>
  );
}

export default ButtonList