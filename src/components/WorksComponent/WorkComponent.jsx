import ScrollableComponent from '../ScrollableComponent/ScrollableComponent';
import './workcomponent.css'
import PropTypes from 'prop-types';
// import { useState} from 'react';


function WorkComponent({ screens }) {


    const workComponentStyles = {
        sectionStyle: { backgroundColor: '#FF0000', color: 'white' },
        componentClass: 'image--display',
        screenClass: 'screen-works',
        headerClass: 'header',
        descriptionClass: 'description-work',
        descClass: 'desc',
        imageDisplayClass: 'image--display',
        imageClass: 'image-big',
        actionButtonsClass: 'work-action-buttons',
        slideNumClass: 'slide-num-black',
        navButtonsClass: 'work-nav-buttons',
        navButtonClass: 'nav-buttons-black prev',
        titleClass: 'title-work',
        dotsClass: 'dots',
        dotClass: 'dot',
        activeDotClass: 'active-dot'
    };

    return (
        <ScrollableComponent screens={screens} styles={workComponentStyles} isWork={true} />
    )
}

WorkComponent.propTypes = {
    screens: PropTypes.array.isRequired
};


export default WorkComponent