import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Script from 'next/script';

export default function Invitation() {
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
                    <div className="mt-8 pr-4 text-white">
                        <Link href="https://54deicxmihb.typeform.com/to/e8zkTPkQ">
                            <button className=" py-0.2 ml-8  rounded-xl border-2 border-gray-400 bg-white px-12 text-gray-800 md:px-6">
                                RSVP
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-row bg-white pb-10  md:flex-wrap">
                <div className="flex w-full flex-col border-black bg-white pb-10">
                    <h2
                        className="p-4 pt-[64px] text-center font-notoreg text-5xl  font-bold text-blue-900  "
                        id="wedding"
                    >
                        Wedding info
                    </h2>
                    <h3 className="text-center font-notoreg text-2xl font-bold text-black">Intro</h3>
                    <div className="mx-8 p-6 text-center">
                        Welcome to our wedding celebration! This moment is not just about us, uniting as a couple, but
                        also a heartfelt tribute to the incredible friends and family who've shaped us into the
                        individuals we are today.
                        <br /> <br /> That's why this celebration is so meaningful to us - it's a rare opportunity to
                        gather with those who have been instrumental in our journey and to create lasting memories
                        together. We can't wait to share this joyous occasion with you.
                    </div>

                    <h3 className="text-center font-notoreg text-2xl font-bold text-black">When and where? </h3>
                    <div className="mx-8 p-6 text-center">
                        27.07.2024 in Ferme du Pignon, France. <br />
                        Arrive at 14:00.
                        <br /> <br />
                        The wedding is taking place in the north of France in the middle of nowhere at a very cute and
                        cozy location. It is a renovated farm with a natural lake in the middle of the forest.
                    </div>

                    <h3 className="text-center font-notoreg text-2xl font-bold text-black">
                        Am I allowed to bring my “plus-1”?
                    </h3>
                    <div className="mx-8 pt-6 text-center">We are happy to also welcome your plus ones.</div>
                    <h2
                        className="p-5 pt-[64px] text-center font-notoreg text-5xl  font-bold text-blue-900  "
                        id="accomodation"
                    >
                        Accomodation
                    </h2>
                    <div className="mx-6 p-4 text-center">
                        Accommodation is unfortunately <b>not included</b> in your invite.
                        <br />
                        <br />
                        As we eagerly anticipate our wedding day, we find ourselves faced with the challenging task of
                        managing limited spaces for accommodations. Regrettably, due to these constraints, we are unable
                        to provide lodging for all our cherished guests. Please know that this decision was not made
                        lightly, and we sincerely appreciate your understanding and flexibility in this matter. <br />
                        <br />
                        We look forward to sharing this beautiful day with you, and we are grateful for your
                        understanding as we navigate these logistical challenges.
                        <div class="m-5 mt-8 space-y-2 sm:mx-2">
                            <div
                                class="group flex flex-col gap-2 rounded-lg border-2 bg-white px-5 py-2 text-black"
                                tabIndex="1"
                            >
                                <div class="mt-2 flex cursor-pointer items-center justify-between">
                                    <span>
                                        <b> A list of nearby accommodation options</b>{' '}
                                    </span>{' '}
                                    <img
                                        src="/images/arrow.png"
                                        class="h-10 w-10 text-black transition-all duration-500 group-focus:-rotate-180"
                                    />
                                </div>
                                <div
                                    class="invisible h-auto max-h-0 items-center text-left opacity-0 transition-all group-focus:visible group-focus:my-2 
                  group-focus:max-h-full  group-focus:px-6 group-focus:opacity-100
                  group-focus:duration-1000"
                                >
                                    The prices in the area are ~100 EUR per room per night. <br />
                                    <br />
                                    About 6 mins drive away:
                                    <ul>
                                        {' '}
                                        <a
                                            className="underline"
                                            href="https://maps.app.goo.gl/34RfcNw4a7UWAFzdA"
                                            target="_blank"
                                        >
                                            <li>Option 1 </li>
                                        </a>
                                        <a
                                            className="underline"
                                            href="https://maps.app.goo.gl/JQ1JqNN9mspjMYbm6"
                                            target="_blank"
                                        >
                                            {' '}
                                            <li>Option 2 </li>
                                        </a>
                                        <a
                                            className="underline"
                                            href="https://maps.app.goo.gl/UEtLnDDQQN2JjuAW9"
                                            target="_blank"
                                        >
                                            {' '}
                                            <li>Option 3 </li>
                                        </a>{' '}
                                        <a
                                            className="underline"
                                            href="https://maps.app.goo.gl/4PBoBBUQ1ZSjD4Eb8"
                                            target="_blank"
                                        >
                                            {' '}
                                            <li>Option 4</li>
                                        </a>{' '}
                                        <a
                                            className="underline"
                                            href="https://maps.app.goo.gl/Anwu2RV5iUxB3iEg7"
                                            target="_blank"
                                        >
                                            {' '}
                                            <li>Option 5 </li>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2
                        className="pb-2 pt-[64px] text-center font-notoreg text-5xl  font-bold text-blue-900  "
                        id="route"
                    >
                        Route
                    </h2>

                    <div className="mx-6 p-6 text-left sm:mx-2">
                        <div class="m-5 space-y-2 sm:mx-2">
                            <div
                                class="group flex flex-col gap-2 rounded-lg border-2 bg-white px-5 py-2 text-black"
                                tabIndex="1"
                            >
                                <div class="flex cursor-pointer items-center justify-between">
                                    <span>
                                        {' '}
                                        <b> From Netherlands</b>{' '}
                                    </span>{' '}
                                    <img
                                        src="/images/arrow.png"
                                        class="h-10 w-10 text-black transition-all duration-500 group-focus:-rotate-180"
                                    />
                                </div>
                                <div
                                    class="invisible h-auto max-h-0 items-center text-left opacity-0 transition-all group-focus:visible group-focus:my-3 
                  group-focus:max-h-full  group-focus:opacity-100
                  group-focus:duration-1000"
                                >
                                    The easiest way to get to our venue is by car.
                                    <br />
                                    <br />
                                    It’s 4,5 hour drive Amsterdam and 4 hours from Waddinxveen. If you don’t have your
                                    own means of transportation don’t worry. Let us know in the RSVP form and we'll
                                    connect you with fellow guests who can provide a lift.
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2588.736671015879!2d3.3168240000000004!3d49.546121899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e8439f1f81cc9b%3A0xaccf631307b93ded!2sFerme%20du%20Pignon%20(grand%20g%C3%AEtes)!5e0!3m2!1sen!2snl!4v1703600234549!5m2!1sen!2snl"
                                        style={{ margin: 'auto', marginTop: '15px', maxWidth: '90%' }}
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        <div class="m-5 space-y-2 sm:mx-2">
                            <div
                                class="group flex flex-col gap-2 rounded-lg border-2 bg-white px-5 py-2 text-black"
                                tabIndex="2"
                            >
                                <div class="flex cursor-pointer items-center justify-between">
                                    <span>
                                        {' '}
                                        <b>From Prague</b>
                                    </span>
                                    <img
                                        src="/images/arrow.png"
                                        class="h-10 w-10 text-black transition-all duration-500 group-focus:-rotate-180"
                                    />
                                </div>
                                <div
                                    class="invisible h-auto max-h-0 items-center text-left opacity-0 transition-all group-focus:visible group-focus:my-3 
                  group-focus:max-h-full  group-focus:opacity-100
                  group-focus:duration-1000"
                                >
                                    <b>Autem</b>
                                    <ul className="ml-4 list-disc">
                                        <li className="">Z Prahy je to autem cca 9h 30 minut</li>
                                        <li>
                                            Ve formulari pak budete mit take moznost naznacit pokud byste se chteli
                                            svezt s nekym kdo jede autem
                                        </li>
                                    </ul>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2588.736671015879!2d3.3168240000000004!3d49.546121899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e8439f1f81cc9b%3A0xaccf631307b93ded!2sFerme%20du%20Pignon%20(grand%20g%C3%AEtes)!5e0!3m2!1sen!2snl!4v1703600234549!5m2!1sen!2snl"
                                        style={{ margin: 'auto', marginTop: '15px', maxWidth: '90%' }}
                                    ></iframe>
                                    <br />
                                    <b>Letadlem</b>
                                    <ul className="ml-4 list-disc">
                                        <li className="">Letenky jsou v soucasne dobe kolem 4000 - 5000 Korun </li>{' '}
                                        <li className="">
                                            Nejblizsi letiste jsou nasledujici:
                                            <br />
                                        </li>
                                        <ul className="ml-6 list-decimal">
                                            <li>Paris Beauvais Airport - cca 1hr 30 mins autem na misto konani </li>
                                            <li>
                                                Paris Charles de Gaulle Airport - cca 1hr 20 mins autem na misto konani{' '}
                                            </li>
                                        </ul>
                                        <li>
                                            Nejlepsi doprava z letiste na misto svatby je autem, protoze tam nejsou
                                            zadne prime spoje hromadne dopravy. Auta by se dala pujcit primo na letisti
                                        </li>
                                        <ul className="ml-6 list-decimal">
                                            <li>
                                                cena za 5 mistne auto z Beauvais letiste je cca 3300 Korun{' '}
                                                <a
                                                    className="underline"
                                                    href="https://www.carjet.com/do/list/fr?s=4b009eae-5272-414d-9dcd-0c5f8995ba70&b=c26c61ca-1cb5-460c-89d0-bb2466b4103a"
                                                >
                                                    (odkaz na pujcovnu).
                                                </a>
                                            </li>
                                            <li>
                                                Az budeme vedet kdo vsechno by chtel letet letadlem, muzeme vas propojit
                                                s ostatnimi, abyste si mohli seridit lety a pujcit si vetsi vozidlo
                                                dohromady, nebo vam pomuzeme se podivat jestli by se nevyplatilo zaridit
                                                externi dopravu
                                            </li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2
                        className="p-4 pt-[64px] text-center font-notoreg text-5xl  font-bold text-blue-900"
                        id="dresscode"
                    >
                        Dresscode
                    </h2>
                    <div className="mx-8 p-6 text-center">
                        <b className=" font-notoreg text-2xl">Attire</b>
                        <br />
                        Semi-formal attire
                        <br />
                        <br />
                        <b className="font-notoreg text-2xl">Dress code colour</b>
                        <br /> Our favourite colour is blue, therefore, we’d love to incorporate it into our wedding
                        dress code to add little extra touch to our celebration. We invite you to join us in a vibrant
                        display of colours by incorporating shades of the below displayed colours into your attire.
                        Whether it's a splash of these hues or a full ensemble, your creativity is welcomed. <br />
                        <br />
                        While we suggest these colours, feel free to choose different shades that resonate with you,
                        ensuring you feel comfortable and fabulous.{' '}
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
                    <div className="mx-8 p-6 text-center">
                        Your presence at our wedding is the greatest gift of all, and we feel blessed to have you share
                        in our special day. If you wish to celebrate with a gesture, we would be grateful for a
                        <b> monetary gift.</b> <br />
                        <br />
                        Your monetary contributions will go towards a special fund helping us say goodbye to our trusty,
                        but rather rusty, car and welcome new adventures with a new set of wheels. <br />
                        <br />
                        Alternatively, we will be grateful for any gift or a an experience that comes from your heart.
                    </div>
                    <h2 className="p-4 text-center font-notoreg text-5xl  font-bold text-blue-900  ">RSVP</h2>
                    <div className="mx-8 p-6 text-center">
                        Please let us know through the form if you are coming or not, so that we can start arranging
                        everything accordingly:
                        <Link href="https://54deicxmihb.typeform.com/to/e8zkTPkQ">
                            <div className="m-8">
                                <button className="m-auto rounded-xl border-4 bg-gray-600  px-12 py-2 text-gray-200 md:px-6">
                                    RSVP
                                </button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
