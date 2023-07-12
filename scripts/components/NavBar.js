import {MenuHideShow} from "../components/components.js";

export function MenuBar({ items, props }){
    let [hidden, setHidden] = React.useState(true);
    let menuItems = items.map(
        (menuItemDetail)=>{
            if (menuItemDetail.type == MenuHideShow){
                menuItemDetail.props.setHidden = setHidden;
                menuItemDetail.props.getHidden = hidden;
            }else if (hidden){
                return
            }
            return React.createElement(
                menuItemDetail.type,
                menuItemDetail.props,
                menuItemDetail.children
            )
        }
    );
    return React.createElement(
        'nav',
        {className: 'nav-bar-vertical', ...props},
        ...menuItems
    );
}