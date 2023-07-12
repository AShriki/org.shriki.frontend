export function MenuButton({ className, itemText, props }){
    return React.createElement(
        'button', 
        {
            className: className, 
            ...props
        },
        itemText
    );
};