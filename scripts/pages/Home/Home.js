import {NavBar, MenuButton, MenuLink, Page, MenuShowHide, MenusOverlay} from "../../components/components.js";

const settingsItems = [
    {type: MenuLink, props: {className: 'menu-link-vert', itemText: "Login/Register"}}
];

const settingsMenuSettings = {
    type: NavBar,
    zIndex: 100,
    props:{
        flexContainerClassName: 'settings-nav-bar-vertical',
    },
    items: settingsItems,
};

const settingsMenu = {
    type: MenuShowHide, 
    props: {
        contentType: 'img',
        menuVisible: false,
        imgCSSClassName: 'settings-hide-show-img',
        transitionCSSClassName: 'settings-rotate-90',
        hideShowImgContainerCSSClassName: 'settings-hide-show-img-container',
        hideShowContainerCSSClassName: 'settings-hide-show-container',
        props: {
            src:'./scripts/components/icons/settings-svgrepo-com.svg'
        },
        menu: settingsMenuSettings
    }
};

const navItems = [
    {type: MenuLink, props: {className: 'menu-link-horiz', itemText: "about"}}, 
    {type: MenuLink, props: {className: 'menu-link-horiz', itemText: "projects"}},
];

const navBarMenuSettings = {
    type: NavBar,
    zIndex: 90,
    props:{
        flexContainerClassName: 'nav-bar-horizontal',
    },
    items: navItems
};

const navBar = {
    type: MenuShowHide, 
    props: {
        contentType: 'img',
        menuVisible: true,
        imgCSSClassName: 'menu-hide-show-img', 
        transitionCSSClassName: 'rotate-90',
        hideShowImgContainerCSSClassName: 'hide-show-img-container',
        hideShowContainerCSSClassName: 'menu-hide-show-container',
        props: {
            src: './scripts/components/icons/menu.svg',
        },
        menu: navBarMenuSettings
    }
};

export function HomePage(){   
    return React.createElement(
        MenusOverlay,
        {
            className: 'menus-grid',
            childrenSettings: [
                navBar,
                settingsMenu
            ]
        }
    );
};