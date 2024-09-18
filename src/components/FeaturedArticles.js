
import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const articles = [
  {
    title: 'React Basics',
    description: 'Learn the basics of React.',
    author: 'John Doe',
    date: '2 days ago',
    rating: 4.5,
    image: 'https://picsum.photos/200/300', // Updated image
  },
  {
    title: 'Advanced Hooks',
    description: 'Deep dive into React Hooks.',
    author: 'Sham',
    date: '2 weeks ago',
    rating: 4.8,
    image: 'https://picsum.photos/200/301', // Updated image
  },
  {
    title: 'Advanced Props',
    description: 'Deep dive into React Props.',
    author: 'Ram',
    date: '2 weeks ago',
    rating: 4.3,
    image: 'https://picsum.photos/200/302', // Updated image
  },
];

const FeaturedArticles = () => (
  <section className="featured-section">
    <h2>Featured Articles</h2>
    <div className="card-group">
      {articles.map((article, index) => (
        <Card key={index}>
          <Image src={article.image} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{article.title}</Card.Header>
            <Card.Meta>{article.date}</Card.Meta>
            <Card.Description>{article.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name="star" />
            {article.rating} by {article.author}
          </Card.Content>
        </Card>
      ))}
    </div>
    <button className="view-more-btn">See All Articles</button>
  </section>
);

export default FeaturedArticles;
