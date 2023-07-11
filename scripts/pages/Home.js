import {MenuBar, MenuBarItem} from "../components/components.js";

const menuItemDetails = [
    {
        itemText: "about", 
        props:{className: 'menu-bar-item'}
    },
    {
        itemText: "projects", 
        props:{className: 'menu-bar-item'}
    }
];

export function HomePage(){   
    console.log('HomePage') 
    return React.createElement(
        'div',
        {},
        React.createElement(
            MenuBar,
            {
                menuItemDetails: menuItemDetails,
                props: {className: 'menu-bar'}
            }
        )
    );
}