import React from 'react';

const Link = ( {className, to, children }) => {
    const onClick = (event) => {
        event.preventDefault();
        window.history.pushState({}, '', to)

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
    return <a onClick={onClick} className={className} href={to}>{children}</a>
};

export default Link;