const { SlashCommandBuilder } = require('discord.js');
const config = require('../../config/bot');
const { colors } = config;

module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('decode')
        .setDescription('Decode'),
    async execute(client, interaction, args) {


    const code = interaction.options.getString('code');

    if (isNaN(parseInt(code))) return client.errNormal({
        error: `You can only decode binary code!`,
        type: 'editreply'
    }, interaction);

    let decode = code.split(' ')
        .map(bin => String.fromCharCode(parseInt(bin, 2)))
        .join('');

    client.embed({
        title: `${client.emotes.normal.check}・Success!`,
        desc: `I have decoded code`,
        fields: [
            {
                name: "📥 - Input",
                value: `\`\`\`${code}\`\`\``,
                inline: false,
            },
            {
                name: "📥 - Output",
                value: `\`\`\`${decode}\`\`\``,
                inline: false,
            },
        ],
        type: 'editreply'
    }, interaction)
    }
};
