import { projectsData } from 'data/projectsData';
import React from 'react';
import { Projects, Photo } from './ProjectsPageStyled';


const Card = ({ index, title, body, photo }) => (
    <div className="wrapper">
        <Projects key={index}>
            <div className="projects_content">
                <h2 className="projects_header">{title}</h2>
                <div className="projects_content-text">{body}</div>
            </div>
            <Photo>
                <img className="photo_img" src={photo} />
            </Photo>
        </Projects>
    </div>
);

const ProjectPage = ({ match }) => {
    const { name } = match.params;
    const post = projectsData.filter(function (item) {
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

export default ProjectPage;