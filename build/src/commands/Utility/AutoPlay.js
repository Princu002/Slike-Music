import slikeCommand from "../../abstract/slikeCommand.js";
export default class AutoPlay extends slikeCommand {
    constructor(client) {
        super(client);
        this.name = "autoplay";
        this.aliases = ["ap"];
        this.cat = "utility";
        this.vc = true;
        this.samevc = true;
        this.desc = "Toggles autoplay mode of the player";
        this.usage = "autoplay [on/enable | off/disable]";
        this.vote = false;
        this.manage = false;
        this.dev = false;
        this.premium = {
            guild: false,
            user: false,
        };
        this.exec = async (message, args, prefix) => {
            if (!args[0]) {
                let update = this.client.utils.updateAutoPlay(message.guild.id);
                return message.reply({
                    embeds: [
                        this.client.utils
                            .premiumEmbed(message.guild.id)
                            .setDescription(`${update === true
                            ? this.client.emoji.tick
                            : this.client.emoji.cross} Successfully **${update === true ? `Enabled` : `Disabled`} AutoPlay Mode** of ${this.client.user.username} `)
                            .setTimestamp()
                    ],
                });
            }
            else if (args[0].toLowerCase() === `on` ||
                args[0].toLowerCase() === `enable`) {
                if (this.client.utils.getAutoPlay(message.guild.id) === true)
                    return message.reply({
                        embeds: [
                            this.client.utils
                                .premiumEmbed(message.guild.id)
                                .setDescription(`${this.client.emoji.cross} **AutoPlay Mode** is Already **Enabled**`)
                                .setTimestamp(),
                        ],
                    });
                this.client.utils.updateAutoPlay(message.guild.id);
                return message.reply({
                    embeds: [
                        this.client.utils
                            .premiumEmbed(message.guildId)
                            .setDescription(`${this.client.emoji.tick} Successfully **Enabled AutoPlay Mode** of ${this.client.user.username}`),
                    ],
                });
            }
            else if (args[0].toLowerCase() === `off` ||
                args[0].toLowerCase() === `disable`) {
                if (this.client.utils.getAutoPlay(message.guild.id) === false)
                    return message.reply({
                        embeds: [
                            this.client.utils
                                .premiumEmbed(message.guild.id)
                                .setDescription(`${this.client.emoji.cross} **AutoPlay Mode** is Already **Disabled**`)
                                .setTimestamp(),
                        ],
                    });
                this.client.utils.updateAutoPlay(message.guild.id);
                return message.reply({
                    embeds: [
                        this.client.utils
                            .premiumEmbed(message.guildId)
                            .setDescription(`${this.client.emoji.tick} Successfully **Disabled AutoPlay Mode** of ${this.client.user.username}`),
                    ],
                });
            }
            else {
                return message.reply({
                    embeds: [
                        this.client.utils
                            .premiumEmbed(message.guildId)
                            .setDescription(`\`${prefix}autoplay [on/enable]\`\nEnables AutoPlay mode of the Player\n\n\`${prefix}autoplay [off/disable]\`\nDisables AutoPlay mode of the Player`)
                            .setTitle(`AutoPlay Subcommands`),
                    ],
                });
            }
        };
    }
}
