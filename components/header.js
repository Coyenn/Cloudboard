import Link from "next/link";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";
import routes from "../data/routes";
import DarkModeToggle from "./dark-mode-toggle";
import Logo from "./logo.js";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [headerIsHidden, setHeaderIsHidden] = useState(false);
  const routesJSX = routes.map(({ route, title }) => (
    <li className="mt-3 md:mt-0 md:ml-6" key={title}>
      <Link href={route}>
        <a className="block text-gray-700 dark:text-white">{title}</a>
      </Link>
    </li>
  ));

  return (
    <header className={`${headerIsHidden === true ? "pointer-events-none" : "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-700 border-b-2"}  text-gray-700 dark:text-white z-10`}>
      <div className={`flex py-6 pr-20 ${headerIsHidden === true ? "" : "hidden"}`}>
        <ul className="ml-auto">
          <li className="mt-3 md:mt-0 md:ml-6" key="Hide">
            <button className="text-gray-700 dark:text-gray-300 pointer-events-auto" onClick={() => setHeaderIsHidden(!headerIsHidden)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <div className={`flex flex-wrap items-center justify-between lg:container px-4 py-6 mx-auto md:flex-no-wrap md:px-6 ${headerIsHidden === true ? "hidden" : ""}`}>
        <div className="flex items-center">
          <Logo width={40} height={40} alt="Cloudboard Logo" />

          <Link href="/">
            <a className="text-lg md:text-xl font-bold ml-3 text-gray-700 dark:text-white">Cloudboard</a>
          </Link>
        </div>

        <button className="flex items-center px-3 py-2 text-gray-700 dark:text-white border border-white rounded md:hidden" onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}>
          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul className={cn("md:flex flex-col md:flex-row md:items-center md:justify-center text-sm w-full md:w-auto", mobileMenuIsOpen ? `block` : `hidden`)}>
          {routesJSX}
          <li className="mt-3 md:mt-0 md:ml-6">
            <DarkModeToggle />
          </li>
          <li className="mt-3 md:mt-0 md:ml-6" key="Hide">
            <button onClick={() => setHeaderIsHidden(!headerIsHidden)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
