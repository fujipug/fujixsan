import Image from "next/image"
import Navbar from "../components/navbar"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="css-selector">
        <div className="flex justify-end pt-4 pr-2">
        </div>
        <div className="flex justify-center align-middle h-72">
          <Image src="/bio_logo.png" alt="Bio_Logo" width={500} height={500} />
        </div>
      </div>
      <div className="flex justify-center mt-4"><Navbar /></div>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 py-6">{children}</div>
    </div>
  )
}
