const { SlashCommandBuilder } = require('discord.js');

// const { Canvas } = require("canvacord");
const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks', 'AttachFiles'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('clyde')
        .setDescription('Clyde'),
    async execute(client, interaction, args) {


    const clydeMessage = interaction.options.getString('text');

    const image = await Canvas.clyde(clydeMessage)

    const attachment = new Discord.AttachmentBuilder(image, "clyde.png");

    const embed = client.templateEmbed().setImage("attachment://clyde.png");
    interaction.editReply({ files: [attachment], embeds: [embed] });
    }
};
