const { EmbedBuilder } = require('discord.js');
const { channelTypes } = require('../../constants/channelType');

module.exports = async (client, oldChannel, newChannel) => {
    
    const logsChannel = await client.getLogs(newChannel.guild.id);
    if (!logsChannel) return

    const embed = new EmbedBuilder()
        .setTitle(`📖・Thread updated`)
        .setDescription(`A thread has been updated`)
        .addFields(
           {
                name: `> Old name`,
                value: `- ${oldChannel.name}`
            },
            {
                name: `> New name`,
                value: `- ${newChannel.name}`
            },
            {
                name: `> ID`,
                value: `- ${newChannel.id}`
            },
            {
                name: `> Category`,
                value: `${newChannel.parent}`
            },
            {
                name: `> Channel`,
                value: `<#${newChannel.id}>`
            },
            {
                name: `> Type`,
                value: `${types[newChannel.type]}`
            }
        )

    // client.embed({
    //     title: ``,
    //     desc: ``,
    //     fields: [
 
    //     ]
    // }, logsChannel).catch(() => { })
};