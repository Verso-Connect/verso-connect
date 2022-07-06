import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import ServicesHome from './ServicesHome';
import TestimonialHome from './TestimonialHome';
import FooterHome from './FooterHome';
import ProjectHome from './ProjectHome';
import VideoPlayerHome from './VideoPlayerHome';
import Drawer from '../Mobile/Drawer';
import FeaturesHome from './FeaturesHome';
import HeaderHome from './HeaderHome';
import HeroHome from './HeroHome';
import Categories from './Categories';

function Home() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHome action={drawerAction.toggle} />
            <HeroHome />
            <ServicesHome className="pt-190" />
            <Categories />
            <FeaturesHome />
            <TestimonialHome />
            <VideoPlayerHome className="pt-100" />
            <ProjectHome className="home-four-project" />
            <FooterHome className="home-four-footer" />
            <BackToTop className="back-to-top-3" />
        </>
    );
}

export default Home;
