const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    permissions: {
        user: [],   // required user permissions (empty = none)
        bot: []     // required bot permissions
    },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(client, interaction, args) {
     
         const rawboard = await Schema.find({ Guild: interaction.guild.id })

         if (rawboard.length < 1) return client.errNormal({ 
             error: "No data found!",
             type: 'editreply'
         }, interaction);

         const lb = rawboard.map(e => `<@!${e.User}> - **Reason** ${e.Message}`);

         await client.createLeaderboard(`🚫・AFK users - ${interaction.guild.name}`, lb, interaction);   
    }
}