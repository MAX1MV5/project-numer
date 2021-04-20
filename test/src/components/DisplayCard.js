import { Card } from 'antd';

function DisplayCard(props) {
    const { title, result } = props;

    
    return (
        <Card size="small" title={title} style={{ width: 300, textAlign: 'center' }} id="shr">
            <p>{result}</p>
        </Card>
    )

}

export default DisplayCard;