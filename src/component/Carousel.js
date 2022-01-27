import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Slide() {
    return (
        <Carousel>
            <div>
                <img src="../assets/bg.jpg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="../assets/bgg.jpg" />
                <p className="legend">Legend 2</p>
            </div>
        </Carousel>
    );
}

export default Slide;