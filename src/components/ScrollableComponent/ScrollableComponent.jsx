import './ScrollableComponent.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

function ScrollableComponent({ screens }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? screens.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === screens.length - 1 ? 0 : prevIndex + 1));
    };

    const currentScreen = screens[currentIndex];
    const dotWidth = 100 / screens.length;

    return (
        <section style={{ backgroundColor: 'black', color: 'white' }}>
            <div className="scrollable-component" >
                <div className='screen'>
                    <div className="header">
                        <p>{currentScreen.subtitle}</p>
                    </div>
                    <div className="description">
                        {currentScreen.description.map((desc, descIndex) => (
                            <p key={descIndex} className='desc'>{desc}</p>
                        ))}
                    </div>
                </div>
                <div className="image-display">
                    <div className="dots">
                        {screens.map((_, index) => (
                            <div
                                key={index}
                                className={`dot ${index === currentIndex ? 'active-dot' : ''}`}
                                style={{ width: `${dotWidth}%` }}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                    <img src={currentScreen.image.src} alt={currentScreen.image.alt} className="image" />
                    <div className='slide-num'>0{currentScreen.id}</div>
                    <div className='nav-buttons'>
                        <div className="nav-button prev" onClick={handlePrevClick}>‹</div>
                        <div className="nav-button next" onClick={handleNextClick}>›</div>
                    </div>
                    <div className='title'>
                        <h1>{currentScreen.title.toUpperCase()}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

ScrollableComponent.propTypes = {
    screens: PropTypes.array.isRequired
};

export default ScrollableComponent