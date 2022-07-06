import React from 'react';
import useToggle from '../../Hooks/useToggle';
import BackToTop from '../BackToTop';
import FooterHomeThree from '../Home/FooterHome';
import Drawer from '../Mobile/Drawer';
import HeaderHome from '../Home/HeaderHome';
import HeroNews from '../Blog/HeroNews';
import Forms from './Forms';

function Contact() {
    const [drawer, drawerAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} />
            <HeaderHome action={drawerAction.toggle}/>
            <HeroNews
                title="Contact"
                breadcrumb={[
                    { link: '/', title: 'home' },
                    { link: '/contact', title: 'Contact' },
                ]}
            />
            <Forms />
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default Contact;
