import '@/app/globals.css';
import { UserProvider } from '@/context/UserContext';


function MyApp({ Component, pageProps }: any) {
  return (
    <UserProvider>
      <Component {...pageProps} />;
    </UserProvider>
  )
}

export default MyApp;
