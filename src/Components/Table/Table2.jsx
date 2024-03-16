import PropTypes from 'prop-types';


const Table2 = ({ preparing }) => {
    
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
                        {/* row 1 */}
                        {
                            preparing.map((item, idx) =>
                                <tr key={idx} className="bg-base-200">
                                    <th>{idx + 1}</th>
                                    <td>{item.recipe_name}</td>
                                    <td>{item.preparing_time} minutes</td>
                                    <td>{item.calories} calories</td>
                                </tr>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

Table2.propTypes = {
    preparing : PropTypes.array.isRequired
}

export default Table2;