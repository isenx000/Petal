const { SlashCommandBuilder } = require('discord.js');

// const {} = require('discord.js');

module.exports = {
    permissions: { user: [], bot: ['SendMessages', 'EmbedLinks'] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('rps')
        .setDescription('Rps'),
    async execute(client, interaction, args) {

    const option = interaction.options.getString("option");

    let options = ["rock", "paper", "scissors"];
    const result = options[Math.floor(Math.random() * options.length)];

    switch (option) {
        case "rock":
            if (result == "paper") return client.embed({
                title: `${client.emotes.normal.paper}・Rock paper scissors`,
                desc: `I have ${result}, I win!`,
                type: 'editreply'
            }, interaction);

            if (result == "scissors") return client.embed({
                title: `${client.emotes.normal.paper}・Rock paper scissors`,
                desc: `I have ${result}, You win!`,
                type: 'editreply'
            }, interaction);

            if (result == "rock") return client.embed({
                title: `${client.emotes.normal.paper}・Rock paper scissors`,
                desc: `I have ${result}, It's a draw!`,
                type: 'editreply'
            }, interaction);
            break;

        case "paper":
            if (result == "paper") return client.embed({
                title: `${client.emotes.normal.paper}・Rock paper scissors`,
                desc: `I have ${result}, It's a draw!`,
                type: 'editreply'
            }, interaction);

            if (result == "scissors") return client.embed({
                title: `${client.emotes.normal.paper}・Rock paper scissors`,
                desc: `I have ${result}, I win!`,
                type: 'editreply'
            }, interaction);

            if (result == "rock") return client.embed({
                title: `${client.emotes.normal.paper}・Rock paper scissors`,
                desc: `I have ${result}, You win!`,
                type: 'editreply'
            }, interaction);
            break;

        case "scissors":
            if (result == "paper") return client.embed({
                title: `${client.emotes.normal.paper}・Rock paper scissors`,
                desc: `I have ${result}, You win!`,
                type: 'editreply'
            }, interaction);

            if (result == "scissors") return client.embed({
                title: `${client.emotes.normal.paper}・Rock paper scissors`,
                desc: `I have ${result}, It's a draw!`,
                type: 'editreply'
            }, interaction);

            if (result == "rock") return client.embed({
                title: `${client.emotes.normal.paper}・Rock paper scissors`,
                desc: `I have ${result}, I win!`,
                type: 'editreply'
            }, interaction);
            break;
    }
    }
};
