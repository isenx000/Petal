const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('channels')
        .setDescription('Channels'),
    async execute(client, interaction, args) {

    var channelName = await client.getTemplate(interaction.guild);
    channelName = channelName.replace(`{emoji}`, "🔧")
    channelName = channelName.replace(`{name}`, `Channels: ${interaction.guild.channels.cache.size.toLocaleString()}`)

    await interaction.guild.channels.create({
        name: channelName,
        type:  Discord.ChannelType.GuildVoice, permissionOverwrites: [
            {
                deny: [Discord.PermissionsBitField.Flags.Connect],
                id: interaction.guild.id
            },
        ],
    }).then(async (channel) => {
        Schema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
            if (data) {
                data.Channels = channel.id;
                data.save();
            }
            else {
                new Schema({
                    Guild: interaction.guild.id,
                    Channels: channel.id
                }).save();
            }
        })

        client.succNormal({
            text: `Channel count created!`,
            fields: [
                {
                    name: `📘┆Channel`,
                    value: `${channel}`
                }
            ],
            type: 'editreply'
        }, interaction);
    })
    }
};
