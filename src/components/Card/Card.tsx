import React, { useEffect} from 'react';
import classes from './Card.module.css';
import { motion, useAnimate} from 'framer-motion';

export const Card = ({ src, task, id, activeId, setActiveId }: { src: string, task: string, id: number, activeId: number, setActiveId: React.Dispatch<React.SetStateAction<number>> }) => {
    const isOpen = id === activeId;
    const scope = useMenuAnimation(isOpen);

    return <motion.article
        ref={scope}
        className={classes.container}
        onClick={() => setActiveId(id)}
        whileTap={{ scale: 0.9 }}
    ><div
        className={classes.card}
        style={{ backgroundImage: `url(${src})` }}
    /><p className={classes.task}>{task}</p></motion.article>
}

function useMenuAnimation(isOpen: boolean) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        const menuAnimations = isOpen
            ? [
                [
                    "div",
                    {  },
                    { duration: 0.1 }
                ],
                [
                    "p",
                    { opacity: 1 },
                    { duration: 0.1, delay: 0.1 }
                ],
            ]
            : [
                ["p", { opacity: 0 }, { duration: 0.1 }],
                [
                    "div",
                    {  },
                    { delay: 0.1 },
                ],
            ];

        // @ts-ignore
        animate(menuAnimations);
    }, [isOpen]);

    return scope;
}