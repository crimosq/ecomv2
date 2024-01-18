import React from 'react';
import ProductBox from './ProductBox';

const ProductSection = ({ products }) => {
    return (
      <div>
        {/* <h2 className="header">{sectionTitle}</h2> */}
        <section className="container">
          {products.map(product => (
            <ProductBox key={product.id} {...product} />
          ))}
        </section>
      </div>
    );
  };
  


export default ProductSection;
