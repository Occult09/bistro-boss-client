const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item

    return (
        <div className="flex gap-5">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h2 className="uppercase text-xl text-black">{name}---------</h2>
                <p className="text-neutral-300">{recipe}</p>
            </div>
            <p className="text-[#D99904] text-xl">${price}</p>
        </div>
    );
};

export default MenuItem;