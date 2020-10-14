import AuthService from "./AuthService";
import axios from "axios";
import { API_ENDPOINT } from "../constants";

class TaskService{
    constructor(){
        this.tasks = [
            {id: 1, description: "Pagar Energia", whenToDo: "2020-09-14", done: true},
            {id: 2, description: "Dar banho no algodão", whenToDo: "2020-09-15", done: false},
            {id: 3, description: "Aniversário da prima", whenToDo: "2020-09-16", done: false}
        ]
    }

    list(onFetch, onError) {
        axios.get(`${API_ENDPOINT}/tasks?sort=whenToDo,asc`, this.buildAuthHeader())
            .then(response => onFetch(response.data.content))
            .catch(e => onError(e));
    }

    load(id) {
        return this.tasks.filter(t => t.id === id)[0];
    }

    delete(id, onDelete, onError){
        axios.delete(`${API_ENDPOINT}/tasks/${id}`, this.buildAuthHeader())
        .then(() => onDelete())
        .catch(e => onError(e));
    }

    save(task){
        if (task.id !== 0) {
            this.tasks = this.tasks.map(t => task.id !== t.id ? t : task);
        } else {
            const taskId = Math.max(...this.tasks.map(t => t.id)) + 1;
            task.id = taskId;
            this.tasks.push(task);
        }        
    }

    buildAuthHeader() {
        return {
            headers: {
                'Authorization': `Bearer ${AuthService.getJWTToken()}`
            }
        }
    }
}

export default new TaskService();