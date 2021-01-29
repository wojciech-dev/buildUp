import { aboutData } from 'data/aboutData';
import React from 'react';
import { AboutMore } from './AboutPageStyled';

const Card = ({ index, name, body, photo, title }) => (
    <div className="wrapper">
        <AboutMore key={index}>
            <h2 className="AboutPage_name">{title}</h2>
            {
                photo.map((item, id) => (
                    <div className="AboutPage_photo" key={id}>
                        <img className="AboutPage_img" src={item} />
                    </div>
                ))
            }
            <article className="AboutPage_text">
                <div className="AboutPage_text-body">
                    <h2 className="AboutPage_text-header">{name}</h2>
                    {body}
                </div>
            </article>
        </AboutMore>
    </div>
);

const AboutPage = ({ match }) => {
    const { name } = match.params;
    const post = aboutData.filter(function (item) {
        return item.slug === name;
    });

    return (
        <section>
            {post.map((items, id) => {
                return (
                    <Card
                        key={id}
                        {...items}
                    />
                );
            })}
        </section>
    );
}

export default AboutPage;