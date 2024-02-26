import { Navigation } from './component/navigation/navigation.js'
import './component/navigation/navigation.css'
import { AdvantageBlock } from './component/advantage/advantageBlock.js';
import './component/advantage/advantage.css'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <AdvantageBlock/>
    </div>
  );
}

export default App;
