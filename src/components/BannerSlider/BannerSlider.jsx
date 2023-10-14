

const BannerSlider = () => {
    return (
        <>
            <div className="h-[35vh] md:h-[50vh] lg:h-[75vh]" id="banner">
                <div className="h-full bg-[#00000099] w-full flex flex-col text-white items-center justify-center text-center gap-2">
                    <h2 className="text-7xl font-handlee font-bold">Career Mela</h2>
                    <p className="text-xl font-semibold uppercase"><span className="text-cyan-300">Join</span> | <span className="text-yellow-300">Learn</span> | <span className="text-cyan-300">Build</span></p>
                </div>
            </div>
        </>
    );
};

export default BannerSlider;