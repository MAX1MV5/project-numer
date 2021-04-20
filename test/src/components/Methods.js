import './css/Methods.css';

function Methods(props) {
    const {method, onMethodClick } = props;
    return (
        <div className="method" onClick={() => {onMethodClick(method)}} >
            <h4>{method.title}</h4>
        </div>
    );
}

export default Methods;