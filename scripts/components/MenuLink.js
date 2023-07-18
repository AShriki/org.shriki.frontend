export function MenuLink({ menuLinkAttributes, itemText}){
    return React.createElement(
        'a', 
        {
            ...menuLinkAttributes
        },
        itemText
    );
};