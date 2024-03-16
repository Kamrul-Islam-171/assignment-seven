
import bannar from '../../assets/images/bannar.svg'

const Bannar = () => {
    return (
        <div className='container mx-auto relative mt-10 '>
            <section className=" rounded-3xl h-[500px] lg:h-full">
                <img src={bannar} className='object-cover w-full h-full rounded-2xl' alt="" />
                <div className='absolute top-[10%] lg:top-[37%] left-[20%] w-[60%] space-y-5 lg:space-y-10'>
                    <h1 className='text-white text-2xl lg:text-5xl font-bold text-center'>Discover an exceptional cooking class tailored for you!</h1>
                    <p className='text-center text-white'> Learn the art of cooking from expert chefs who will guide you through step-by-step instructions, offering insider tips and techniques along the way.</p>
                    <div className='text-center  flex flex-col lg:flex-row justify-center items-center gap-5'>
                        <button className="btn btn-active font-semibold btn-primary rounded-full px-10 bg-[#0BE58A] text-black border-none">Explore Now</button>
                        <button className="btn btn-ghost font-semibold text-white border-2 border-white rounded-full px-10">Our Feedback</button>
                    </div>
                </div>
            </section>
        </div>

       
    );
};

export default Bannar;