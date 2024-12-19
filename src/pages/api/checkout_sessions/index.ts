import { NextApiRequest, NextApiResponse } from "next";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
  const { planId } = req.body; 

  if (!planId) {
    return res.status(400).json({ error: "Plan ID is required" });
  }
  if (req.method === 'POST') {
    let priceId;
    let priceMode = 'subscription'; // Set to subscription by default

    switch (planId) {
      case 'starter':
        priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_01; 
        break;
      case 'atelier':
        priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_02; 
        break;
      case 'pro':
        priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_03;
        break;
      case 'enterprise':
        priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_04;
        break;
      case 'pay per pack':
        priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_05;
        priceMode = 'payment';
        break;
      default:
        return res.status(400).json({ error: 'Invalid plan selected' });
    }
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe?.checkout.sessions.create({
        line_items: [
          {
            price: priceId,
            quantity: 1,
          }
        ],
        mode: priceMode,
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      return res.status(200).json({ sessionId: session.id });
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}