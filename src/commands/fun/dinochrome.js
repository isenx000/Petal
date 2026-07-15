const { SlashCommandBuilder } = require('discord.js');



module.exports = {
    permissions: { user: [], bot: [] },
    cooldown: 0,
    slash: false,
    data: new SlashCommandBuilder()
        .setName('dinochrome')
        .setDescription('Dinochrome'),
    async execute(client, interaction, args) {


    let msg = await interaction.editReply({ content: `---------------🦖`, fetchReply: true });
    let time = 1 * 1000;
    setTimeout(function () {
        interaction.editReply(`-----------🦖----`);
    }, time);
    time += 1.5 * 1000;

    setTimeout(function () {
        interaction.editReply(`----------🦖------`);
    }, time);
    time += 1.5 * 1000;

    setTimeout(function () {
        interaction.editReply(`--------🦖--------`);
    }, time);
    time += 1.5 * 1000;

    setTimeout(function () {
        interaction.editReply(`------🦖-----------`);
    }, time);
    time += 1.5 * 1000;

    setTimeout(function () {
        interaction.editReply(`-------🦖-----------`);
    }, time);
    time += 1.5 * 1000;

    setTimeout(function () {
        interaction.editReply(`---🌵-----🦖---------`);
    }, time);
    time += 1.5 * 1000;

    setTimeout(function () {
        interaction.editReply(`---🌵-🦖-------------`);
    }, time);
    time += 1.5 * 1000;

    setTimeout(function () {
        interaction.editReply(`🦖\n ---🌵--------------`);
    }, time);
    time += 1.5 * 1000;

    setTimeout(function () {
        interaction.editReply(`------🦖---🌵--------------`);
    }, time);
    time += 1.5 * 1000;

    setTimeout(function () {
        interaction.editReply(`----🦖-----🌵----------------`);
    }, time);
    time += 1.5 * 1000;

    setTimeout(function () {
        interaction.editReply(`-🌵🌵-----🦖-------🌵--------`);
    }, time);
    time += 1.5 * 1000;

    setTimeout(function () {
        interaction.editReply(`----🌵🌵-🦖----------🌵------`);
    }, time);
    time += 1.5 * 1000;

    setTimeout(function () {
        interaction.editReply(`🦖\n ---🌵🌵-------------🌵---`);
    }, time);
    time += 1.5 * 1000;

    setTimeout(function () {
        interaction.editReply(`-----🦖---🌵🌵-------------🌵--`);
    }, time);
    time += 1.5 * 1000;

    setTimeout(function () {
        interaction.editReply(`-------🦖-----🌵🌵-------------`);
    }, time);
    time += 1.5 * 1000;

    setTimeout(function () {
        interaction.editReply(`🎂----🦖--------🌵🌵-----------`);
    }, time);
    time += 1.5 * 1000;

    setTimeout(function () {
        interaction.editReply(`---🎂--🦖----------🌵🌵---------`);
    }, time);
    time += 1.5 * 1000;

    setTimeout(function () {
        interaction.editReply(`**Ⓜⓘⓢⓢⓘⓞⓝ Ⓒⓞⓜⓟⓛⓔⓣⓔⓓ !**\n ---🎂🦖----------🌵🌵-------------`);
    }, time);
    }
};
