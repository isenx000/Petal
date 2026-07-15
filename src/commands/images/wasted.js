const { SlashCommandBuilder } = require('discord.js');



module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks', 'AttachFiles'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('wasted')
        .setDescription('Wasted'),
    async execute(client, interaction, args) {


    let link = `https://some-random-api.com/canvas/wasted/?avatar=${interaction.user.avatarURL({ size: 1024, extension: 'png' })}`

    client.embed({
        title: `🖼・Generated image`,
        image: link,
        type: 'editreply'
    }, interaction)
    }
};
