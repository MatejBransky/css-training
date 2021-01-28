import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <div>
      <header>
        <h1>CSS Training</h1>
      </header>
      <main>
        {props.examples.map(([title, path]) => (
          <Link key={path} to={path}>
            {title}
          </Link>
        ))}
      </main>
    </div>
  );
};

export default HomePage;

type HomePageProps = {
  examples: [Title, Path][];
};

type Title = string;
type Path = string;
