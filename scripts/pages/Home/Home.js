import {NavMenu, MenuButton, MenuLink, Page, MenuShowHide, MenusOverlay} from "../../components/components.js";

const settingsItems = [
    {type: MenuLink, props: {menuLinkAttributes: {className: 'menu-link-vert'}, itemText: "Login/Register"}}
];

const settingsMenuSettings = {
    type: NavMenu,
    props:{
        navAttributes:{},
        menuUlAttributes:{className:'settings-nav-bar-vertical'},
        children: settingsItems
    }
};

const settingsMenu = {
    type: MenuShowHide, 
    props: {
        contentType: 'img',
        menuVisible: false,
        imgCSSClassName: 'hide-show-img',
        transitionCSSClassName: 'rotate-90',
        hideShowImgContainerAttributes: {className: 'settings-hide-show-img-container'},
        hideShowContainerAttributes: {className: 'settings-hide-show-container'},
        props: {
            src:'./scripts/components/icons/settings-svgrepo-com.svg'
        },
        menu: settingsMenuSettings
    }
};

const subSubMenu = {
    type: NavMenu,
    props: {
        navAttributes:{className: 'nav-bar-vertical'},
        menuVisible: true,
        menuUlAttributes:{},
        menuLiAttributes:{},
        children:[
            {type: MenuLink, props: {menuLinkAttributes: {className: 'menu-link-vert'}, itemText: "sub-things"}}, 
            {type: MenuLink, props: {menuLinkAttributes: {className: 'menu-link-vert'}, itemText: "sub-stuff"}}
        ]
    }
};

const subMenu = {
    type: NavMenu,
    props: {
        navAttributes:{className: 'nav-bar-vertical'},
        menuVisible: true,
        menuUlAttributes:{},
        menuLiAttributes:{},
        children:[
            {type: MenuLink, props: {menuLinkAttributes: {className: 'menu-link-vert'}, itemText: "things"}}, 
            {type: MenuLink, props: {menuLinkAttributes: {className: 'menu-link-vert'}, itemText: "stuff"}, dropdown: subSubMenu}
        ]
    }
};

const NavMenuSettings = {
    type: NavMenu,
    props: {
        navAttributes:{className: 'nav-bar-horizontal'},
        menuUlAttributes:{},
        menuLiAttributes:{},
        children: [
            {type: MenuLink, props: {menuLinkAttributes: {className: 'menu-link-horiz'}, itemText: "about"}, dropdown: subMenu}, 
            {type: MenuLink, props: {menuLinkAttributes: {className: 'menu-link-horiz'}, itemText: "projects"}},
        ]
    }
};

const NavMenuContainer = {
    type: MenuShowHide, 
    props: {
        contentType: 'img',
        menuVisible: true,
        imgCSSClassName: 'hide-show-img', 
        transitionCSSClassName: 'rotate-90',
        hideShowImgContainerAttributes: {className: 'hide-show-img-container' },
        hideShowContainerAttributes: {className: 'menu-hide-show-container'},
        props: {
            src: './scripts/components/icons/menu.svg',
        },
        menu: NavMenuSettings
    }
};

export function HomePage(){   
    return React.createElement(
        MenusOverlay,
        {
            className: 'menus-grid',
            childrenSettings: [
                NavMenuContainer,
                settingsMenu
            ]
        }
    );
};