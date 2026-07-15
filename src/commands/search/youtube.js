const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: true,
    data: new SlashCommandBuilder()
        .setName('youtube')
        .setDescription('Youtube'),
    async execute(client, interaction, args) {


    let name = encodeURIComponent(interaction.options.getString('name'));
    let link = `https://www.youtube.com/results?search_query=${name}`;

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
