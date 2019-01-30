import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    // eslint-disable-next-line
    const NextRoot = require('./components/Root').default
    ReactDOM.render(
      <NextRoot />,
      document.getElementById('root')
    )
  })
}