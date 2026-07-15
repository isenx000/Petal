const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: true,
    data: new SlashCommandBuilder()
        .setName('bing')
        .setDescription('Bing'),
    async execute(client, interaction, args) {


    let name = encodeURIComponent(interaction.options.getString('name'));
    let link = `https://www.bing.com/search?q=${name}`;

    client.succNormal({
        text: `I have found the following for: \`${name}\``,
        fields: [
            {
                name: `🔗┇Link`,
                value: `[Click here to see the link](${link})`,
                inline: true,
            }
        ], type: 'editreply'
    }, interaction);
    }
};
