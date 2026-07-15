const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const request = require('request');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('fact')
        .setDescription('Fact'),
    async execute(client, interaction, args) {


    var url = 'https://uselessfacts.jsph.pl/random.json?language=en'


    request(url, function (err, response, body) {
        fact = JSON.parse(body).text;

        client.embed({
            title: `😂・Fact`,
            desc: fact,
            type: 'editreply',
        }, interaction);
    })
    }
};
