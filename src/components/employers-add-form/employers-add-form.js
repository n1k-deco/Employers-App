import { Component } from 'react';

class EmployersAddForm extends Component {
    state = {
        name: '',
        salary: ''
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || this.state.salary === "") return;
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }
    
    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex">
                    <input type="text" 
                           className="form-control new-post-label" 
                           placeholder="Как его зовут?"
                           name="name"
                           value={name}
                           onChange={this.onValueChange} />
                    <input type="text" 
                           className="form-control new-post-label" 
                           placeholder="Зарплата в $?"
                           name="salary"
                           value={salary}
                           onChange={this.onValueChange} />
                    <button type="submit" 
                           className="btn btn-outline-light"
                           onClick={this.onSubmit}>Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;