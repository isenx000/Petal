const { SlashCommandBuilder } = require('discord.js');
const config = require('../../config/bot');
const { colors } = config;
// const sourcebin = require('sourcebin');

module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('sourcebin')
        .setDescription('Sourcebin'),
    async execute(client, interaction, args) {


    const language = interaction.options.getString('language');
    const code = interaction.options.getString('code');

    const bin = await sourcebin.create(
        [
            {
                content: `${code}`,
                language: `${language}`,
            },
        ],
        {
            title: '💻・Random Code',
            description: 'This is code was uploaded via Bot',
        },
    ).then(value => {
        client.succNormal({
            text: `Your code has been posted!`,
            fields: [
                {
                    name: `🔗┇Link`,
                    value: `[Click here to see your code](${value.url})`,
                    inline: true,
                }
            ],
            type: 'editreply'
        }, interaction);
    })
    }
};
