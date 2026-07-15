const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('channelinfo')
        .setDescription('Channelinfo'),
    async execute(client, interaction, args) {

  const channel = interaction.options.getChannel('channel');

  client.embed({
      title: `ℹ・Channel information`,
      desc: `Channel information about: <#${channel.id}>`,
      fields: [
          {
              name: "Type",
              value: `${channel.type}`,
              inline: true,
          },
          {
              name: "ID",
              value: `${channel.id}`,
              inline: true,
          },
          {
              name: "Type",
              value: `${channel.type}`,
              inline: true,
          },
          {
              name: "Made on",
              value: `${channel.createdAt}`,
              inline: true,
          },
          {
              name: "Subject",
              value: `${channel.topic ? channel.topic : 'N/A'}`,
              inline: true,
          },
          {
              name: "NSFW",
              value: `${channel.nsfw}`,
              inline: true,
          },
          {
              name: "Parent",
              value: `${channel.parentID ? channel.parentID : 'N/A'}`,
              inline: true,
          },
      ],
      type: 'editreply'
  }, interaction)
    }
};
