const EmployersListItem = (props) => {

    const {name, salary, onDelete, onToggleIncrease, onToggleRise, increase, rise} = props;

    let classNames = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNames = classNames + ' increase';
    }
    if (rise) {
        classNames = classNames + ' like';
    }

    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={onToggleRise}>{name}</span>
            <input className="list-group-item-input" defaultValue={salary + '$'} type="text" />
            <div className="f-dlex justify-content-center align-items-center">
                <button type="button" 
                        className="btn-cookie btn-sm"
                        onClick={onToggleIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button" 
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployersListItem;