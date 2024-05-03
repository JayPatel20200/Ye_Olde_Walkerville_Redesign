// import React from 'react'
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import ls01 from "../assests/img/Landscape/L_Story_01.jpeg";
import ls02 from "../assests/img/Landscape/L_Story_02.jpeg";
import ls03 from "../assests/img/Landscape/L_Story_03.jpeg";
import ls04 from "../assests/img/Landscape/L_Story_04.jpeg";
import ls05 from "../assests/img/Landscape/L_Story_05.jpg";
import ls06 from "../assests/img/Landscape/L_Story_06.jpg";
import ls07 from "../assests/img/Landscape/L_Story_07.jpg";
import ls08 from "../assests/img/Landscape/L_Story_08.jpg";
import ls09 from "../assests/img/Landscape/L_Story_09.jpg";
import ls10 from "../assests/img/Landscape/L_Story_10.jpeg";
import ls11 from "../assests/img/Landscape/L_Story_11.jpeg";
import ls12 from "../assests/img/Landscape/L_Story_12.jpg";
import story00 from "../assests/img/Story_00.jpg";



// Landscape size
const images = [story00, ls01, ls02, ls03, ls04, ls05, ls06, ls07, ls08, ls09, ls10, ls11, ls12];


const StorySlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [imageStyle, setImageStyle] = useState({
        width: '600px',
        height: '600px',
        objectFit: 'cover',
        borderRadius: '4px'
    });

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    useEffect(() => {
        adjustObjectFit(images[activeIndex]);
    }, [activeIndex]);

    const adjustObjectFit = (imageSrc) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => {
            const aspectRatio = img.width / img.height;
            if (aspectRatio > 1) {
                setImageStyle({
                    ...imageStyle,
                    objectFit: 'cover'
                });
            } else {
                setImageStyle({
                    ...imageStyle,
                    objectFit: 'contain'
                });
            }
        };
    };

    return (
        <div>
            <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
                {images.map((src, index) => (
                    <Carousel.Item key={index}>
                        <img src={src} alt={`Slide ${index + 1}`} className="d-block w-100" style={imageStyle} />
                    </Carousel.Item>
                ))}
            </Carousel>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
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


// ------------------------------------------------------------------


// Square size
// import s01 from "../assests/img/Square/Story_01.jpeg";
// import s02 from "../assests/img/Square/Story_02.jpeg";
// import s03 from "../assests/img/Square/Story_03.jpeg";
// import s04 from "../assests/img/Square/Story_04.jpeg";
// import s05 from "../assests/img/Square/Story_05.jpg";
// import s06 from "../assests/img/Square/Story_06.jpg";
// import s07 from "../assests/img/Square/Story_07.jpg";
// import s08 from "../assests/img/Square/Story_08.jpg";
// import s09 from "../assests/img/Square/Story_09.jpg";
// import s10 from "../assests/img/Square/Story_10.jpeg";
// import s11 from "../assests/img/Square/Story_11.jpeg";
// import s12 from "../assests/img/Square/Story_12.jpg";

// Square size
// const images = [s01, s02, s03, s04, s05, s06, s07, s08, s09, s10, s11, s12, ls12];


// const StorySlider = () => {
//     // State for the currently active slide
//     const [activeIndex, setActiveIndex] = useState(0);

//     // Handler for changing the active slide
//     const handleSelect = (selectedIndex) => {
//         setActiveIndex(selectedIndex);
//     };

//     // Define the style for the images in the main slider
//     const imageStyle = {
//         width: '600px', // Set the width to 500px
//         height: '600px', // Preserve the aspect ratio
//         objectFit: ['cover','contain'], // Ensure the image is scaled to fit the specified dimensions while maintaining aspect ratio
//         borderRadius: '4px' // Optional: round the image corners
//     };

//     return (
//         <div>
//             {/* Main slider */}
//             <Carousel activeIndex={activeIndex} onSelect={handleSelect} className="rounded-lg">
//                 {images.map((src, index) => (
//                     <Carousel.Item key={index}>
//                         <img src={src} alt={`Slide ${index + 1}`} className="d-block w-100" style={imageStyle} />
//                     </Carousel.Item>
//                 ))}
//             </Carousel>

//             {/* Thumbnails at the bottom */}
//             <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px'  }}>
//                 {images.map((src, index) => (
//                     <div
//                         key={index}
//                         onClick={() => handleSelect(index)}
//                         style={{
//                             margin: '0 5px',
//                             cursor: 'pointer',
//                             border: activeIndex === index ? '2px solid blue' : 'none'
//                         }}
//                     >
//                         <img
//                             src={src}
//                             alt={`Thumbnail ${index + 1}`}
//                             style={{
//                                 width: '60px',
//                                 height: '60px',
//                                 borderRadius: '4px',
//                                 objectFit: 'cover'
//                             }}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default StorySlider;
