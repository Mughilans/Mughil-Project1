import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IBveFCwu4rvoOLG0WwbPtxw7jYm18EJk8RChXbQFoqFOGdtXSLvybOR5Ux77c0W3lJn5uPDfiddNfAXGfJsTj7I00PxEvlBPZ';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful!');
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='Mughil Shopping Ltd.'
            billingAddress
            shippingAddress
            // image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;