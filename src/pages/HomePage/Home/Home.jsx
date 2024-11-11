
import Achievements from "../Achievements/Achievements";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";

const Home = () => {

    return (

        <div>

            <section className="">
                <Banner></Banner>
            </section>

            <section className="my-10">
                <Contact></Contact>
            </section>

            <section className="my-10">
                <Achievements></Achievements>
            </section>

        </div>
    );
};

export default Home;