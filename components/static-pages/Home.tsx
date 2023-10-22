const Home = () => {
    return (
        <main>
            <header className="hello">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            <h1 className="big"><a className="text-green" href="/contact-me">Hello!</a> <span>I'm Diego,</span>
                                <span>a <a className="text-yellow" href="/why-hire-freelance-development">freelance</a>
                            <a className="text-red" href="/freelance-software-development-services">full-stack</a></span>
                                <a className="text-blue" href="/work">software&nbsp;developer.</a></h1>
                            <h3><span className="star full"></span>
                                My goal is to translate my clients projects ideas into code and deliver solid state-of-the-art web applications.</h3>
                        </div>
                    </div>
                </div>
            </header>

            <section className="wa">
                <div className="container">
                    <div className="dialog left">
                        <h5 className="spaced">Does your</h5>
                        <h5 className="text-blue">
                            <span>startup</span><br/>
                            <span>agency</span><br/>
                            <span>business</span><br/>
                            <span>shop</span></h5>
                        <h5 className="spaced"> need </h5>
                        <h5>
                            <a href="/freelance-software-development/symfony-web-applications">a web
                                application</a><br/>
                            <a href="/freelance-software-development/hybrid-mobile-cross-platform-applications">a mobile
                                application</a><br/>
                            <a href="/freelance-software-development/open-source-responsive-websites">a responsive
                                website</a><br/>
                            <a href="/freelance-software-development/woocommerce-and-magento-ecommerce-development">an
                                online store</a>
                        </h5>
                        <h5 className="spaced">?</h5>
                    </div>
                    <div className="dialog right">
                        <h5>Yes, please!</h5>
                    </div>
                    <div className="dialog left">
                        <h5>Excellent, you are in the right place.</h5>
                    </div>
                    <div className="dialog left">
                        <h5>Choose one of our <a href="/freelance-software-development-services">digital
                            services</a> and <a className="text-green" href="/get-a-quote">get a quote</a> now!</h5>
                    </div>
                </div>
            </section>

            <section className="why">
                <div className="container">
                    <h1>3 main reasons why you should give me a try</h1>
                    <ul className="row">
                        <li className="col-md-4">
                            <img src="img/code.svg" alt="Quality code"/>
                            <h2>Quality software</h2>
                            <p>I develop quality software, always following best practices with frameworks such as <a
                                href="http://symfony.com" target="_blank" rel="noreferrer">Symfony</a>, <a href="https://angular.io/"
                                                                                          target="_blank" rel="noreferrer">AngularJS</a> and <a
                                href="http://wordpress.org" target="_blank" rel="noreferrer">Wordpress</a>.</p>
                        </li>
                        <li className="col-md-4">
                            <img src="img/money.svg" alt="Save money"/>
                            <h2>Save money</h2>
                            <p>Convenient exchange rates allow me to provide professional services at lower
                                international rates.</p>
                        </li>
                        <li className="col-md-4">
                            <img src="img/dialog.svg" alt="Communicate easily"/>
                            <h2>Communicate easily</h2>
                            <p>My GMT -3 time zone means I have the same North American working hours. Getting in touch
                                is as simple as opening Skype, Slack or WhatsApp.</p>
                        </li>
                    </ul>
                    <a href="/why-hire-freelance-development" className="btn">
                        Find more reasons why
                    </a>
                </div>
            </section>

            <div className="convinced">
                <h1>Not sure why should be <a href="/get-a-quote">hiring me</a> yet?</h1>
            </div>
        </main>
    )
}

export default Home;