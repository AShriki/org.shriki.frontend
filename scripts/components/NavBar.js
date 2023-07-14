export function NavBar({ zIndex, items, props }){
    let menuItems = items.map(
        (menuItemDetail,i)=>{
            return React.createElement(
                menuItemDetail.type,
                {
                    ...menuItemDetail.props
                },
                menuItemDetail.children
            );
        }
    );
    return React.createElement(
        'nav',
        {
            className: props.flexContainerClassName, 
            style:{zIndex: zIndex ? zIndex : null}
        },
        ...menuItems
    );
};