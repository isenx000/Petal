const {} = require('discord.js');


module.exports = async (client, interaction, args) => {
    const channel = interaction.options.getChannel('channel');

    Schema.findOne({ Guild: interaction.guild.id, Channel: channel.id }, async (err, data) => {
        if (data) {
            Schema.findOneAndDelete({ Guild: interaction.guild.id, Channel: channel.id }).then(() => {
                client.succNormal({
                    text: "Sticky message deleted",
                    fields: [
                        {
                            name: `📘┆Channel`,
                            value: `${channel}`
                        }
                    ],
                    type: 'editreply'
                }, interaction);
            })
        }
        else {
            client.errNormal({
                error: 'No message found!',
                type: 'editreply'
            }, interaction)
        }
    })
}

 