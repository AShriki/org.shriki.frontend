export function MenuLink({ className, itemText, props }){
    return React.createElement(
        'a', 
        {
            className: className, 
            ...props
        },
        itemText
    );
};