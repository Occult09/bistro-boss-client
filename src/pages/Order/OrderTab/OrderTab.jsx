import FoorCard from "../../../components/FoodCard/FoorCard";

const OrderTab = ({items}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10'>
            {
                items.map(item => <FoorCard key={item._id} item={item}></FoorCard>)
            }
        </div>
    );
};

export default OrderTab;