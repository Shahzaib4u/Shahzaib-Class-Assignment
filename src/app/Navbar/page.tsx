export default function Navbar () {
    return (
        <div>

            <div className="flex bg-black h-6">

                <div className="flex justify-center w-1/3 mt-1 text-white">
                    <p>DownLoad App Via SMS</p>
                </div>

                <div className="flex justify-end w-2/3 mr-32 gap-6 mt-1 text-white">
                    <p>Sign In</p>
                    <p>Sign Up</p>
                </div>

            </div>

            <div className="flex bg-black h-24 gap-16">

                <div className="flex items-center justify-center h-24 w-1/5 ml-20">
                    <img src="/PakWheels Logo 2.png" alt="PakWheels Logo" />
                </div>

                <div className="flex items-center justify-center gap-8 mt-6 text-white">
                    <p>Used Cars</p>
                    <p>New Cars</p>
                    <p>Bikes</p>
                    <p>Auto Store</p>
                    <p>Videos</p>
                    <p>Forums</p>
                    <p>Blog</p>
                    <p>More</p>
                    <a href="/">
                        <p>Home</p>
                    </a>
                    <button className="bg-red-700 text-white py-2 px-4 rounded-sm">Post an Ad</button>
                </div>

            </div>

        </div>
    )
}