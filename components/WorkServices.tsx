import {DataServicesAll} from "../data/DataServices";
import {WorkProp} from "./Work";
import parse from "html-react-parser";

export function WorkServices({workSubView}: WorkProp) {
    const workServices = DataServicesAll.map(service => {
        const active = ((workSubView === service.subView) && 'active') || '';
        return (
            <li key={service.subView}>
                <a href={service.link} className={active}>{parse(service.short) + ' Development'}</a>
            </li>
        );
    })
    return (
        <ul className="services">
            {workServices}
        </ul>
    );
}

