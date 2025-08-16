const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center w-[424px] mx-auto mb-10 mt-7">
            <p className="text-[#D99904] text-xl mb-4">---{subHeading}---</p>
            <h3 className="text-4xl border-neutral-600 border-y-4 text-black py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;