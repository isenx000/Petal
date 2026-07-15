const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const fetch = require("node-fetch");

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('pandafact')
        .setDescription('Pandafact'),
    async execute(client, interaction, args) {


    fetch(
        `https://some-random-api.com/facts/panda`
    )
        .then((res) => res.json()).catch({})
        .then(async (json) => {
            client.embed({
                title: `💡・Random panda fact`,
                desc: json.fact,
                type: 'editreply',
            }, interaction);
        }).catch({})
    }
};
