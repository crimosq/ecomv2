import React, { useState, useEffect } from 'react';
import ProductSection from './ProductSection';

const ProductPage = () => {
  // State to store the original list of products
  const [products, setProducts] = useState([]);

  // State to store the currently sorted/filtered list of products
  const [sortedProducts, setSortedProducts] = useState([]);

  // const [filteredProducts, setFilteredProducts] = useState([]);

  // useEffect hook to fetch product data from the backend 
  useEffect(() => {
    
    fetch('http://localhost:8081/products')
      .then(response => response.json()) // Parsing the response to JSON
      .then(data => {
        setProducts(data); // Storing the fetched data in 'products' state
        setSortedProducts(data); // Also initializing 'sortedProducts' with the fetched data
        // setFilteredProducts(data);
      })
      .catch(error => console.error('Error fetching data:', error)); // Handling any fetch errors
  }, []); // The empty dependency array means this effect runs once after the component mounts

  
  const handleSortChange = (event) => {
    const sortType = event.target.value; // Getting the selected sort option
    const productsCopy = [...products];

    // Sorting the products based on the selected option
    if (sortType === "Low to High") {

      productsCopy.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortType === "High to Low") {
      productsCopy.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    setSortedProducts(productsCopy); // Updating 'sortedProducts' with the sorted array
  };

  // const handleFilterType = (e) => {
  //   const filterType = e.target.value; // Getting the selected filter option
  //   const productCopy2 = [...products];

  //   let filteredProducts;

  //   if (filterType) {
  //     filteredProducts = productCopy2.filter(product => product.type === filterType);
  //   } else {
  //     filteredProducts = productCopy2;
  //   }
  //   setFilteredProducts(filteredProducts); // Updating 'filteredProducts' with the filtered array
  // }
  
  return (
    <div>
            {/* <div className="filter-style">
        <div className="filter-title">Filter</div>
        <select id="dropdown2" onChange={handleFilterType}>
          <option value="">Style</option>
          <option value="Chronograph">Chronograph</option>
          <option value="Dress">Dress</option>
          <option value="Pilot and Field">Pilot and Field</option>
        </select>
      </div> */}

      <div className="filter-menu">
        <div className="filter-title">Filter</div>
        <select id="dropdown1" onChange={handleSortChange}>
          <option value="">Sort</option>
          <option value="Low to High">Low to High</option>
          <option value="High to Low">High to Low</option>
        </select>
      </div>


      {/* ProductSection component to display the products, passed the sorted/filtered product list */}
      <ProductSection products={sortedProducts} />
    </div>
  );
};

export default ProductPage;


