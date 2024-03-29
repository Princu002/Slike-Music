import slikeEvent from "../abstract/slikeEvent.js";
export default class GuildMemberEvent extends slikeEvent {
    constructor(client) {
        super(client);
        this.name = 'guildMemberRemove';
        this.run = async (member) => {
            if (this.client.utils.checkServerPremStatus(member.guild.id) === false)
                return;
            let guild_activator = this.client.utils.checkActivator(member.guild.id);
            if (guild_activator === null)
                return;
            if (guild_activator === member.user.id) {
                this.client.utils.deleteServerPrem(member.guild.id);
                return;
            }
        };
    }
}
