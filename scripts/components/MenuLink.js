export function MenuLink({ itemText, props }){
    return React.createElement(
        'a', 
        {
            className: 'menu-link', 
            ...props
        },
        itemText
    );
};