const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('Roll'),
    async execute(client, interaction, args) {

    var result = Math.ceil(Math.random() * 6);

    client.embed({
        title: `🎲・Roll`,
        desc: `You rolled ${result}`,
        type: 'editreply'
    }, interaction);
    }
};
