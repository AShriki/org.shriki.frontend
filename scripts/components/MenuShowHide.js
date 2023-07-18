// hides the parent menu
export function MenuShowHide({ imgCSSClassName, transitionCSSClassName, hideShowImgContainerAttributes, hideShowContainerAttributes, menuVisible, contentType, content, props, menu }){
    let [getVisible, setVisibile] = React.useState(menuVisible);
    let children = [];
    children.push(
        React.createElement(
            'div',
            {
                onClick:()=>setVisibile(!getVisible),
                ...hideShowImgContainerAttributes
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
                {...menu.props}
            )
        );
    }
    return React.createElement(
        'div',
        {
            ...hideShowContainerAttributes
        },
        ...children
    );
};