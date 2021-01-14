import React from 'react';
import { Provider } from 'react-redux';
import store from 'src/store';

import OrdersContainer from 'src/features/orders/OrdersContainer'
import 'src/scss/theme.scss';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <OrdersContainer/>
      </div>
    </Provider>
  );
}

export default App;
