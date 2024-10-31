export default function PostAd () {
    return (
        <div>

            <div className="flex items-center justify-center text-4xl">
                <h1>Enter Details</h1>
            </div>

            <div>
                <p>Enter Brand Name:</p><input type="text" placeholder="Enter Brand Name" />
                <input type="text" placeholder="Enter Car Name" />
                <input type="text" placeholder="Enter Model" />
                <input type="text" placeholder="Enter Engine (CC)" />
                <input type="text" placeholder="Enter Condition" />
                <input type="text" placeholder="" />
            </div>

        </div>
    )
}