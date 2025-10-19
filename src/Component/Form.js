import React, { Component } from 'react'
import List from './List';

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputData: "",
            toDoItems: ["Do Exercise", "Make Breakfast"]
        }
    }

    changeTodoInput = (event) => {
        this.setState({ inputData: event.target.value });
    }

    handleSubmit = (event) => {
        if (this.state.inputData !== "") {
            let newItem = [...this.state.toDoItems, this.state.inputData]
            this.setState({
                toDoItems: newItem,
                inputData: ""
            })
        }
    }

    deleteItem = (index) => {
        let original = [...this.state.toDoItems];
        let left = original.filter((value, key) => {
            return index !== key;
        })
        this.setState({
            toDoItems: left
        })
    }

    render() {
        return (
            <>
                <div className='container my-3'>
                    <div className='row justify-content-center'>
                        <div className='col-md-10' style={{ border: "2px solid", borderRadius: "50px", padding: "30px", backgroundColor: "#fff", color: "#fff" }}>
                            <form>
                                <div className="mb-3">
                                    <h1>Todo App</h1>
                                    <input type="text" className="form-control" id="todo" placeholder="Try typing: Do Exercise" onChange={this.changeTodoInput} value={this.state.inputData} />
                                </div>
                                <button type="button" className="btn btn-primary w-100" style={{ borderRadius: "50px", padding: "5px" }} onClick={this.handleSubmit}>Add
                                </button>
                            </form>
                            <List items={this.state.toDoItems} deleteItem={this.deleteItem} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
