const Testimony = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 sm:pt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="w-[423px] h-[191px]">
            <h1 className="text-2xl font-bold  text-[#000000]">
              Why Wilsco Travels?
            </h1>
            <p className="text-[#989898] font-medium ">
              With over 85% success in applications, Wilsco Travels offers
              exceptional study abroad, travel, and relocation services backed
              by a global network and dedicated team.
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
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#FAE6E6] border-1 border-[#CF0101] px-4 py-8 rounded-2xl">
              <img
                src="/src/images/like.png"
                alt="group"
                className="w-[24px]"
              />
              <h1 className="text-[#1E1E1E] font-bold text-sm pt-2">
                Excellent client service{" "}
              </h1>
              <p className="text-[#4B4B4B] font-medium text-sm pt-2">
                Our team goes above and beyond to ensure your needs are met with
                personalized attention, making your experience seamless and
                stress-free.
              </p>
            </div>
            <div className="bg-[#E9F9E8] border-0 px-4 py-8 rounded-2xl">
              <img
                src="/src/images/star.png"
                alt="group"
                className="w-[24px]"
              />
              <h1 className="text-[#1E1E1E] font-bold text-sm pt-2">
                High success rate
              </h1>
              <p className="text-[#4B4B4B] font-medium text-sm pt-2">
                We pride ourselves on an impressive 85% success rate, helping
                countless clients achieve their dreams of studying, relocating,
                or traveling abroad.
              </p>
            </div>
            <div className="bg-[#F9F4E8] border-0 px-4 py-8 rounded-2xl ">
              <img
                src="/src/images/profile.png"
                alt="group"
                className="w-[24px]"
              />
              <h1 className="text-[#1E1E1E] font-bold text-sm pt-2">
                Professionalism
              </h1>
              <p className="text-[#4B4B4B] font-medium text-sm pt-2">
                With years of expertise and a highly trained team, we handle
                every aspect of your journey with the utmost professionalism,
                ensuring your peace of mind.
              </p>
            </div>
            <div className="bg-[#E9E9E9] border-0 px-4 py-8 rounded-2xl ">
              <img
                src="/src/images/firm.png"
                alt="group"
                className="w-[24px]"
              />
              <h1 className="text-[#1E1E1E] font-bold text-sm pt-2">
                International partnerships
              </h1>
              <p className="text-[#4B4B4B] font-medium text-sm pt-2">
                Our extensive network of trusted global partners gives you
                access to the best opportunities and resources for your travel,
                study, and relocation needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Testimony;
