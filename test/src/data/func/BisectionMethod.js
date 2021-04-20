import { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import ShowTable from '../../components/ShowTable';

function BisectionMethod() {
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
            title: 'XM',
            dataIndex: 'xm',
        },
        {
            title: 'error',
            dataIndex: 'er'
        }
    ];
    function set() {
        fx = document.getElementById("fx").value
        e = document.getElementById("e").value
        L = document.getElementById("L").value
        R = document.getElementById("R").value

        setData({ fx: fx, error: e, L: L, R: R })
    }

    async function bisection() {
        console.log(data);

        const res = await axios.post(
            'http://localhost:8080/api/RoE/bisection',
            data
        )
        setResult(JSON.parse(res.request.response))

    }
    

    return (
        <div>
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

                <Button variant="primary" type="submit" onClick={() => bisection()}>
                    Submit
                </Button>

            </div>
            <div>
                {result !== null && <ShowTable columns={columns} result={result.iteration} /> }
            </div>
            
        </div>
    );

}

export default BisectionMethod;