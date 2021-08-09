import Header from './Header'
import Link from "next/link";
import Image from "next/image";
import nesaLogo from '../../public/img/NesaLogo.png'

import { faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Layout({ children }) {
  return (
    <>
        <Header />
        <main className="bg-gray-200 font-body w-full h-full min-h-screen">
          <div className="flex fixed justify-center shadow-2xl pb-4 w-screen bg-gray-700 z-50">
            <Link href="/">
              <a className="w-40 mt-4"><Image src={nesaLogo} alt="Nesa Logo" /></a>
            </Link>
            <div className="flex gap-2 fixed top-10 right-10">
              <button className="bg-gray-200 hover:bg-yellow-500 text-gray-700 px-4 py-2 rounded-3xl font-bold transition duration-150 ease-in-out transform hover:scale-110">
                <FontAwesomeIcon icon={faCog} />
              </button>
              <Link href="/api/auth/signout">
                <button className="bg-gray-200 hover:bg-yellow-500 text-gray-700 px-4 py-2 rounded-3xl font-bold transition duration-150 ease-in-out transform hover:scale-110">
                  Sign Out
                </button>
              </Link>
              
            </div>
          </div>
          <div className="">
            {children}
          </div>
          
        </main>
        
    </>
  )
}