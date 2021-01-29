import { projectsData } from 'data/projectsData';
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Overlay } from './ProjectsStyled';

const Project = ({ index, title, img, link, slug }) => (
    <Box key={index}>
        <img src={img} alt={slug} />
        <Overlay>
            <h6 className="title">{title}</h6>
            {link ? <Link className="btn" to={link}>Read more</Link> : title}
        </Overlay>
    </Box>
);

const Projects = () => {
    return (
        <div className="wrapper padding">
            <Grid>
                {projectsData.map((items, id) => {
                    return (
                        <Project
                            key={id}
                            {...items}
                        />
                    );
                })}
            </Grid>
        </div>
    );
}

export default Projects;