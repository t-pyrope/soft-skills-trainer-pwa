import React from 'react';
import classes from './Card.module.css';
import {LayoutGroup, motion} from 'framer-motion';

export const Card = ({ src, id, setSelectedTaskId }: { src: string, id: number, setSelectedTaskId?: React.Dispatch<React.SetStateAction<number | null>> }) => {
    return <LayoutGroup><motion.article
        className={classes.container}
        onClick={() => setSelectedTaskId?.(id)}
        whileTap={{ scale: 0.9 }}
        layoutId={`${id}`}
    ><motion.div
        className={classes.card}
        style={{ backgroundImage: `url(${src})` }}
        layoutId={`image ${id}`}
    /></motion.article></LayoutGroup>
}
