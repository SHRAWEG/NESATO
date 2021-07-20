import Header from './Header'
import Link from "next/link";
import Image from "next/image";
import nesaLogo from '../../public/img/NesaLogo.png'

export default function Layout({ children }) {
  return (
    <>
        <Header />
        <main className="bg-gray-200 font-body flex flex-col w-screen items-center h-full min-h-screen">
            <Link href="/">
                <a className="w-48 mt-20 md:mt-20"><Image src={nesaLogo} alt="Nesa Logo" /></a>
            </Link>
          {children}
        </main>
    </>
  )
}