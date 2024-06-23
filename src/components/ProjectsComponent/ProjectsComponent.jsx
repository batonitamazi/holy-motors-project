import ScrollableComponent from '../ScrollableComponent/ScrollableComponent';
import './projectscomponent.css';
import PropTypes from 'prop-types';

function ProjectsComponent({ screens }) {
    const ProjectsComponentStyles = {
        sectionStyle: { backgroundColor: 'black', color: 'white' },
        componentClass: 'scrollable-component',
        screenClass: 'screen',
        headerClass: 'header',
        descriptionClass: 'description',
        descClass: 'desc',
        imageDisplayClass: 'image-display',
        imageClass: 'image',
        actionButtonsClass: 'action-buttons',
        slideNumClass: 'slide-num',
        navButtonsClass: 'nav-buttons',
        navButtonClass: 'nav-button prev',
        titleClass: 'title',
        dotsClass: 'dots',
        dotClass: 'dot',
        activeDotClass: 'active-dot'
    };

    return (
        <ScrollableComponent screens={screens} styles={ProjectsComponentStyles} renderSubtitle={true} />
    )
}

ProjectsComponent.propTypes = {
    screens: PropTypes.array.isRequired
};

export default ProjectsComponent