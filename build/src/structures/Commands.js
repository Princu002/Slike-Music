import { Collection } from "discord.js";
import * as fs from "fs";
export default class slikeCommands {
    client;
    loaded;
    messages;
    constructor(client) {
        this.client = client;
        this.loaded = false;
        this.messages = new Collection();
    }
    loadCommands() {
        if (this.loaded)
            return this;
        fs.readdirSync(`./build/src/commands/`).forEach((dir) => {
            fs.readdirSync(`./build/src/commands/${dir}`)
                .filter((x) => x.endsWith(".js"))
                .forEach(async (file) => {
                let command = (await import(`../commands/${dir}/${file}`)).default;
                let slikeCommand = new command(this.client);
                this.messages.set(slikeCommand.name, slikeCommand);
                this.client.logger.debug(`slike | Command Loaded: ${slikeCommand.name} loaded!`);
            });
        });
        this.client.logger.log(`slike | Loaded Client Commands Successfully!`);
        this.loaded = true;
        return this;
    }
}
