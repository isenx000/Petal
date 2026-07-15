const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const figlet = require('figlet');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('ascii')
        .setDescription('Ascii'),
    async execute(client, interaction, args) {

    const msg = interaction.options.getString('text');

    if (msg.length > 2000) return client.errNormal({ error: "Please provide text shorter than 2000 character!", type: 'editreply' }, interaction);

    figlet.text(msg, function (err, data) {

        if (err) {
            return client.errNormal({ error: "Something went wrong!", type: 'editreply' }, interaction);
        }

        client.embed({
            title: '💬・Ascii',
            desc: `\`\`\` ${data} \`\`\``,
            type: 'editreply',
        }, interaction);
    })
    }
};
