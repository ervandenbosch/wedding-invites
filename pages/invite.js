import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Script from "next/script";

export default function Home() {
  const [menuButtons, setMenuButtons] = useState(false);

  const [langNL, setlangNL] = useState(false);

  const handleMenuButtons = () => setMenuButtons(!menuButtons);

  return (
    <>
      <body>
        <div
          className="bg local mt-[48px] flex h-[88vh] w-full flex-row bg-cover bg-no-repeat sm:flex-col"
          id="top"
          style={{
            backgroundImage: 'url("/images/cover.png")',
          }}
        >
          <div className="ml-32 flex w-full flex-col justify-end text-white lg:mb-12 lg:items-start md:justify-center sm:m-auto sm:mb-6 sm:items-center sm:justify-center">
            <div className="font-aileron text-[25px]"> MONIKA & EZRA</div>
            <div className="font-notoreg text-[80px] italic md:text-[60px]">
              our
            </div>
            <div className="mb-8 whitespace-nowrap font-notoreg text-[180px] lg:text-[120px] md:text-[80px]">
              Big Day
            </div>
          </div>
          <div className="mr-18 mb-24 w-full self-end text-center font-serif text-4xl tracking-wide text-white md:self-center sm:mb-14 sm:text-2xl">
            Saturday,
            <div>27 July 2024,</div>
            <div>France</div>
            <div className="mt-8 pr-4 text-white">
              <Link href="https://54deicxmihb.typeform.com/to/ULCDxC4s">
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
              className="p-4 pt-[64px] text-center font-notoreg text-4xl font-bold text-black"
              id="wedding"
            >
              WEDDING
            </h2>
            <h3 className="text-center font-notoreg text-2xl font-bold text-black">
              Intro
            </h3>
            <div className="mx-8 p-6 text-center">
              Welcome to our wedding celebration! This moment is not just about
              uniting as a couple, but also a heartfelt tribute to the
              incredible friends and family who've shaped us into the
              individuals we are today. That's why this celebration is so
              meaningful to us—it's a rare opportunity to gather with those who
              have been instrumental in our journey and to create lasting
              memories together. Your presence is a cherished gift, and we can't
              wait to share this joyous occasion with the remarkable people who
              have made us who we are.
            </div>

            <h3 className="text-center font-notoreg text-2xl font-bold text-black">
              Am I allowed to bring my “plus-1”?
            </h3>
            <div className="mx-8 pt-6 text-center">
              For those who got invited alone, we are happy to also welcome your
              plus ones. However, in that case, you’ll have to arrange your own
              accommodation.
            </div>
            <h2
              className="p-5 pt-[64px] text-center font-notoreg text-4xl font-bold text-black"
              id="accomodation"
            >
              ACCOMODATION
            </h2>
            <div className="mx-8 p-4 text-center">
              <h3 className="pb-3 font-bold">Food</h3>
              Food is included throughout the day of the wedding, and also a
              shared breakfast the next day.
              <h3 className="pb-4 pt-7 font-bold">Accommodation </h3>
              Accommodation is
              <b> included in your invite</b>. It is directly on site, so you
              won’t have to commute anywhere. However, because of the
              challenging task of managing limited spaces for accommodations,
              you might have to <b> share </b>a room (if you are invited as a
              couple) or even the same bed (if you are invited alone) with
              somebody else that you know. If you prefer to arrange your own
              accommodation in the surrounding area, or perhaps spend a cozy
              night under the stars in your tent on the site, let us know
              through the RSVP form, so that we can potentially free up your
              spot to other guests, who were not offered an on site
              accommodation.
              <div class="m-5 space-y-2">
                <div
                  class="group flex flex-col gap-2 rounded-lg border-2 bg-white px-5 py-2 text-black"
                  tabindex="2"
                >
                  <div class="mt-2 flex cursor-pointer items-center justify-between">
                    <span>
                      <b> A list of nearby accommodation options</b>{" "}
                    </span>{" "}
                    <img
                      src="/images/arrow.png"
                      class="h-10 w-10 text-black transition-all duration-500 group-focus:-rotate-180"
                    />
                  </div>
                  <div
                    class="invisible h-auto max-h-0 items-center text-left opacity-0 transition-all group-focus:visible group-focus:my-3 
                  group-focus:max-h-screen  group-focus:px-6 group-focus:opacity-100
                  group-focus:duration-1000"
                  >
                    The prices in the area are ~100 EUR per room per night.{" "}
                    <br />
                    <br />
                    About 6 mins drive away:
                    <ul>
                      <li>
                        {" "}
                        <a
                          className="underline"
                          href="https://maps.app.goo.gl/34RfcNw4a7UWAFzdA"
                        >
                          Option 1
                        </a>
                      </li>
                      <li>
                        <a
                          className="underline"
                          href="https://maps.app.goo.gl/JQ1JqNN9mspjMYbm6"
                        >
                          Option 2
                        </a>
                      </li>
                      <li>
                        <a
                          className="underline"
                          href="https://maps.app.goo.gl/UEtLnDDQQN2JjuAW9"
                        >
                          Option 3
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          className="underline"
                          href="https://maps.app.goo.gl/4PBoBBUQ1ZSjD4Eb8"
                        >
                          Option 4
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          className="underline"
                          href="https://maps.app.goo.gl/Anwu2RV5iUxB3iEg7"
                        >
                          Option 5
                        </a>
                      </li>
                    </ul>
                    <br />
                    About 15 mins drive away
                    <ul>
                      <li>
                        <a
                          className="underline"
                          href="https://maps.app.goo.gl/htunon5PDaSb1P1DA"
                        >
                          Option 1
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a
                          className="underline"
                          href="https://maps.app.goo.gl/KyGTYtsFqBPMWBk2A"
                        >
                          Option 2
                        </a>
                      </li>
                      <li>
                        <a
                          className="underline"
                          href="https://maps.app.goo.gl/sjTYvtNcfnQ672Lp9"
                        >
                          Option 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <button></button>
            </div>

            <h2
              className="pb-2 pt-[64px] text-center font-notoreg text-4xl font-bold text-black"
              id="route"
            >
              ROUTE
            </h2>

            <div className="mx-8 p-6 text-left">
              <div class="m-5 space-y-2">
                <div
                  class="group flex flex-col gap-2 rounded-lg border-2 bg-white px-5 py-2 text-black"
                  tabindex="2"
                >
                  <div class="flex cursor-pointer items-center justify-between">
                    <span>
                      {" "}
                      <b> From Netherlands</b>{" "}
                    </span>{" "}
                    <img
                      src="/images/arrow.png"
                      class="h-10 w-10 text-black transition-all duration-500 group-focus:-rotate-180"
                    />
                  </div>
                  <div
                    class="invisible h-auto max-h-0 items-center text-left opacity-0 transition-all group-focus:visible group-focus:my-3 
                  group-focus:max-h-screen  group-focus:opacity-100
                  group-focus:duration-1000"
                  >
                    The easiest way to get to our venue is by car.
                    <br />
                    <br />
                    It’s 4,5 hour drive Amsterdam and 4 hours from Waddinxveen.
                    If you don’t have your own means of transportation don’t
                    worry. Let us know in the RSVP form and we'll connect you
                    with fellow guests who can provide a lift.
                  </div>
                </div>
              </div>

              <div class="m-5 space-y-2">
                <div
                  class="group flex flex-col gap-2 rounded-lg border-2 bg-white px-5 py-2 text-black"
                  tabindex="2"
                >
                  <div class="flex cursor-pointer items-center justify-between">
                    <span>
                      {" "}
                      <b>From Prague</b>
                    </span>
                    <img
                      src="/images/arrow.png"
                      class="h-10 w-10 text-black transition-all duration-500 group-focus:-rotate-180"
                    />
                  </div>
                  <div
                    class="invisible h-auto max-h-0 items-center text-left opacity-0 transition-all group-focus:visible group-focus:my-3 
                  group-focus:max-h-screen  group-focus:opacity-100
                  group-focus:duration-1000"
                  >
                    <b>Autem</b>
                    <ul className="ml-4 list-disc">
                      <li className="">Z Prahy je to autem cca 9h 30 minut</li>
                      <li>
                        Ve formulari pak budete mit take moznost naznacit pokud
                        byste se chteli svezt s nekym kdo jede autem
                      </li>
                    </ul>
                    <br />
                    <b>Letadlem</b>
                    <ul className="ml-4 list-disc">
                      <li className="">
                        Letenky jsou v soucasne dobe kolem 4000 - 5000 Korun{" "}
                      </li>{" "}
                      <li className="">
                        Nejblizsi letiste jsou nasledujici:
                        <br />
                      </li>
                      <ul className="ml-6 list-decimal">
                        <li>
                          Paris Beauvais Airport - about 1hr 30 mins by car from
                          the airport{" "}
                        </li>
                        <li>
                          Paris Charles de Gaulle Airport - about 1hr 20 mins by
                          car by car from the airport{" "}
                        </li>
                      </ul>
                      <li>
                        Nejlepsi doprava z letiste na misto svatby je autem,
                        protoze tam nejsou zadne prime spoje hromadne dopravy.
                        Auta by se dala pujcit primo na letisti
                      </li>
                      <ul className="ml-6 list-decimal">
                        <li>
                          cena za 5 mistne auto z Beauvais letiste je cca 3300
                          Korun{" "}
                          <a
                            className="underline"
                            href="https://www.carjet.com/do/list/fr?s=4b009eae-5272-414d-9dcd-0c5f8995ba70&b=c26c61ca-1cb5-460c-89d0-bb2466b4103a"
                          >
                            (odkaz na pujcovnu).
                          </a>
                        </li>
                        <li>
                          Az budeme vedet kdo vsechno by chtel letet letadlem,
                          muzeme vas propojit s ostatnimi, abyste si mohli
                          seridit lety a pujcit si vetsi vozidlo dohromady, nebo
                          vam pomuzeme se podivat jestli by se nevyplatilo
                          zaridit externi dopravu
                        </li>
                      </ul>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <h2
              className="p-4 pt-[64px] text-center font-notoreg text-4xl font-bold text-black"
              id="dresscode"
            >
              DRESSCODE
            </h2>
            <div className="mx-8 p-6 text-center">
              Our favourite colour is blue, so we’d love to incorporate it into
              our wedding dress code to add little extra touch and magic to our
              celebration. We invite you to join us in a vibrant display of
              colours by incorporating shades of the below displayed into your
              attire. Whether it's a splash of these hues or a full ensemble,
              your creativity is welcomed. While we suggest these colours, feel
              free to choose different shades that resonate with you, ensuring
              you feel comfortable and fabulous.
              <img
                src="./images/color.png"
                style={{
                  width: "40vw",
                  paddingTop: "30px",
                  margin: "auto",
                }}
              ></img>
            </div>
            <h2
              className="p-2 pt-[64px] text-center font-notoreg text-4xl font-bold text-black"
              id="gifts"
            >
              GIFTS
            </h2>
            <div className="mx-8 p-6 text-center">
              Your presence at our wedding is the greatest gift of all, and we
              feel truly blessed to have you share in our special day. If you
              wish to celebrate with a gesture, a monetary gift, OR a planned
              adventure together, would be greatly appreciated.
              <br />
              <br />
              Your monetary contributions will be dedicated to a special fund,
              helping us bid farewell to our trusty, but rather rusty, car and
              ushering in the prospect of new adventures with a new set of
              wheels.
              <br />
              <br />
              Planned adventures together will allow us to make new
              unforgettable memories with people we care about, that we’ll
              always cherish.
            </div>
            <h2 className="p-4 text-center font-notoreg text-4xl font-bold text-black">
              RSVP
            </h2>
            <div className="mx-8 p-6 text-center">
              Please let us know back by 1st of February if you are coming or
              not, so that we can start arranging everything accordingly.
              <Link href="https://54deicxmihb.typeform.com/to/ULCDxC4s">
                <div className="m-8">
                  <button className="m-auto rounded-xl border-4 bg-gray-600  px-12 py-2 text-gray-200 md:px-6">
                    RSVP
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}