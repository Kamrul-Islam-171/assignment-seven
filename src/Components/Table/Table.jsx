import PropTypes from 'prop-types';

const Table = ({ food, handlePreparing }) => {

    // console.log("form = ", food);
    return (
        <div className="mt-4">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>

                    <tbody>

                        {

                            food.map((item, idx) => <tr key={idx} className="bg-base-200">
                                <th>{idx + 1}</th>
                                <td>{item.recipe_name}</td>
                                <td>{item.preparing_time} minutes</td>
                                <td>{item.calories} calories</td>
                                <td><button onClick={() => handlePreparing(item)} className="btn rounded-full px-3 font-medium bg-[#0BE58A] border-none outline-none">Preparing</button></td>
                            </tr>)

                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

Table.propTypes = {
    food: PropTypes.array.isRequired, 
    handlePreparing : PropTypes.func.isRequired
}

export default Table;