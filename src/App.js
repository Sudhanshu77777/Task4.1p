import React, { useState } from 'react';
import { Form, Radio, TextArea, Button, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  const [postType, setPostType] = useState('question'); // Track post type
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [abstract, setAbstract] = useState(''); // For article abstract
  const [successMessage, setSuccessMessage] = useState(''); // Message for success

  // Function to handle post type change
  const handlePostTypeChange = (event, { value }) => {
    setPostType(value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if required fields are filled
    if (title && description && tags && (postType === 'question' || (postType === 'article' && abstract))) {
      // Success message based on post type
      const successMessage = postType === 'question'
        ? 'Question posted successfully!'
        : 'Article posted successfully!';

      setSuccessMessage(successMessage);  // Set success message to display

      // Clear form fields after submission
      setTitle('');
      setDescription('');
      setTags('');
      setAbstract('');

      // Optionally, you can reset success message after a few seconds
      setTimeout(() => setSuccessMessage(''), 3000); // Clear message after 3 seconds
    }
  };

  return (
    <div className="App">
      <h1>New Post</h1>

      {/* Success Message */}
      {successMessage && (
        <Message positive>
          <Message.Header>{successMessage}</Message.Header>
        </Message>
      )}

      {/* Form */}
      <Form onSubmit={handleSubmit}>
        {/* Post Type Selection */}
        <div className="post-type">
          <label>Select Post Type: </label>
          <Form.Field>
            <Radio
              label="Question"
              name="radioGroup"
              value="question"
              checked={postType === 'question'}
              onChange={handlePostTypeChange}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label="Article"
              name="radioGroup"
              value="article"
              checked={postType === 'article'}
              onChange={handlePostTypeChange}
            />
          </Form.Field>
        </div>

        {/* Conditional Rendering Based on Post Type */}
        {postType === 'question' ? (
          <>
            {/* Question Form */}
            <Form.Field>
              <label>Title</label>
              <input
                type="text"
                placeholder="Start your question with how, what, why, etc."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Field>

            <Form.Field>
              <label>Description</label>
              <TextArea
                placeholder="Describe your problem"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Field>
          </>
        ) : (
          <>
            {/* Article Form */}
            <Form.Field>
              <label>Title</label>
              <input
                type="text"
                placeholder="Enter a descriptive title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Field>

            <Form.Field>
              <label>Abstract</label>
              <TextArea
                placeholder="Enter a 1-paragraph abstract"
                value={abstract}
                onChange={(e) => setAbstract(e.target.value)}
                required
              />
            </Form.Field>

            <Form.Field>
              <label>Article Text</label>
              <TextArea
                placeholder="Enter the article text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Field>
          </>
        )}

        {/* Tags Input */}
        <Form.Field>
          <label>Tags</label>
          <input
            type="text"
            placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
          />
        </Form.Field>

        {/* Submit Button */}
        <Button type="submit" primary>
          Post
        </Button>
      </Form>
    </div>
  );
}

export default App;
