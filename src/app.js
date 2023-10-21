import { RTMClient } from "@slack/rtm-api";
import { SLACK_OUTH_TOKEN } from "./constants";
import { token } from "./constants";
import { WebClient } from "@slack/web-api";

const rtm = new RTMClient(token);
const web = new WebClient(SLACK_OUTH_TOKEN);

rtm.start()
    .catch(console.error);

rtm.on('ready', async () => {
    console.log('bot started')
    sendMessage(BOT_CHANNEL, 'Bot online')
});

async function sendMessage(channel, message){
    await web.chat.postMessage({
        channel: channel,
        text: message,
    });
}