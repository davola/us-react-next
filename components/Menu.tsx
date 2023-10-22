import {menuItems} from "../data/Menu";
import MenuItem from "./MenuItem";
import React from "react";

type MenuProps = {
    view: string;
    subView: string;
    placement: string;
}

export function Menu({view, subView, placement}: MenuProps) {
    const topMenuItems = menuItems.filter((value, idx) => idx !== 0 );
    const liMenuItems = topMenuItems.map(menuItem =>
        <MenuItem key={'menu-top-' + menuItem.id} currentView={view} menuItem={menuItem} placement={placement}/>
    );
    return (
        <ul id="main-menu" className="menu">
            {liMenuItems}
        </ul>
    )
}