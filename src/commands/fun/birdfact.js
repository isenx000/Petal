const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const fetch = require("node-fetch");

module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('birdfact')
        .setDescription('Birdfact'),
    async execute(client, interaction, args) {


    fetch(
        `https://some-random-api.com/facts/bird`
    )
        .then((res) => res.json()).catch({})
        .then(async (json) => {
            client.embed({
                title: `💡・Random bird fact`,
                desc: json.fact,
                type: 'editreply',
            }, interaction);
        }).catch({})
    }
};
