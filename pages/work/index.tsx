import {WorkTypeSamples} from "../../components/WorkTypeSamples";
import {WorkServiceModal, ModalStateType} from "../../components/WorkServiceModal";
import React, {useState} from "react";
import {getWorkServiceName} from "../../utils/Routing";

export type WorkProp = {
    workSubView: WorkType;
}

export type WorkType =
    "featured"
    | "web-application-development"
    | "mobile-development"
    | "ecommerce-development"
    | "responsive-website-development";

export default function Index({workSubView}: WorkProp) {
    let [modalState, setModalState] = useState("close" as ModalStateType);
    let [workServiceName, setWorkServiceName] = useState(getWorkServiceName(workSubView));
    const workServiceModalRef = React.useRef({openModal: Function});

    function openModal(e: React.MouseEvent) {
        e.preventDefault();
        workServiceModalRef.current.openModal();
    }

    return (
        <>
            <main className="work">
                <header>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <h1 className="very-big">I <span className="text-red">♥</span> work</h1>
                                <h3><span className="star limeLight"></span>I really enjoy developing quality software
                                    for startups, companies, and digital agencies from around the globe.</h3>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="work">
                    <div className="container">
                        <div className="row selector">
                            <h3>Here you have some examples of my
                                <a href="#workServiceClick" onClick={openModal} className="btn-service">
                                    <span>{workServiceName}</span>
                                </a> work.
                            </h3>
                        </div>
                        <WorkTypeSamples workSubView={workSubView}/>
                    </div>
                </section>
            </main>
            <WorkServiceModal workSubView={workSubView} modalState={modalState} ref={workServiceModalRef} />
        </>
    )
}