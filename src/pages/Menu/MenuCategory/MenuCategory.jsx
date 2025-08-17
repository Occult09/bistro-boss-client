import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
    return (
        <div className="mt-10">
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10 p-10">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;