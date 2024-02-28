import Stripe from "stripe";
import { sk_test_51Ooos4KnZ9Xr3tW6uVDcMiyetxJYj3ye1Cf87FPTtPkB5voiyA9oXK9BuCNSF4bypOpua3RWiGs9rWHnL7ogCePt00PaDtjFHe } from "../config.js";

const stripe = new Stripe(sk_test_51Ooos4KnZ9Xr3tW6uVDcMiyetxJYj3ye1Cf87FPTtPkB5voiyA9oXK9BuCNSF4bypOpua3RWiGs9rWHnL7ogCePt00PaDtjFHe);

export const createSession = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            product_data: {//information of product to sell, can be tickets for event or product
              name: "Laptop", //example 
            },
            currency: "usd",
            unit_amount: 2000,
          },
          quantity: 1,
        },
        {
          price_data: {
            product_data: { //information of product to sell, can be tickets for event or product
              name: "TV", //example 
            },
            currency: "usd",
            unit_amount: 1000,
          },
          quantity: 2,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    console.log(session);
    return res.json({ url: session.url });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};