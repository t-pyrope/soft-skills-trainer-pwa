import React from "react";
import {Card} from "../Card";
import classes from './Cards.module.css';
import {cards} from "../../data";

export const Cards = ({ setSelectedTaskId }: { setSelectedTaskId: React.Dispatch<React.SetStateAction<number | null>> }) => {
    return (
        <div className={classes.cards}>
            {cards.map(({src, task, id}) => (
                <Card src={src} id={id} setSelectedTaskId={setSelectedTaskId} />
            ))}
        </div>
    )
}