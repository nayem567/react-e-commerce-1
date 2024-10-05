import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox-navigator">
        <div className="descriptionBox-nav-box">Description</div>
        <div className="descriptionBox-nav-box fade">Reviews (122)</div>
        
      </div>
      <div className="descriptionBox-description">
          <p>
            Discover the perfect blend of style and comfort with our latest
            clothing collection. Crafted from premium fabrics, each piece is
            designed to elevate your everyday wardrobe while ensuring lasting
            durability. Whether you're looking for casual staples or statement
            outfits, we have something to suit every occasion. Our versatile
            range features flattering silhouettes, vibrant colors, and trendy
            patterns that make dressing up effortless.
          </p>
          <p>
            With attention to detail and superior craftsmanship, every garment
            is made to fit and feel incredible. Shop now and refresh your closet
            with the season’s must-haves for a look that’s both chic and
            comfortable.
          </p>
        </div>
    </div>
  );
};

export default DescriptionBox;
