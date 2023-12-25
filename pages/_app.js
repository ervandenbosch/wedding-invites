import "../styles/globals.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import { Dropdown } from "../components/dropdown";

import { useRouter } from "next/router";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  const [menuDropdown, setMenuDropdown] = useState(false);
  const [visible, setVisible] = useState(false);
  const [langNL, setLangNL] = useState(false);

  const [menuButtons, setMenuButtons] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleMenuDropdown = () => setMenuDropdown(!menuDropdown);

  const router = useRouter();
  let href = router.asPath;

  function hideMenu() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.transitionDuration = "0.3s";
        document.getElementById("navbar").style.top = "-78px";
        setOpen(false);
      }
      prevScrollpos = currentScrollPos;
    };
  }

  const setSmoothScroll = (isSmooth) => {
    document.documentElement.style.scrollBehavior = isSmooth
      ? "smooth"
      : "auto";
  };

  useEffect(() => {
    setSmoothScroll(true);
    const handleStart = () => setSmoothScroll(false);
    const handleStop = () => setSmoothScroll(true);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  function closeDropdown() {
    setOpen(false);
    setMenuDropdown(false);
    setMenuButtons(false);
  }

  function toTopButton() {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 100) {
        setVisible(true);
      } else if (scrolled <= 100) {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);
  }

  function checkLang() {
    {
      href.includes("nl") ? setLangNL(true) : setLangNL(false);
    }
  }

  useEffect(() => {
    // hideMenu();
    toTopButton();
    checkLang();
  }, []);

  return (
    <div className="min-h-screen overscroll-y-none" id="app">
      <Head>
        <meta charSet="UTF-8" />
        <title>Monika & Ezra's Big Day</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:locale:alternate" content="nl_NL"></meta>
      </Head>
      <nav
        className="
        fixed top-0 flex h-[48px] w-full flex-row  justify-between bg-white px-4 py-2"
        id="navbar"
      >
        <div className="w-[110px]">
          <Link href="./">
            <button className="" onClick={closeDropdown}></button>
          </Link>
        </div>
        <div className="flex flex-row">
          <div className="font-bold text-slate-800 md:hidden">
            <Link href={langNL ? "#wedding" : "#wedding"}>
              <button onClick={closeDropdown}>WEDDING</button>
            </Link>
            <span className="px-5">
              <Link href={langNL ? "#accomodation" : "#accomodation"}>
                <button onClick={closeDropdown}>
                  {langNL ? <>ACCOMODATION</> : <>ACCOMODATION</>}
                </button>
              </Link>
            </span>
            <span className="px-5">
              <Link href={langNL ? "#route" : "#route"}>
                <button onClick={closeDropdown}>
                  {langNL ? <>ROUTE</> : <>ROUTE</>}
                </button>
              </Link>
            </span>
            <span className="px-5">
              <Link href="#dresscode">
                <button onClick={closeDropdown}>DRESS CODE</button>
              </Link>
            </span>
            <span className="px-5">
              <Link href={langNL ? "#gifts" : "#gifts"}>
                <button onClick={closeDropdown}>
                  {langNL ? <>GIFTS</> : <>GIFTS</>}
                </button>
              </Link>
            </span>
          </div>

          <span
            className={"pl-5 pr-2 md2:hidden " + (open ? "sm:mb-1" : "sm:mt-1")}
          >
            <button onClick={handleOpen}>
              <img
                src={open ? "/images/close.svg" : "/images/open.svg"}
                width="20px"
                alt="menu-dropdown-button"
              />
            </button>
          </span>
        </div>
      </nav>

      <div id="Dropdown">
        {open && (
          <Dropdown
            open={open}
            menuDropdown={menuDropdown}
            closeDropdown={closeDropdown}
            langNL={langNL}
          />
        )}

        <Component {...pageProps} />
      </div>

      <div
        className={
          "fixed bottom-6 right-[48.5%] z-10 xl:right-[48%] lg:right-[47%] md:right-[46.5%] sm:right-[45.5%]  " +
          (visible ? "block" : "hidden")
        }
      >
        <button
          className="rounded-full bg-black px-4 pb-[7px] pt-[8px] text-xl font-bold text-white opacity-80"
          onClick={scrollToTop}
        >
          ^
        </button>
      </div>
    </div>
  );
}

export default MyApp;
