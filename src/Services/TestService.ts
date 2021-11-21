import Service from "./Service";

class TestService extends Service<TestService>() {
    private score: number = 0;

    public setScore(score: number) {
        this.score = score;
    }

    public getScore() {
        return this.score;
    }
}

export default TestService.Instance(TestService);