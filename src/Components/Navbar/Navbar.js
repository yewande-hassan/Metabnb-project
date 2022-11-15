import { useState } from "react";
import Image from "../Image/Image.js";
import MetaLogo from "../images/MetaLogo.svg";
import metamaskIcon from "../images/metamaskIcon.svg";
import walletconnectIcon from "../images/walletconnectIcon.svg";
import DownChevron from "../images/DownChevron.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
      <nav className="w-full bg-white">
        <div className="justify-between px-4 md:mt-5 mb-8 lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to="/">
                <Image
                  images={MetaLogo}
                  alt={"metabnb Logo"}
                  height={100}
                  width={100}
                  className={"basis-1/4"}
                />
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center text-xl justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-600 hover:text-fuchsia-900">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-gray-600 hover:text-fuchsia-900">
                  <Link to="/place-to-stay">Place to stay</Link>
                </li>
                <li className="text-gray-600 hover:text-fuchsia-900">
                  <Link to="/nft">NFTs</Link>
                </li>
                <li className="text-gray-600 hover:text-fuchsia-900">
                  <Link to="/community">Community</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <button
              className={`text-white button hover:opacity-70 md:block text-base rounded hover:text-black-500 lg:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
              onClick={() => setShowModal(true)}
            >
              Connect wallet
            </button>
            {showModal ? (
              <>
                <div className="backdrop-opacity-10 backdrop-invert bg-black/30 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                  <div className="relative w-auto lg:w-2/5 my-6 mx-auto max-w-7xl shadow-md">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                        <h3 className="text-3xl font-semibold">
                          Connect Wallet
                        </h3>
                        <button
                          className="bg-transparent border-0 text-black float-right"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="text-black opacity-7 h-6 w-6 text-3xl block py-0 rounded-full">
                            x
                          </span>
                        </button>
                      </div>
                      <div className="relative p-6 flex-auto">
                        <p>Choose your preferred wallet:</p>
                        <div className="bg-white-200 rounded  pt-6 pb-8 w-full">
                          <div>
                            <Image
                              images={metamaskIcon}
                              alt={"metamaskIcon"}
                              height={30}
                              width={30}
                              className={"avatarmeta inline mr-2"}
                            />
                            <button className="modalbutton shadow-md bg-slate-200 appearance-none border rounded w-full mb-3 py-2 px-3 text-black text-left">
                              Metamask
                            </button>
                            <Image
                              images={DownChevron}
                              alt={"DownChevron"}
                              height={20}
                              width={20}
                              className={"arrow2 inline"}
                            />
                          </div>

                          <div>
                            <Image
                              images={walletconnectIcon}
                              alt={"walletconnectIcon"}
                              height={30}
                              width={30}
                              className={"avatar inline mr-2"}
                            />
                            <button className="modalbutton shadow-md bg-white-200 appearance-none border rounded w-full py-2 px-3 text-black text-left">
                              WalletConnect
                            </button>
                            <Image
                              images={DownChevron}
                              alt={"DownChevron"}
                              height={20}
                              width={20}
                              className={"arrow1 inline "}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </nav>
    );
}