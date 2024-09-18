
import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const tutorials = [
  {
    title: 'React Basics',
    description: 'Learn the basics of React.',
    username: 'JohnDoe123',
    rating: 4.5,
    image: 'https://picsum.photos/200/400', // Updated image
  },
  {
    title: 'Advanced Hooks',
    description: 'Deep dive into React Hooks.',
    username: 'JaneDoe456',
    rating: 4.8,
    image: 'https://picsum.photos/200/401', // Updated image
  },
  {
    title: 'State Management',
    description: 'Learn about React state management.',
    username: 'AlexDoe789',
    rating: 4.7,
    image: 'https://picsum.photos/200/402', // Updated image
  },
];

const FeaturedTutorials = () => (
  <section className="featured-section">
    <h2>Featured Tutorials</h2>
    <div className="card-group">
      {tutorials.map((tutorial, index) => (
        <Card key={index}>
          <Image src={tutorial.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{tutorial.title}</Card.Header>
            <Card.Meta>@{tutorial.username}</Card.Meta>
            <Card.Description>{tutorial.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="star" />
            {tutorial.rating} Rating
          </Card.Content>
        </Card>
      ))}
    </div>
    <button className="view-more-btn">See All Tutorials</button>
  </section>
);

export default FeaturedTutorials;
