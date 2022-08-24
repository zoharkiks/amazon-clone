import Commerce from '@chec/commerce.js';


const client = new Commerce(process.env.NEXT_PUBLIC_CHEC_PUBLIC_API_KEY);

// client.checkout.generateToken('cart_31q0o3MVWglDdj', { type: 'cart' })
//   .then((checkout) => console.log(checkout))

export default client