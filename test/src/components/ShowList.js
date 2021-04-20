import { List, Typography, Divider } from 'antd';

function ShowList(props) {
    const { title, result } = props;

    return (
        <dev>
            <Divider orientation="left">Answer</Divider>
            <List
                size="small"
                header={<div>{title}</div>}
                // footer={<div>Footer</div>}
                bordered
                dataSource={result}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
        </dev>
    )

}

export default ShowList;