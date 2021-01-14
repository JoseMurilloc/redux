import { Provider } from 'react-redux';
import Catalogy from './components/Catalogy';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Catalogy />
    </Provider>
  );
}

export default App;
