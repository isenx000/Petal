const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('announcement-edit')
        .setDescription('Announcement Edit'),
    async execute(client, interaction, args) {

    const message = interaction.options.getString('message');
    const messageId = interaction.options.getString('id');

    const editMessage = await interaction.channel.messages.fetch(messageId);

    client.embed({ 
        title: `📢・Announcement!`, 
        desc: message,
        type: 'edit'
    }, editMessage);

    client.succNormal({
        text: `Announcement has been edit successfully!`,
        type: 'ephemeraledit'
    }, interaction);
    }
};
