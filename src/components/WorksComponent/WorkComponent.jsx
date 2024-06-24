import ScrollableComponent from '../ScrollableComponent/ScrollableComponent';
import './workcomponent.css'
import { useQuery } from '@apollo/client';
import { GET_WORK_SCREENS } from '../../Queries/queries';

function WorkComponent() {
    const { loading, error, data } = useQuery(GET_WORK_SCREENS);

    if (loading) return <p>Loading...</p>;
    if (error) {
        console.error('GraphQL error:', error);
        return <p>Error: {error.message}</p>;
    }

    const screens = data?.workScreens || [];  // Ensure screens is an array

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



export default WorkComponent