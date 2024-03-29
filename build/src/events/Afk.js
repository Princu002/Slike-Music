import { checkGlobalAfk, checkServerAfk, getGlobalAfk, getServerAfk, removeGlobalAfk, removeServerAfk, } from "../wrapper/db/premium.js";
import slikeEvent from "../abstract/slikeEvent.js";
export default class slikeAfk extends slikeEvent {
    constructor(client) {
        super(client);
        this.name = "messageCreate";
        this.run = async (message) => {
            if (message.author.bot)
                return;
            let mention = message.mentions.users
                ? message.mentions.users
                    .filter((x) => x !== this.client.user)
                    .first()
                : undefined;
            if (mention && checkGlobalAfk(mention?.id) === true) {
                let get = getGlobalAfk(mention?.id);
                return message.reply({
                    content: `**${mention?.tag}** is Globally Afk since: **<t:${get.TIME}:R>** for reason: ${get.REASON}`,
                    allowedMentions: { repliedUser: false },
                });
            }
            let mentionMember = message.mentions.members
                ? message.mentions.members
                    .filter((x) => x !== message.guild.members.me)
                    .first()
                : undefined;
            if (mentionMember &&
                checkServerAfk(mentionMember?.user?.id, message.guildId) === true) {
                let get = getServerAfk(mentionMember?.user.id, message.guildId);
                return message.reply({
                    content: `**${mentionMember?.user.tag}** is Afk since: **<t:${get.TIME}:R>** for reason: ${get.REASON}`,
                    allowedMention: { repliedUser: false },
                });
            }
            if (checkGlobalAfk(message.author.id) === true) {
                let data = getGlobalAfk(message.author.id);
                await message.reply({
                    content: `I've Removed Your Global Afk. You were Globally Afk since: **<t:${data.TIME}:R>** for Reason: ${data.REASON}`,
                    allowedMentions: { repliedUser: false },
                });
                return removeGlobalAfk(message.author.id);
            }
            if (checkServerAfk(message.author.id, message.guildId) === true) {
                let data = getServerAfk(message.author.id, message.guildId);
                await message.reply({
                    content: `I've Removed Your Afk. You were Afk since: **<t:${data.TIME}:R>** for Reason: ${data.REASON}`,
                    allowedMentions: { repliedUser: false },
                });
                return removeServerAfk(message.author.id, message.guildId);
            }
        };
    }
}
