# Personal Ecommerce Project

A fullstack web application built with Next JS, Sanity, and Stripe. This project is a fake ecommerce that sells pens. It features dynamically loaded products uploaded from the Sanity platform as well as a Stripe checkout page.

## Demo

The website can be found in the following link: [https://sanity-stripe-ecommerce-f8k9.vercel.app](https://sanity-stripe-ecommerce-f8k9.vercel.app)

For loading custom products and testing the Stripe platform, an `env` file will need to be created which stores the API key from Sanity and both the public and secret key from Stripe. The web application can be ran using `npm run dev` or `yarn run dev` and will open a new tab and start a local server.

## Checkout Page

The Stripe checkout page will only be used in test mode to allow dummy data in the checkout forms. This does not require accurate info which includes the email, name on the card, and the ZIP and country or region.

For the card information, use the following values to fill the fields:

<ins>Card number</ins>: 4242 4242 4242 4242

<ins>Expiry</ins>: 04/24

<ins>CVC</ins>: 424
