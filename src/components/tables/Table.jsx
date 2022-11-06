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
            setdata(Array.from(student.found))
        } catch (err) {
            console.log(err);
        }

    }
    useEffect(() => {
        getstudent()
    }, [])

    return (<>
        {
            data.length > 0 ?
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
                                data.map((data, index) =>
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
                : <main className="flex-shrink-0">
                    <div className="mx-auto" style={{ width: '40%' }}>
                        <h1 className="mt-5">Data Not Found</h1>
                        <p className="lead">Thank you for using this website but sorry data not found the choosen faculty didn't alloted any course.</p>
                        <p><a href="/Contact">Click here</a>&nbsp;to contact for course allotment</p>
                    </div>
                </main>
        }
    </>);
}

export default Table;