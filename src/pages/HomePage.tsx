import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <div>
      <header>
        <h1>CSS Training</h1>
      </header>
      <main>
        <ul>
          {props.examples.map(([title, path]) => (
            <li key={path}>
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </ul>
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
