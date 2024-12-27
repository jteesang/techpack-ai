"use client";

import type Stripe from "stripe";
import React from "react";
import getStripe from "@/app/utils/get-stripe";

interface CheckoutFormProps {
  uiMode: Stripe.Checkout.SessionCreateParams.UiMode;
}

export default function CheckoutForm({ uiMode, planId }: CheckoutFormProps & { planId: string }) {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = {
      planId: planId.toLowerCase().trim(),
    };

    if (planId) {
      try {
        const response = await fetch('/api/checkout_sessions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });
        const { sessionId } = await response.json();

        const stripe = await getStripe();
        const result = await stripe?.redirectToCheckout({ sessionId: sessionId });
        if (result?.error) {
          console.error('Error redirecting to checkout: ', result.error);
        }
        // }
      } catch (error) {
        console.error('Error: ', error);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="planId" value={planId} />
        <section className="flex flex-col w-full h-full rounded-lg justify-between p-4">
          <button
            type="submit"
            role="link"
            className="h-9 font-semibold transition-all duration-200 ease-in-out"
          >
            Get Started
          </button>
        </section>
      </form>
    </>
  );
}

