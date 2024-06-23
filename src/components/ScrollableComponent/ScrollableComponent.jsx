import './scrollablecomponent.css'
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';


function ScrollableComponent({ screens, styles, renderSubtitle, isWork }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const titleRef = useRef(null);
    const [titleHeight, setTitleHeight] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? screens.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex === screens.length - 1 ? 0 : prevIndex + 1));
    };

    const currentScreen = screens[currentIndex];
    const dotWidth = 100 / screens.length;

    useEffect(() => {
        const titleElement = titleRef.current;
        const height = titleElement.scrollHeight;
        if (titleHeight !== height) {
            setTitleHeight(height);
        }
    }, [currentIndex, screens, titleHeight]);

    const titleStyle = isWork ? { top: `calc(77.9% - ${titleHeight - 111}px)` } : {};

    return (
        <section style={styles.sectionStyle}>
            <div className={styles.componentClass}>
                <div className={styles.screenClass}>
                    {renderSubtitle && (
                        <div className={styles.headerClass}>
                            <p>{currentScreen.subtitle.toUpperCase()}</p>
                        </div>
                    )}
                    <div className={styles.descriptionClass}>
                        {currentScreen.description.map((desc, descIndex) => (
                            <p key={descIndex} className={styles.descClass}>{desc}</p>
                        ))}
                    </div>
                </div>
                <div className={styles.imageDisplayClass}>
                    <div className={styles.dotsClass}>
                        {screens.map((_, index) => (
                            <div
                                key={index}
                                className={`${styles.dotClass} ${index === currentIndex ? styles.activeDotClass : ''}`}
                                style={{ width: `${dotWidth}%` }}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                    <img src={currentScreen.image.src} alt={currentScreen.image.alt} className={styles.imageClass} />
                    <div className={styles.actionButtonsClass}>
                        <div className={styles.slideNumClass}>0{currentScreen.id}</div>
                        <div className={styles.navButtonsClass}>
                            <div className={styles.navButtonClass} onClick={handlePrevClick}>‹</div>
                            <div className={styles.navButtonClass} onClick={handleNextClick}>›</div>
                        </div>
                    </div>
                    <div
                        className={styles.titleClass}
                        ref={titleRef}
                        style={titleStyle}
                    >
                        <h1>{currentScreen.title.toUpperCase()}</h1>
                    </div>
                </div>
            </div>
        </section >
    )
}

ScrollableComponent.propTypes = {
    screens: PropTypes.array.isRequired,
    styles: PropTypes.object.isRequired,
    renderSubtitle: PropTypes.bool,
    isWork: PropTypes.bool,
};

ScrollableComponent.defaultProps = {
    renderSubtitle: false,
    isWork: false,
};



export default ScrollableComponent