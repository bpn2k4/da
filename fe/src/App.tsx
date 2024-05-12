import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'

import i18n from '@libs/i18n'
import store from '@libs/redux-store'
import AppRouter from './AppRouter'
import GlobalComponent from '@components/GlobalComponent'

function App() {

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <AppRouter
          children={<GlobalComponent />} />
      </I18nextProvider>
    </Provider>
  )
}

export default App
