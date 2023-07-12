export function MenuHideShow({ getHidden, setHidden, props }){
    return React.createElement(
        'div',
        {
            className: 'menu-hide-show-img-container',
            onClick: ()=>{
                setHidden(!getHidden)
            },
        },
        React.createElement(
            'img', 
            {
                className: getHidden ? 'menu-hide-show-img' : 'rotate-90 menu-hide-show-img', 
                src: './scripts/components/icons/menu_animated.svg',
                ...props
            }
        )
    );
};