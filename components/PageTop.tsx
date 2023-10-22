import React from 'react';
import {Menu} from "./Menu";
import {classNames} from "../utils/Utils";

export default function PageTop({view, subView}: ViewProps) {
    let getaQuoteClasses = classNames('btn', 'wire', view === 'get-a-quote' && 'active');
    return (
        <nav className="main-nav" data-controller="Sticky">
            <div className="container">
                <a data-controller="MenuMobile" href="#" className="menu-mobile">
                    <span className="bar"></span>
                </a>
                <a href="/" className="home">
                    <img src="/img/underscreen-logo.png" alt="underSCREEN"/>
                </a>
                <Menu view={view} subView={subView} placement="page_top"/>
                <a href="/get-a-quote" className={getaQuoteClasses}>Get a quote</a>
            </div>
        </nav>
    );
}