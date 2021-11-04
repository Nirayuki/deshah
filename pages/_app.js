import { Provider } from 'react-redux';
import Store from '../src/store/index';
import { AuthProvider } from '../src/contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.css'


export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      {/* <AuthProvider> */}
        <Component {...pageProps} />
      {/* </AuthProvider>  */}
    </Provider>
  )
}

