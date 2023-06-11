import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const CheckoutForm = ({ selectedClass }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate();

    const { _id, name, selectedId, price } = selectedClass;

    // console.log(typeof(price));


    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, price]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error (Checkout44)->', error);
            setCardError(error.message)
        }
        else {
            setCardError('');
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.name || 'anonymous',
                        email: user?.email || 'unknown',
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
        }

        console.log("Payment intent", paymentIntent);
        setProcessing(false);
        if (paymentIntent?.status === 'succeeded') {
            toast.success('Payment Done Successfully!')

            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                className: name,
                price,
                selectId: _id,
                date: new Date(),
                quantity: selectedClass.length,
                classId: selectedId,
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertResult.insertedId) {
                        navigate('/dashboard/mySelectedClasses', { replace: true });

                    }
                })
        }
    }

    return (
        <>
            <form className="w-2/3 mx-auto" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn bg-black text-white hover:text-black btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <div className="text-center">
                {
                    cardError && <p className="text-red-600 ">{cardError}</p>
                }
            </div>
        </>
    );
};

export default CheckoutForm;