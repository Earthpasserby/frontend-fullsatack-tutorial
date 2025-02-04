const Opportunities = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 sm:pt-24">
        <div className="grid">
          <h1 className="text-[#1E1E1E] font-bold text-3xl">
            Your gateway to global opportunities
          </h1>
          <p className="text-[#989898] font-medium text-[16px] pt-4">
            Explore our wide range of services designed to make your study,
            <span className="hidden sm:inline">
              <br />
            </span>
            travel, and relocation dreams a reality, with expert support
            <span className="hidden sm:inline">
              <br />
            </span>{" "}
            every step of the way.
          </p>
        </div>
        <div className="columns sm:columns-3 pt-8 gap-0">
          <div className="bg-white shadow-lg rounded-2xl p-6  border-1 border-[#CF0101]  sm:w-[352px] h-[443px]">
            <img
              src="/src/images/sch.png"
              alt="group"
              //     className="w-[334px] h-[232px]"
            />
            <h2 className="text-[#1E1E1E] font-bold text-2xl">
              School service
            </h2>
            <p className="text-[#000000] font-medium text-[16px] pt-4">
              Secure your spot in top institutions worldwide with our expert
              guidance and support for study abroad applications.
            </p>
            <div className="pt-4">
              <a
                href="#"
                className="bg-transparent border border-gray-500 text-gray-500 px-4 py-2 rounded-4xl hover:bg-gray-100"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="bg-white shadow-lg  p-6 mt-6  rounded-2xl  sm:w-[352px] h-[443px]">
            <img
              src="/src/images/visa.png"
              alt="group"
              //     className="w-[334px] h-[232px]"
            />
            <h2 className="text-[#1E1E1E] font-bold text-2xl">
              School service
            </h2>
            <p className="text-[#000000] font-medium text-[16px] pt-4">
              Secure your spot in top institutions worldwide with our expert
              guidance and support for study abroad applications.
            </p>
            <div className="pt-4">
              <a
                href="#"
                className="bg-transparent border border-gray-500 text-gray-500 px-4 py-2 rounded-4xl hover:bg-gray-100"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-6 mt-6  sm:w-[544px] h-[443px]">
            <img src="/src/images/ticket.png" alt="group" className="" />
            <h2 className="text-[#1E1E1E] font-bold text-2xl">
              School service
            </h2>
            <p className="text-[#000000] font-medium text-[16px] pt-4">
              Secure your spot in top institutions worldwide with our expert
              guidance and support for study abroad applications.
            </p>
            <div className="pt-4">
              <a
                href="#"
                className="bg-transparent border border-gray-500 text-gray-500 px-4 py-2 rounded-4xl hover:bg-gray-100"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Opportunities;
