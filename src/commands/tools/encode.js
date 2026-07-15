const { SlashCommandBuilder } = require('discord.js');
const config = require('../../config/bot');
const { colors } = config;

module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('encode')
        .setDescription('Encode'),
    async execute(client, interaction, args) {


    const text = interaction.options.getString('text');

    let encode = text.split("").map(x => x.charCodeAt(0).toString(2)).join(" ");

    client.embed({
        title: `${client.emotes.normal.check}・Success!`,
        desc: `I converted text to binary text`,
        fields: [
            {
                name: "📥┇Input",
                value: `\`\`\`${text}\`\`\``,
                inline: false,
            },
            {
                name: "📤┇Output",
                value: `\`\`\`${encode}\`\`\``,
                inline: false,
            },
        ],
        type: 'editreply'
    }, interaction)
    }
};
