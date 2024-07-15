import React, { useEffect} from 'react';
import classes from './Card.module.css';
import { motion, useAnimate} from 'framer-motion';

export const Card = ({ src, id, setSelectedTaskId }: { src: string, id: number, setSelectedTaskId?: React.Dispatch<React.SetStateAction<number | null>> }) => {
    return <motion.article
        className={classes.container}
        onClick={() => setSelectedTaskId?.(id)}
        whileTap={{ scale: 0.9 }}
    ><div
        className={classes.card}
        style={{ backgroundImage: `url(${src})` }}
    /></motion.article>
}
