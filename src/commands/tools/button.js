const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('tools-button')
        .setDescription('Tools Button'),
    async execute(client, interaction, args) {


    const url = interaction.options.getString('url');
    const text = interaction.options.getString('text');

    if (text.length > 50) return client.errNormal({ error: "Your button text cannot be longer than 50 characters", type: 'editreply' }, interaction);

    let button = new Discord.ButtonBuilder()
        .setLabel(`${text}`)
        .setURL(`${url}`)
        .setStyle(Discord.ButtonStyle.Link);

    let row = new Discord.ActionRowBuilder()
        .addComponents(button)

    client.embed({
        title: `🔗・${text}`,
        desc: `Click the button to open the link!`,
        components: [row],
        type: 'editreply'
    }, interaction)
    }
};
