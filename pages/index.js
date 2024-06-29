import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Script from 'next/script';

export default function Home() {
    const [menuButtons, setMenuButtons] = useState(false);

    const [langNL, setlangNL] = useState(false);

    const handleMenuButtons = () => setMenuButtons(!menuButtons);

    return (
        <>
            <div
                className="bg local mt-[48px] flex h-[88vh] w-full flex-row bg-cover bg-no-repeat sm:flex-col"
                id="top"
                style={{
                    backgroundImage: 'url("/images/cover.jpg")',
                    backgroundPosition: 'center',
                }}
            >
                <div className="mb-14 ml-32 flex w-full flex-col justify-end text-white lg:mb-12 lg:items-start md:justify-center sm:m-auto sm:mb-6 sm:items-center sm:justify-center">
                    <div className="font-aileron text-[25px]"> MONIKA & EZRA</div>
                    <div className="font-notoreg2 text-[80px] italic leading-none md:text-[60px]">our</div>
                    <div className="mb-8 whitespace-nowrap font-notoreg2 text-[220px] leading-none tracking-tight lg:text-[120px] md:text-[80px]">
                        Big Day
                    </div>
                </div>
                <div className="mr-18 sm:mb-18 mb-32 w-full self-end text-center font-serif text-4xl tracking-wide text-white md:self-center sm:text-2xl">
                    Saturday,
                    <div>27 July 2024,</div>
                    <div>France</div>
                </div>
            </div>
            <div className="flex flex-row bg-white pb-10  md:flex-wrap">
                <div className="flex w-full flex-col border-black bg-white pb-10 lg2:mx-48 sm:mx-2">
                    <h2
                        className="p-4 pt-[64px] text-center font-notoreg text-5xl  font-bold text-blue-900  "
                        id="wedding"
                    >
                        Wedding info
                    </h2>
                    <h3 className="mt-2 text-center font-notoreg text-2xl font-bold text-black">Intro</h3>
                    <div className="p-6 text-justify">
                        Welcome to our wedding celebration! This moment is not just about us, uniting as a couple, but
                        also a heartfelt tribute to the incredible friends and family who've shaped us into the
                        individuals we are today.
                        <br /> <br /> That's why this celebration is so meaningful to us - it's a rare opportunity to
                        gather with those who have been instrumental in our journey and to create lasting memories
                        together. We can't wait to share this joyous occasion with you.
                    </div>

                    <div class="sm:row mt-4 flex justify-center lg2:flex-row sm:flex-col">
                        <div class="lg2:mr-8">
                            <h3 className="mt-6 text-center font-notoreg text-2xl font-bold text-black ">Where? </h3>
                            <div class="mt-8 text-center">
                                {' '}
                                <b>Ferme du Pignon (grand gîtes)</b> <br />
                                <br />
                                Frm du Pignon, <br />
                                02380 Verneuil-sous-Coucy, France
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2588.736671015879!2d3.3168240000000004!3d49.546121899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e8439f1f81cc9b%3A0xaccf631307b93ded!2sFerme%20du%20Pignon%20(grand%20g%C3%AEtes)!5e0!3m2!1sen!2snl!4v1703600234549!5m2!1sen!2snl"
                                    style={{ margin: 'auto', marginTop: '32px', maxWidth: '100%' }}
                                ></iframe>
                            </div>
                        </div>

                        <div class="lg2:ml-8 sm:px-12">
                            <h3 className="mt-6 text-center font-notoreg text-2xl font-bold text-black">When? </h3>
                            <div class="mt-8 px-4 text-center">
                                {' '}
                                <b>Saturday 27 July 2024</b>
                                <br /> Arrive to the wedding venue on Saturday between <br /> 12:30 - 14:00 <br />
                                (unless asked otherwise).
                                <br />
                                <br />
                                The ceremony will start at 15:00.
                            </div>
                            <img src="/images/venue.png" class="m-auto mt-6 h-48 rounded-2xl" />
                        </div>
                    </div>
                    <div class="px-4">
                        <h2
                            className="p-5 pt-[72px] text-center font-notoreg text-5xl  font-bold text-blue-900"
                            id="accomodation"
                        >
                            Accomodation
                        </h2>

                        <div className=" m-2 text-justify">
                            The following information is for guests who are staying at the wedding venue or at Logis
                            Hotel Bellevue.
                        </div>

                        <div class="m-5 mt-8 space-y-2 sm:mx-2">
                            <div
                                class="group flex flex-col rounded-lg border-b-2 bg-white px-5 pb-4 text-black"
                                tabIndex="1"
                            >
                                <div class="flex cursor-pointer items-center justify-between">
                                    <span>
                                        {' '}
                                        <b>Check-in/out info - Wedding venue</b>{' '}
                                    </span>{' '}
                                    <img
                                        src="/images/arrow2.png"
                                        class="h-8 w-8 text-black transition-all duration-500 group-focus:-rotate-180"
                                    />
                                </div>
                                <div
                                    class="invisible h-auto max-h-0 items-center text-left opacity-0 transition-all group-focus:visible group-focus:my-3 
                  group-focus:max-h-full  group-focus:opacity-100
                  group-focus:duration-1000"
                                >
                                    {' '}
                                    <b>Check-in:</b>
                                    <ul className="ml-4 list-disc">
                                        <li>
                                            Friday guests: arrive after 5pm.
                                            <li>Saturday guests: Arrive between 12:30-14:00.</li>
                                        </li>
                                        <li>We will show you your room upon arrival. </li>
                                        <br />
                                    </ul>
                                    <b>Checkout:</b>
                                    <ul className="ml-4 list-disc">
                                        <li> Sunday at 16:00 </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="m-5 space-y-2 sm:mx-2">
                            <div
                                class="group flex flex-col rounded-lg border-b-2 bg-white px-5 pb-4 text-black"
                                tabIndex="1"
                            >
                                <div class="flex cursor-pointer items-center justify-between">
                                    <span>
                                        <b>Check-in/out info - Logis Hotel Bellevue</b>
                                    </span>
                                    <img
                                        src="/images/arrow2.png"
                                        class="h-8 w-8 text-black transition-all duration-500 group-focus:-rotate-180"
                                    />
                                </div>
                                <div
                                    class="invisible h-auto max-h-0 items-center text-left opacity-0 transition-all group-focus:visible group-focus:my-3 
                  group-focus:max-h-full  group-focus:opacity-100
                  group-focus:duration-1000"
                                >
                                    <ul className="ml-4 list-disc">
                                        <li>Check in at your hotel is only possible between 17:00-21:00. </li>
                                        <li>
                                            Please arrive to the wedding venue <b>first</b> and leave your things in the
                                            car. <br />
                                            If you’ll need to dress or touch up, you can do so on the premises of the
                                            venue.
                                        </li>
                                        <li>
                                            After the ceremony, there will be a cocktail hour between 17:00-19:00.{' '}
                                            <br />
                                            You’ll be able to use this time to get to your hotel (only 7 minutes by car)
                                            and back before dinner starts! 😊
                                        </li>
                                        <br />
                                        <li>Checkout time at the hotel is until 11:00.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="m-5 space-y-2 sm:mx-2">
                            <div
                                class="group flex flex-col rounded-lg border-b-2 bg-white px-5 pb-4 text-black"
                                tabIndex="1"
                            >
                                <div class="flex cursor-pointer items-center justify-between">
                                    <span>
                                        <b>Parking</b>
                                    </span>
                                    <img
                                        src="/images/arrow2.png"
                                        class="h-8 w-8 text-black transition-all duration-500 group-focus:-rotate-180"
                                    />
                                </div>
                                <div
                                    class="invisible h-auto max-h-0 items-center text-left opacity-0 transition-all group-focus:visible group-focus:my-3 
                  group-focus:max-h-full  group-focus:opacity-100
                  group-focus:duration-1000"
                                >
                                    Free parking is available both at the wedding venue and the hotel.
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div class="m-5 sm:mx-2">
                                <h2
                                    className="py-4 pt-[64px] text-center font-notoreg text-5xl font-bold text-blue-900"
                                    id="dresscode"
                                >
                                    Dresscode
                                </h2>
                                <div className="text-justify">
                                    <b className="mb-6 font-notoreg text-2xl">Attire</b>
                                    <br />
                                    Semi-formal attire
                                    <br />
                                    <br />
                                    <b className="mb-12 font-notoreg text-2xl">Dress code colour</b>
                                    <br /> Our favourite colour is blue, therefore, we’d love to incorporate it into our
                                    wedding dress code to add little extra touch to our celebration. We invite you to
                                    join us in a vibrant display of colours by incorporating shades of the below
                                    displayed colours into your attire. Whether it's a splash of these hues or a full
                                    ensemble, your creativity is welcomed. <br />
                                    <br />
                                    While we suggest these colours, feel free to choose different shades that resonate
                                    with you, ensuring you feel comfortable and fabulous.{' '}
                                    <img
                                        src="./images/color.png"
                                        style={{
                                            width: '40vw',
                                            paddingTop: '30px',
                                            margin: 'auto',
                                        }}
                                    ></img>
                                </div>

                                <h2
                                    className="p-2 pt-[64px] text-center font-notoreg text-5xl  font-bold text-blue-900  "
                                    id="gifts"
                                >
                                    Gifts
                                </h2>
                                <div className="text-justify">
                                    Your presence at our wedding is the greatest gift of all, and we feel blessed to
                                    have you share in our special day. If you wish to celebrate with a gesture, we would
                                    be grateful for a<b> monetary gift.</b> <br />
                                    <br />
                                    Your monetary contributions will go towards a special fund helping us say goodbye to
                                    our trusty, but rather rusty, car and welcome new adventures with a new set of
                                    wheels. <br />
                                    <br />
                                    Alternatively, we will be grateful for any gift or a an experience that comes from
                                    your heart.
                                </div>
                                <h2
                                    className="p-5 pt-[64px] text-center font-notoreg text-5xl  font-bold text-blue-900  "
                                    id="faqs"
                                >
                                    FAQs
                                </h2>
                                <div class="m-5 space-y-2 sm:mx-2">
                                    <div
                                        class="pt-2text-black group flex flex-col rounded-lg border-b-2 bg-white px-5 pb-4"
                                        tabIndex="1"
                                    >
                                        <div class="flex cursor-pointer items-center justify-between">
                                            <span>
                                                <b>Which meals are included?</b>
                                            </span>
                                            <img
                                                src="/images/arrow2.png"
                                                class="h-8 w-8 text-black transition-all duration-500 group-focus:-rotate-180"
                                            />
                                        </div>
                                        <div
                                            class="invisible h-auto max-h-0 items-center text-left opacity-0 transition-all group-focus:visible group-focus:my-3 
                  group-focus:max-h-full  group-focus:opacity-100
                  group-focus:duration-1000"
                                        >
                                            We will provide you with following meals: <br />
                                            <br />
                                            <ul className="ml-4 list-disc">
                                                <li>
                                                    Saturday: We will provide guests with light lunch and dinner on
                                                    Saturday in a form of a buffet.
                                                </li>
                                                <li>
                                                    Sunday: Breakfast will be available at the wedding venue around
                                                    10am. We’ll serve “Pho”, a traditional Vietnamese noodle soup. For
                                                    those who don’t want to eat Pho, there will be also some yoghurts,
                                                    toast breads & hams and cheeses, milk with cereals available too.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="m-5 space-y-2 sm:mx-2">
                                    <div
                                        class="group flex flex-col rounded-lg border-b-2 bg-white px-5 pb-4 pt-2 text-black"
                                        tabIndex="1"
                                    >
                                        <div class="flex cursor-pointer items-center justify-between">
                                            <span>
                                                <b>What to bring with me?</b>
                                            </span>
                                            <img
                                                src="/images/arrow2.png"
                                                class="h-8 w-8 text-black transition-all duration-500 group-focus:-rotate-180"
                                            />
                                        </div>
                                        <div
                                            class="invisible h-auto max-h-0 items-center text-left opacity-0 transition-all group-focus:visible group-focus:my-3 
                  group-focus:max-h-full  group-focus:opacity-100
                  group-focus:duration-1000"
                                        >
                                            Apart from things that you’d normally take with you, make sure you’ll bring:
                                            <br />
                                            <br />
                                            <ul className="ml-4 list-disc">
                                                <li>
                                                    <b>Towels</b> (only if you are accommodated at the wedding venue)
                                                </li>
                                                <li>
                                                    <b>Swim suit</b> in case you’ll find the right moment to take a dip
                                                    in the small lake at the venue
                                                </li>
                                                <li>
                                                    <b>Some moooves</b> - for our wedding ceremony exit, we've chosen{' '}
                                                    <a href="https://www.youtube.com/watch?v=inPnVL41N_c">
                                                        a dance from Hitch
                                                    </a>
                                                    (Monika's favorite romantic movie). Everyone will have the
                                                    opportunity to showcase their dance moves! If you're feeling shy, no
                                                    worries. You can stand in the front row and cheer for the dancers 👯
                                                    Note: This dance is inspired by the "soul train line dance" of the
                                                    70s. If you're looking for some dance moves,{' '}
                                                    <a href="https://www.youtube.com/watch?v=sHctA5PK9DE&list=PLZTqAZSvzlVN8BXlq1EiyO6W2vLjTynOR">
                                                        this great collection
                                                    </a>
                                                    can serve as your inspiration.
                                                </li>
                                                <li>
                                                    <b>Your favorite food and/or drinks to share (optional)</b> - it’s
                                                    often said “Love goes through the stomach”, and so if you have some
                                                    food or a drink that makes you happy, feel free to bring a bit along
                                                    with you to share. Just let us know in advance so we can make the
                                                    necessary arrangements.
                                                </li>
                                                <li>
                                                    <b>Paper or mini-electric fans </b>- It might get really hot next
                                                    month, so having something to cool yourself down could come in
                                                    really handy.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="m-5 space-y-2 sm:mx-2">
                                    <div
                                        class="group flex flex-col rounded-lg border-b-2 bg-white px-5 pb-4 pt-2 text-black"
                                        tabIndex="1"
                                    >
                                        <div class="flex cursor-pointer items-center justify-between">
                                            <span>
                                                <b>Can I help with something?</b>
                                            </span>
                                            <img
                                                src="/images/arrow2.png"
                                                class="h-8 w-8 text-black transition-all duration-500 group-focus:-rotate-180"
                                            />
                                        </div>
                                        <div
                                            class="invisible h-auto max-h-0 items-center text-left opacity-0 transition-all group-focus:visible group-focus:my-3 
                  group-focus:max-h-full  group-focus:opacity-100
                  group-focus:duration-1000"
                                        >
                                            Absolutely! We have no staff on our wedding to help us serve food & drinks
                                            and to clean up. Therefore, we would appreciate if everyone would help us
                                            with keeping the venue clean. If you’d like to offer a helping hand with
                                            some extra little things, let us know and we’ll add you to our task force 💪
                                        </div>
                                    </div>
                                </div>

                                <div class="m-5 space-y-2 sm:mx-2">
                                    <div
                                        class="group flex flex-col rounded-lg border-b-2 bg-white px-5 pb-4 pt-2 text-black"
                                        tabIndex="1"
                                    >
                                        <div class="flex cursor-pointer items-center justify-between">
                                            <span>
                                                <b>Can I pitch some ideas for the program?</b>
                                            </span>
                                            <img
                                                src="/images/arrow2.png"
                                                class="h-8 w-8 text-black transition-all duration-500 group-focus:-rotate-180"
                                            />
                                        </div>
                                        <div
                                            class="invisible h-auto max-h-0 items-center text-left opacity-0 transition-all group-focus:visible group-focus:my-3 
                  group-focus:max-h-full  group-focus:opacity-100
                  group-focus:duration-1000"
                                        >
                                            Yes again! If you have an idea for a fun game or activity feel free to pitch
                                            it to the new weds. In case you would like it to be a surprise for us,
                                            contact our wedding coordinator Maude via Whatsapp on +33 6 10 53 42 64.
                                            She’ll do her best to incorporate into our program 👿
                                        </div>
                                    </div>
                                </div>

                                <div class="m-5 space-y-2 sm:mx-2">
                                    <div
                                        class="group flex flex-col rounded-lg border-b-2 bg-white px-5 pb-4 pt-2 text-black"
                                        tabIndex="1"
                                    >
                                        <div class="flex cursor-pointer items-center justify-between">
                                            <span>
                                                <b>Should I bring cash or can I transfer money to you?</b>
                                            </span>
                                            <img
                                                src="/images/arrow2.png"
                                                class="h-8 w-8 text-black transition-all duration-500 group-focus:-rotate-180"
                                            />
                                        </div>
                                        <div
                                            class="invisible h-auto max-h-0 items-center text-left opacity-0 transition-all group-focus:visible group-focus:my-3 
                  group-focus:max-h-full  group-focus:opacity-100
                  group-focus:duration-1000"
                                        >
                                            Both will be possible. There will be a secured card box set aside on the day
                                            where you can safely deposit your card. For those of you who would like to
                                            pay by card, there will be a QR code.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
