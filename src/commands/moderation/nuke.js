const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: ['ManageChannels'], bot: ['ManageChannels', 'SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('nuke')
        .setDescription('Nuke'),
    async execute(client, interaction, args) {

    const perms = await client.checkPerms({
        flags: [Discord.PermissionsBitField.Flags.ManageChannels],
        perms: [Discord.PermissionsBitField.Flags.ManageChannels]
    }, interaction);

    if (perms == false) return;

    interaction.channel.clone().then((channel) => {
        channel.setPosition(interaction.channel.position).then(
            interaction.channel.delete()
        );

        client.embed({
            title: `Channel Nuked by **${interaction.user.tag}**`,
            image: `https://i.imgur.com/Da7ScU4.gif`
        }, channel)
    })
    }
};
