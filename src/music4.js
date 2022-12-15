import { Factory, EasyScore, System } from 'vexflow';

function MusicFour() {
  

  const vf = new Factory({
    renderer: { elementId: 'output', width: 500, height: 200 },
  });
  
  const score = vf.EasyScore();
  const system = vf.System();
  
  system
    .addStave({
      voices: [
        score.voice(score.notes('C#5/q, B4, A4, C#4', { stem: 'up' })),
        score.voice(score.notes('C#4/h, B#4', { stem: 'down' })),
      ],
    })
    .addClef('treble')
    .addTimeSignature('4/4');
  
  vf.draw();
  return (
    <div id="output"></div>
  );
}

export default MusicFour;