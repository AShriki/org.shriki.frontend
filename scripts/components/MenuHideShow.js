export function MenuHideShow({ getHidden, setHidden, props }){
    return React.createElement(
        'img', 
        {
            className: getHidden ? 'menu-hide-show-img' : 'menu-hide-show-img rotate-90', 
            src: './scripts/components/icons/menu_animated.svg',
            onClick: ()=>{
                setHidden(!getHidden)
            },
            ...props
        }
    );
};