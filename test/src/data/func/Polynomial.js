import { useState } from 'react';
import axios from 'axios'

import { Form, Button, Table } from 'react-bootstrap'
import DisplayCard from '../../components/DisplayCard';
import ShowList from '../../components/ShowList';

function Polynomial() {
    const [result, setResult] = useState(null)
    const [data, setData] = useState({
        A: null,
        o: ''
    })
    function set() {
        var A = document.getElementById("A").value;
        var o = document.getElementById("o").value;

        setData({ A: A, o: o })
        console.log(data)
    }

    async function poly() {
        console.log(data)
        const res = await axios.post(
            'http://localhost:8080/api/Reg/poly',
            data
        )
        setResult(JSON.parse(res.request.response))
        if (result !== null) {
            var tbody = document.getElementById('tbody')
            for (var a = 0; a < result.answer.points.length; a++) {
                var tr = document.createElement("tr");
                // document.write("<tr>");
                for (var b = 0; b < result.answer.points[0].length; b++) {
                    console.log(result.answer.points[a][b])
                    var td = document.createElement("td");
                    td.innerHTML = result.answer.points[a][b]
                    tr.appendChild(td)
                    // document.write("<td>"+(a*b)+"</td>");
                }
                tbody.appendChild(tr)
                // document.write("</tr>");
            }
        }

        console.log(result)
    }

    return (
        <div>
            <div className="form" >
                <Form.Group >
                    <Form.Label>A</Form.Label>
                    <Form.Control id="A" placeholder="A" onChange={() => set()} />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Order</Form.Label>
                    <Form.Control id="o" placeholder="Order" onChange={() => set()} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => poly()}>
                    Submit
            </Button>
            </div>
            <div>
                {result !== null && <DisplayCard title='f(x)' result={result.answer.string} />}
                {/* {result !== null && <p>{result.answer.points}</p> } */}
                {/* {result !== null && <ShowList title='X : f(x)' result={result.answer.points} />} */}
                {result !== null && <Table striped bordered hover>
                    <thead>
                        <th>X</th>
                        <th>f(x)</th>
                    </thead>
                    <tbody id='tbody'>

                    </tbody>
                </Table>}

            </div>
        </div>
    )
}

export default Polynomial;