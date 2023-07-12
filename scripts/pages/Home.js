import {MenuBar, MenuButton, MenuLink, Page, MenuHideShow, MenusOverlay} from "../components/components.js";

const menuItems = [
    {type: MenuHideShow, props: {}},
    {type: MenuLink, props: {itemText: "about"}}, 
    {type: MenuLink, props: {itemText: "projects"}}
];

const menuBar = React.createElement(
            MenuBar,
            {
                items: menuItems,
                props:{className: 'nav-bar-horizontal'}
            }
        );

export function HomePage(){   
    return React.createElement(
        MenusOverlay,
        {
            children: menuBar,
            // props: {}
        }
    );
};