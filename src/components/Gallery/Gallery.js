import React from 'react';
import { Background, GalleryContainer } from './GalleryStyled';
import g1 from 'assets/images/g1.jpg';
import g2 from 'assets/images/g2.jpg';
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <Background>
            <div className="wrapper padding">
                <GalleryContainer>
                    <h2 className="gallery_header">Roof Construction</h2>
                    <p className="gallery_text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla<br /> pariatur. Excepteur sint occaecat. Images from </p>
                    <div className="gallery_img">

                        <img className="gallery_img-2" src={g2} alt="" />
                        <img className="gallery_img-1" src={g1} alt="" />
                        <button className="gallery_btn"><Link to='/gallery'>Gallery</Link></button>
                    </div>
                </GalleryContainer>
            </div>
        </Background>
    );
}

export default Gallery;