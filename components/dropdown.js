import Link from 'next/link';
import { useState } from 'react';

export function Dropdown({ closeDropdown }) {
    const [menuDropdown, setMenuDropdown] = useState(false);

    function toggleMenuDropdown() {
        setMenuDropdown(!menuDropdown);
    }

    return (
        <div
            className="z-5 fixed top-[48px] flex w-screen flex-col justify-between overflow-hidden bg-white text-left font-bold text-black opacity-90"
            id="Dropdown"
        >
            <div className="mt-6">
                <div>
                    <Link href="../program">
                        <button className="w-full pb-10 pl-10 text-left lg:pl-6" onClick={closeDropdown}>
                            <>PROGRAM</>
                        </button>
                    </Link>
                    <Link href="../#wedding">
                        <button className="w-full pb-10 pl-10 text-left lg:pl-6" onClick={closeDropdown}>
                            <>WEDDING INFO</>
                        </button>
                    </Link>
                </div>
                <Link href="../#accomodation">
                    <button className="w-full pb-10 pl-10 text-left lg:pl-6" onClick={closeDropdown}>
                        <div class="w-full">ACCOMODATION</div>
                    </button>
                </Link>

                <div>
                    <Link href="../#dresscode">
                        <button className="w-full pb-10 pl-10 text-left lg:pl-6" onClick={closeDropdown}>
                            DRESSCODE
                        </button>
                    </Link>
                </div>
                <div>
                    <Link href="../#gifts">
                        <button className="w-full pb-10 pl-10 text-left lg:pl-6" onClick={closeDropdown}>
                            GIFTS
                        </button>
                    </Link>
                </div>
                <div>
                    <Link href="../#faqs">
                        <button className="w-full pb-10 pl-10 text-left lg:pl-6" onClick={closeDropdown}>
                            FAQS
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
