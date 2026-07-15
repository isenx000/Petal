const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks', 'AttachFiles'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('triggered')
        .setDescription('Triggered'),
    async execute(client, interaction, args) {


    let link = `https://some-random-api.com/canvas/triggered/?avatar=${interaction.user.avatarURL({ size: 1024, extension: 'png' })}`
    const attachment = new Discord.AttachmentBuilder(link, { name: 'triggered.gif' });

    const embed = client.templateEmbed().setImage("attachment://triggered.gif");
    interaction.editReply({ files: [attachment], embeds: [embed] });
    }
};
