import { useRef } from 'react';
import './clientssection.css';

function ClientsSection() {
    const logoTrack1 = useRef(null);
    const logoTrack2 = useRef(null);

    const handleMouseEnter = (ref) => {
        ref.current.style.animationPlayState = 'paused';
    };

    const handleMouseLeave = (ref) => {
        ref.current.style.animationPlayState = 'running';
    };

    return (
        <section className='clients--section'>
            <div className='clients--container'>
                <h1 className='clients--header'>CLIENTS</h1>
                <div
                    className='client-logos'
                    onMouseEnter={() => handleMouseEnter(logoTrack1)}
                    onMouseLeave={() => handleMouseLeave(logoTrack1)}
                >
                    <div className='logo-track' ref={logoTrack1}>
                        <img src='assets/clients/client-01.svg' alt='company' />
                        <img src='assets/clients/client-02.svg' alt='company' />
                        <img src='assets/clients/client-03.svg' alt='company' />
                        <img src='assets/clients/client-04.svg' alt='company' />
                        <img src='assets/clients/client-05.svg' alt='company' />
                        <img src='assets/clients/client-06.svg' alt='company' />
                        <img src='assets/clients/client-01.svg' alt='company' />
                        <img src='assets/clients/client-02.svg' alt='company' />
                        <img src='assets/clients/client-03.svg' alt='company' />
                        <img src='assets/clients/client-04.svg' alt='company' />
                        <img src='assets/clients/client-05.svg' alt='company' />
                        <img src='assets/clients/client-06.svg' alt='company' />
                    </div>
                </div>
                <div
                    className='client-logos'
                    onMouseEnter={() => handleMouseEnter(logoTrack2)}
                    onMouseLeave={() => handleMouseLeave(logoTrack2)}
                >
                    <div className='logo-track' ref={logoTrack2} style={{ animationDirection: 'reverse' }}>
                        <img src='assets/clients/client-07.svg' alt='company' />
                        <img src='assets/clients/client-08.svg' alt='company' />
                        <img src='assets/clients/client-09.svg' alt='company' />
                        <img src='assets/clients/client-10.svg' alt='company' />
                        <img src='assets/clients/client-11.svg' alt='company' />
                        <img src='assets/clients/client-12.svg' alt='company' />
                        <img src='assets/clients/client-01.svg' alt='company' />
                        <img src='assets/clients/client-08.svg' alt='company' />
                        <img src='assets/clients/client-09.svg' alt='company' />
                        <img src='assets/clients/client-10.svg' alt='company' />
                        <img src='assets/clients/client-11.svg' alt='company' />
                        <img src='assets/clients/client-12.svg' alt='company' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ClientsSection;
