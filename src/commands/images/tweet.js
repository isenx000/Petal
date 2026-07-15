const { SlashCommandBuilder } = require('discord.js');

// const fetch = require("node-fetch");

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('tweet')
        .setDescription('Tweet'),
    async execute(client, interaction, args) {


    const user = interaction.user.username;
    const text = interaction.options.getString('text');

    try {
        fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${user}&text=${text}`)

            .then((res) => res.json()).catch({})
            .then(async (json) => {

                client.embed({
                    title: `🖼・Tweet`,
                    image: json.message,
                    type: 'editreply'
                }, interaction)

            }).catch({})
    }
    catch { }
    }
};
