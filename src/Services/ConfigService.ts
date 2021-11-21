import Service from "./Service";
import * as configJson from "../config.json";

type PathsToStringProps<T> = T extends string ? [] : {
    [K in Extract<keyof T, string>]: [K, ...PathsToStringProps<T[K]>]
}[Extract<keyof T, string>];

type Join<T extends string[], D extends string> =
    T extends [] ? never :
    T extends [infer F] ? F :
    T extends [infer F, ...infer R] ?
    F extends string ?
    `${F}${D}${Join<Extract<R, string[]>, D>}` : never : string;

type DottedLanguageObjectStringPaths = Join<PathsToStringProps<typeof configJson>, ".">

class ConfigService extends Service<ConfigService>() {
    private config = configJson;
    private dottedConfig: { [key: string]: string } = {};

    constructor() {
        super();
        
        var res = {};
        (function recurse(obj, current) {
            for(var key in obj) {
                var value = obj[key];
                var newKey = (current ? current + "." + key : key);  // joined key with dot
                if(value && typeof value === "object") {
                    recurse(value, newKey);  // it's a nested object, so do it again
                } else {
                    res[newKey] = value;  // it's not an object, so set the property
                }
            }
        })(this.config);
        this.dottedConfig = res;
    }

    public get(dottedString: DottedLanguageObjectStringPaths): string {
        return this.dottedConfig[dottedString];
    }
}

export default ConfigService.Instance(ConfigService);