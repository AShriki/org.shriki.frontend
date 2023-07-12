export function MenuHideShow({ imgCSSClassName, transitionCSSClassName, imgContainerCSSClassName, enableShowHide, getHidden, setHidden, props }){
    return React.createElement(
        'div',
        {
            className: imgContainerCSSClassName,
            onClick: enableShowHide ? ()=>setHidden(!getHidden) : ()=>{},
        },
        React.createElement(
            'img', 
            {
                className: getHidden ? imgCSSClassName : imgCSSClassName + ' ' + transitionCSSClassName, 
                ...props
            }
        )
    );
};