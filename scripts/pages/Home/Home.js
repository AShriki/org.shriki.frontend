import {NavMenu, MenuButton, MenuLink, Page, MenuShowHide, MenusOverlay} from "../../components/components.js";

const settingsItems = [
    {type: MenuLink, props: {menuLinkAttributes: {}, itemText: "Login/Register"}}
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

const subSubNavMenu = {
    type: NavMenu,
    props: {
        navAttributes:{},
        menuUlAttributes:{},
        menuLiAttributes:{},
        children:[
            {type: MenuLink, props: {menuLinkAttributes: {href:"#"}, itemText: "sub-things"}}, 
            {type: MenuLink, props: {menuLinkAttributes: {href:"#"}, itemText: "sub-stuff"}}
        ]
    }
};

const subNavMenu = {
    type: NavMenu,
    props: {
        navAttributes:{},
        menuUlAttributes:{},
        menuLiAttributes:{},
        children:[
            {type: MenuLink, props: {menuLinkAttributes: {href:"#"}, itemText: "things"}}, 
            {type: MenuLink, props: {menuLinkAttributes: {}, itemText: "stuff"}, subMenu: subSubNavMenu}
        ]
    }
};

const NavMenuSettings = {
    type: NavMenu,
    props: {
        navAttributes:{id: 'main-nav'},
        menuUlAttributes:{class: 'main-nav-top-level-ul'},
        menuLiAttributes:{},
        children: [
            {type: MenuLink, props: {menuLinkAttributes: {}, itemText: "about"}, subMenu: subNavMenu}, 
            {type: MenuLink, props: {menuLinkAttributes: {href:"#"}, itemText: "projects"}},
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
        hideShowImgContainerAttributes: {className: 'hide-show-img-container'},
        hideShowContainerAttributes: {id: 'main-nav-container'},
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
                // settingsMenu
            ]
        }
    );
};