const { SlashCommandBuilder, EmbedBuilder, inlineCode } = require('discord.js');
const config = require('../../config/bot');
const { colors } = config;

module.exports = {
    permissions: { user: ['ManageChannels'], bot: ['ManageChannels', 'SendMessages', 'EmbedLinks', 'Connect'] },
    cooldown: 0,
    slash: true,
    data: new SlashCommandBuilder()
        .setName('limit')
        .setDescription('Limit'),
    async execute(client, interaction, args) {

        const limit = interaction.options.getNumber('limit');

        const channel = interaction.member.voice.channel;

        if (!channel) {
            const embed = new EmbedBuilder()
                .setDescription("You're not in a voice channel!")
                .setColor(colors?.error);

            return interaction.reply({
                embeds: [embed],
                ephemeral: true
            });
        }

        const checkVoice = await client.checkVoice(interaction.guild, channel);

        if (!checkVoice) {
            const embed = new EmbedBuilder()
                .setDescription("You cannot edit this channel!")
                .setColor(colors?.error ?? 0xED4245);

            return interaction.reply({
                embeds: [embed],
                ephemeral: true
            });
        }

        await channel.setUserLimit(limit);

        const embed = new EmbedBuilder()
            .setDescription(`The channel limit was set to ${inlineCode(limit)}.`)
            .addFields({
                name: "📘┆Channel",
                value: `${channel} (${channel.name})`
            });

        return interaction.reply({
            embeds: [embed]
        });
    }
};