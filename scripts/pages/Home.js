import {MenuBar, MenuBarButton, Page, MenuBarHideShow} from "../components/components.js";

const menuItems = [
    {type: MenuBarHideShow, props: {}},
    {type: MenuBarButton, props: {itemText: "about"}}, 
    {type: MenuBarButton, props: {itemText: "projects"}}
];

const menuBar = React.createElement(
            MenuBar,
            {
                items: menuItems
            }
        );

export function HomePage(){   
    return React.createElement(
        Page,
        {
            children: menuBar,
            // props: {}
        }
    );
};