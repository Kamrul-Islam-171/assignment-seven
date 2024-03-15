import Card from "../Card/Card";


const Main = () => {
    return (
        <>
            <section className="container mx-auto mt-10 flex flex-col lg:flex-row">
                <div className="grid lg:grid-cols-2 bg-orange-200 lg:w-[60%] justify-center gap-5">
                    <Card></Card>
                    <Card></Card>
                </div>
                <div className="lg:w-[40%] bg-blue-300 lg:h-[200px]" >
                    <h1>hi</h1>
                </div>

            </section>
        </>
    );
};

export default Main;