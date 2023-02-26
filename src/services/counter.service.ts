import { Injectable } from "@angular/core";
import { Counter } from "src/entities/counter";

@Injectable()
export class CounterService {

    getDB() {
        return JSON.parse(localStorage.getItem("db") || '[]');
    }

    updateDB(db) {
        localStorage.setItem("db", JSON.stringify(db));
    }
    
    update(counter: Counter) {
        const db = this.getDB();
        const i = db.findIndex(c => c.id == counter.id);
        db[i] = counter;
        this.updateDB(db);
    }

    persist(counter: Counter) {
        counter.id = new Date().getTime();
        const db = this.getDB();
        db.push(counter);
        this.updateDB(counter);
    }
    
}