import './storysection.css'

function StorySection() {
    return (
        <section className='story--section'>
            <div className='info--container'>
                <div className='header--container'>
                    <h1 className='story--title'>{'story'.toUpperCase()}</h1>
                    <p className='story--desc'>On the first day of April, 3 years ago holistic design agency Holy Motors opened for business.</p>
                    <p className='story--subtitle'>
                        Holy Motors is a holistic design agency helping brands leave their mark on
                        culture.
                    </p>
                </div>
                <div className='desc--container'>
                    <p className='story--desc'>
                        With multidisciplinary teams of designers, developers, strategists, writers, creators, and artists, we work closely with founders and brand owners through all stages of bringing their vision to life.
                    </p>
                    <p className='story--desc'>
                        As most glorious human endeavours often are, Holy Motors was created out of nothing when Georgia’s renowned creative duo Giorgi Avaliani and Nick Kumbari joined their forces to be reborn. Bringing together years of creative and design excellence.

                    </p>

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

export default StorySection