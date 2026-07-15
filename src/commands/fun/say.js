const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: ['ManageMessages'], bot: ['SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('Say'),
    async execute(client, interaction, args) {
    
    const text = interaction.options.getString('text');

    if (text.length >= 2000) return client.errNormal({ 
        error: "You may not use more than 2000 characters!", 
        type: 'editreply' 
    }, interaction);

    await interaction.channel.send({ content: client.removeMentions(text) }).then(() => {
        client.succNormal({
            text: `Message sent successfully`,
            type: 'ephemeraledit'
        }, interaction)
    })
    }
};
