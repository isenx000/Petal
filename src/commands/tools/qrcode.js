const { SlashCommandBuilder } = require('discord.js');
const config = require('../../config/bot');
const { colors } = config;

module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks', 'AttachFiles'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('qrcode')
        .setDescription('Qrcode'),
    async execute(client, interaction, args) {


    const text = interaction.options.getString('text');

    client.embed({
        title: `📱・Qrcode`,
        image: `https://api.qrserver.com/v1/create-qr-code/?size=1024x1024&data=${text.replace(new RegExp(" ", "g"), "%20")}`,
        type: 'editreply'
    }, interaction)
    }
};
