import React, { useState, useEffect } from 'react';
import ProductSection from './ProductSection';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [sortedAndFilteredProducts, setSortedAndFilteredProducts] = useState([]);
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    fetch('http://localhost:8081/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setSortedAndFilteredProducts(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    let updatedProducts = [...products];

    if (filterType) {
      updatedProducts = updatedProducts.filter(product => product.type === filterType);
    }

    setSortedAndFilteredProducts(updatedProducts);
  }, [filterType, products]);

  const handleSortChange = (event) => {
    const sortType = event.target.value;
    let productsCopy = [...sortedAndFilteredProducts];

    if (sortType === "Low to High") {
      productsCopy.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortType === "High to Low") {
      productsCopy.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    setSortedAndFilteredProducts(productsCopy);
  };

  const handleFilterType = (e) => {
    setFilterType(e.target.value);
  };

  return (
    <div>
      <div className="filter-menu">
        <div className="filter-title">Filter by Type</div>
        <select id="dropdown2" onChange={handleFilterType}>
          <option value="">All Types</option>
          <option value="Chronograph">Chronograph</option>
          <option value="Dress">Dress</option>
          <option value="Pilot">Pilot</option>
        </select>
      </div>

      <div className="filter-menu">
        <div className="filter-title">Sort</div>
        <select id="dropdown1" onChange={handleSortChange}>
          <option value="">Select</option>
          <option value="Low to High">Low to High</option>
          <option value="High to Low">High to Low</option>
        </select>
      </div>

      <ProductSection products={sortedAndFilteredProducts} />
    </div>
  );
};

export default ProductPage;



