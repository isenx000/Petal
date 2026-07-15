const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const DIG = require("discord-image-generation");

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('wanted')
        .setDescription('Wanted'),
    async execute(client, interaction, args) {

    const user = interaction.options.getUser('user') || interaction.user;

    let userAvatar = user.displayAvatarURL({ size: 1024, dynamic: false, extension: 'png' });
    let img = await new DIG.Wanted().getImage(userAvatar, `€`);
    let attach = new Discord.AttachmentBuilder(img, { name: "wanted.png" });
    const embed = client.templateEmbed().setImage("attachment://wanted.png");
    interaction.editReply({ files: [attach], embeds: [embed] });
    }
};
