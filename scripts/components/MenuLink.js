export function MenuLink({ className, itemText, props }){
    // console.log(className)
    // console.log(itemText)
    // console.log(props)
    return React.createElement(
        'a', 
        {
            className: className, 
            ...props
        },
        itemText
    );
};