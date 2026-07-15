const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('messages-show')
        .setDescription('Messages Show'),
    async execute(client, interaction, args) {

    let user = interaction.options.getUser('user') || interaction.user;

    Schema.findOne({ Guild: interaction.guild.id, User: user.id }, async (err, data) => {
        if (data) {
            client.embed({
                title: "💬・Messages",
                desc: `**${user.tag}** has \`${data.Messages}\` messages`,
                type: 'editreply'
            }, interaction)
        }
        else {
            client.embed({
                title: "💬・Messages",
                desc: `**${user.tag}** has \`0\` messages`,
                type: 'editreply'
            }, interaction)
        }
    });
    }
};
