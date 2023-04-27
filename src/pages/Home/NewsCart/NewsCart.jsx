import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsCart = ({news}) => {
    const {title, details, _id, image_url} = news;
    return (
        <div>
            <Card className="mb-4">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
         {details.length < 250 ? <>{details}</> : 
         <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>See More</Link></>
         }
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
        </div>
    );
};

export default NewsCart;