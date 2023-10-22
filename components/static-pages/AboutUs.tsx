const AboutUs = () => {
    const years = (new Date()).getFullYear() - 2003;
    return (
        <main className="about-us">
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <h1 className="very-big">About <span className="text-gray-dark">me</span></h1>
                            <h3><span className="star blue"></span>Hi there! 👋 My name is <a
                                style={{display: 'inline-block', borderBottom: '2px solid #00b3ee'}}
                                href="https://www.linkedin.com/in/diegoavola/" target="_blank" rel="noreferrer">Diego Avola</a>
                                and I live in Buenos Aires, Argentina. <span className="text-gray-dark">(GMT-3)</span>
                            </h3>
                            <h3 className="mt">🤓 Im an old-school self taught <span className="text-strong-black">full-stack software engineer</span> that
                                enjoy building web applications
                                for clients around the world! 🌍</h3>
                            <h3 className="mt">With more than <span className="text-strong-black">{years} years experience</span>
                                under my belt, there is no <span className="text-strong-black">backend</span> or
                                <span className="text-strong-black">frontend</span> project I cannot led into
                                completion. 💪</h3>
                        </div>
                    </div>
                </div>
            </header>
            <section className="clients">
                <div className="container">
                    <h1>Who I work for</h1>
                    <hr className="bg-green-dark"/>
                    <h3>I work freelance for a variety of clients from around the globe.</h3>
                    <div className="row">
                        <div className="col-md-4">
                            <img src="/img/startup.svg" alt="Early startup"/>
                            <h2>Startups</h2>
                            <p>Entrepreneurs with big ideas but tight budgets looking to build a web or mobile
                                application to attract investor attention.</p>
                        </div>
                        <div className="col-md-4">
                            <img src="/img/bussineses.svg" alt="Business"/>
                            <h2>Businesses</h2>
                            <p>Small to medium companies looking for a responsive website or an open source online
                                store to attract more customers and sales.</p>
                        </div>
                        <div className="col-md-4">
                            <img src="/img/agencies.svg" alt="Agencies"/>
                            <h2>Agencies</h2>
                            <p>Product managers from large and small agencies who need an extra freelance member to
                                meet a deadline and get their software development done right.</p>
                        </div>
                    </div>
                    <br/><br/>
                </div>
            </section>

            <section className="contact">
                <h3>Simply want to say hi?</h3>
                <h1>Dont hesitate to <a href="contact-us">contact me</a>.</h1>
            </section>
        </main>
    )
}

export default AboutUs;