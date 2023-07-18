export function MenusOverlay({className, childrenSettings}){   
    let items = childrenSettings.map((childSettings,i) => {
        return React.createElement(
            childSettings.type,
            {
                ...childSettings.props
            }
        );
    });

    return React.createElement(
        'div',
        {
            className: className
        },
        ...items
    );
}