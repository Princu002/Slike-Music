import slike from "./structures/Client.js";
import slikeConfig from "./setting/Config.js";
const Config = new slikeConfig();
const client = new slike();
client.start();
// import { AutoPoster } from "topgg-autoposter";
// const autoposter = AutoPoster(Config.voteApi, client);
// autoposter.on("posted", (stats) => {
//   client.logger.log(`slike | Posted Stats to TopGG`);
// })
export default client;
["unhandledRejection", "uncaughtException"].forEach((x) => {
    process.on(x, (e) => console.error("Slike | ", e));
});
