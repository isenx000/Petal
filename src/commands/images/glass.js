const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('glass')
        .setDescription('Glass'),
    async execute(client, interaction, args) {


    let link = `https://some-random-api.com/canvas/glass/?avatar=${interaction.user.avatarURL({ size: 1024, extension: 'png' })}`
    const attachment = new Discord.AttachmentBuilder(link, {name:'glass.png'});

    const embed = client.templateEmbed().setImage("attachment://glass.png");
    interaction.editReply({ files: [attachment], embeds: [embed] });
    }
};
