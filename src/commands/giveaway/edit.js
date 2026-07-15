const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const ms = require('ms');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('giveaway-edit')
        .setDescription('Giveaway Edit'),
    async execute(client, interaction, args) {

    const messageID = interaction.options.getString('message');
    const giveaway = client.giveawaysManager.giveaways.find((g) => g.guildId === interaction.guildId && g.messageId === messageID);
    if (!giveaway) return client.errNormal({ error: "This message ID is not from this guild", type: 'editreply' }, interaction)
    client.giveawaysManager.edit(messageID, {
        addTime: 5000,
    }).then(() => {
        const numberOfSecondsMax = client.giveawaysManager.options.updateCountdownEvery / 1000;
        client.succNormal({
            text: `Giveaway will updated in less than ${numberOfSecondsMax} seconds`,
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
