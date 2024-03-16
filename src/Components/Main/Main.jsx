import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Table from "../Table/Table";
import Table2 from "../Table/Table2";


const Main = () => {

    const [foods, setFoods] = useState([]);
    const [wantToCook, setWantToCook] = useState([]);


    useEffect(() => {
        fetch('food.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    const handleWantTocook = (food) => {
        const isExist = wantToCook.find(item => item.recipe_id === food.recipe_id);
        if(isExist) {
            alert('Already added!');
            return;
        }
        setWantToCook([...wantToCook, food]);
    }
    console.log(wantToCook);
    return (
        <>
            <section className="container mx-auto mt-20 text-center  flex flex-col items-center space-y-5">
                <h1 className="text-4xl font-semibold">Our Recipes</h1>
                <p className="w-2/3 text-[#878787]">Indulge in the fresh flavors of Italy with this timeless Caprese Salad. This vibrant dish celebrates the simplicity of ripe tomatoes, creamy mozzarella cheese, fragrant basil leaves, and a drizzle of balsamic glaze.</p>
            </section>
            <section className="container mx-auto mt-12 flex flex-col lg:flex-row gap-5 mb-20" >
                <div className="grid lg:grid-cols-2  lg:w-[60%] justify-center gap-5">
                    {
                        foods.map(food => <Card handleWantTocook = {handleWantTocook} food={food} key={food['recipe_id']}></Card>)
                    }
                </div>
                <div className="lg:w-[40%] ">
                    <div className="  p-6 border-2 border-[#28282833] rounded-xl" >
                        <div>
                            <h1 className="text-center text-2xl font-semibold mb-4">Want to cook: {wantToCook.length}</h1>
                            <hr />
                        </div>
                        <div className="text-[#878787]">
                            <Table food = {wantToCook}></Table>
                        </div>
                        <div>
                            <h1 className="text-center text-2xl font-semibold mb-4 mt-4" >Currently cooking: 02</h1>
                            <hr />
                        </div>
                        <div className="text-[#878787]">
                            <Table2></Table2>

                        </div>
                        <div className=" flex justify-end gap-5 mt-6 text-[#878787] font-bold">
                            <p>Total Time = 45 minutes</p>
                            <p>Total Calories = 1050 calories</p>
                        </div>
                    </div>
                </div>



            </section>
        </>
    );
};

export default Main;