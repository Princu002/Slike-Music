import slikeCommand from "../../abstract/slikeCommand.js";
export default class Treblebass extends slikeCommand {
    constructor(client) {
        super(client);
        this.name = "treblebass";
        this.aliases = [];
        this.desc = "Toggles treblebass filter to the player";
        this.usage = "treblebass";
        this.cat = "filters";
        this.manage = false;
        this.premium = {
            guild: false,
            user: false,
        };
        this.vote = false;
        this.vc = true;
        this.samevc = true;
        this.exec = async (message, args, prefix, dispatcher) => {
            await dispatcher.player.setFilters({
                equalizer: [
                    { band: 0, gain: 0.6 },
                    { band: 1, gain: 0.67 },
                    { band: 2, gain: 0.67 },
                    { band: 3, gain: 0 },
                    { band: 4, gain: -0.5 },
                    { band: 5, gain: 0.15 },
                    { band: 6, gain: -0.45 },
                    { band: 7, gain: 0.23 },
                    { band: 8, gain: 0.35 },
                    { band: 9, gain: 0.45 },
                    { band: 10, gain: 0.55 },
                    { band: 11, gain: 0.6 },
                    { band: 12, gain: 0.55 },
                    { band: 13, gain: 0 },
                ],
            });
            return message.reply({
                embeds: [
                    this.client.utils
                        .premiumEmbed(message.guildId)
                        .setDescription(`${this.client.emoji.tick} Successfully **Applied Treblebass** filter to the Player`),
                ],
            });
        };
    }
}
