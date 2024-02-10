import { Client, Partials } from "discord.js";
import slikeConfig from "../setting/Config.js";
import slikeEmoji from "../setting/Emoji.js";
import slikeShoukaku from "../wrapper/Shoukaku.js";
import slikeApi from "../wrapper/wrapper.js";
import slikeEvents from "./Events.js";
import slikeCommands from "./Commands.js";
import { ClusterClient, getInfo } from "discord-hybrid-sharding";
import slikeUtils from "./Utils.js";
import slikeLogger from "./Logger.js";
import slikeSpotify from "../wrapper/Spotify.js";
import slikeKazagumo from "../wrapper/Kazagumo.js";
export default class slike extends Client {
    constructor() {
        super({
            intents: [
                "Guilds",
                "GuildMembers",
                "GuildMessages",
                "GuildInvites",
                "GuildVoiceStates",
                "MessageContent",
            ],
            partials: [
                Partials.Channel,
                Partials.GuildMember,
                Partials.Message,
                Partials.User,
                Partials.Reaction,
            ],
            allowedMentions: {
                repliedUser: false,
                parse: ["everyone", "roles", "users"],
            },
            failIfNotExists: true,
            shards: getInfo().SHARD_LIST,
            shardCount: getInfo().TOTAL_SHARDS,
        });
        this.config = new slikeConfig();
        this.emoji = new slikeEmoji(this);
        this.shoukaku = new slikeShoukaku(this);
        this.kazagumo = new slikeKazagumo(this);
        this.spotify = new slikeSpotify(this);
        this.cluster = new ClusterClient(this);
        this.logger = new slikeLogger(this);
        this.utils = new slikeUtils(this);
        this.api = new slikeApi(this);
        this.events = new slikeEvents(this).loadEvents();
        this.commands = new slikeCommands(this).loadCommands();
    }
    start() {
        return super.login(this.config.token);
    }
}
