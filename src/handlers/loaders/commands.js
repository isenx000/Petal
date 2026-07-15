const { REST, Routes, EmbedBuilder, WebhookClient } = require('discord.js');
const config = require('../../config/bot')
const { colors, name } = config;
// const chalk = require('chalk');
const fs = require('fs');

module.exports = (client) => {
    const interactionLogs = new WebhookClient({
        id: client.webhooks.interactionLogs.id,
        token: client.webhooks.interactionLogs.token,
    });

    const errorLogs = new WebhookClient({
        id: client.webhooks.errorLogs.id,
        token: client.webhooks.errorLogs.token,
    })

    const commands = [];

    // if (client.shard.ids[0] === 0) console.log(`System >> Loading commands ...`);

    fs.readdirSync('./src/commands').forEach(dirs => {
        const commandFiles = fs.readdirSync(`./src/commands/${dirs}`).filter(files => files.endsWith('.js'));

        // if (client.shard.ids[0] === 0) console.log(`System >> ${commandFiles.length} commands of ${dirs} loaded`);

        for (const file of commandFiles) {
            const command = require(`${process.cwd()}/src/commands/${dirs}/${file}`);
            client.commands.set(command.data.name, command);
            if (command.slash === true) commands.push(command.data);
        };
    });

    const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_BOT_TOKEN);

    (async () => {
        try {
            const refreshEmbed = new EmbedBuilder()
                .setDescription(`Started refreshing application (/) commands.`)
                .setColor(colors.normal)
            
            interactionLogs.send({ username: `${name} Logs`, embeds: [refreshEmbed] });

            await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands })

            const successEmbed = new EmbedBuilder()
                .setDescription(`Successfully reloaded ${commands.length} application (/) commands.`)
                .setColor(colors.normal)
            
            interactionLogs.send({ username: `${name} Logs`, embeds: [successEmbed] });

        } catch (error) {
            const errorEmbed = new EmbedBuilder()
                .setDescription(`Error: ${error}`)
                .setColor(colors.error)

            errorLogs.send({ username: `${name} Logs`, embeds: [errorEmbed] })

            console.log(error);
        }
    })();
}

 