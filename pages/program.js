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
            <div>
                <img class="m-auto mt-16 lg2:w-1/2" src="/images/program.jpg"></img>
            </div>
        </>
    );
}
