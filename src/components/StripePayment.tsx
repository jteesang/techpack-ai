import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      '{{CLIENT_SECRET_FROM_SERVER}}',
      {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      }
    );

    setIsLoading(false);

    if (error) {
      console.error(error.message);
    } else if (paymentIntent?.status === 'succeeded') {
      console.log('Payment successful!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || isLoading}>
        {isLoading ? 'Processing...' : 'Pay'}
      </button>
    </form>
  );
};

export default PaymentForm;
