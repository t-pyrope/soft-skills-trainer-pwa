import React from 'react';
import { motion } from 'framer-motion';
import classes from './TaskModal.module.css';
import {cards} from "../../data";

export const TaskModal = ({ id, setSelectedTaskId }: { id: number, setSelectedTaskId: React.Dispatch<React.SetStateAction<number | null>> }) => {
    const task = cards.find((card) => card.id === id)

    const close = () => {
        setSelectedTaskId(null)
    }

    if (!task) return null;

    return <motion.div className={classes.wrapper}>
        <motion.div className={classes.modal} layoutId={`${task.id}`}>
            <motion.div>
            <motion.div className={classes.header}>
                <motion.div
                    className={classes.card}
                    style={{ backgroundImage: `url(${task.src})` }}
                    layoutId={`image ${id}`}
                />
                <span onClick={close} aria-label={'Close'} className={classes.close} />

            </motion.div>
            {task.task}
            </motion.div>
        </motion.div>
    </motion.div>
}
