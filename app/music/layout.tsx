import Image from "next/image"
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <div className="css-selector flex justify-center align-middle">
                <Image src="/music_logo.png" alt="Music_Logo" width={500} height={500} />
            </div>
            {children}
        </div>
    )
}
