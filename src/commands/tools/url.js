const { SlashCommandBuilder } = require('discord.js');
const config = require('../../config/bot');
const { colors } = config;
// const isgd = require('isgd');

module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('url')
        .setDescription('Url'),
    async execute(client, interaction, args) {


    const url = interaction.options.getString('site');
    const code = interaction.options.getString('code');

    isgd.custom(url, code, function(res) {
        if (res.startsWith("Error")) return client.errNormal({
            error: `${res.replace("Error: ", "")}`,
            type: 'editreply'
        }, interaction)

        client.succNormal({
            text: `Your shortened url has been created!`,
            fields: [
                {
                    name: `🔗┇Link`,
                    value: `${res}`,
                    inline: true,
                }
            ], 
            type: 'editreply'
        }, interaction);
    });
    }
};
