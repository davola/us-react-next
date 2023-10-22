import {WorkServices} from "./WorkServices";
import {WorkProp} from "../pages/work";
import React, {forwardRef, useEffect, useImperativeHandle, useState} from "react";
import {classNames} from "../utils/Utils";

export type ModalStateType = "open" | "close";

type WorkServiceModalProp = WorkProp & {
    modalState: ModalStateType;
    ref: React.MutableRefObject<any>;
}

export const WorkServiceModal = forwardRef((props: WorkServiceModalProp, ref) => {
    let [modalClassName, setModalClassName] = useState(getModalClassesForState(props.modalState));

    useImperativeHandle(ref, () => {
        return {
            openModal: openModal,
        };
    })

    useEffect(() => {
        if (props.modalState) {
            console.log('useEffect', props.modalState);
            setModalClassName(getModalClassesForState(props.modalState));
        }
    }, [props.modalState]);

    function getModalClassesForState(state: ModalStateType) {
        return classNames('serviceModal', state === "open" && "open", state !== "open" && "close");
    }

    function serviceTypeClick(e: React.MouseEvent) {
        e.preventDefault();
        // $('body').addClass('freeze');
        setModalClassName(getModalClassesForState("open"));
    }

    function openModal() {
        setModalClassName(getModalClassesForState("open"));
    }

    function closeModal() {
        setModalClassName(getModalClassesForState("close"));
    }

    return (
        <div className={modalClassName}>
            <button onClick={closeModal} className="btn-close"></button>
            <div className="centered">
                <h3>Choose a type of work</h3>
                <h3 className="loading">Loading</h3>
                <WorkServices workSubView={props.workSubView}/>
            </div>
        </div>
    );
})