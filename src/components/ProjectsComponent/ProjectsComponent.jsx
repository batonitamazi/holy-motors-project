import ScrollableComponent from '../ScrollableComponent/ScrollableComponent';
import './projectscomponent.css';
import { useQuery } from '@apollo/client';
import { GET_PROJECT_SCREENS } from '../../Queries/queries';
function ProjectsComponent() {
    const { loading, error, data } = useQuery(GET_PROJECT_SCREENS);

    if (loading) return <p>Loading...</p>;
    if (error) {
        console.error('GraphQL error:', error);
        return <p>Error: {error.message}</p>;
    }
    const screens = data?.projectScreens || [];
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
        activeDotClass: 'active-dot',
        actionTitleContainer: 'action-title-container'

    };

    return (
        <ScrollableComponent screens={screens} styles={ProjectsComponentStyles} renderSubtitle={true} />
    )
}


export default ProjectsComponent