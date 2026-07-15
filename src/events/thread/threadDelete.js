const { EmbedBuilder } = require('discord.js');
const { channelTypes } = require('../../constants/channelType');

module.exports = async (client, channel) => {

    const logsChannel = await client.getLogs(channel.guild.id);
    if (!logsChannel) return;

    const embed = new EmbedBuilder()
        .setTitle(`📖・Thread deleted`)
        .setDescription(`A thread has been deleted`)
        .addFields(
                        {
                name: `> Name`,
                value: `- ${channel.name}`
            },
            {
                name: `> ID`,
                value: `- ${channel.id}`
            },
            {
                name: `> Category`,
                value: `${channel.parent}`
            },
            {
                name: `> Type`,
                value: `${types[channel.type]}`
            }
        )

    // client.embed({
    //     title: ``,
    //     desc: ``,
    //     fields: [

    //     ]
    // }, logsChannel).catch(() => { })
};