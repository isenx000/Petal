const { SlashCommandBuilder } = require('discord.js');
const config = require('../../config/bot');
const { colors } = config;

module.exports = {
    permissions: { user: ['ManageChannels'], bot: ['ManageChannels', 'SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: true,
    data: new SlashCommandBuilder()
        .setName('voice-rename')
        .setDescription('Voice Rename'),
    async execute(client, interaction, args) {

    let name = interaction.options.getString('name').toLowerCase();

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

        channel.edit({ name: name });

        client.succNormal({
            text: `The channel was renamed to \`${name}\``,
            fields: [
                {
                    name: `📘┆Channel`,
                    value: `${channel} (${channel.name})`
                }
            ],
            type: 'editreply'
        }, interaction);
    }
    }
};
