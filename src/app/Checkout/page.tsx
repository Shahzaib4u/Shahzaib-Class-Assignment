export default function Checkout () {
    return (
       <div>

            <div className="flex items-center justify-center text-3xl font-bold my-8">
                <h1>Enter Your Details</h1>
            </div>

            <div className="flex items-center justify-center w-full py-12">
                <ul>
                    <li><input type="text" placeholder="Enter Your Name" className="border-black border-2 my-2 py-1 px-12" /></li>
                    <li><input type="text" placeholder="Enter Your Email" className="border-black border-2 my-2 py-1 px-12"/></li>
                    <li><input type="number" placeholder="Enter Card Number" className="border-black border-2 my-2 py-1 px-12"/></li>
                    <li><input type="text" placeholder="Address" className="border-black border-2 my-2 py-1 px-12"/></li>
                    <li>
                        <a href="/Thanks">
                            <button className="bg-blue-800 py-2 px-2 my-10 mx-20 text-white text-lg rounded-lg">Place Order</button>
                        </a>
                    </li>
                </ul>
            </div>

       </div>
    )
}