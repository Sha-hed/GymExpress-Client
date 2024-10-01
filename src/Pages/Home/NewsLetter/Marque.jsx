import Marquee from "react-fast-marquee";


const Marque = () => {
    return (
        <div className="my-10 flex items-center">
            <Marquee
                autoFill={true}
                className=""
                speed={50}
                gradientWidth={200}
                pauseOnHover={true}
                >
                <h1 className="bg-[#323030] text-[#f0af2b] p-2 mx-2 font-bold rounded-xl text-lg">#fitness</h1>
                <h1 className="bg-[#323030] text-[#f0af2b] p-2 mx-2 font-bold rounded-xl text-lg">#trainer</h1>
                <h1 className="bg-[#323030] text-[#f0af2b] p-2 mx-2 font-bold rounded-xl text-lg">#personal</h1>
                <h1 className="bg-[#323030] text-[#f0af2b] p-2 mx-2 font-bold rounded-xl text-lg">#program</h1>
                <h1 className="bg-[#323030] text-[#f0af2b] p-2 mx-2 font-bold rounded-xl text-lg">#sportswear</h1>
                <h1 className="bg-[#323030] text-[#f0af2b] p-2 mx-2 font-bold rounded-xl text-lg">#pool</h1>
                <h1 className="bg-[#323030] text-[#f0af2b] p-2 mx-2 font-bold rounded-xl text-lg">#swimming</h1>
                <h1 className="bg-[#323030] text-[#f0af2b] p-2 mx-2 font-bold rounded-xl text-lg">#bodybuilding</h1>
                <h1 className="bg-[#323030] text-[#f0af2b] p-2 mx-2 font-bold rounded-xl text-lg">#coach</h1>
                <h1 className="bg-[#323030] text-[#f0af2b] p-2 mx-2 font-bold rounded-xl text-lg">#pumping</h1>
                <h1 className="bg-[#323030] text-[#f0af2b] p-2 mx-2 font-bold rounded-xl text-lg">#training</h1>
                <h1 className="bg-[#323030] text-[#f0af2b] p-2 mx-2 font-bold rounded-xl text-lg">#crossfit</h1>
            </Marquee>
        </div>
    );
};

export default Marque;