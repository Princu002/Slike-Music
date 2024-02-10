import slikeCommand from "../../abstract/slikeCommand.js";
export default class Move extends slikeCommand {
    constructor(client) {
        super(client);
        this.name = "move";
        this.aliases = ["skipto", "jump"],
            this.cat = "music";
        this.vc = true;
        this.samevc = true;
        this.desc = "Jumps to the particular track in the queue";
        this.usage = "move <number>";
        this.dispatcher = true;
        this.premium = {
            user: false,
            guild: false
        };
        this.playing = true;
        this.exec = async (message, args, prefix, dispatcher) => {
            if (!args[0])
                return message.reply({
                    embeds: [
                        this.client.utils.premiumEmbed(message.guildId).setDescription(`${this.client.emoji.cross} Please provide me a number!`)
                    ]
                });
            let pos = Number(args[0]);
            if (!pos || pos > dispatcher.queue.length || pos < 0) {
                return message.reply({
                    embeds: [
                        this.client.utils.premiumEmbed(message.guildId).setDescription(`${this.client.emoji.cross} Please provide me a valid number from the queue!`)
                    ]
                });
            }
            if (pos === 1) {
                dispatcher.player.stopTrack();
            }
            else {
                dispatcher.queue.splice(0, pos - 1);
                dispatcher.player.stopTrack();
            }
            return message.reply({
                embeds: [
                    this.client.utils.premiumEmbed(message.guildId).setDescription(`${this.client.emoji.tick} Successfully **Skipped ${pos}** number of tracks from the Queue!`)
                ]
            });
        };
    }
}
