export default function Featured () {
    return (
        <div>

            {/* Featured Cars Div */}

            <div className="text-3xl mt-12 mx-12 font-bold">
                <h1>Featured New Cars</h1>
            </div>

            <div className="flex my-8 mx-12 gap-10 text-lg">
                <p>Popular</p>
                <p>Upcoming</p>
                <p>Newly Launched</p>
            </div>

            {/* Cars Div */}

            <div className="flex pb-12 mx-8 gap-4">

                {/* Toyota Corolla Div  */}

                <a href="/Corolla" className="block w-1/4 my-6 bg-white hover:shadow-lg">

                <div>
                    <img src="/Toyota Corolla.jfif" alt="Toyota corolla" /> 

                        <div className="flex justify-center mt-8">
                            <p>Toyota Corolla</p> <br />
                        </div>

                        <div className="flex justify-center">
                            <p className= "text-green-500">PKR 59.7 - 75.5 Lacs</p>
                        </div>
                        
                </div>

                </a>

                {/* Suzuki Alto Div */}

                <a href="/Alto" className="block w-1/4 bg-white hover:shadow-lg">
                
                <div>
                    <img src="/Suzuki Alto.jfif" alt="Suzuki Alto" /> 

                        <div className="flex justify-center">
                            <p>Suzuki Alto</p>
                        </div>

                        <div className="flex justify-center">
                            <p className="text-green-500">PKR 23.3 - 30.5 Lacs</p>
                        </div>
                    
                </div>

                </a>

                {/* Honda City Div */}

                <a href="/City" className="block w-1/4 bg-white hover:shadow-lg">

                <div>
                     <img src="/Honda City.jfif" alt="Honda City" /> 

                       <div className="flex justify-center">
                            <p>Honda City</p>
                        </div>

                        <div className="flex justify-center">
                            <p className="text-green-500">PKR 46.5 - 58.5 Lacs</p>
                        </div> 
                </div>

                </a>

                {/* Honda Civic Div */}

                <a href="/Civic" className="block w-1/4 bg-white hover:shadow-lg">

                <div>
                    <img src="/Honda Civic.jfif" alt="Honda Civic" />

                    <div className="flex justify-center">
                            <p>Honda Civic</p>
                        </div>

                        <div className="flex justify-center">
                            <p className="text-green-500">PKR 86.6 - 99.0 Lacs</p>
                        </div>
                </div>

                </a>

            </div>
        </div>

    )
}