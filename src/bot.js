const { Client, Partials, GatewayIntentBits } = require('js');
const fs = require('fs');

// Discord client
const client = new Client({
    allowedMentions: {
        parse: [
            'users',
            'roles'
        ],
        repliedUser: true
    },
    autoReconnect: true,
    disabledEvents: [
        "TYPING_START"
    ],
    partials: [
        Partials.Channel,
        Partials.GuildMember,
        Partials.Message,
        Partials.Reaction,
        Partials.User,
        Partials.GuildScheduledEvent
    ],
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.MessageContent
    ],
    restTimeOffset: 0
});

// Connect to database
require("./database/connect")();

// Client settings
client.config = require('./config/bot');
client.emotes = require("./config/emojis.json");
client.webhooks = require("./config/webhooks.json");
// const webHooksArray = ['startLogs', 'shardLogs', 'errorLogs', 'dmLogs', 'voiceLogs', 'serverLogs', 'serverLogs2', 'commandLogs', 'consoleLogs', 'warnLogs', 'voiceErrorLogs', 'creditLogs', 'evalLogs', 'interactionLogs'];
// Check if .env webhook_id and webhook_token are set
// if (process.env.WEBHOOK_ID && process.env.WEBHOOK_TOKEN) {
//     for (const webhookName of webHooksArray) {
//         client.webhooks[webhookName].id = process.env.WEBHOOK_ID;
//         client.webhooks[webhookName].token = process.env.WEBHOOK_TOKEN;
//     }
// }

client.commands = new Collection();
client.queue = new Map();

// Webhooks
const consoleLogs = new WebhookClient({
    id: client.webhooks.consoleLogs.id,
    token: client.webhooks.consoleLogs.token,
});

const warnLogs = new WebhookClient({
    id: client.webhooks.warnLogs.id,
    token: client.webhooks.warnLogs.token,
});

// Load handlers
fs.readdirSync('./src/handlers').forEach((dir) => {
    fs.readdirSync(`./src/handlers/${dir}`).forEach((handler) => {
        require(`./handlers/${dir}/${handler}`)(client);
    });
});

client.login(process.env.DISCORD_TOKEN);

// process.on('unhandledRejection', error => {
//     console.error('Unhandled promise rejection:', error);
//     if (error) if (error.length > 950) error = error.slice(0, 950) + '... view console for details';
//     if (error.stack) if (error.stack.length > 950) error.stack = error.stack.slice(0, 950) + '... view console for details';
//     if(!error.stack) return
//     const embed = new EmbedBuilder()
//         .setTitle(`🚨・Unhandled promise rejection`)
//         .addFields([
//             {
//                 name: "Error",
//                 value: error ? codeBlock(error) : "No error",
//             },
//             {
//                 name: "Stack error",
//                 value: error.stack ? codeBlock(error.stack) : "No stack error",
//             }
//         ])
//         .setColor(client.config.colors.normal)
//     consoleLogs.send({
//         username: 'Bot Logs',
//         embeds: [embed],
//     }).catch(() => {
//         console.log('Error sending unhandledRejection to webhook')
//         console.log(error)
//     })
// });

// process.on('warning', warn => {
//     console.warn("Warning:", warn);
//     const embed = new EmbedBuilder()
//         .setTitle(`🚨・New warning found`)
//         .addFields([
//             {
//                 name: `Warn`,
//                 value: `\`\`\`${warn}\`\`\``,
//             },
//         ])
//         .setColor(client.config.colors.normal)
//     warnLogs.send({
//         username: 'Bot Logs',
//         embeds: [embed],
//     }).catch(() => {
//         console.log('Error sending warning to webhook')
//         console.log(warn)
//     })
// });

// client.on(ShardEvents.Error, error => {
//     console.log(error)
//     if (error) if (error.length > 950) error = error.slice(0, 950) + '... view console for details';
//     if (error.stack) if (error.stack.length > 950) error.stack = error.stack.slice(0, 950) + '... view console for details';
//     if (!error.stack) return
//     const embed = new EmbedBuilder()
//         .setTitle(`🚨・A websocket connection encountered an error`)
//         .addFields([
//             {
//                 name: `Error`,
//                 value: `\`\`\`${error}\`\`\``,
//             },
//             {
//                 name: `Stack error`,
//                 value: `\`\`\`${error.stack}\`\`\``,
//             }
//         ])
//         .setColor(client.config.colors.normal)
//     consoleLogs.send({
//         username: 'Bot Logs',
//         embeds: [embed],
//     });
// });
