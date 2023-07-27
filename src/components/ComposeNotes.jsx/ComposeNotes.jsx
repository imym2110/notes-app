import { useState } from "react";
import s from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

export function ComposeNotes({ onNoteSubmit }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState(false);

  function setData(e) {
    e.preventDefault();
    if (title && desc) {
      let data = {
        id: Math.round(Math.random() * 10000),
        title: title,
        desc: desc,
      };
      onNoteSubmit(data);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  }

  return (
    <div className={s.body}>
      <form className={s.container} onSubmit={setData}>
        <input
          type="text"
          placeholder="Enter Title.."
          className={s.title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className={s.notes_textarea}
          name="compose_notes"
          id=""
          cols="20"
          rows="5"
          placeholder="Write your notes here"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        ></textarea>
        <button className={s.submit} type="submit">
          Save <FontAwesomeIcon icon={faFileArrowDown} />
        </button>
        {error && <p className={s.errormsg}>Fill all the details!</p>}
      </form>
    </div>
  );
}
