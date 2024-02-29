import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer items-center p-4  ">
      <aside className="items-center grid-flow-col">
        <Image src={logo} alt="logo" className="w-6" />
        <div>
          <span>Built by</span>
          <div className="dropdown dropdown-hover dropdown-top ">
            <label
              tabIndex={0}
              className="cursor-pointer p-1 text-base-content"
            >
              <span className="text-primary">@Cherubln</span>
            </label>
            <div
              tabIndex={0}
              className="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-52"
            >
              <div className="card-body">
                <p>
                  Hi 👋 there! Find more at my
                  <span className="hover:underline">
                    <a
                      href="https://github.com/Cherubln"
                      target="_blank"
                      className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent hover:underline ml-1"
                    >
                      Github page
                    </a>
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
          <span>© {currentYear}</span>
        </div>
      </aside>
      <nav className="hidden md:grid grid-flow-col gap-x-4 place-self-center justify-self-end">
        <a
          href="https://twitter.com/cherubln"
          target="_blank"
          className="flex items-center gap-2"
        >
          <span className="hover:text-primary">X(Twitter)</span>
        </a>
        <a
          href="https://linkedin.com/in/cherubln/"
          target="_blank"
          className="flex items-center gap-2"
        >
          <span className="hover:text-primary">LinkedIn</span>
        </a>
        <a
          href="https://github.com/cherubln/"
          target="_blank"
          className="flex items-center gap-2"
        >
          <span className="hover:text-primary">Github</span>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
