const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: ['ManageChannels'], bot: ['ManageChannels', 'SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: true,
    data: new SlashCommandBuilder()
        .setName('moderation-unlock')
        .setDescription('Moderation Unlock'),
    async execute(client, interaction, args) {

    const perms = await client.checkPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageChannels],
        perms: [Discord.PermissionsBitField.Flags.ManageChannels]
    }, interaction);

    if (perms == false) return;

    const channel = interaction.options.getChannel('channel') || interaction.channel;

    await channel.permissionOverwrites.edit(interaction.guild.roles.cache.find(x => x.name === '@everyone'), {
        SendMessages: true,
    });

    client.succNormal({
        text: "Channel unlocked successfully!",
        fields: [
            {
                name: `📘┆Channel`,
                value: `${channel} (${channel.name})`
            }
        ],
        type: 'editreply'
    }, interaction);
    }
};
