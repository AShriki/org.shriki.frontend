export function MenuBarHideShow({ getHidden, setHidden, props }){
    return React.createElement(
        'img', 
        {
            className: getHidden ? 'menu-bar-hide-show-img' : 'menu-bar-hide-show-img rotate-90', 
            src: './scripts/components/icons/menu_animated.svg',
            onClick: ()=>{
                setHidden(!getHidden)
            },
            ...props
        }
    );
};