function generateMenuItems(items=[], liAttributes){
    if(!items || !(items instanceof Array)){
        return;
    }

    let newItems = items.map( 
        (childAttributes,i)=>{
            // debugger;
            let neighborComponents = []
            if (childAttributes.dropdown){
                console.log("dropdown")
                neighborComponents.push(
                    React.createElement(
                        NavMenu,
                        {...childAttributes.dropdown.props, renderAsSubMenu: true},
                    )
                )
            }
            console.log("run")
            let finalComponent = React.createElement(
                'li',
                {...liAttributes},
                React.createElement(
                    childAttributes.type,
                    {...childAttributes.props},
                ),
                ...neighborComponents
            );
            console.log(neighborComponents)
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
        console.log(menuItems)
        return React.createElement(
            'ul',
            {...menuUlAttributes},
            ...menuItems
        );
    }
};