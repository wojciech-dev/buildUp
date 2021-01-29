import React from 'react';
import { Background, Contacts } from './ContactStyled';
import photo from 'assets/images/contact.JPG';

import s1 from 'assets/images/fb.svg';
import s2 from 'assets/images/tw.svg';
import s3 from 'assets/images/in.svg';

const Contact = () => {
    return (
        <Background>
            <div className="wrapper">
                <Contacts>
                    <div className="contact_adres">
                        <h6 className="contact_header">LOCATION</h6>
                        <div className="contact_text">
                            28 Jackson<br /> Blvd Ste 1020 Chicago<br />
                        IL 60604-2340
                        </div>
                        <h6 className="contact_header">Follow us</h6>
                        <div className="contact_social">
                            <img src={s1} alt="fb" />
                            <img src={s2} alt="tw" />
                            <img src={s3} alt="in" />
                        </div>
                    </div>
                    <div className="contact_photo">
                        <img src={photo} alt="contact" />
                    </div>
                </Contacts>
            </div>
        </Background>
    );
}

export default Contact;