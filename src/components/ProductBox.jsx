import React from 'react';

const ProductBox = ({ id, images, name, description, price }) => {
    return (
      <div key={id} className="p-box">
        <img className='img-pro' src={images} alt={name} />
        <h4>{name}</h4>
        <p className="description">{description}</p>
        <p className="price">${price}</p>
      </div>
    );
  };

export default ProductBox;

