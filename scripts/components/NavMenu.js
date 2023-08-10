function generateMenuItems(items=[], liAttributes){
    if(!items || !(items instanceof Array)){
        return;
    }

    let newItems = items.map( 
        (childAttributes,i)=>{
            let neighborComponents = []
            if (childAttributes.subMenu){
                neighborComponents.push(
                    React.createElement(
                        NavMenu,
                        {...childAttributes.subMenu.props, renderAsSubMenu: true},
                    )
                )
            }
            let finalComponent = React.createElement(
                'li',
                {...liAttributes},
                React.createElement(
                    childAttributes.type,
                    {...childAttributes.props},
                ),
                ...neighborComponents
            );
            return finalComponent;
        }
    );
    return newItems
}

export function NavMenu({ children, navAttributes, menuUlAttributes, menuLiAttributes, renderAsSubMenu = false}){
    let menuItems = generateMenuItems(children, menuLiAttributes);
    if (!renderAsSubMenu){
        return React.createElement(
            'nav',
            {...navAttributes},
            React.createElement(
                'ul',
                {...menuUlAttributes},
                ...menuItems
            )
        );
    } else {
        return React.createElement(
            'ul',
            {...menuUlAttributes},
            ...menuItems
        );
    }
};