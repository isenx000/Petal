const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const axios = require('axios');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('hexcolour')
        .setDescription('Hexcolour'),
    async execute(client, interaction, args) {


    const color = interaction.options.getString('color');

    const { data } = await axios.get(
        `https://some-random-api.com/canvas/rgb?hex=${color}`
    ).catch(e => {
        return client.errNormal({ 
            error: "Color not found!",
            type: 'editreply'
        }, interaction)
    });

    client.embed({
        title: `🎨・Color info`,
        image: `https://some-random-api.com/canvas/colorviewer?hex=${color}`,
        color: `#${color}`,
        fields: [
            {
                name: "Hex",
                value: `#${color}`,
                inline: true,
            },
            {
                name: "RGB",
                value: `${data.r}, ${data.g}, ${data.b}`,
                inline: true,
            }
        ],
        type: 'editreply'
    }, interaction)
    }
};
