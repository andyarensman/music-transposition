import React from 'react';
import Vex from 'vexflow';

const MyComponent = () => {
  // Create a canvas element for VexFlow to render to
  const canvas = React.createRef();

  // Use VexFlow to create and render a stave and a note
  const renderMusicNotation = () => {
    // Get the 2D rendering context from the canvas
    const context = canvas.current.getContext('2d');

    // Create a stave with a width of 500 pixels
    const stave = new Vex.Flow.Stave(10, 0, 500);

    // Add a G clef to the stave
    stave.addClef("G").setContext(context).draw();

    // Create a note with a pitch of G4 and a duration of quarter note
    const note = new Vex.Flow.StaveNote({
      clef: "G",
      keys: ["g/4"],
      duration: "q"
    });

    // Add the note to the stave
    stave.addNote(note);

    // Render the stave and the note to the canvas
    stave.setContext(context).draw();
    note.setContext(context).draw();
  }

  // Call the renderMusicNotation() method when the component is mounted
  React.useEffect(() => {
    renderMusicNotation();
  }, []);

  return (
    <canvas ref={canvas}></canvas>
  );
}

export default MyComponent;
