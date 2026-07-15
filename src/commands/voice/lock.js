const { SlashCommandBuilder } = require('discord.js');
const config = require('../../config/bot');
const { colors } = config;

module.exports = {
    permissions: { user: ['ManageChannels'], bot: ['ManageChannels', 'SendMessages', 'EmbedLinks', 'Connect'] },
    cooldown: 0,
    slash: true,
    data: new SlashCommandBuilder()
        .setName('voice-lock')
        .setDescription('Voice Lock'),
    async execute(client, interaction, args) {

    const channel = interaction.member.voice.channel;
    if (!channel) return client.errNormal({
        error: `You're not in a voice channel!`,
        type: 'editreply'
    }, interaction);

    var checkVoice = await client.checkVoice(interaction.guild, channel);
    if (!checkVoice) {
        return client.errNormal({
            error: `You cannot edit this channel!`,
            type: 'editreply'
        }, interaction);
    } else {
        client.succNormal({
            text: `The channel was succesfully locked!`,
            fields: [
                {
                    name: `📘┆Channel`,
                    value: `${channel} (${channel.name})`
                }
            ],
            type: 'editreply'
        }, interaction);

        channel.permissionOverwrites.edit(interaction.guild.roles.cache.find(x => x.name === '@everyone'), {
            Connect: false
        });
    }
    }
};
