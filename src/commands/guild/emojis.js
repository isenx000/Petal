const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const axios = require("axios");

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('emojis')
        .setDescription('Emojis'),
    async execute(client, interaction, args) {

  let Emojis = "";
  let EmojisAnimated = "";
  let EmojiCount = 0;
  let Animated = 0;
  let OverallEmojis = 0;

  function Emoji(id) {
    return client.emojis.cache.get(id).toString();
  }

  interaction.guild.emojis.cache.forEach((emoji) => {
    OverallEmojis++;
    if (emoji.animated) {
      Animated++;
      EmojisAnimated += Emoji(emoji.id);
    } else {
      EmojiCount++;
      Emojis += Emoji(emoji.id);
    }
  });

  client.embed({
    title: `😛・Emoji's!`,
    desc: `${OverallEmojis} Emoji's - ${interaction.guild.name}`,
    fields: [
      {
        name: `Animated [${Animated}]`,
        value: EmojisAnimated.substr(0, 1021) + "...",
        inline: false,
      },
      {
        name: `Standard [${EmojiCount}]`,
        value: Emojis.substr(0, 1021) + "...",
        inline: false,
      },
    ],
    type: 'editreply'
  }, interaction)
    }
};
