const { SlashCommandBuilder } = require('discord.js');
const config = require('../../config/bot');
const { colors } = config;

module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('mcskin')
        .setDescription('Mcskin'),
    async execute(client, interaction, args) {


    const name = interaction.options.getString('name');

    if (name == null) return client.errUsage({ usage: "mcskin [player name]",type: 'editreply' }, interaction)

    client.embed({
        title: `🎮・Skin of ${name}`,
        image: `https://minotar.net/armor/body/${name}/700.png`,
        type: 'editreply'
    }, interaction)
    }
};
