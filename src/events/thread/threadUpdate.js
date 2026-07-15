const { EmbedBuilder } = require('discord.js');
const { channelTypes } = require('../../constants/channelType');

module.exports = async (client, oldChannel, newChannel) => {
    
    const logsChannel = await client.getLogs(newChannel.guild.id);
    if (!logsChannel) return

    const embed = new EmbedBuilder()
        .setTitle(`📖・Thread updated`)
        .setDescription(`A thread has been updated`)
        .addFields(
            { name: `> Name`,       value: `- ${channel.name}` },
            { name: `> ID`,         value: `- ${channel.id}` },
            { name: `> Category`,   value: `${channel.parent}` },
            { name: `> Channel`,    value: `<#${channel.id}>` },
            { name: `> Type`,       value: `${types[channel.type]}` }
        )

    // client.embed({
    //     title: ``,
    //     desc: ``,
    //     fields: [
 
    //     ]
    // }, logsChannel).catch(() => { })
};