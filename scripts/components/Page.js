export function Page({ children, props }){   
    return React.createElement(
        'div',
        {className: 'webpage', ...props},
        children
    );
}