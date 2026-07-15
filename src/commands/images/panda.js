const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const fetch = require("node-fetch");

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('panda')
        .setDescription('Panda'),
    async execute(client, interaction, args) {


    fetch(
        `https://some-random-api.com/img/panda`
    )
        .then((res) => res.json()).catch({})
        .then(async (json) => {
            client.embed({
                title: `🐼・Random Panda`,
                image: json.link,
                type: 'editreply'
            }, interaction)
        }).catch({})
    }
};
