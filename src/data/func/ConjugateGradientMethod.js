import { useState } from 'react';
import axios from 'axios'

import { Form, Button } from 'react-bootstrap'
import ShowList from '../../components/ShowList'

function ConjugateGradientMethod() {
    const [result, setResult] = useState(null)
    const [data, setData] = useState({
        A: null,
        B: null,
        X: null
    })
    const title = "Value of X is"

    function set() {
        var A = document.getElementById("A").value;
        var B = document.getElementById("B").value;
        var X = document.getElementById("X").value;


        setData({ A: A, B: B, X: X })
    }

    async function conjugate() {
        const res = await axios.post(
            'http://localhost:8080/api/LAE/conjugate',
            data
        )
        setResult(JSON.parse(res.request.response))

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
                    <Form.Label>B</Form.Label>
                    <Form.Control id="B" placeholder="B" onChange={() => set()} />
                </Form.Group>

                <Form.Group >
                    <Form.Label>X</Form.Label>
                    <Form.Control id="X" placeholder="X" onChange={() => set()} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => conjugate()}>
                    Submit
                </Button>
            </div>
            <div>
                {result !== null && <ShowList title={title} result={result.X} />}
            </div>
        </div>
    );

}

export default ConjugateGradientMethod;