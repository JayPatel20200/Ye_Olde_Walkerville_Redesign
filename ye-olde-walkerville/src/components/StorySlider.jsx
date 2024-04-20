// import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import s01 from "../assests/img/Square/Story_01.jpeg";
import s02 from "../assests/img/Square/Story_02.jpeg";
import s03 from "../assests/img/Square/Story_03.jpeg";
import s04 from "../assests/img/Square/Story_04.jpeg";
import s05 from "../assests/img/Square/Story_05.jpg";
import s06 from "../assests/img/Square/Story_06.jpg";
import s07 from "../assests/img/Square/Story_07.jpg";
import s08 from "../assests/img/Square/Story_08.jpg";
import s09 from "../assests/img/Square/Story_09.jpg";
import s10 from "../assests/img/Square/Story_10.jpeg";
import s11 from "../assests/img/Square/Story_11.jpeg";
import s12 from "../assests/img/Square/Story_12.jpg";

import React, { useState } from 'react';



const images = [s01, s02, s03, s04, s05, s06, s07, s08, s09, s10, s11, s12];

const StorySlider = () => {
    // State for the currently active slide
    const [activeIndex, setActiveIndex] = useState(0);

    // Handler for changing the active slide
    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    // Define the style for the images in the main slider
    const imageStyle = {
        width: '600px', // Set the width to 500px
        height: '600px', // Preserve the aspect ratio
        objectFit: 'contain', // Ensure the image is scaled to fit the specified dimensions while maintaining aspect ratio
        borderRadius: '4px' // Optional: round the image corners
    };

    return (
        <div>
            {/* Main slider */}
            <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
                {images.map((src, index) => (
                    <Carousel.Item key={index}>
                        <img src={src} alt={`Slide ${index + 1}`} className="d-block w-100" style={imageStyle} />
                    </Carousel.Item>
                ))}
            </Carousel>

            {/* Thumbnails at the bottom */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px'  }}>
                {images.map((src, index) => (
                    <div
                        key={index}
                        onClick={() => handleSelect(index)}
                        style={{
                            margin: '0 5px',
                            cursor: 'pointer',
                            border: activeIndex === index ? '2px solid blue' : 'none'
                        }}
                    >
                        <img
                            src={src}
                            alt={`Thumbnail ${index + 1}`}
                            style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '4px',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StorySlider;