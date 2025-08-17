import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className="mb-10">
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"}></SectionTitle>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex justify-center mt-10">
                <button className="btn bg-white border-0 border-b-4 border-[#1F2937] mt-4 font-semibold text-xl rounded-lg w-[240px] h-[65px] text-[#1F2937] uppercase">view full menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;