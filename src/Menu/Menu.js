import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects list</Link>
        </li>
        <li>
          <Link to="/projects/new">New project</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
