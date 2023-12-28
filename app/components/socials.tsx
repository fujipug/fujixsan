import Link from "next/link";
import Image from "next/image";
export default function Socials() {
    return (
        <div className='flex items-center'>
            <Link href="https://www.instagram.com/fujixsan_/" target='_blank'>
                <Image src="/instagram.svg" alt="Instagram Icon" className='mr-6' width={20} height={20} />
            </Link>
            <Link href="https://www.tiktok.com/@fujixsan/" target='_blank'>
                <Image src="/tiktok.svg" alt="Tiktok Icon" className='mr-6' width={20} height={20} />
            </Link>
            <Link href="https://soundcloud.com/fujixsan/" target='_blank'>
                <Image src="/soundcloud.svg" alt="Sound Cloud Icon" className='mr-6' width={30} height={30} />
            </Link>
        </div>
    )
}