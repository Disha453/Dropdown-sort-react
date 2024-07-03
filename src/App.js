
import './App.css';
import { useState } from 'react';

function App() {


    const [student, setStudent] = useState({ uname: "", password: "", color: "", dob: "" });
    const [selected, setSelected] = useState("")

    const [data, setData] = useState(JSON.parse(localStorage.getItem("disha")) || [])

    const fontChange = (e) => {
        console.log(e.target.name)
        setStudent({ ...student, [e.target.name]: e.target.value })
    }


    const fontSubmit = () => {
        setData([...data, student])
        localStorage.setItem("disha", JSON.stringify([...data, student]));
    }


    console.log(student)
    console.log(data)

    const sortTable = () => {


        if (selected === "w") {
            const sortedData = data.sort((a, b) => { return (a.uname > b.uname ? 1 : -1) });

            setData([...sortedData])
            localStorage.setItem("disha", JSON.stringify(sortedData));

        }
        else if (selected === "x") {
            const sortedData1 = data.sort((a, b) => { return (a.password > b.password ? 1 : -1) });
            console.log(sortedData1);
            setData([...sortedData1])
            localStorage.setItem("disha", JSON.stringify(sortedData1));

        } else if (selected === "y") {
            const sortedData1 = data.sort((a, b) => { return (a.color > b.color ? 1 : -1) });
            console.log(sortedData1);
            setData([...sortedData1])
            localStorage.setItem("disha", JSON.stringify(sortedData1));

        }

        else if (selected === "z") {
            const sortedData1 = data.sort((a, b) => { return (a.dob > b.dob ? 1 : -1) });
            console.log(sortedData1);
            setData([...sortedData1])
            localStorage.setItem("disha", JSON.stringify(sortedData1));

        }
    }


    return (
        <>
            <div style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2016/04/06/10/08/background-1311251_640.jpg)' }} className='p-2.5  bg-cover'>

                    <div className='flex  flex-col items-center'>



                        <div>
                            <label htmlFor="uname" ><b>Uname:</b></label>
                            <input type="text" id="uname" name="uname" value={student.uname} onChange={(e) => fontChange(e)} className='rounded-lg  ml-[9px]  h-8  w-80 ' />
                        </div>


                        <div style={{ marginTop: "5%" }}>
                            <label htmlFor="password"><b>Password:</b></label>
                            <input type="password" id="password" name="password" value={student.password} onChange={(e) => fontChange(e)} className='rounded-lg  ml-[9px]  h-8  w-80 ' />
                        </div>


                        <div style={{ marginTop: "5%" }}>
                            <lable htmlFor="color"><b>Color:</b></lable>
                            <input type="color" id="color" name="color" value={student.color} onChange={(e) => fontChange(e)} className='rounded-lg  ml-[9px]  h-8  w-80  ' />
                        </div>


                        <div style={{ marginTop: "5%", }}>
                            <lable htmlFor="dob"><b>Dob:</b></lable>
                            <input type="date" id="dob" name="dob" value={student.dob} onChange={(e) => fontChange(e)} className='rounded-lg  ml-[9px]  h-8  w-80  ' />
                        </div>


                        <button type='submit' onClick={fontSubmit} className='mt-[5%] bg-transparent shadow-lg shadow-red-600   p-5 px-10'><b>Submit</b></button>
                    </div>


                <div style={{ display: "flex", justifyContent: "center", marginTop: "5%", gap: "3%" }}>
                    <button type='button' onClick={sortTable} className='h-12 w-20 bg-transparent shadow-lg shadow-red-600   bg-transparent'><b>sort</b></button>
                    <div>

                        <select onChange={(e) => setSelected(e.target.value)} className='h-12 w-20 bg-transparent shadow-lg shadow-red-600   bg-transparent'>
                            <option value="">select field</option>
                            <option value="w">Uname</option>
                            <option value="x">Password</option>
                            <option value="y">Color</option>
                            <option value="z">Dob</option>
                        </select>
                    </div>
                </div>


                <div className='flex  justify-center mt-[5%]'>

                    <table  >
                        <thead>

                            <th>User Name:</th>
                            <th>Password:</th>
                            <th>Color:</th>
                            <th>Dob:</th>


                        </thead>

                        <tbody>
                            {data.map((item, index) => {
                                return (

                                    <tr>
                                        <td>{item.uname}</td>
                                        <td>{item.password}</td>
                                        <td>{item.color}</td>
                                        <td>{item.dob}</td>

                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>



            </div>



        </>
    );

}


  
export default App;
