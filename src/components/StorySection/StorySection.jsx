import './storysection.css'
import PropTypes from 'prop-types';

function StorySection({ storyData }) {
    return (
        <section className='story--section'>
            <div className='info--container'>
                <div className='header--container'>
                    <h1 className='story--title'>{storyData.title.toUpperCase()}</h1>
                    <p className='story--desc'>{storyData.story_description}</p>
                    <p className='story--subtitle'>
                        {storyData.subtitle}
                    </p>
                </div>
                <div className='desc--container'>
                    {storyData.descriptions.map((item, itemIndex) => {
                        return (
                            <p className='story--desc' key={itemIndex}>{item}</p>
                        )
                    })}
                </div>
            </div>
            <div className='logos--container'>
                <img src='/assets/story_logos/logo-01.svg' alt='company 1' />
                <img src='/assets/story_logos/logo-02.svg' alt='company 2' />
                <img src='/assets/story_logos/logo-03.svg' alt='company 3' />
            </div>
        </section>
    )
}

StorySection.propTypes = {
    storyData: PropTypes.object.isRequired
};



export default StorySection