import CountUp from "react-countup";
import { HiOutlineUserGroup } from "react-icons/hi";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { MdOutlineExplicit } from "react-icons/md";
import { TbAward } from "react-icons/tb";

const Achievements = () => {

    return (

        <div>
            <div
                className="relative bg-cover bg-center w-full flex items-center py-6 md:py-14"
                style={{ backgroundImage: "url(https://i.ibb.co.com/vdLNgXj/Achievements.png)" }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-85"></div>

                <div className="w-11/12 h-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center md:justify-between gap-10">

                    {/* Experience Card */}
                    <div className="card text-white border border-[#8B0000] rounded-md">

                        <figure className="pt-10 text-6xl font-bold text-[#FF0000]">
                            <MdOutlineExplicit />

                        </figure>

                        <div className="card-body items-center text-center">

                            <h2 className="text-3xl md:text-5xl font-semibold">
                                <CountUp end={5} duration={2} />
                            </h2>

                            <p className="text-xl font-medium mt-2">Year Experience</p>

                        </div>

                    </div>

                    {/* Happy Donors */}
                    <div className="card text-white border border-[#8B0000] rounded-md">

                        <figure className="pt-10 text-6xl font-bold text-[#FF0000]">
                            <LiaHandsHelpingSolid />
                        </figure>

                        <div className="card-body items-center text-center">

                            <h2 className="text-3xl md:text-5xl font-semibold">
                                <CountUp end={150} duration={5} />
                            </h2>

                            <p className="text-xl font-medium mt-2">Happy Donors</p>

                        </div>

                    </div>

                    {/* Recipient */}
                    <div className="card text-white border border-[#8B0000] rounded-md">

                        <figure className="pt-10 text-6xl font-bold text-[#FF0000]">
                            <HiOutlineUserGroup />
                        </figure>

                        <div className="card-body items-center text-center">

                            <h2 className="text-3xl md:text-5xl font-semibold">
                                <CountUp end={500} duration={5} />
                            </h2>

                            <p className="text-xl font-medium mt-2">Happy Recipient</p>

                        </div>

                    </div>

                    {/* Awards */}
                    <div className="card text-white border border-[#8B0000] rounded-md">

                        <figure className="pt-10 text-6xl font-bold text-[#FF0000]">
                            <TbAward />
                        </figure>

                        <div className="card-body items-center text-center">

                            <h2 className="text-3xl md:text-5xl font-semibold">
                                <CountUp end={3} duration={1} />
                            </h2>

                            <p className="text-xl font-medium mt-2">Total Awards</p>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Achievements;