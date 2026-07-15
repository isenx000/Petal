const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: true,
    data: new SlashCommandBuilder()
        .setName('tickets')
        .setDescription('Tickets'),
    async execute(client, interaction, args) {

    const category = interaction.options.getChannel('category');
    const role = interaction.options.getRole('role');
    const channel = interaction.options.getChannel('channel');
    const logs = interaction.options.getChannel('logs');

    ticketSchema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
        if (data) {
            data.Category = category.id;
            data.Role = role.id;
            data.Channel = channel.id;
            data.Logs = logs.id;
            data.save();
        }
        else {
            new ticketSchema({
                Guild: interaction.guild.id,
                Category: category.id,
                Role: role.id,
                Channel: channel.id,
                Logs: logs.id
            }).save();
        }
    })

    client.succNormal({
        text: `Tickets has been set up successfully!`,
        type: 'editreply'
    }, interaction);
    }
};
