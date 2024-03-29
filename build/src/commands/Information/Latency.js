import slikeCommand from "../../abstract/slikeCommand.js";
export default class slikeLatency extends slikeCommand {
    constructor(client) {
        super(client);
        this.name = "ping";
        this.cat = "info";
        this.desc = "Informs you about the bot's latency";
        this.aliases = ["ping", "pong"];
        this.exec = async (message, prefix, args) => {
            return message?.reply({
                embeds: [
                    this.client.utils
                        .premiumEmbed(message.guildId)
                        .setTitle(`Pong`)
                        .setDescription(`\`\`\`Bot Latency is ${Math.round(this.client.ws.ping)} ms\`\`\``),
                ],
            });
        };
    }
}
