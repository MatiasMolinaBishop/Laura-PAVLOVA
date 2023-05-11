import React, { useState, useEffect } from 'react';
import './Carousel.css'

const Carousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

  let images = [
    'https://images.unsplash.com/photo-1634324040880-63dbf9a4e5ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGF2bG92YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1497729173797-0dd964fef017?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGF2bG92YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1641848373234-ffc8c276480c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBhdmxvdmF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1600730493985-d1efe3d85ff3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGF2bG92YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

    return (
        <div className="carousel">
            <img className="carousel-image" src={images[currentImageIndex]} alt="Carousel"/>
        </div>
    )
}

export default Carousel