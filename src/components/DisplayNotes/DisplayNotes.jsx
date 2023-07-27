import { useState } from "react";
import s from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash } from "@fortawesome/free-solid-svg-icons";

export function DisplayNotes({ info, onDelete }) {
  const [visible, setvisible] = useState(false);
  function mouse_enter() {
    setvisible(true);
  }
  function mouse_leave() {
    setvisible(false);
  }
  return (
    <div className={s.body}>
      <div
        className={s.container}
        onMouseEnter={mouse_enter}
        onMouseLeave={mouse_leave}
      >
        <h3 className={s.title}>{info.title}</h3>
        <hr></hr>
        <p className={s.para}>{info.desc}</p>
        {visible && (
          <button
            type="submit"
            className={s.delete}
            onClick={() => {
              onDelete(info.id);
            }}
          >
            Delete <FontAwesomeIcon icon={faTrash} />
          </button>
        )}
      </div>
    </div>
  );
}
