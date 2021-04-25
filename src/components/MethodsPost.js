import './css/MethodsPost.css';

function MethodsPost(props) {
    const { method, onBgClick } = props;
    return (
        <div className="methods-post">
            <div className="methods-post-bg" onClick={onBgClick} />
            <div className="methods-post-content">
                <h4>{method.title}</h4>
                {method.funcM}
            </div>
        </div>
    );
}

export default MethodsPost;