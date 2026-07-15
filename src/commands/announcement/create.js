const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: ['ManageMessages'], bot: ['SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: true,
    data: new SlashCommandBuilder()
        .setName('announcement-create')
        .setDescription('Announcement Create'),
    async execute(client, interaction, args) {

    const message = interaction.options.getString('message');
    const channel = interaction.options.getChannel('channel');

    client.embed({ 
        title: `📢・Announcement!`, 
        desc: message 
    }, channel);

    client.succNormal({
        text: `Announcement has been sent successfully!`,
        fields: [
            {
                name: `📘┆Channel`,
                value: `${channel} (${channel.name})`
            }
        ],
        type: 'editreply'
    }, interaction);
    }
};
