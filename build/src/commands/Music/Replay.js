import slikeCommand from "../../abstract/slikeCommand.js";
export default class Replay extends slikeCommand {
    constructor(client) {
        super(client);
        this.name = "replay";
        this.aliases = ["restart"];
        this.cat = "music";
        this.vc = true;
        this.desc = "Restarts playing the current track";
        this.samevc = true;
        this.dev = false;
        this.dispatcher = true;
        this.playing = true;
        this.exec = async (message, args, prefix, dispatcher) => {
            dispatcher.player.seekTo(0);
            return message.reply({
                embeds: [
                    this.client.utils
                        .premiumEmbed(message.guildId)
                        .setDescription(`${this.client.emoji.tick} Successfully **Resatrted** the current Track`),
                ],
            });
        };
    }
}
