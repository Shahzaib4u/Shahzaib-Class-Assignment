import Link from "next/link"

export default function Footer () {
    return (
        <div className="flex justify-center items-center bg-black h-20">
            <p className="text-white">Made by <Link href="https://www.linkedin.com/in/muhammad-ali-yousuf-a702402b3/"><u>
                Muhammad Ali Yousuf</u></Link></p>
        </div>
    )
}