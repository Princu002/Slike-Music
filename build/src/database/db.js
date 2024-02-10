import Database from "better-sqlite3";
export default class slikeDatabase extends Database {
    constructor(path) {
        super(`./build/src/database/${path}`, {
            fileMustExist: false,
            readonly: false,
        });
        this.pragma("jorunal_mode=WAL");
    }
}
