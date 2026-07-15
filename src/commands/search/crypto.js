const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const axios = require('axios');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('crypto')
        .setDescription('Crypto'),
    async execute(client, interaction, args) {


    let coin = interaction.options.getString('coin');
    let currency = interaction.options.getString('currency');

    try {
        const { data } = await axios.get(
            `https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=${currency}`
        );

        if (!data[coin][currency]) return;

        client.embed({ 
            title: `💹・Crypto stats`, 
            desc: `The current price of **1 ${coin}** = **${data[coin][currency]} ${currency}**`, 
            type: 'editreply' 
        }, interaction);
    }
    catch {
        client.errNormal({ 
            error: "Please check your inputs!", 
            type: 'editreply' 
        }, interaction);
    }
    }
};
