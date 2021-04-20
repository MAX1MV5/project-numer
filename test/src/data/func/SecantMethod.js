import { useState } from 'react';
import axios from 'axios'

import { Form, Col, Button } from 'react-bootstrap'

import ShowTable from '../../components/ShowTable';
import DisplayCard from '../../components/DisplayCard';

function SecantMethod() {
    const [result, setResult] = useState(null)
    const [data, setData] = useState({
        fx: '',
        L: 0,
        R: 0,
        error: null,
    })
    const columns = [
        {
            title: 'X0',
            dataIndex: 'x1'
        },
        {
            title: 'X1',
            dataIndex: 'x2'
        },
        {
            title: 'X2',
            dataIndex: 'x0'
        },
        {
            title: 'error',
            dataIndex: 'err'
        }
    ];
    function set() {
        var L = document.getElementById("x0").value;
        var R = document.getElementById("x1").value;
        var error = document.getElementById("e").value;
        var fx = document.getElementById("fx").value;


        setData({ fx: fx, error: error, L: L, R: R })
    }

    async function secant() {
        const res = await axios.post(
            'http://localhost:8080/api/RoE/secant',
            data
        )
        setResult(JSON.parse(res.request.response))
        console.log(result)
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

            <Form.Row>
                <Form.Group as={Col} >
                    <Form.Label>X0</Form.Label>
                    <Form.Control type="text" id="x0" placeholder="x0" onChange={() => set()} />
                </Form.Group>

                <Form.Group as={Col} >
                    <Form.Label>X1</Form.Label>
                    <Form.Control type="text" id="x1" placeholder="x1" onChange={() => set()} />
                </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit" onClick={() => secant()}>
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

export default SecantMethod;