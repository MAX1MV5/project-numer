import { useState } from 'react';
import axios from 'axios'

import { Form, Button } from 'react-bootstrap'
import DisplayCard from '../../components/DisplayCard';

function SplineInterpolation() {
    const [result, setResult] = useState(null)
    const [data, setData] = useState({
        Y: null,
        X: null,
        V: null
    })
    const title = "Value of f("+data.V +") is"

    function set() {
        var Y = document.getElementById("Y").value;
        var X = document.getElementById("X").value;
        var V = document.getElementById("V").value;


        setData({ Y: Y, X: X, V: V })
    }

    async function spline() {
        const res = await axios.post(
            'http://localhost:8080/api/InE/spline',
            data
        )
        setResult(JSON.parse(res.request.response))

        console.log(result)
    }

    return (
        <div>
            <div className="form" >
                <Form.Group >
                    <Form.Label>Y</Form.Label>
                    <Form.Control id="Y" placeholder="Y" onChange={() => set()} />
                </Form.Group>

                <Form.Group >
                    <Form.Label>X</Form.Label>
                    <Form.Control id="X" placeholder="X" onChange={() => set()} />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Value</Form.Label>
                    <Form.Control id="V" placeholder="Value" onChange={() => set()} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => spline()}>
                    Submit
                </Button>
            </div>
            <div>
                {result !== null && <DisplayCard title= {title} result = {result.ans} />}
            </div>
        </div>
    );
    
}

export default SplineInterpolation;