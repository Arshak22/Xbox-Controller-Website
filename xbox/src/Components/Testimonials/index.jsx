import React from 'react';
import './style.css';
import Review from '../Review';

//Images
import T1 from '../../assets/images/FirstTestimonial.png';
import T2 from '../../assets/images/SecondTestimonial.png';
import T3 from '../../assets/images/ThirdTestimonial.png';
import T4 from '../../assets/images/FourthTestimonial.png';

export default function Testimonials() {
    const testimonials = [
        {id: 1, name: 'John S.', profession: 'competitive gamer', review: `I've tried numerous gamepads, but nothing comes close to the quality of this Xbox gamepad. 
        The unique design and comfortable grip have significantly improved my gaming experience. 
        The precision of the buttons and responsive analog sticks give me a competitive edge in every match. It's a game-changer!`, image: T1},
        {id: 2, name: 'Emily M.', profession: 'casual and enthusiast gamer', review: `As a female gamer, comfort and performance matter to me. 
        his Xbox gamepad delivers on both fronts! The sleek design fits perfectly in my hands, and the textured grips prevent slipping during intense gaming sessions. 
        The unique features make every game more immersive, and I can't imagine playing without it.`, image: T2},
        {id: 3, name: 'Sarah L.', profession: 'passionate gamer', review: `I was looking for a gamepad that not only performs well but also feels great to hold. 
        This Xbox gamepad exceeded my expectations! The attention to detail in the design is evident, and the textured grips provide a secure hold even during intense battles. 
        The added features bring a new level of immersion to my favorite games.
         I'm thrilled with my purchase!`, image: T3},
        {id: 4, name: 'Michael R.', profession: 'dedicated gamer', review: `I've been a gamer for years, and I can confidently say that this Xbox gamepad is a game-changer. 
        The build quality is exceptional, and the unique features add a new layer of excitement to my gaming sessions. 
        The buttons are incredibly responsive, and the ergonomic design lets me play comfortably for hours. 
        It's a must-have for any serious gamer!`, image: T4}
    ];
    return(
        <div className='testimonials'>
            <h1 className='second-heading'>What Players Are Saying</h1>
            {testimonials.map((elem, index) => {
                return(
                    <Review review={elem} key={index}/>
                );
            })}
        </div>
    );
}