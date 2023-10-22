import {MenuItemType} from "../components/MenuItem";

export const menuItems: MenuItemType[] = [
    {
        id: 0,
        view: 'home',
        route: '/',
        name: 'underSCREEN',
        class: 'services',
    },
    {
        id: 1,
        view: 'services',
        route: '/freelance-software-development-services',
        name: 'Services',
        class: 'services',
    },
    {
        id: 2,
        view: 'work',
        route: '/work',
        name: 'Work',
        class: 'work',
    },
    {
        id: 3,
        view: 'about-us',
        route: '/about-us',
        name: 'About us',
        class: 'about-us',
    },
    {
        id: 4,
        view: 'why-hire-us',
        route: '/why-hire-freelance-development',
        name: 'Why hire us',
        class: 'why-hire-us',
    },
    {
        id: 5,
        view: 'contact-us',
        route: '/contact-us',
        name: 'Contact',
        class: 'contact-us',
    },
    {
        id: 6,
        view: 'get-a-quote',
        route: '/get-a-quote',
        name: 'Get a quote',
        class: 'get-a-quote',
    },
];