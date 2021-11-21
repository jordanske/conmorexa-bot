
export abstract class Game {
    thread_id: string = '';
    type: string = '';

    constructor(thread_id: string, type: string) {
        this.thread_id = thread_id;
        this.type = type;
    }
}