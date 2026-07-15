const { REST, Routes, EmbedBuilder, WebhookClient } = require('discord.js');
const config = require('../../config/bot')
const colors = config.colors;
// const chalk = require('chalk');
const fs = require('fs');

module.exports = (client) => {
    const interactionLogs = new WebhookClient({
        id: client.webhooks.interactionLogs.id,
        token: client.webhooks.interactionLogs.token,
    });

    const commands = [];

    // if (client.shard.ids[0] === 0) console.log(`System >> Loading commands ...`);

    fs.readdirSync('./src/commands').forEach(dirs => {
        const commandFiles = fs.readdirSync(`./src/commands/${dirs}`).filter(files => files.endsWith('.js'));

        // if (client.shard.ids[0] === 0) console.log(`System >> ${commandFiles.length} commands of ${dirs} loaded`);

        for (const file of commandFiles) {
            const command = require(`${process.cwd()}/src/commands/${dirs}/${file}`);
            client.commands.set(command.data.name, command);
            commands.push(command.data);
        };
    });

    const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_BOT_TOKEN);

    (async () => {
        try {
            const embed = new EmbedBuilder()
                .setDescription(`Started refreshing application (/) commands.`)
                .setColor(colors.normal)
            interactionLogs.send({
                username: 'Bot Logs',
                embeds: [embed]
            });

            await rest.put(
                Routes.applicationCommands(process.env.CLIENT_ID),
                { body: commands },
            )

            const embedFinal = new Discord.EmbedBuilder()
                .setDescription(`Successfully reloaded ${commands.length} application (/) commands.`)
                .setColor(colors.normal)
            interactionLogs.send({
                username: 'Bot Logs',
                embeds: [embedFinal]
            });

        } catch (error) {
            console.log(error);
        }
    })();
}

 