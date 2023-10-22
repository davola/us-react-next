import {WorkProp, WorkType} from "../pages/work";
import {DataWorks} from "../data/DataWorks";
import parse from "html-react-parser";

function getWorkTypeSamples(workType: WorkType) {
    return DataWorks.filter(dataWork => dataWork.tag.includes(workType));
}

export function WorkTypeSamples({workSubView}: WorkProp) {
    const workTypeSamples = getWorkTypeSamples(workSubView);
    return (
        <div key="related-work-type-samples" className="projects-container">
            {workTypeSamples.map(workType => (
                <a data-controller="Project" key={workType.link} href={workType.link}
                   data-page-title={workType.pageTitle}>
                    <article className={'project ' + workType.class}>
                        <h1>{parse(workType.thumbTitle)}</h1>
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <h3 className="subtitle">{workType.pageDesc}</h3>
                            </div>
                        </div>
                        <div className="image">
                            <img src={workType.thumbImage} alt={workType.thumbTitle}/>
                        </div>
                    </article>
                </a>
            ))}
        </div>
    );
}