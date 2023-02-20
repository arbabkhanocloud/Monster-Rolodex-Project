import { useState, useEffect } from "react";
import SearchBox from "./Components/search-box/search-box.component";
import CardList from "./Components/card-list/card-list.components";
import "./App.css";

const App = () => {
  const [searchField, setSearchFeild] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  const [title, setTitleField] = useState("Monster Rolodex");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchFeild(searchFieldString); //hook
  };
  const onTitleChange = (event) => {
    const titleFieldString = event.target.value.toLocaleLowerCase();
    setTitleField(titleFieldString); //hook
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        className="title-search-box"
        type="search"
        placeholder="Change title..."
        onChangeHandler={onTitleChange}
      />
      <br />
      <SearchBox
        className="monsters-search-box"
        type="search"
        placeholder="Search monsters..."
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};
export default App;
