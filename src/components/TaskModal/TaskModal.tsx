import React from 'react';
import classes from './TaskModal.module.css';
import {cards} from "../../data";
import {Card} from "../Card";

export const TaskModal = ({ id, setSelectedTaskId }: { id: number, setSelectedTaskId: React.Dispatch<React.SetStateAction<number | null>> }) => {
    const task = cards.find((card) => card.id === id)

    const close = () => {
        setSelectedTaskId(null)
    }

    if (!task) return null;

    return <div className={classes.wrapper}>
        <div className={classes.modal}>
            <div className={classes.header}>
                <Card src={task.src} id={task.id} />
                <span onClick={close} aria-label={'Close'} className={classes.close} />

            </div>
            {task.task}
        </div>
    </div>
}
