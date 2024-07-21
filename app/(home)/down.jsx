import React from 'react';

const Down = () => {
  return (
    <section className="bg-green-500 pb-24 relative z-30">
      <div className="mx-auto">
        <div className="relative z-40 container mx-auto h-full lg:px-8">
          <div className="px-4 py-4 lg:px-8 lg:pt-20">
            <div className="grid gap-10 lg:grid-cols-2 mx-24">
              <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                <div className="max-w-xl mb-6">
                  <h2 className="max-w-lg mb-6 font-sans text-6xl font-bold leading-normal">
                    Key Sectors <br /> We Serve
                  </h2>
                </div>
                <div>
                  <a
                    href="http://192.168.4.146/spinksindia/industry"
                    aria-label=""
                    className="inline-flex items-center justify-start w-full font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    Learn more
                    <svg
                      className="inline-block w-3 ml-2"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center w-full -mx-4 lg:pl-10">
                <div className="flex flex-col items-end px-3">
                  <img
                    className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                    src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                  />
                  <img
                    className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                  />
                </div>
                <div className="px-3">
                  <img
                    className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-full xl:w-80"
                    src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-4 gap-2 mx-24">
            {/* Example Item */}
            <div className="group flex flex-grow">
              <a
                href="#"
                className="flex flex-grow justify-between rounded-lg overflow-hidden bg-white p-5 py-2 shadow-lg text-black group-hover:text-yellow-500 transition-all duration-1000 ease-in-out relative z-30"
              >
                <div className="absolute -top-0 left-0 w-5 h-0.5 group-hover:h-full group-hover:left-0 group-hover:w-1/2 bg-yellow-500/20 z-10 transition-all duration-700 ease-in-out"></div>
                <div className="absolute -top-0 right-0 w-5 h-0.5 group-hover:h-full group-hover:right-0 group-hover:w-1/2 bg-yellow-500/20 z-10 transition-all duration-700 ease-in-out"></div>
                <div className="relative">
                  <h3 className="p-0 m-0">Automotive Industry</h3>
                </div>
              </a>
            </div>
            {/* Repeat similar structure for other items */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Down;
