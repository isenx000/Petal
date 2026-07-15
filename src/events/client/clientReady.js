const { EmbedBuilder, ActivityType, WebhookClient } = require('discord.js');
const config = require('../../config/bot')
const colors = config.colors;

module.exports = async (client) => {
    // const startLogs = new WebhookClient({
    //     id: client.webhooks.startLogs.id,
    //     token: client.webhooks.startLogs.token,
    // });
    
    // console.log(`System: Shard #${client.shard.ids[0] + 1} is ready!`)
    // console.log(`Bot: Started on ${client.guilds.cache.size} servers!`)

    // let embed = new EmbedBuilder()
    //     .setTitle(`🆙・Finishing shard`)
    //     .setDescription(`A shard just finished`)
    //     .addFields(
    //         { name: "🆔┆ID", value: `${client.shard.ids[0] + 1}/${client.options.shardCount}`, inline: true },
    //         { name: "📃┆State", value: `Ready`, inline: true },
    //     )
    //     .setColor(colors.normal)
    
    // startLogs.send({ username: 'Bot Logs', embeds: [embed] });

    // setInterval(async function () {
    //     const promises = [
    //         client.shard.fetchClientValues('guilds.cache.size'),
    //     ];
    //     return Promise.all(promises)
    //         .then(results => {
    //             const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);

    //             const statuttext = [
    //                     `・❓┆/help`,
    //                     `・💻┆${totalGuilds} servers`,
    //                     `・📨┆discord.gg/corwindev`,
    //                     `・🎉┆400+ commands`,
    //                     `・🏷️┆Version ${require(`${process.cwd()}/package.json`).version}`
    //                 ];
    //             const randomText = statuttext[Math.floor(Math.random() * statuttext.length)];
    //             client.user.setPresence({ activities: [{ name: randomText, type: ActivityType.Playing }], status: 'online' });
    //         })
    // }, 50000)
}

