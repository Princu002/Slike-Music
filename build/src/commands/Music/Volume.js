import slikeCommand from "../../abstract/slikeCommand.js";
export default class slikeVolume extends slikeCommand {
    constructor(client) {
        super(client);
        this.name = "volume";
        this.aliases = ["vol"];
        this.cat = "music";
        this.dev = false;
        this.manage = false;
        this.desc = "Controls the volume of the player";
        this.usage = "volume <number>";
        this.vc = true;
        this.samevc = true;
        this.premium = {
            guild: false,
            user: false,
        };
        this.exec = async (message, args, prefix) => {
            const dispatcher = this.client.api.get(message.guildId);
            if (!dispatcher || !dispatcher.player)
                return message.reply({
                    embeds: [
                        this.client.utils
                            .errorEmbed()
                            .setDescription(`${this.client.emoji.cross} There is no player for this guild yet`),
                    ],
                });
            if (!args[0]) {
                return message.reply({
                    embeds: [
                        this.client.utils
                            .premiumEmbed(message.guildId)
                            .setDescription(`Current Volume of the player is set to: **${Math.round(dispatcher.player.filters.volume * 100)}**`),
                    ],
                });
            }
            if (!Number(args[0]) || Number(args[0]) < 0 || Number(args[0]) > 200)
                return message.reply({
                    embeds: [
                        this.client.utils
                            .premiumEmbed(message.guildId)
                            .setDescription(`${this.client.emoji.cross} Volume arguement must lie betwwen **0 to 200**`)
                    ],
                });
            let vol = Math.round(Number(args[0]) / 100);
            if (Math.round(vol / 100) === dispatcher.player.filters.volume)
                return message.reply({
                    embeds: [
                        this.client.utils
                            .premiumEmbed(message.guildId)
                            .setDescription(`${this.client.emoji.cross} Volume is Already set to **${vol}%**`),
                    ],
                });
            await dispatcher.player.setVolume(vol);
            return message.reply({
                embeds: [
                    this.client.utils
                        .premiumEmbed(message.guildId)
                        .setDescription(`${this.client.emoji.tick} Successfully **Changed** the Volume to **${args[0]}%**`)
                ],
            });
        };
    }
}
