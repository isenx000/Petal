const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');
// const translate = require('@iamtraction/google-translate');

module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    data: new SlashCommandBuilder()
        .setName('translate')
        .setDescription('Translate'),
    async execute(client, interaction, args) {


    const language = interaction.options.getString('language');
    const text = interaction.options.getString('text');

    translate(text, { to: language }).then(res => {
        client.embed({
            title: `${client.emotes.normal.check}・Success!`,
            desc: `I have translated the following`,
            fields: [
                {
                    name: "📥 - Input",
                    value: `${text}`,
                    inline: false,
                },
                {
                    name: "📤 - Output",
                    value: `${res.text}`,
                    inline: false,
                },
            ],
            type: 'editreply'
        }, interaction);

    }).catch(err => {
        console.log(err)
        client.errNormal({
            error: "Please provide a valid ISO language code!",
            type: 'editreply'
        }, interaction);
    })
    }
};
