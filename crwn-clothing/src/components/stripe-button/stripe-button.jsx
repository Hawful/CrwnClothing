import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KRgLYHIOYgchKD3gz9R1DAzzBIwFlgGb2JOEIteXp9WL87XeZDQX0oqumSOzwtGD8ByvP9uH60b3BKwMhWpneQw00uGVVwuep';

    const onToken = token => {
        console.log(token);
        alert('Payment successful');
    }

    return (
        <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        
        />
    )
}

export default StripeCheckoutButton;