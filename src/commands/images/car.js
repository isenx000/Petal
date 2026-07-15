const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const pop = require("popcat-wrapper");

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('car')
        .setDescription('Car'),
    async execute(client, interaction, args) {


    const image = await pop.car();
    let attach = new Discord.AttachmentBuilder(image.image, { name: "car.png" });

    const embed = client.templateEmbed().setImage("attachment://car.png");
    interaction.editReply({ files: [attach], embeds: [embed] });
    }
};
