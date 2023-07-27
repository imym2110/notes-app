import { useState } from "react";
import { ComposeNotes } from "./components/ComposeNotes.jsx/ComposeNotes";
import { DisplayNotes } from "./components/DisplayNotes/DisplayNotes";
import s from "./style.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  function noteSubmit(e) {
    setData((item) => [...item, e]);
  }

  const onDelete = (e) => {
    const updatedData = data.filter((item) => item.id !== e);
    setData(updatedData);
  };

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <ComposeNotes onNoteSubmit={noteSubmit} />
      <div className={s.dislpay_container}>
        <div className={s.searchBar}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={s.search}
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className={s.searchIcon} />
        </div>
        <div>
          <div className={s.display}>
            {filteredData.map((item) => (
              <DisplayNotes info={item} onDelete={onDelete} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
