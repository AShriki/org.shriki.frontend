import {MenuBarItem} from "./MenuBarItem.js"

export function MenuBar({ menuItemDetails, props }){
    let visible = true;
    let menuItems = menuItemDetails.map(
        (menuItemDetail)=>{
            return React.createElement(
                MenuBarItem,
                menuItemDetail
            )
        }
    );
    console.log(menuItems) 
    return React.createElement(
        'div',
        props,
        ...menuItems
    );
}