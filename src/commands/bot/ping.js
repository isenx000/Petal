const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: true,
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Ping'),
    async execute(client, interaction) {
        const loadingEmbed = new EmbedBuilder()
            .setDescription(`${client.emotes.animated.loading} Calculating ping...`);
    
        let resultMessage;
    
        if (interaction.reply) {
            resultMessage = await interaction.reply({
                embeds: [loadingEmbed],
                fetchReply: true,
            });
        } else {
            resultMessage = await interaction.channel.send({
                embeds: [loadingEmbed],
            });
        }
    
        const ping = resultMessage.createdTimestamp - interaction.createdTimestamp;
    
        const embed = new EmbedBuilder()
            .setTitle(`${client.emotes.normal.pong}・Pong`)
            .setDescription("Check out how fast our bot is")
            .addFields(
                {
                    name: "🤖┆Bot latency",
                    value: `${ping}ms (${ping / 1000}s)`,
                    inline: true,
                },
                {
                    name: "💻┆API Latency",
                    value: `${client.ws.ping}ms (${client.ws.ping / 1000}s)`,
                    inline: true,
                }
            );
    
        if (interaction.editReply) {
            await interaction.editReply({ embeds: [embed] });
        } else {
            await resultMessage.edit({ embeds: [embed] });
        }
    }
};
