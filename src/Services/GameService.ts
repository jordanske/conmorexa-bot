import { Game } from "@games";
import Service from "./Service";

class GameService extends Service<GameService>() {
    private games: { [key: string]: Game } = {};

    public getGame(thread_id: string): Game {
        return this.games[thread_id];
    }

    public setGame(thread_id: string, game: Game): void {
        this.games[thread_id] = game;
    }

    // Creategame?
}

export default GameService.Instance(GameService);