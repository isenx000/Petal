const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('lockdown')
        .setDescription('Lockdown'),
    async execute(client, interaction, args) {

    const perms = await client.checkPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageChannels],
        perms: [Discord.PermissionsBitField.Flags.ManageChannels]
    }, interaction);

    if (perms == false) return;

    interaction.guild.channels.cache.forEach(ch => {
        if (ch.type == Discord.ChannelType.GuildText) {
            ch.permissionOverwrites.edit(interaction.guild.id, {
                SendMessages: false,
            });
        }
    })

    client.succNormal({
        text: "Channels locked successfully",
        type: 'editreply'
    }, interaction);
    }
};
