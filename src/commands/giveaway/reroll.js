const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const ms = require('ms');

/**
 * 
 * @param {Discord.Client} client 
 * @param {Discord.Interaction} interaction 
 * @param {*} args 
 * @returns 
 */

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: true,
    data: new SlashCommandBuilder()
        .setName('reroll')
        .setDescription('Reroll'),
    async execute(client, interaction, args) {

    const messageID = interaction.options.getString('message');
    const giveaway = client.giveawaysManager.giveaways.find((g) => g.guildId === interaction.guildId && g.messageId === messageID);
    if (!giveaway) return client.errNormal({ error: "This message ID is not from this guild", type: 'editreply' }, interaction)
    client.giveawaysManager.reroll(messageID).then(() => {
        client.succNormal({
            text: `Giveaway gererolled`,
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
