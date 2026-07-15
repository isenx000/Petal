const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const { Canvas } = require("canvacord");

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('greyscale')
        .setDescription('Greyscale'),
    async execute(client, interaction, args) {


    const member = interaction.options.getUser('user');

    const userAvatar = member.displayAvatarURL({ dynamic: false, size: 1024, extension: 'png' });

    const image = await Canvas.greyscale(userAvatar)
    let attach = new Discord.AttachmentBuilder(image, { name: "greyscale.png" });

    const embed = client.templateEmbed();
    embed.setImage("attachment://greyscale.png");
    interaction.editReply({ files: [attach], embeds: [embed] })
    }
};
