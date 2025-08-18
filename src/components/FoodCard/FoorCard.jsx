const FoorCard = ({ item }) => {
    const { name, recipe, image, price } = item
    
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt="Foods" />
            </figure>
            <p className="bg-slate-900 absolute right-0 mr-3 mt-3 p-1">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoorCard;