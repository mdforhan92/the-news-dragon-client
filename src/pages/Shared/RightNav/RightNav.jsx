import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';



const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Login With</h4>
            <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login with GitHub</Button>
            <div>
                <h4 className='mt-4'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div class="card bg-dark text-white text-center">
                <img className="card-img " src={bg} />
                <div className="card-img-overlay">
                    <h4 className="card-title mt-5 ">Contact With Developer</h4>
                    <p className="card-text mt-4">If you want to build your own website contact with me.</p>
                    <p>Email: mdforhan92@gmail.com</p>
                    <p>Contact: 01819365933</p>
                </div>
            </div>
        </div>
    );
};

export default RightNav;