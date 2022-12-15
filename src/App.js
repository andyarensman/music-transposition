import { Score } from './Score'
 
function App() {
  return (
    <Score
      staves={[
        ['g3', 'd4', 'e4', 'd4'],
        ['a4', 'd4', 'e4', 'd4'],
        ['a4', 'a4', 'b4', 'a4'],
        ['d4', 'e4', ['g3', 2]],
      ]}
    />
  )
}

export default App;
