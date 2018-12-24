import React from 'react';

const CreateMenuService = (props) => {

    let menuItems = props.menuData.map( (entry) => {
        let item = '';
        if( entry.type === 'menuItem') {
            item = (
                <li key={entry.text}>
                    <span className="link-icon">{entry.icon}</span>
                    <span className="link-text">{entry.text}</span>
                </li>
            )
        }

        return item;
    });

    return (
        <ul className="nav__link-list">
            {menuItems}
        </ul>
    )
}

export default CreateMenuService;