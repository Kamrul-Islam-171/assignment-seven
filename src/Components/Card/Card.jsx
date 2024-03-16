import PropTypes from 'prop-types';
import { CiClock2 } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const Card = ({food, handleWantTocook}) => {
    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories} = food;
    return (
        <div className="w-[380px]  border-2 border-[#28282833] p-6 rounded-xl">
            <div className="h-[200px] bg-green-300 rounded-xl">
                <img className="w-full h-full object-cover rounded-xl" src={recipe_image} alt="" />
            </div>
            <div className="mt-6 space-y-5">
                <h1 className="text-xl font-semibold">{recipe_name}</h1>
                <p className="text-[#878787]">{short_description}.</p>
                <hr />
            </div>
            <div className="mt-6 space-y-5">
                <h1 className="text-lg font-medium">Ingredients: {ingredients.length}</h1>
                <ul className="text-[#878787]">
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
                    <p className="text-[#878787]"><span>{preparing_time}</span> minutes</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="text-xl">
                        <AiOutlineFire />
                    </div>
                    <p className="text-[#878787]"><span>{calories}</span> calories</p>
                </div>
            </div>
            <div className="mt-10">
                <button onClick={() => handleWantTocook(food)} className="btn font-medium text-lg px-6 rounded-full bg-[#0BE58A] border-none outline-none text-black">Want to Cook</button>
            </div>
        </div>
    );
};

Card.propTypes = {

    food: PropTypes.object.isRequired,
    handleWantTocook: PropTypes.func.isRequired,
}

export default Card;