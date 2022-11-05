import axios from 'axios'
import { useEffect, useState } from 'react'
import './table.scss'
function Table() {
    const [data, setdata] = useState('')
    const Fac_ID = JSON.parse(localStorage.getItem("token")).userlogin.Fac_ID
    const courses = localStorage.getItem("course")
    const getstudent = async () => {
        try {
            const res = await axios.post('/getstudent', {
                Fac_ID,
                courses,
            })
            const student = res.data
            setdata(student.found)
        } catch (err) {
            console.log(err);
        }

    }
    // console.log(data);
    const detail = Array.from(data)
    console.log(detail);
    useEffect(() => {
        getstudent()
    }, [])

    return (<>
        <div className='tables'>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        detail.map((data, index) =>
                            <tr key={index}>
                                <td>{data.Sname}</td>
                                <td>{data.Course}</td>
                                <td>{data.Enroll_no}</td>
                                <td>{data.Attendance}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </>);
}

export default Table;