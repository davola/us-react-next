import {classNames} from "../utils/Utils";

export type MenuItemType = {
    id: number;
    view: string;
    route: string;
    name: string;
    class: string;
}

type MenuItemProp = {
    currentView: string;
    menuItem: MenuItemType;
    placement: string;
}

export default function MenuItem({currentView, menuItem, placement}: MenuItemProp) {
    const active: boolean = menuItem.route.includes(currentView);
    const menuItemClasses: string = classNames(active && 'active', menuItem.class);
    const key = placement + menuItem.id;

    return (
        <li className={menuItemClasses}>
            <a key={key} href={menuItem.route}>{menuItem.name}</a>
        </li>
    );

}