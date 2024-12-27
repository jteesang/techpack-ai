import '@/app/globals.css';
import { UserProvider } from '@/context/UserContext';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || '');

function MyApp({ Component, pageProps }: any) {
  return (
    <Elements stripe={stripePromise}>
      <UserProvider>
        <Component {...pageProps} />;
      </UserProvider>
    </Elements>
  )
}

export default MyApp;
