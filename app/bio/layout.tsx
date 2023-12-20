import Image from "next/image"
export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <div className="css-selector flex justify-center align-middle">
                <Image src="/bio_logo.png" alt="Bio_Logo" width={500} height={500} />
            </div>
            {children}
        </div>
    )
}
