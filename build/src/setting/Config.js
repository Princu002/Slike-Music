export default class slikeConfig extends Object {
    token;
    prefix;
    nodes;
    spotiId;
    owners;
    spotiSecret;
    spotiNodes;
    webhooks;
    supportId;
    color;
    server;
    botinvite;
    voteUrl;
    voteApi;
    setupBgLink;
    constructor() {
        super();
        this.token =
            "MTA4MDgxOTM0MzkzNzUwNzM3OA.GtaUPu.xoDJ2Kf8yHvP4U93o14HFPJIm5pLjJAEUYIb7c";
        this.botid = "1080819343937507378"
        this.prefix = "+";
        this.nodes = [
            {
                name: `LuxuryLabs`,
                url: `the-net.loves-genshin.lol:2333`,
                auth: `eternal`,
                secure: false,
            },
          {
              name: `LuxuryLabs`,
              url: `the-net.loves-genshin.lol:2333`,
              auth: `eternal`,
              secure: false,
          }, // Dont Change The Name Of Nodes
        ];
        this.voteApi =
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkwNDMxNzE0MTg2NjY0NzU5MiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjczNTI3OTYzfQ.WwA0KXh_nAQcBmR7BPqgLGyElYZheTQmguQfA2F6aNc";
        this.webhooks = {
            guildCreate: "https://discord.com/api/webhooks/1191803115217899560/ZRUv6C5DQaLcYvKOoRFuUka6DRhg0yd_PTLTucTuIFSxo0xmWgsGfVLzcsLmqHsQ28Pw",
            guildDelete: "https://discord.com/api/webhooks/1191802968056541315/bjSJ4fZIRIbR5qXPz3G7QbEkk1r_-FU71jPe_HlKgr7x4Sweog01dJyiBPLk2FGtxzhq",
            Cmds: "https://discord.com/api/webhooks/1191802695338709062/ILFnbhDzPmFXugPWPJKHEElFPyrx7qzotFEy_T5fBdRqBuRMZHx-RkuilIcP0T0WBiJv",
        };
        this.server = "https://discord.gg/29BmbYkdpy";
        this.botinvite = `https://discord.com/api/oauth2/authorize?client_id=1080819343937507378&permissions=37079040&scope=bot`;
        this.spotiId = "bf4ebe9b0b054165a56ed6d1f40b02f3";
        this.spotiSecret = "ddae382e3b454a5abf9246cd5dd3b268";
        this.owners = ["881558378667716639"];
        this.color = "#e60000";
        this.supportId = "1185546377896402984"; //Server Id
        this.spotiNodes = [
            {
                id: `LuxuryLabs`,
                host: `the-net.loves-genshin.lol`,
                port: 2333,
                password: `eternal`,
                secure: false,
            },
          {
              id: `LuxuryLabs`,
              host: `the-net.loves-genshin.lol`,
              port: 2333,
              password: `eternal`,
              secure: false,
          }, // Dont Change The Name Of Nodes
        ];
        this.voteUrl = "https://top.gg/bot/1080819343937507378/vote";
        this.setupBgLink =
            "https://cdn.discordapp.com/attachments/1198174067119890512/1199331018453299300/pngtree-electronic-toys-and-electronics-on-table-in-pink-light-image_2699146.jpg?ex=65c2270d&is=65afb20d&hm=a5582685fb311565faa0e0cb45c2b83295296e9b979ac4d04a60e6431ef668f9&";
    }
}
//# sourceMappingURL=Config.js.map