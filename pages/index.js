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
                    <div className="mb-8 whitespace-nowrap font-notoreg2 text-[220px] leading-none lg:text-[120px] md:text-[80px]">
                        Big Day
                    </div>
                </div>
                <div className="mr-18 sm:mb-18 mb-32 w-full self-end text-center font-serif text-4xl tracking-wide text-white md:self-center sm:text-2xl">
                    Saturday,
                    <div>27 July 2024,</div>
                    <div>France</div>
                    <div className="mt-8 pr-4 text-white">
                        <Link href="https://54deicxmihb.typeform.com/to/e8zkTPkQ">
                            <button className=" py-0.2 ml-8  rounded-xl border-2 border-gray-400 bg-white px-12 text-gray-800 md:px-6">
                                RSVP
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
