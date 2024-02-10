import { LavasfyClient } from "lavasfy";
export default class slikeSpotify extends LavasfyClient {
    constructor(client) {
        super({
            clientID: client.config.spotiId,
            clientSecret: client.config.spotiSecret,
            playlistLoadLimit: 4,
            useSpotifyMetadata: true,
            audioOnlyResults: true,
            autoResolve: true,
        }, client.config.spotiNodes);
    }
}
