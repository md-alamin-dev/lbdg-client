// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.css';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

function Banner() {

  const slidesData = [
    {
      img: 'https://i.ibb.co/Tc7ckNs/4.png',
      heading: "Your Blood Donation Can Make a Difference in Someone's Life",
      subHeading: 'Your donation can save a life.',
    },
    {
      img: 'https://i.ibb.co/cJ5vp7N/2.png',
      heading: 'Life-Saving Blood is Available When You Need It Most',
      subHeading: "We are here to support you.",
    },
    {
      img: 'https://i.ibb.co/hWzzSh9/1.png',
      heading: "Join Us to Make a Difference in Lives Today",
      subHeading: "Your efforts can change lives.",
    },
  ];

  return (

    <div className="relative md:min-h-screen">

      <Swiper

        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        speed={1200}
        className="custom-swiper h-[50vh] md:h-[100vh]"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: `url(${slide.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay with text */}
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white -mt-10 p-4">

              <div className="w-full md:w-2/3 mx-auto text-center">

                <p className="text-lg mb-2 md:mb-4 font-medium italic">{slide.subHeading}</p>

                <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-8 tracking-wide leading-tight">{slide.heading}</h2>

                <div className="flex gap-6 justify-center">

                  <button className="bg-gradient-to-r from-[#FF0000] to-[#8B0000] text-white font-medium px-6 py-2 rounded-full transition-transform duration-200 transform hover:scale-105">
                    Explore Now
                  </button>

                  <button className="bg-gradient-to-r from-[#FF0000] to-[#8B0000] text-white font-medium px-6 py-2 rounded-full transition-transform duration-200 transform hover:scale-105">
                    Contact Now
                  </button>

                </div>

              </div>

            </div>
          </SwiperSlide>

        ))}

      </Swiper>

      {/* Overlapping Bottom Section */}
      <div className="relative -mt-16 md:-mt-20 z-10 flex md:w-4/5 mx-4 md:mx-auto">

        {/* Become a Donator Section */}
        <div className="flex-1 bg-[#FF0000] text-white p-4 md:p-6 flex flex-col items-center ">

          <div className='w-full flex justify-between items-center'>

            <div className='text-center md:text-left'>

              <h3 className="text-lg md:text-2xl font-semibold">Donate Blood</h3>

              <p className='my-2 text-left italic'>"Save lives with a simple donation."</p></div>

            <div>
              <button className="text-xl md:text-3xl font-extrabold mt-8 md:mt-0 hover:text-[#8B0000]">
                <FaArrowUpRightFromSquare />
              </button>
            </div>

          </div>

          {/* Description - hidden on small screens, shown on medium and larger */}
          <p className="hidden md:block mt-2 text-xs md:text-sm px-2 ">
            Your blood donation can be a lifeline for those in need. Join us in making a difference -- register today to give the gift of life!
          </p>

        </div>

        {/* Blood Recipient Section */}
        <div className="flex-1 bg-[#8B0000] text-white p-4 md:p-6 flex flex-col items-center ">

          <div className='w-full flex justify-between items-center'>

            <div className='text-center md:text-left'>
              <h3 className="text-lg md:text-2xl font-semibold">Need Blood</h3>

              <p className='my-2 text-left italic'>"In need of blood? We’re here to help."</p>
            </div>

            <div>
              <button className="text-xl md:text-3xl mt-8 md:mt-0 font-extrabold hover:text-[#FF0000]">
                <FaArrowUpRightFromSquare />
              </button>
            </div>

          </div>

          {/* Description - hidden on small screens, shown on medium and larger */}
          <p className="hidden md:block mt-2 text-xs md:text-sm px-2 text-left">
            Our network connects recipients with compatible donors. Register now to find the support you need during critical times.
          </p>

        </div>

      </div>


    </div>
  );
}

export default Banner;
