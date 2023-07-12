export function Page({ classname, children, props }){   
    return React.createElement(
        'div',
        {className: className, ...props},
        children
    );
}