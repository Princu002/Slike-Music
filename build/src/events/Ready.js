import slikeEvent from "../abstract/slikeEvent.js";
export default class Ready extends slikeEvent {
    constructor(client) {
        super(client);
        this.name = "ready";
        this.run = async () => {
            this.client.logger.ready(`${this.client.user.username} is Online!`);
            const activities = [
                {
                    content: `slike HQ | ${await this.client.cluster
                        .broadcastEval((x) => x.guilds.cache.size)
                        .then((result) => result.reduce((a, b) => a + b, 0))} Servers`,
                    type: 0,
                    status: `dnd`,
                },
                {
                    content: `slike HQ | ${this.client.config.prefix}help`,
                    type: 2,
                    status: `idle`,
                },
                {
                    content: `slike | ${this.client.config.prefix}play`,
                    type: 3,
                    status: `online`,
                },
            ];
            setInterval(() => {
                let activity = Math.floor(Math.random() * activities.length);
                this.client.user.setPresence({
                    activities: [
                        {
                            name: activities[activity].content,
                            type: activities[activity].type,
                        },
                    ],
                    status: activities[activity].status,
                });
            }, 5000);
        };
    }
}
