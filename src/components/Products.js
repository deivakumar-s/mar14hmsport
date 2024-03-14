import React, { useRef, useEffect, useState } from 'react';
import lottie from 'lottie-web';
import animeRegistration from '../assests/registration.json';
import animeAppointment from '../assests/appointment.json';
import animeBilling from '../assests/billing.json';
import animeConsultation from '../assests/consultation.json';
import animePharmacy from '../assests/pharmacy.json';
import '../App.css';

function Products() {
    const [animationsLoaded, setAnimationsLoaded] = useState(false);
    const refs = {
        registrationRef: useRef(null),
        appointmentRef: useRef(null),
        billingRef: useRef(null),
        docConsultationRef: useRef(null),
        pharmacyRef: useRef(null)
    };

    const animations = {
        registration: { ref: refs.registrationRef, animation: animeRegistration },
        appointment: { ref: refs.appointmentRef, animation: animeAppointment },
        billing: { ref: refs.billingRef, animation: animeBilling },
        docConsultation: { ref: refs.docConsultationRef, animation: animeConsultation },
        pharmacy: { ref: refs.pharmacyRef, animation: animePharmacy }
    };

    useEffect(() => {
        if (!animationsLoaded) {
            Object.values(animations).forEach(({ ref, animation }) => {
                if (ref.current) {
                    lottie.loadAnimation({
                        container: ref.current,
                        animationData: animation,
                        loop: true,
                        autoplay: true,
                    });
                }
            });
            setAnimationsLoaded(true);
        }
    }, []);

    return (
        <div className='main'>
            <style>
                {`
                .product {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: rgb(1, 6, 27);
                    overflow: hidden;
                    height: 100vh;
                    font-family: 'Urbanist', sans-serif;
                }
                
                input {
                    display: none;
                }
                
                .container {
                    width : 100%;
                    height : 100%;
                    max-width: 800px; /* Adjust width as needed */
                    display: flex;
                    max-height: 600px;
                    justify-content: center;
                    align-items: center;
                    transform-style: preserve-3d;
                    flex-direction: column;
                    margin-bottom: 100px;
                }
                
                .cards {
                    position: relative;
                    height: 500px;
                    width: 430px;
                    margin-bottom: 20px;
                    perspective: 1000px;
                    transform-style: preserve-3d;
                }
                
                .cards label {
                    position: absolute;
                    width: 300px;
                    height: 350px
                    left: 0;
                    right: 0;
                    margin: auto;
                    cursor: pointer;
                    transition: transform 0.55s ease;
                }
                
                .cards .card {
                    position: relative;
                    height: 100%;
                    background-color: #323444;
                    border-radius: 10px;
                    padding: 30px 35px;
                }
                
                .cards .image {
                    display: flex;
                    justify-content: space-between;
                }
                
                .cards .image .img {
                    border-radius: 5px;
                    box-shadow: 15px 15px 40px rgba(0, 0, 0, 50%);
                    margin-top: 23px;
                    width: 100%; 
                    height: 100%; 
                    object-fit: contain;
                    transition: all .7s;
                }
                
                .cards .image .img:hover{
                    transform: scale(1.05);
                }
                
                .cards .image .dots {
                    text-align: center;
                }
                .dots {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    margin-bottom: 10px;
                }
                
                .dots div:nth-child(1) {
                    background-color: var(--current-color1);
                }
                
                .dots div:nth-child(2) {
                    background-color: #5b85f9;
                }
                
                .dots div:nth-child(3) {
                    background-color: #000;
                }
                
                .card .infos {
                    display: block;
                    text-align: center;
                    padding-top: 60px;
                }
                
                .card .infos span {
                    display: block;
                }
                
                .infos .name {
                    font-size: 20px;
                    color: var(--current-color1);
                    margin-bottom: 20px;
                    letter-spacing: 1px;
                    transition: all .6s ease;
                }
                
                #s1:checked~.cards #slide4,
                #s2:checked~.cards #slide5,
                #s3:checked~.cards #slide1,
                #s4:checked~.cards #slide2,
                #s5:checked~.cards #slide3 {
                    box-shadow: 0 15px 30px rgba (0, 0, 0, 45%);
                    transform: translate3d(-70%, 0 , -220px);
                    --current-color1: #eceaed;
                    --currente-color2: #404457;
                }
                
                #s1:checked~.cards #slide5,
                #s2:checked~.cards #slide1,
                #s3:checked~.cards #slide2,
                #s4:checked~.cards #slide3,
                #s5:checked~.cards #slide4 {
                    box-shadow: 0 20px 40px rgba (0, 0, 0, 45%);
                    transform: translate3d(-35%, 0 , -120px);
                    --current-color1: #eceaed;
                    --currente-color2: #404457;
                }
                
                #s1:checked~.cards #slide1,
                #s2:checked~.cards #slide2,
                #s3:checked~.cards #slide3,
                #s4:checked~.cards #slide4,
                #s5:checked~.cards #slide5 {
                    box-shadow: 0 25px 50px rgba (0, 0, 0, 50%);
                    transform: translate3d(0, 0 , 0);
                    --current-color1: #fad00c;
                    --currente-color2: #eceaed;
                }
                
                #s1:checked~.cards #slide2,
                #s2:checked~.cards #slide3,
                #s3:checked~.cards #slide4,
                #s4:checked~.cards #slide5,
                #s5:checked~.cards #slide1 {
                    box-shadow: 0 20px 40px rgba (0, 0, 0, 45%);
                    transform: translate3d(35%, 0 , -120px);
                    --current-color1: #eceaed;
                    --currente-color2: #404457;
                }
                
                #s1:checked~.cards #slide3,
                #s2:checked~.cards #slide4,
                #s3:checked~.cards #slide5,
                #s4:checked~.cards #slide1,
                #s5:checked~.cards #slide2 {
                    box-shadow: 0 15px 30px rgba (0, 0, 0, 45%);
                    transform: translate3d(70%, 0 , -220px);
                    --current-color1: #eceaed;
                    --currente-color2: #404457;
                }
                
                .heading {
                    margin-bottom: 20px;
                    color : white;
                    background-color: rgb(1, 6, 27);
                }
                
                .main {
                    background-color: rgb(1, 6, 27);
                }
                `}
            </style>

            <div className="heading">
                <h2><b>OUR PRODUCTS</b></h2>
            </div>

            <div className='product'>

                <div className='container mt-10'>
                    <input type="radio" name="slider" id="s1" checked />
                    <input type="radio" name="slider" id="s2" />
                    <input type="radio" name="slider" id="s3" />
                    <input type="radio" name="slider" id="s4" />
                    <input type="radio" name="slider" id="s5" />

                    <div className='cards'>
                        {Object.keys(animations).map((key, index) => (
                            <label key={index} htmlFor={`s${index + 1}`} id={`slide${index + 1}`}>
                                <div className='card'>
                                    <div className='image'>
                                        <div className='img' ref={animations[key].ref}></div>
                                        <div className='dots'>
                                            <div> </div>
                                            <div> </div>
                                            <div> </div>
                                        </div>
                                    </div>
                                    <div className='infos'>
                                        <span className='name'>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                                    </div>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
