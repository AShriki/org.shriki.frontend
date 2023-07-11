export function MenuBarButton({ itemText, props }){
    return React.createElement(
        'button', 
        {
            className: 'menu-bar-button', 
            ...props
        },
        itemText
    );
};