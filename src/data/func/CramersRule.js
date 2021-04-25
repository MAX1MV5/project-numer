import { useState } from 'react';
import axios from 'axios'

import { Form, Col, Button } from 'react-bootstrap'
import ShowList from '../../components/ShowList';
// import { det } from "mathjs";

function CramersRule() {
    const [result, setResult] = useState(null)
    const [data, setData] = useState({
        A: null,
        B: null
    })
    const title = "Value of X is"

    function set() {
        var A = document.getElementById("A").value;
        var B = document.getElementById("B").value;


        setData({ A: A, B: B })
    }

    async function cramers() {
        const res = await axios.post(
            'http://localhost:8080/api/LAE/creamers',
            data
        )
        setResult(JSON.parse(res.request.response))

        console.log(result)
    }

    // function create_input(n) {
    //     var inputmatrices = document.getElementById('inputmatrices');
    //     for (var i = 0; i < n; i++) {
    //         for (var j = 0; j < n; j++) {
    //             var t = document.createElement('INPUT');
    //             t.setAttribute("type", "text");
    //             t.setAttribute("id", "a" + i + j);
    //             t.setAttribute("placeholder", "A" + i + j)
    //             // console.log("a" + i + j);
    //             inputmatrices.appendChild(t);
    //         }
    //         var t = document.createElement('INPUT');
    //         var br = document.createElement('BR');
    //         t.setAttribute("type", "text");
    //         t.setAttribute("id", "b" + i);
    //         t.setAttribute("placeholder", "B" + i);
    //         inputmatrices.appendChild(t);
    //         inputmatrices.appendChild(br);
    //     }
    // }
    return (
        <div>
            <div className="form" >
                <Form.Group >
                    <Form.Label>A</Form.Label>
                    <Form.Control id="A" placeholder="A" onChange={() => set()} />
                </Form.Group>

                <Form.Group >
                    <Form.Label>B</Form.Label>
                    <Form.Control id="B" placeholder="B" onChange={() => set()} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => cramers()}>
                    Submit
                </Button>
            </div>
            <div>
                {result !== null && <ShowList title= {title} result = {result.X} />}
                {/* {result !== null && <DisplayCard title= {title} result = {result.X} />} */}
            </div>
        </div>
    );
}

export default CramersRule;