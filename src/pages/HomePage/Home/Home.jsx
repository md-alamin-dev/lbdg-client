
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";

const Home = () => {

    return (

        <div>

            <section className="max-w-full">
                <Banner></Banner>
            </section>

            <section className="my-10">
                <Contact></Contact>
            </section>

        </div>
    );
};

export default Home;