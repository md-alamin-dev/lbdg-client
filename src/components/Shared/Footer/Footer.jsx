
import { FaFacebookF, FaInstagram, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {

    return (

        <div className="bg-black text-white font-medium ">

            <footer className="footer p-10">

                <div>
                    <Link to="/" className="text-2xl md:text-4xl font-bold">
                        L B D G
                    </Link>

                    <div className="mt-10">

                        <h6 className="footer-title">Follow Us</h6>

                        <div className="grid grid-flow-col gap-4 text-2xl ">

                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">

                                <FaFacebookF />

                            </a>

                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">

                                <FaInstagram />

                            </a>

                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <IoLogoYoutube />
                            </a>
                        </div>
                    </div>
                </div>

                <nav>

                    <h6 className="footer-title">Our Services</h6>

                    <Link to="/become-donor" className="link link-hover">Become a Donor</Link>

                    <Link to="/find-donor" className="link link-hover">Find a Donor</Link>

                    <Link to="/donation-process" className="link link-hover">Blood Donation Process</Link>

                    <Link to="/donor-support" className="link link-hover">Donor Support</Link>

                    <Link to="/request-blood" className="link link-hover">Request Blood</Link>

                    <Link to="/urgent-requests" className="link link-hover">Urgent Blood Requests</Link>
                </nav>

                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <Link to="/about-us" className="link link-hover">About Us</Link>

                    <Link to="/campaigns" className="link link-hover">Campaigns</Link>

                    <Link to="/gallery" className="link link-hover">Gallery</Link>

                    <Link to="/blogs" className="link link-hover">Blogs</Link>

                    <Link to="/feedback" className="link link-hover">Feedback & Suggestions</Link>
                </nav>

                <nav>
            <h6 className="footer-title">Contact Us</h6>

            <p className="flex items-center gap-2">
                <span>
                    <FaPhoneAlt />
                </span>
                <a href="tel:+88012345678910" className="link link-hover">
                    Phone: +88012345678910
                </a>
            </p>

            <p className="flex items-center gap-2">
                <span>
                    <SiGmail />
                </span>
                <a href="mailto:lbdg.contact@gmail.com" className="link link-hover">
                    Email: lbdg.contact@gmail.com
                </a>
            </p>

            <p className="flex items-center gap-2">
                <span>
                    <FaLocationArrow />
                </span>
                <a 
                    href="https://www.google.com/maps/place/Lalmonipur,+Dharail,+Natore-6400,+Bangladesh"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="link link-hover"
                >
                    Location: Lalmonipur, Dharail, Natore-6400, Bangladesh
                </a>
            </p>
        </nav>

                <nav>

                    <h6 className="footer-title">Legal</h6>

                    <Link to="/terms" className="link link-hover">Terms of Use</Link>

                    <Link to="/privacy" className="link link-hover">Privacy Policy</Link>

                    <Link to="/cookie-policy" className="link link-hover">Cookie Policy</Link>
                </nav>


            </footer>

            <div className="text-center text-xs py-2">
                <p>Copyright © {new Date().getFullYear()} - All rights reserved by Lalmonipur Blood Donar Group (L B D G)</p>
            </div>

        </div>
    );
};

export default Footer;
