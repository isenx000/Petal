const { SlashCommandBuilder } = require('discord.js');
const config = require('../../config/bot');
const { colors } = config;
// const generator = require('generate-password');

module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('pwdgen')
        .setDescription('Pwdgen'),
    async execute(client, interaction, args) {


    const password = generator.generate({
        length: 12,
        symbols: true,
        numbers: true
    });

    client.succNormal({ text: `I have generate a password and have it sent to your DM`, type: 'editreply' }, interaction);

    client.succNormal({
        text: `Your generated password`,
        fields: [
            {
                name: "🔑┇Password",
                value: `${password}`,
                inline: true,
            },
            {
                name: "👣┇Length",
                value: `12`,
                inline: true,
            }
        ]
    }, interaction.user)
    }
};
