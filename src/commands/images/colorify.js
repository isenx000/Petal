const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const { Canvas } = require("canvacord");

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('colorify')
        .setDescription('Colorify'),
    async execute(client, interaction, args) {


    const member = interaction.options.getUser('user');

    const userAvatar = member.displayAvatarURL({ dynamic: false, size: 1024, extension: 'png' });

    const image = await Canvas.colorfy(userAvatar, "#ff0000")
    let attach = new Discord.AttachmentBuilder(image, { name: "colorify.png" });

    const embed = client.templateEmbed().setImage("attachment://colorify.png");
    interaction.editReply({ files: [attach], embeds: [embed] });
    }
};
