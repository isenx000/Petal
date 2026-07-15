const { Events } = require('discord.js');
// const chalk = require('chalk');
const fs = require('fs');

module.exports = (client) => {

    // if (client.shard.ids[0] === 0) console.log(`\u001b[0m`);
    // if (client.shard.ids[0] === 0) console.log(`System >> Loading events ...`);
    // if (client.shard.ids[0] === 0) console.log(`\u001b[0m`);

    fs.readdirSync('./src/events').forEach(dirs => {
        const events = fs.readdirSync(`./src/events/${dirs}`).filter(files => files.endsWith('.js'));

        // if (client.shard.ids[0] === 0) console.log(`System >> ${events.length} events of ${dirs} loaded`);

        for (const file of events) {
            const event = require(`../../events/${dirs}/${file}`);
            const eventName = file.split(".")[0];
            const eventUpperCase = eventName.charAt(0).toUpperCase() + eventName.slice(1);
            if(Events[eventUpperCase] === undefined){
                client.on(eventName, event.bind(null, client))
            } else {
                client.on(Events[eventUpperCase], event.bind(null, client))
            }
        };
    });
}

 