const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const fetch = require("node-fetch");

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('anagram')
        .setDescription('Anagram'),
    async execute(client, interaction, args) {


    const word = interaction.options.getString('word');

    fetch(`http://www.anagramica.com/all/${encodeURIComponent(word)}`).then((res) => res.json()).catch({})
        .then(async (json) => {
            let content = ``;
            if (!json.all[0]) return client.errNormal({ error: "No word found!", type: 'editreply' }, interaction)

            json.all.forEach(i => {
                content += `${i}\n`;
            });

            client.embed({
                title: `❓・Anagram`,
                desc: `I formed a word with the given letters`,
                fields: [
                    {
                        name: `💬┇Word(s)`,
                        value: content
                    }
                ],
                type: 'editreply'
            }, interaction)
        }).catch({})
    }
};
