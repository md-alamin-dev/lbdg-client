import { CgMail } from "react-icons/cg";
import { GrLocation } from "react-icons/gr";

const Contact = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center w-full h-96 flex items-center py-6 md:py-14"
        style={{ backgroundImage: "url(https://i.ibb.co/kKczVWn/contact.png)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        <div className="relative z-10 text-white border-4 md:border-8 border-[#FF0000] w-11/12 h-full mx-auto flex flex-col items-center justify-center p-4">

          <h3 className="text-xl font-medium">Contact With Us</h3>

          <h1 className="text-2xl md:text-6xl font-bold my-4 md:my-8">
            Call Now: <a href="tel:+8801234567890" className="hover:underline hover:text-[#FF0000] transition duration-300">+8801234567890</a>
          </h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-10 mt-4">

            <p className="flex items-center gap-2 text-lg md:text-xl font-semibold hover:text-[#FF0000] transition duration-300">

              <span className="text-3xl mt-1"><CgMail /></span>

              <a href="mailto:contact.lbdg@gmail.com" className="hover:underline">contact.lbdg@gmail.com</a>
            </p>

            <p className="flex items-start md:items-center gap-2 text-lg md:text-xl font-semibold hover:text-[#FF0000] transition duration-300">

              <span className="text-2xl mt-1"><GrLocation /></span>

              Lalmonipur, Dharail, Natore-6400, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
