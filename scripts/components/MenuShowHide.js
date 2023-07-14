// hides the parent menu
export function MenuShowHide({ imgCSSClassName, transitionCSSClassName, hideShowImgContainerCSSClassName, hideShowContainerCSSClassName, menuVisible, contentType, content, props, menu }){
    let [getVisible, setVisibile] = React.useState(menuVisible);
    let children = [];
    children.push(
        React.createElement(
            'div',
            {
                className: hideShowImgContainerCSSClassName,
                onClick:()=>setVisibile(!getVisible)
            },
            React.createElement(
                contentType, 
                {
                    className: getVisible ? imgCSSClassName : imgCSSClassName + ' ' + transitionCSSClassName, 
                    ...props
                },
                content
            )
        )
    );
    if (getVisible){
        children.push(
            React.createElement(
                menu.type,
                {               
                    ...menu
                }
            )
        );
    }
    return React.createElement(
        'div',
        {
            className: hideShowContainerCSSClassName,
        },
        ...children
    );
};