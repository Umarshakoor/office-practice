/* import { useState, useTransition } from "react";
import PropTypes from "prop-types";

const LargeListFilter = ({ items }) => {
  const [filter, setFilter] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const [isPending, startTransition] = useTransition();

  const handleFilterChnage = (e) => {
    const newFilter = e.target.value;
    setFilter(newFilter);

    startTransition(() => {
      const newFilteredItems = items.filter((item) => item.includes(newFilter));
      setFilteredItems(newFilteredItems);
    });
  };

  return (
    <div>
      <input type="text" value={filter} onChange={handleFilterChnage} />
      {isPending && <p>Loading...</p>}
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

LargeListFilter.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LargeListFilter;
 */
import { useState, useTransition } from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const views = {
  home: <Home />,
  about: <About />,
  contact: <Contact />,
};

const SwitchTabs = () => {
  const [view, setView] = useState("home");
  const [isPending, startTransition] = useTransition();

  const navigate = (newView) => {
    startTransition(() => {
      setView(newView);
    });
  };

  return (
    <div>
      <nav>
        <button onClick={() => navigate("home")}>Home</button>
        <button onClick={() => navigate("about")}>About</button>
        <button onClick={() => navigate("contact")}>Contact</button>
      </nav>
      {isPending && <p>Loading...</p>}
      <main>{views[view]}</main>
    </div>
  );
};

export default SwitchTabs;
