import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import plantsData from '../plants.json'; 

const uniqueOptions = (data, key) => {
  const unique = [...new Set(data.map(item => item[key]))];
  return unique.sort();
};

const Home = () => {
  const [filteredPlants, setFilteredPlants] = useState(plantsData);
  const [sortOrder, setSortOrder] = useState('');
  const [filters, setFilters] = useState({
    light: '',
    watering: '',
    humidity: '',
    fertilizer: '',
  });

  const handleFilterChange = (name, value) => {
    setFilters({ ...filters, [name]: value });
  };

  useEffect(() => {
    let filtered = plantsData.filter(plant => {
      return Object.keys(filters).every(key =>
        filters[key] ? plant[key] === filters[key] : true
      );
    });

    if (sortOrder === 'lowHigh') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'highLow') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredPlants(filtered);
  }, [filters, sortOrder]);

  return (
    <div>
      <Navbar />
      <header className="hero-section">
        <section id="hero" className="d-flex align-items-center justify-content-center">
          <h1 className="hero-heading">Your personal plant advisor</h1>
        </section>
      </header>
      <main className="main-content">
        <section className="container my-5">
          
          <div className="row">
            <div className="col-12 col-md-8 mx-auto text-center">
              <h1>NEW PRODUCT</h1>
              <h2>Petite Petals, Grand Beauty</h2>
              <p>Discover the charm of our Petite Orchid—a tiny wonder that brings a burst of joy and sophistication to your cozy corner. Its blossoms are a celebration of nature's understated allure. Perfect for gifting, or simply to pamper yourself.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8 mx-auto">
              <img src="images/rose-pink.jpg" alt="Orchid" className="img-fluid" />
            </div>
          </div>

        </section>
      </main>

      <div className="container my-5">
        <div className="row mb-4">
          {/* Filters */}
          {Object.keys(filters).map((filter, index) => (
            <div className="col-md-3" key={index}>
              <div className="filter-option">
                <h5>{filter.charAt(0).toUpperCase() + filter.slice(1)}</h5>
                <select className="form-select" onChange={(e) => handleFilterChange(filter, e.target.value)}>
                  <option value="">All</option>
                  {uniqueOptions(plantsData, filter).map((option, index) => (
                    <option value={option} key={index}>{option.replace(/-/g, ' ')}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}

          {/* Sort By Price Dropdown */}
          <div className="col-md-3">
            <div className="filter-option">
              <h5>Sort by Price</h5>
              <select className="form-select" onChange={(e) => setSortOrder(e.target.value)}>
                <option value="">Default</option>
                <option value="lowHigh">Low to High</option>
                <option value="highLow">High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Plant List */}
        <div className="row">
          {filteredPlants.map((plant) => (
            <div key={plant.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={plant.image} className="card-img-top" alt={plant.name} />
                <div className="card-body">
                  <h5 className="card-title">{plant.name}</h5>
                  <p className="card-text">{plant.description}</p>
                  <p className="card-text"><strong>Price:</strong> ${plant.price}</p>
                  {/* Add to Cart Button */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
