// const {} = require('discord.js');


module.exports = async (client, channel, guild) => {
    if (channel.type == Discord.ChannelType.GuildText) {
        try {
            var channelName = await client.getTemplate(guild);
            channelName = channelName.replace(`{emoji}`, "💬")
            channelName = channelName.replace(`{name}`, `Text Channels: ${guild.channels.cache.filter(channel => channel.type === Discord.ChannelType.GuildText).size || 0}`)

            const data = await Schema.findOne({ Guild: guild.id });
            const changeChannel = guild.channels.cache.get(data.TextChannels)
            await changeChannel.setName(channelName)
        }
        catch { }
    }
};