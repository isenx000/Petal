const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('setup-ticketpanel')
        .setDescription('Setup Ticketpanel'),
    async execute(client, interaction, args) {

    const name = interaction.options.getString('name');
    const description = interaction.options.getString('description');

    ticketSchema.findOne({ Guild: interaction.guild.id }, async (err, ticketData) => {
        if (ticketData) {
            const channel = interaction.guild.channels.cache.get(ticketData.Channel);
            const button = new Discord.ButtonBuilder()
                .setCustomId('Bot_openticket')
                .setLabel(name)
                .setStyle(Discord.ButtonStyle.Primary)
                .setEmoji('🎫')

            const row = new Discord.ActionRowBuilder()
                .addComponents(button)

            client.embed({
                title: name,
                desc: description,
                components: [row]
            }, channel)

            client.succNormal({
                text: `Ticket panel has been set up successfully!`,
                type: 'editreply'
            }, interaction);
        }
        else {
            client.errNormal({
                error: `Run the ticket setup first!`,
                type: 'editreply'
            }, interaction);
        }
    })
    }
};
