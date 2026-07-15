const { SlashCommandBuilder, WebhookClient } = require('discord.js');

// const {} = require('discord.js');

const webhookClient = new WebhookClient({
    id: "831574783324848188",
    token: "UMFd7fPeeV7sHewjglLuAyM1819qA6AG8_-8VcIcA-bveVODYXy9Hko3pe0sWWgz9oDa",
});

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('feedback')
        .setDescription('Feedback'),
    async execute(client, interaction, args) {

    const feedback = interaction.options.getString('feedback');

    const embed = new Discord.EmbedBuilder()
        .setTitle(`📝・New feedback!`)
        .addFields(
            { name: "User", value: `${interaction.user} (${interaction.user.tag})`, inline: true },
        )
        .setDescription(`${feedback}`)
        .setColor(client.config.colors.normal)
    webhookClient.send({
        username: 'Bot Feedback',
        embeds: [embed],
    });

    client.succNormal({ 
        text: `Feedback successfully sent to the developers`,
        type: 'editreply'
    }, interaction);
    }
};
