import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <section className="featured-item bg-fixed pt-8">
            <SectionTitle heading="FEATURED ITEMS" subHeading="Check it out"></SectionTitle>
            <div className="md:flex justify-center items-center py-16 px-16 gap-15 bg-linear-to-l to-transparent from-black/50 via-black/20">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>Aug 20, 2025</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quos sunt eum asperiores, et tempore. Porro tempore placeat excepturi voluptatum ad, nesciunt provident, maiores minus odio accusantium vero quod unde soluta commodi reiciendis libero hic inventore iusto eos? Minus ad eaque soluta explicabo nam laboriosam dignissimos quisquam placeat molestiae commodi.</p>
                    <button className="btn btn-outline btn-warning border-0 border-b-4 border-white mt-4 font-semibold text-xl rounded-lg w-[180px] h-[65px] text-white">Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;