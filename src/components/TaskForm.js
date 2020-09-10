import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: {
                id: 0,
                description: "",
                whenToDo: ""
            }
        }

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
    }

    onSubmitHandler(event) {
        event.preventDefault();
    }

    onInputChangeHandler(event) {
        const field = event.target.name;
        const value = event.target.value;
        this.setState(prevState => ({ task: {...prevState.task, [field]: value} }));
        console.log(this.state.task);
    }

    render() {
        return (
            <div>
                <h1>Cadastro de Tarefas</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="description">Descrição</label>
                        <input type="text"
                            className="form-control"
                            name="description"
                            placeholder="Descrição da tarefa" 
                            onChange={this.onInputChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="whenToDo">Data</label>
                        <input type="date"
                            className="form-control"
                            name="whenToDo"
                            placeholder="Data da tarefa" 
                            onChange={this.onInputChangeHandler}/>
                    </div>
                    <button type="submit" class="btn btn-primary" title="Cadastrar">Cadastrar</button>
                    &nbsp;
                    <button type="button" class="btn btn-secondary" title="Cancelar">Cancelar</button>
                </form>
            </div>
        );
    }
}

export default TaskForm;