export function MenuBarItem({ itemText, props }){
    return React.createElement(
        'button', 
        props,
        itemText
    );
};