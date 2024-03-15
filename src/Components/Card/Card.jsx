
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const Card = () => {
    return (
        <div className="w-[380px] h-[685px] border-2 border-gray-600 p-6 rounded-xl">
            <div className="h-[200px] bg-green-300 rounded-xl">
                <img src="" alt="" />
            </div>
            <div className="mt-6 space-y-5">
                <h1>Spaghetti Bolognese</h1>
                <p>Classic Italian pasta dish with savory meat sauce.</p>
                <hr />
            </div>
            <div className="mt-6 space-y-5">
                <h1>Ingredients: 6</h1>
                <ul>
                    <li className="list-disc ml-2">500g ground beef</li>
                    <li className="list-disc ml-2">1 onion, chopped</li>
                    <li className="list-disc ml-2">2 cloves garlic, minced</li>
                </ul>
                <hr />
            </div>
            <div className="mt-6 flex gap-10">
                {/* icons */}
                <div className="flex items-center gap-2">
                    <div className="text-xl">
                        <CiClock2 />
                    </div>
                    <p><span>30</span> minutes</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="text-xl">
                        <AiOutlineFire />
                    </div>
                    <p><span>600</span> calories</p>
                </div>
            </div>
            <div className="mt-10">
                <button className="btn font-medium text-lg px-6 rounded-full bg-[#0BE58A] border-none outline-none text-black">Want to Cook</button>
            </div>
        </div>
    );
};

export default Card;