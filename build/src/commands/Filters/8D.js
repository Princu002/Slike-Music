import slikeCommand from "../../abstract/slikeCommand.js";
export default class EightD extends slikeCommand {
    constructor(client) {
        super(client);
        this.name = "8d";
        this.aliases = ["eightD", "8d"];
        this.cat = "filters";
        this.dev = false;
        this.desc = "Toggles 8D filter for the player";
        this.usage = "8d";
        this.vote = false;
        this.premium = {
            guild: false,
            user: false,
        };
        this.vc = true;
        this.samevc = true;
        this.dispatcher = true;
        this.playing = true;
        this.exec = async (message, args, prefix, dispatcher) => {
            await dispatcher.player.setFilters({ rotation: { rotationHz: 0.2 } });
            return message.reply({
                embeds: [
                    this.client.utils
                        .premiumEmbed(message.guild.id)
                        .setDescription(`${this.client.emoji.tick} Successfully **Applied 8d filter** to the Player`),
                ],
            });
        };
    }
}
