import React from 'react';
import { Title } from './';

const title = 'Lyrics';

function Article({ text }) {
  return (
    <article>
      <Title title={title} />
      {text}
    </article>
  );
}

export default Article;
