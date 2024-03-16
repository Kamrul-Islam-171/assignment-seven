import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Table from "../Table/Table";
import Table2 from "../Table/Table2";


const Main = () => {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('food.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <>
            <section className="container mx-auto mt-10 text-center">
                <h1>Our Recipes</h1>
                <p>Indulge in the fresh flavors of Italy with this timeless Caprese Salad. This vibrant dish celebrates the simplicity of ripe tomatoes, creamy mozzarella cheese, fragrant basil leaves, and a drizzle of balsamic glaze.</p>
            </section>
            <section className="container mx-auto mt-10 flex flex-col lg:flex-row gap-5" >
                <div className="grid lg:grid-cols-2  lg:w-[60%] justify-center gap-5">
                    {
                        foods.map(food => <Card food={food} key={food['recipe_id']}></Card>)
                    }
                </div>
                <div className="lg:w-[40%] ">
                    <div className="  p-6 border-2 border-[#28282833] rounded-xl" >
                        <div>
                            <h1 className="text-center text-2xl font-semibold mb-4">Want to cook: 01</h1>
                            <hr />
                        </div>
                        <div className="text-[#878787]">
                            <Table></Table>
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