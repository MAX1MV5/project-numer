import { useState } from 'react';
import axios from 'axios'

import { Form, Button } from 'react-bootstrap'
import ShowList from '../../components/ShowList';

function Multi(){
    const [result, setResult] = useState(null)
    const [data, setData] = useState({
        A: ''
    })
    function set() {
        var A = document.getElementById("A").value;

        setData({ A: A })
        console.log(data)
    }

    async function multi() {
        console.log(data)
        const res = await axios.post(
            'http://localhost:8080/api/Reg/multi',
            data
        )
        setResult(JSON.parse(res.request.response))

        // console.log(result)
    }

    return (
        <div>
            <div className="form" >
                <Form.Group >
                    <Form.Label>A</Form.Label>
                    <Form.Control id="A" placeholder="A" onChange={() => set()} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={() => multi()}>
                    Submit
            </Button>
            </div>
            <div>
                { result !== null && <ShowList title='Answer is' result={result.answer} />}
            </div>
        </div>
    )
}

export default Multi;