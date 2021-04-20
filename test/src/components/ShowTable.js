import { Table } from 'antd';

function ShowTable(props) {
    const { columns, result } = props;
    console.log({columns});
    console.log({result});

    return (

        <div>
            <Table columns={columns} dataSource={result} size="small" />
        </div>
    )
    
}

export default ShowTable;