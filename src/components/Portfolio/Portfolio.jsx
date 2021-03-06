import React from 'react'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import s from './Portfolio.module.scss'
import Navigation from '../Navigation/Navigation';
import Filter from './Filter/Filter';
import AllProjects from './AllProjects/AllProjects';
import HTML5Projects from './HTML5Projects/HTML5Projects';
import SASSProjects from './SASSProjects/SASSProjects';
import LESSProjects from './LESSProjects/LESSProjects';
import JSProjects from './JSProjects/JSProjects';
import ReactProjects from './ReactProjects/ReactProjects';

const Portfolio = (props) => {
    return (
        <section className={s.whrapper}>
            <div className={s.navigation}>
                <Navigation className={s.navigation} navPage={props.navPage} />
            </div>
            <div className={s.portfolio}>
                <div className={s.content}>
                    <h3 className={s.heading}>Portfolio</h3>
                    <Router>
                        <Filter />
                        <div className={s.projects}>
                            <Switch>
                                <Route exact path="/portfolio/" render={() => <AllProjects />} />
                                <Route path="/portfolio/html5" render={() => <HTML5Projects />} />
                                <Route path="/portfolio/sass" render={() => <SASSProjects />} />
                                <Route path="/portfolio/less" render={() => <LESSProjects />} />
                                <Route path="/portfolio/javascript" render={() => <JSProjects />} />
                                <Route path="/portfolio/react" render={() => <ReactProjects />} />
                            </Switch>
                        </div>
                    </Router>
                </div>
            </div>
        </section>
    )
}

export default Portfolio