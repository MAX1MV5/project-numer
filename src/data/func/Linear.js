import { useState } from 'react';
import axios from 'axios'

import { Form, Button } from 'react-bootstrap'
import DisplayCard from '../../components/DisplayCard';

function Linear() {
    const [result, setResult] = useState(null)
    const [data, setData] = useState({
        A: null,
        p: ''
    })
    const title = "Value of f(" + data.p + ") is"

    function set() {
        var A = document.getElementById("A").value;
        var p = document.getElementById("p").value;

        setData({ A: A, p: p })
        console.log(data)
    }

    async function linear() {
        console.log(data)
        const res = await axios.post(
            'http://localhost:8080/api/Reg/lin',
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
                    <Form.Label>Value</Form.Label>
                    <Form.Control id="p" placeholder="Value" onChange={() => set()} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => linear()}>
                    Submit
            </Button>
            </div>
            <div>
                {result !== null && <DisplayCard title={title} result={result.answer[1]} />}
            </div>
        </div>
    )

}

export default Linear;