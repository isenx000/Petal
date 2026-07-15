const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const { Canvas } = require("canvacord");

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('blur')
        .setDescription('Blur'),
    async execute(client, interaction, args) {


    const member = interaction.options.getUser('user');

    const userAvatar = member.displayAvatarURL({ dynamic: false, size: 1024, extension: 'png' });

    const lvl = 4

    const img = await Canvas.blur(userAvatar, lvl)

    let attach = new Discord.AttachmentBuilder(img, { name: "blurred.png" });
    const embed = client.templateEmbed().setImage("attachment://blurred.png");
    interaction.editReply({ files: [attach], embeds: [embed] });
    }
};
