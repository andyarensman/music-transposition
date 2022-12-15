import React, { Component } from 'react';
import Vex from 'vexflow';

class MyComponentTwo extends Component {
  constructor(props) {
    super(props);

    // Create a canvas element for VexFlow to render to
    this.canvas = React.createRef();
  }

  componentDidMount() {
    // Get the 2D rendering context from the canvas
    this.context = this.canvas.current.getContext('2d');

    // Use VexFlow to create and render a stave and a note
    this.renderMusicNotation();
  }

  renderMusicNotation() {
    // Create a stave with a width of 500 pixels
    const stave = new Vex.Flow.Stave(10, 0, 500);

    // Add a G clef to the stave
    stave.addClef("G").setContext(this.context).draw();

    // Create a note with a pitch of G4 and a duration of quarter note
    const note = new Vex.Flow.StaveNote({
      clef: "G",
      keys: ["g/4"],
      duration: "q"
    });

    // Add the note to the stave
    stave.addNote(note);

    // Render the stave and the note to the canvas
    stave.setContext(this.context).draw();
    note.setContext(this.context).draw();
  }

  render() {
    return (
      <canvas ref={this.canvas}></canvas>
    );
  }
}

export default MyComponentTwo;
