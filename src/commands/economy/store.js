const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('store')
        .setDescription('Store'),
    async execute(client, interaction, args) {

    store.find({ Guild: interaction.guild.id }, async (err, storeData) => {
        if (storeData && storeData.length > 0) {
            const lb = storeData.map(e => `**<@&${e.Role}>** - ${client.emotes.economy.coins} $${e.Amount} \n**To buy:** \`buy ${e.Role}\``);

            await client.createLeaderboard(`🛒・${interaction.guild.name}'s Store`, lb, interaction);
            client.embed({ 
                title: `🛒・Bot's Store`, 
                desc: `**Fishingrod** - ${client.emotes.economy.coins} $100 \n**To buy:** \`buy fishingrod\``, 
            }, interaction.channel);
        }
        else {
            client.errNormal({ 
                error: `No store found in this guild!`, 
                type: 'editreply' 
            }, interaction);
        }
    })
    }
};
