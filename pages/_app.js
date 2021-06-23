import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper'
import Store from '../src/store/index';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
        <Component {...pageProps} />
    </Provider>
  )
}

