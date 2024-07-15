import card1 from './card1.jpg';
import card2 from './card2.jpg';
import card3 from './card3.jpg';
import card4 from './card4.jpg';
import card5 from './card5.jpg';
import card6 from './card6.jpg';
import card7 from './card7.jpg';

export const cards: { src: string, task: string, id: number }[] = [
    { id: 1, src: card1, task: `Determine the mood of 5 people you'll meet today / see on the video - that are they feeling at that moment?` },
    { id: 2, src: card2 , task: `Ask yourself: what do you want right now? Where are you drawn to?`},
    { id: 3, src: card3, task: 'Watch an interview with your favorite star. What is the attitude of this star toward the interviewer? How does the star feel? What is the attitude of the interviewer toward the star? How does the interviewer feel?' },
    { id: 4, src: card4, task: `Make 2 selfies with the different facial expressions. Look at that selfies, like they were the selfies of the stranger. What do you feel toward this stranger? What do you think about him/her?` },
    { id: 5, src: card5, task: `Try to remember about 2 people reactions toward you. Try to imagine, that you are those people. Why do they react at you that way?` },
    { id: 6, src: card6, task: `Go to the mirror and try to make different facial expressions - like you were very happy with life and glad for everything you have. Then try to look like you were frightened. Then - like you were confused` },
    { id: 7, src: card7, task: `If someone caught your attention for more than a couple of seconds today (real one or from video), think about, what feelings you had toward him/her? Why?` },
]
