const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const ms = require('ms');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: true,
    data: new SlashCommandBuilder()
        .setName('unpause')
        .setDescription('Unpause'),
    async execute(client, interaction, args) {

    const messageID = interaction.options.getString('message');
    const giveaway = client.giveawaysManager.giveaways.find((g) => g.guildId === interaction.guildId && g.messageId === messageID);
    if (!giveaway) return client.errNormal({ error: "This message ID is not from this guild", type: 'editreply' }, interaction)
    client.giveawaysManager.unpause(messageID).then(() => {
        client.succNormal({
            text: `Giveaway unpaused!`,
            type: 'editreply'
        }, interaction);
    }).catch((err) => {
        client.errNormal({
            error: `I can't find the giveaway for ${messageID}!`,
            type: 'editreply'
        }, interaction)
    });
    }
};
