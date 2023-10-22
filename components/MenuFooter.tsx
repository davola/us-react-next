import {menuItems} from "../data/Menu";
import MenuItem from "./MenuItem";
import React from "react";
import {PageBottomProps} from "./PageBottom";

export function MenuFooter({view}: PageBottomProps) {
    const liMenuItems = menuItems.map(menuItem => {
            return (
                <MenuItem key={'footer-' + menuItem.id} currentView={view} menuItem={menuItem} placement="footer" />
            );
        }
    );
    return (
        <nav>
            <div className="container">
                <ul className="menu" key="menu-ul-footer">
                    {liMenuItems}
                </ul>
            </div>
        </nav>
    )
}