import { aboutData } from 'data/aboutData';
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Background, Img } from './AboutStyled';

const Product = ({ index, name, desc, icon, alt, classes, link }) => (
    <div className={classes} key={index}>
        {icon && <Img src={icon} alt={alt} />}
        {name && <h3 className="about_title">
            {link ? <Link to={link}>{name}</Link> : name}
        </h3>}
        {desc && <div className="about_text">{desc}</div>}
    </div>
);

const About = () => {
    return (
        <Background>
            <div className="wrapper">
                <Grid>
                    {aboutData.map((items, id) => {
                        return (
                            <Product
                                key={id}
                                classes={'about about' + id}
                                {...items}
                            />
                        );
                    })}
                </Grid>
            </div>
        </Background>
    );
}

export default About;