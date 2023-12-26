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
            <div className="mt-[48px] flex h-[88vh] w-full flex-row sm:flex-col" id="top">
                <img src="/images/cover.png" className="absolute h-[86vh] w-full object-cover" />
                <div className="relative ml-32 flex w-full flex-col justify-end text-white lg:mb-12 lg:items-start md:justify-center sm:m-auto sm:mb-6 sm:items-center sm:justify-center">
                    <div className="font-aileron text-[25px]"> MONIKA & EZRA</div>
                    <div className="font-notoreg text-[80px] italic md:text-[60px]">our</div>
                    <div className="mb-12 whitespace-nowrap font-notoreg text-[180px] lg:text-[120px] md:text-[80px]">
                        Big Day
                    </div>
                </div>
                <div className="mr-18 relative mb-32 w-full self-end text-center font-serif text-4xl tracking-wide text-white md:self-center sm:mb-14 sm:text-2xl">
                    Saturday,
                    <div>27 July 2024,</div>
                    <div>France</div>
                    <div className="mt-12 pr-4 text-white">
                        <Link href="https://54deicxmihb.typeform.com/to/ULCDxC4s">
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
