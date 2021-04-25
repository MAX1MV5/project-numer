import { useState } from 'react';
import axios from 'axios'
import { Form, Col, Button } from 'react-bootstrap'
import ShowTable from '../../components/ShowTable'
import DisplayCard from '../../components/DisplayCard';

function FalsePositionMethod() {
    let fx, e, L, R;
    const [result, setResult] = useState(null)
    const [data, setData] = useState({
        fx: '',
        L: 0,
        R: 0,
        error: null,
    })
    const columns = [
        {
            title: 'XL',
            dataIndex: 'xl',
        },
        {
            title: 'XR',
            dataIndex: 'xr',
        },
        {
            title: 'X',
            dataIndex: 'x1',
        },
        {
            title: 'error',
            dataIndex: 'err'
        }
    ];

    function set() {
        fx = document.getElementById("fx").value
        e = document.getElementById("e").value
        L = document.getElementById("L").value
        R = document.getElementById("R").value

        setData({ fx: fx, error: e, L: L, R: R })
    }

    async function falseposition() {
        const res = await axios.post(
            'http://localhost:8080/api/RoE/falseposition',
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

            <Form.Row>
                <Form.Group as={Col} >
                    <Form.Label>XL</Form.Label>
                    <Form.Control type="text" id="L" placeholder="left" onChange={() => set()} />
                </Form.Group>

                <Form.Group as={Col} >
                    <Form.Label>XR</Form.Label>
                    <Form.Control type="text" id="R" placeholder="right" onChange={() => set()} />
                </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit" onClick={() => falseposition()}>
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

export default FalsePositionMethod;