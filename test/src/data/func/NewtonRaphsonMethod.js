import { useState } from 'react';
import axios from 'axios'

import { Form, Col, Button } from 'react-bootstrap'

import ShowTable from '../../components/ShowTable';
import DisplayCard from '../../components/DisplayCard';

function NewtonRaphsonMethod() {
    let fx, e, x0
    const [result, setResult] = useState(null)
    const [data, setData] = useState({
        fx: '',
        L: 0,
        R: 0,
        error: null,
    })
    const columns = [
        {
            title: 'X',
            dataIndex: 'x',
        },
        {
            title: 'error',
            dataIndex: 'err'
        }
    ];

    function set() {
        fx = document.getElementById("fx").value
        e = document.getElementById("e").value
        x0 = document.getElementById("x0").value

        setData({ fx: fx, error: e, x0: x0 })
    }

    async function newtonRaphson() {
        const res = await axios.post(
            'http://localhost:8080/api/RoE/newton',
            data
        )
        setResult(JSON.parse(res.request.response))
    }
    return (
        <div className="App">
            <Form.Group >
                <Form.Label>f(x)</Form.Label>
                <Form.Control id="fx" placeholder="fx" onChange={() => set()} />
            </Form.Group>

            <Form.Group >
                <Form.Label>EPSILON</Form.Label>
                <Form.Control id="e" placeholder="e" onChange={() => set()} />
            </Form.Group>

            <Form.Group >
                <Form.Label>X0</Form.Label>
                <Form.Control id="x0" placeholder="x0" onChange={() => set()} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={() => newtonRaphson()}>
                Submit
            </Button>

            <div>
                <div>
                    {result !== null && <DisplayCard title='answer' result={result.Answer} />}
                    {result !== null && <ShowTable columns={columns} result={result.Iterations} />}
                </div>
            </div>

        </div>
    );
}

export default NewtonRaphsonMethod;