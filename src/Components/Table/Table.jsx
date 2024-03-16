

const Table = () => {
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
                        <tr className="bg-base-200">
                            <th>1</th>
                            <td>Chicken Caesar Salad</td>
                            <td>20 minutes</td>
                            <td>400 calories</td>
                            <td><button className="btn rounded-full px-3 font-medium bg-[#0BE58A] border-none outline-none">Preparing</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;