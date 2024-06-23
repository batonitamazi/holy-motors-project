import './clientssection.css'

function ClientsSection() {
    return (
        <section className='clients--section'>
            <div className='clients--container'>
                <h1 className='clients--header'>CLIENTS</h1>
                <div className='client-logos'>
                    <div className='logo-track'>
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
                <div className='client-logos'>
                    <div className='logo-track' style={{ animationDirection: 'reverse' }}>
                        <img src='assets/clients/client-07.svg' alt='company' />
                        <img src='assets/clients/client-08.svg' alt='company' />
                        <img src='assets/clients/client-09.svg' alt='company' />
                        <img src='assets/clients/client-10.svg' alt='company' />
                        <img src='assets/clients/client-11.svg' alt='company' />
                        <img src='assets/clients/client-12.svg' alt='company' />
                        <img src='assets/clients/client-07.svg' alt='company' />
                        <img src='assets/clients/client-08.svg' alt='company' />
                        <img src='assets/clients/client-09.svg' alt='company' />
                        <img src='assets/clients/client-10.svg' alt='company' />
                        <img src='assets/clients/client-11.svg' alt='company' />
                        <img src='assets/clients/client-12.svg' alt='company' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientsSection