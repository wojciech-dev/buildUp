import { Slides } from 'data/sliderData';
import React, { useState } from 'react';
import { SlidShow } from './SliderStyled';

const Slide = ({ classy, title, subtitle, image }) => (
    <div className={classy}>
        <h1 className="slide__title">{title}</h1>
        <h2 className="slide__subtitle">{subtitle}</h2>
        <img src={image} alt={subtitle} className="slide__image" />
    </div>
);

const Slider = ({ slides }) => {
    const [cur, setCur] = useState(0);
    const nextMoving = () => {
        if (cur >= slides.length - 1) {
            setCur(0);
        } else {
            setCur(cur + 1);
        }
    };
    const prevMoving = () => {
        if (cur <= 0) {
            setCur(slides.length - 1);
        } else {
            setCur(cur - 1);
        }
    };

    //setInterval(() => nextMoving(), 5000);

    return (
        <SlidShow>
            {!slides || slides.length === 0 ? null : (
                <>
                    <button className="prev" onClick={prevMoving}>&larr;</button>
                    <button className="next" onClick={nextMoving}>&rarr;</button>
                    {slides.map((slide, idx) => {
                        return (
                            <Slide
                                classy={idx === cur ? "slide active" : "slide"}
                                key={idx}
                                {...slide}
                            />
                        );
                    })}
                </>
            )}
        </SlidShow>
    );
};



export default () => <Slider slides={Slides} />