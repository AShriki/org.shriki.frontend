import {MenuHideShow} from "../components/components.js";

export function NavBar({ initialState, zIndex, items, props }){
    // default to show
    let [hidden, setHidden] = React.useState(initialState);
    let menuVisibleControlButton;
    if (items[0].type == MenuHideShow){
        items[0].props.setHidden = setHidden;
        items[0].props.getHidden = hidden;
        menuVisibleControlButton = React.createElement(
            MenuHideShow,
            items[0].props,
        )
        
    }
    let menuItems = [];
    if ( !hidden ){
        menuItems = items.slice(1).map(
            (menuItemDetail)=>{
                return React.createElement(
                    menuItemDetail.type,
                    menuItemDetail.props,
                    menuItemDetail.children
                )
            }
        );
    }
    return React.createElement(
        'div',
        {
            className: props.flexContainerClassName, 
            style:{zIndex:zIndex}
        },
        menuVisibleControlButton,
        ...menuItems
    );
}