import Link from "next/link";
import { useState } from "react";

export function Dropdown({ closeDropdown }) {
  const [menuDropdown, setMenuDropdown] = useState(false);

  function toggleMenuDropdown() {
    setMenuDropdown(!menuDropdown);
  }

  return (
    <div
      className="z-5 fixed top-[48px] flex w-screen flex-col justify-between overflow-hidden bg-black text-left font-bold text-white opacity-90"
      id="Dropdown"
    >
      <div className="mt-6">
        <div className="pb-10 pl-10 lg:pl-6">
          <Link href="#wedding">
            <button onClick={closeDropdown}>
              <>WEDDING</>
            </button>
          </Link>
        </div>
        <div className="pb-10 pl-10 lg:pl-6">
          <Link href="#accomodation">
            <button onClick={closeDropdown}> ACCOMODATION</button>
          </Link>
        </div>
        <div className="pb-10 pl-10 lg:pl-6">
          <Link href="#route">
            <button onClick={closeDropdown}>ROUTE</button>
          </Link>
        </div>
        <div className="pb-10 pl-10 lg:pl-6">
          <Link href="#dresscode">
            <button onClick={closeDropdown}>DRESSCODE</button>
          </Link>
        </div>
        <div className="pb-10 pl-10 lg:pl-6">
          <Link href="#gifts">
            <button onClick={closeDropdown}>GIFTS</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
