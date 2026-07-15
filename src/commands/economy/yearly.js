const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('yearly')
        .setDescription('Yearly'),
    async execute(client, interaction, args) {

  let user = interaction.user;
  let timeout = 31557600000;
  let amount = 5000;

  Schema2.findOne({ Guild: interaction.guild.id, User: user.id }, async (err, dataTime) => {
    if (dataTime && dataTime.Yearly !== null && timeout - (Date.now() - dataTime.Yearly) > 0) {
      let time = (dataTime.Yearly / 1000 + timeout / 1000).toFixed(0);
      return client.errWait({
        time: time,
        type: 'editreply'
      }, interaction);
    }
    else {
      client.succNormal({
        text: `You've collected your yearly reward of **${client.emotes.economy.coins} $${amount}**`,
        type: 'editreply'
      }, interaction);

      client.succNormal({
        text: `You've collected your yearly reward!`,
        fields: [
          {
            name: `${client.emotes.economy.coins}┆Earned`,
            value: `$${amount}`,
            inline: true
          }
        ],
        type: 'editreply'
      }, interaction);

      if (dataTime) {
        dataTime.Yearly = Date.now();
        dataTime.save();
      }
      else {
        new Schema2({
          Guild: interaction.guild.id,
          User: user.id,
          Yearly: Date.now()
        }).save();
      }

      client.addMoney(interaction, user, amount);
    }
  })
    }
};
