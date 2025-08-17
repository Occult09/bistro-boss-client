import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <section>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our menu"></Cover>

            {/* offered */}
            <SectionTitle subHeading="Don't miss" heading="TODAY'S OFFFER"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {/* desserts */}
            <MenuCategory items={dessert} title="Dessert" coverImg={dessertImg}></MenuCategory>

            {/* pizza */}
            <MenuCategory items={pizza} title="Pizza" coverImg={pizzaImg}></MenuCategory>

            {/* salads */}
            <MenuCategory items={salad} title="Salads" coverImg={saladImg}></MenuCategory>

            {/* soups */}
            <MenuCategory items={soup} title="Soups" coverImg={soupImg}></MenuCategory>
        </section>
    );
};

export default Menu;