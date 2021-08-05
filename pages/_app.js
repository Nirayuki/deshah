import { Provider } from 'react-redux';
import Store from '../src/store/index';
import 'bootstrap/dist/css/bootstrap.css'


export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
        <Component {...pageProps} />
    </Provider>
  )
}

