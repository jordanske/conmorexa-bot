export default function Service<T>() {
    abstract class Service {
        private static _instance: T;

        public static Instance(type: {new(): T}) {
            return this._instance || (this._instance = new type());
        }
    }

    return Service;
}