// const {} = require('discord.js');

module.exports = async (client, interaction, args) => {
    const choice = interaction.options.getString('setup');

    if (choice == "serverLogs") {
        interaction.guild.channels.create({
            name: "server-logs",
            permissionOverwrites: [
                {
                    deny: [Discord.PermissionsBitField.Flags.ViewChannel],
                    id: interaction.guild.id
                },
            ],
            type: Discord.ChannelType.GuildText
        }).then((ch) => {
            client.createChannelSetup(logs, ch, interaction)
        })
    }

    if (choice == "levelLogs") {
        interaction.guild.channels.create({
            name: "level-logs",
            type: Discord.ChannelType.GuildText
        }).then((ch) => {
            client.createChannelSetup(levelLogs, ch, interaction)
        })
    }

    if (choice == "boostLogs") {
        interaction.guild.channels.create({
            name: "boosts",
            type: Discord.ChannelType.GuildText
        }).then((ch) => {
            client.createChannelSetup(boostLogs, ch, interaction)
        })
    }
}

