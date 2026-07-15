const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const fetch = require("node-fetch");

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('dogfact')
        .setDescription('Dogfact'),
    async execute(client, interaction, args) {


    fetch(
        `https://some-random-api.com/facts/dog`
    )
        .then((res) => res.json()).catch({})
        .then(async (json) => {
            client.embed({
                title: `💡・Random dog fact`,
                desc: json.fact,
                type: 'editreply',
            }, interaction);
        }).catch({})
    }
};
