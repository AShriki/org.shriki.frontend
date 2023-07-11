export function MenuButton({ itemText, props }){
    return React.createElement(
        'button', 
        {
            className: 'menu-button', 
            ...props
        },
        itemText
    );
};