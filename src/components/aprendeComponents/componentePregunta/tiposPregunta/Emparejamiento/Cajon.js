import React from "react";
import { useDrop } from "react-dnd";
import Respuesta from "./Respuesta";

const Cajon = ({ respuesta, onDrag, onDrop }) => {
  // eslint-disable-next-line no-unused-vars
  const [_, drop] = useDrop({
    accept: "1",
    canDrop: () => true,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  return (
    <>
      <div className="cajonRespuesta" ref={drop}>
        <Respuesta texto={respuesta} onDrag={onDrag} />
      </div>
    </>
  );
};

export default Cajon;
