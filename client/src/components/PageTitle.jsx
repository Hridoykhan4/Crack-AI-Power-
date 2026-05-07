
const PageTitle = ({ children }) => {
    return (
        <div className="bg-linear-to-b lg:bg-linear-to-l from-cyan-100 py-4">
            <h2 className="w-11/12 text-center mx-auto  pl-2 border-primary lg:text-2xl ">
                <span className="bg-linear-to-l bg-clip-text text-transparent font-bold from-cyan-600 to-stone-300">
                    {children}
                </span>
            </h2>
        </div>
    );
};

export default PageTitle;