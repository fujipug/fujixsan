import Image from "next/image"
import Navbar from "../components/navbar"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="css-selector flex justify-center align-middle h-72">
        <Image src="/press_kit_logo.png" alt="Press_Kit_Logo" width={500} height={500} />
      </div>
      <div className="flex justify-center mt-4"><Navbar /></div>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-6">{children}</div>
    </div>
  )
}
