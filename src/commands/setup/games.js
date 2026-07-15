const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: ['ManageGuild'], bot: ['ManageChannels', 'SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: true,
    data: new SlashCommandBuilder()
        .setName('setup-games')
        .setDescription('Setup Games'),
    async execute(client, interaction, args) {

    const choice = interaction.options.getString('setup');
    const channel = interaction.options.getChannel('channel');

    if (choice == "counting") {
        client.embed({
            title: `🔢・Counting`,
            desc: `This is the start of counting! The first number is **1**`
        }, channel)

        client.createChannelSetup(Counting, channel, interaction)
    }

    if (choice == "gtn") {
        client.embed({
            title: `🔢・Guess the number`,
            desc: `Guess the number between **1** and **10.000**!`
        }, channel)

        client.createChannelSetup(GTN, channel, interaction)
    }

    if (choice == "gtw") {
        var word = "start";
        var shuffled = word.split('').sort(function () { return 0.5 - Math.random() }).join('');

        client.embed({
            title: `💬・Guess the word`,
            desc: `Put the letters in the right position!`,
            fields: [
                {
                    name: `🔀┆Word`,
                    value: `${shuffled.toLowerCase()}`
                }
            ],
        }, channel)

        client.createChannelSetup(GTW, channel, interaction)
    }

    if (choice == "wordsnake") {
        client.createChannelSetup(WordSnake, channel, interaction)
    }
    }
};
