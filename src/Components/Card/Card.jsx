
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const Card = ({food}) => {
    const {recipe_image, recipe_id, recipe_name, short_description, ingredients, preparing_time, calories} = food;
    return (
        <div className="w-[380px]  border-2 border-[#28282833] p-6 rounded-xl">
            <div className="h-[200px] bg-green-300 rounded-xl">
                <img className="w-full h-full object-cover rounded-xl" src={recipe_image} alt="" />
            </div>
            <div className="mt-6 space-y-5">
                <h1 className="text-xl font-semibold">{recipe_name}</h1>
                <p>{short_description}.</p>
                <hr />
            </div>
            <div className="mt-6 space-y-5">
                <h1 className="text-lg ">Ingredients: {ingredients.length}</h1>
                <ul>
                    {
                        ingredients.map((item, idx) => <li key={idx} className="list-disc ml-2">{item}</li>)
                    }
                </ul>
                <hr />
            </div>
            <div className="mt-6 flex gap-10">
                {/* icons */}
                <div className="flex items-center gap-2">
                    <div className="text-xl">
                        <CiClock2 />
                    </div>
                    <p><span>{preparing_time}</span> minutes</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="text-xl">
                        <AiOutlineFire />
                    </div>
                    <p><span>{calories}</span> calories</p>
                </div>
            </div>
            <div className="mt-10">
                <button className="btn font-medium text-lg px-6 rounded-full bg-[#0BE58A] border-none outline-none text-black">Want to Cook</button>
            </div>
        </div>
    );
};

export default Card;