import {NavBar, MenuButton, MenuLink, Page, MenuHideShow, MenusOverlay} from "../components/components.js";

const menuItems = [
    {type: MenuHideShow, props: {}},
    {type: MenuLink, props: {itemText: "about"}}, 
    {type: MenuLink, props: {itemText: "projects"}}
];

const navBar = React.createElement(
            NavBar,
            {
                items: menuItems,
                props:{className: 'nav-bar-vertical'}
            }
        );

export function HomePage(){   
    return React.createElement(
        MenusOverlay,
        {
            children: navBar,
            // props: {}
        }
    );
};