import { Provider } from 'react-redux';
import store from './store';

import Cart from './components/Cart';
import Catalogy from './components/Catalogy';

function App() {
  return (
    <Provider store={store}>
      <Catalogy />
      <Cart />
    </Provider>
  );
}

export default App;
