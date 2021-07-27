import Header from './Header'
import Link from "next/link";
import Image from "next/image";
import nesaLogo from '../../public/img/NesaLogo.png'

export default function Layout({ children }) {
  return (
    <>
        <Header />
        <main className="bg-gray-200 font-body flex h-screen">
          <div className="flex fixed justify-center shadow-2xl pb-4 w-screen bg-gray-700">
            <Link href="/">
                <a className="w-40 mt-4"><Image src={nesaLogo} alt="Nesa Logo" /></a>
            </Link>
          </div>
          <div className="flex w-full mt-32">
            {children}
          </div>

        </main>
    </>
  )
}