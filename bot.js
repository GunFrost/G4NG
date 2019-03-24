const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`$help | $inv`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});
////////////////////////////////////ADMIN//////////////////////////////////
client.on('message', message => {

    if (message.content === "$mc") {
                        if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات ? ")
           });
             }
if (message.content === "$umc") {
    if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات?")
           });
             }



});
client.on('message', message => {
const prefix = "$";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);
  if (command == "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("منشن شخص");
  if(!reason) return message.reply ("اكتب سبب الطرد");
  if (!message.guild.member(user)
  .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");

  message.guild.member(user).kick(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor('Kicked !', user.displayAvatarURL)
  .setColor("#9B59B6")
  .setTimestamp()
  .addField("User:",  `[ + ${user.tag} + ]`)
  .addField("By:", `[  + ${message.author.tag} +  ]`)
  .addField("Reason:", `[ + ${reason} +  ]`)
  client.channels.get("492086928397565952").send({embed : banembed})
}
});



 client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**baneed from this server**`)

}
});
///////////////////////////////////VOICE USERS////////////////////////////////////////////////////
client.on('message' , message => {
if(message.content === '$voice') { // الامر
    message.channel.send(`**عدد الاشخاص الموجودين بـ  الرومات الصوتيه : ${message.guild.members.filter(g => g.voiceChannel).size}**`);
}
});
//////////////////////////////////////SAY BOT//////////////////////////////////////////////
        var prefix = "$";
    client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR**');


   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });
/////////////////////////////////MAKE TEMP VOICE CHANNEL//////////////////////////////////////////
client.on("message", (message) => {
if (message.content.startsWith("$cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
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
                        .setColor("#9B59B6")
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
         message.channel.send({embed:embed});
                        }
                    });
////////////////////////////////////////////TEXT THE BOT////////////////////////////////////////
client.on("message", (message) => {
                        if (message.channel.type === "dm") {
                    if (message.author.id === client.user.id) return;
                    let yumz = new Discord.RichEmbed()
                                .setTimestamp()
                                .setTitle("Direct Message To The Bot")
                                .addField(`Sent By:`, `<@${message.author.id}>`)
                                .setColor("#9B59B6")
                                .setThumbnail(message.author.displayAvatarURL)
                                .addField(`Message: `, `\n\n\`\`\`${message.content}\`\`\``)
                                .setFooter(`DM Bot Messages | DM Logs`)
                            client.users.get("515938020747116547").send(yumz)
                        }
               });
///////////////////////////////////////DM WELCOME////////////////////////////////////////////////
client.on('guildMemberAdd', member => {
          member.createDM().then(function (channel) {
       return channel.send("**WELCOME TO __HOT REWARDS SERVER__ :hot_emo: **")
          }
          )});
//////////////////////////////////////SHOW/HIDE CHAT/////////////////////////////////////////////////
client.on('message', message => {
        if(message.content === prefix + "hc") {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms ❌');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: false
   })
                message.channel.send('Channel Hided Successfully ! ✅  ')
   }
  });


client.on('message', message => {
        if(message.content === prefix + "sc") {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('❌');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: true
   })
                message.channel.send('Done  ')
   }
  });
/////////////////////////////////////////AVATAR////////////////////////////////////////////////
client.on('message', message => {
    if (message.content.startsWith("$avatar")) {
if(!message.channel.guild) return;
        var mentionned = message.mentions.users.first();
    var client;
      if(mentionned){
          var client = mentionned; } else {
          var client = message.author;
      }
        const embed = new Discord.RichEmbed()
                           .addField('Requested by:', "<@" + message.author.id + ">")
        .setColor("#9B59B6")
        .setImage(`${client.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});
//////////////////////////////////////////BOT INFO///////////////////////////////////////////////////////
client.on('message', message => {
    if (message.content === "$system") {
           if(!message.channel.guild) return message.reply('** This command only for servers **');
    let embed = new Discord.RichEmbed()
 .setColor("#9B59B6")
 .addField("**اسم السيرفر**", message.guild.name)
 .addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
 .addField("**المستخدمين:**", client.users.size)
 .addField("**قنوات:**", client.channels.size)
message.channel.sendEmbed(embed);
   }
});
////////////////////////////////////NEW TICKET////////////////////////////////////////////////////
client.on("message", (message) => {
    /// DREAM
   if (message.content.startsWith("$new")) {     /// DREAM
        const reason = message.content.split(" ").slice(1).join(" ");     /// DREAM
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`**You must make new role named __SUPPORT TEAM__ with an ADMIN ability**`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });    /// ALPHA CODES
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: تم انشاء تذكرتك, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `**منشن الاونر او الفاوندر مرة وحدة بس و اكتب الي تبيه و انتظر حتى الستاف يساعدك**`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("$close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`اكتب $close لتاكيد عملية اغلاق التذكرة`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '$close', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })    /// DREAM
                   .then((collected) => {
                       message.channel.delete();
                   })    /// DREAM
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
});
////////////////////////////USER//////////////////////////
client.on('message', message => {
          

  if (message.content.startsWith("$user")) {
   
   if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

       message.guild.fetchInvites().then(invs => {
let member = client.guilds.get(message.guild.id).members.get(message.author.id);
let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
var moment = require('moment');
var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
var heg;
if(men) {
heg = men
} else {
heg = message.author
}
var mentionned = message.mentions.members.first();
var h;
if(mentionned) {
h = mentionned
} else {
h = message.member
}
moment.locale('ar-TN');
var id = new  Discord.RichEmbed()

.setColor("#9B59B6")
.setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
.addField(` :لقد قمت بدعوة `, ` ${inviteCount} `)


.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);
})
}



});
//////////////////////////////////////EN INFO///////////////////////////////
client.on("message", msg => {
var prefix = 'en$';// البرفكس
var m = msg.guild.name
var d = msg.guild.memberCount
var p = msg.guild.roles.size
var c = msg.guild.channels.size
var l = msg.guild.region
var o = msg.guild.iconURL
var k = msg.guild.owner
var i = msg.guild.emojis.size
var b = msg.guild.members.filter(m => m.user.bot).size
var h = d - b
var cre = `${moment(msg.guild.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(msg.guild.createdAt).fromNow()}\``
var t = msg.guild.channels.filter(e => e.type === "text")
var v = msg.guild.channels.filter(e => e.type === "voice")
var pow = msg.guild.verificationLevel
var e = msg.guild.emojis.size
var e2 = msg.guild.emojis.array()
var afk = msg.guild.afkChannel
var ID = msg.guild.id
if (msg.content.startsWith(prefix + "info")){// الامر
var embed = new Discord.RichEmbed()
.setColor("#9B59B6")
.setThumbnail(o)
.addField("👑**Owner**👑⤵", k, true)
.addField("📜**Name**📜⤵", m, true)
.addField("🆔**ID**🆔⤵", ID, true)
.addField("👥**MembersAll**🤖⤵", d, true)
.addField("📕**Roles**📕⤵", p, true)
.addField("📕**Channels**📕⤵", c, true)
.addField("🌐**Region**🌐⤵", l, true)
.addField("🤖**Bots**🤖⤵", b, true)
.addField("👥**Humans**👥⤵", h, true)
.addField("📝**TextRooms**📝⤵", `${t.size}`, true)
.addField("🔒**verificationLevel**🔒➥", pow, true)
.addField("🎤**VoiceRooms**🎤⤵", `${v.size}`, true)
.addField("📆Created At📆⤵", cre,true)
.addField("🛏AFKRoom🛏⤵", afk, true)
msg.channel.sendEmbed(embed);
}
});
//////////////////////////AR INFO/////////////////
client.on("message", msg => {
var prefix = 'ar$';// البرفكس
var m = msg.guild.name
var d = msg.guild.memberCount
var p = msg.guild.roles.size
var c = msg.guild.channels.size
var l = msg.guild.region
var o = msg.guild.iconURL
var k = msg.guild.owner
var i = msg.guild.emojis.size
var b = msg.guild.members.filter(m => m.user.bot).size
var h = d - b
var cre = `${moment(msg.guild.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(msg.guild.createdAt).fromNow()}\``
var t = msg.guild.channels.filter(e => e.type === "text")
var v = msg.guild.channels.filter(e => e.type === "voice")
var pow = msg.guild.verificationLevel
var e = msg.guild.emojis.size
var e2 = msg.guild.emojis.array()
var afk = msg.guild.afkChannel
var ID = msg.guild.id
if (msg.content.startsWith(prefix + "info")){
var embed = new Discord.RichEmbed()
.setColor("#9B59B6")
.setThumbnail(o)
.addField("👑**ريْس السيرفر**👑⤵", k, true)
.addField("📜**اسم السيرفر**📜⤵", m, true)
.addField("🆔**ايدي السيرفر**🆔⤵", ID, true)
.addField("👥**كل الاعضاء**🤖⤵", d, true)
.addField("📕**الرتب**📕⤵", p, true)
.addField("📕**القنوات**📕⤵", c, true)
.addField("🌐**نوع السيرفر**🌐⤵", l, true)
.addField("🤖**البوتات**🤖⤵", b, true)
.addField("👥**الاشخاص**👥⤵", h, true)
.addField("📝**الرومات الكتابيه**📝⤵", `${t.size}`, true)
.addField("🔒**مستوى حماية السيرفر**🔒⤵", pow, true)
.addField("🎤**الرومات الصوية**🎤⤵", `${v.size}`, true)
.addField("📆**تم انشاء السيرفر في**📆⤵", cre,true)
.addField("🛏غرفت النوم🛏⤵", afk, true)
msg.channel.sendEmbed(embed);
}
});
/////////////////////////ROLE ADD////////////////////////////
client.on('message', message => { 
    var prefix = "$";
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "role") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**🚫انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**ضع منشن الشخص!!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(msg => {msg.delete(5000)});
    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
    message.reply('*** Done ✅  ***').then(msg => {msg.delete(10000)});
    }
    });
/////////////////////////////AUTO BAN FAKES////////////////////////////////
const moment = require("moment")
client.on("guildMemberAdd", m => {
    if (datediff(parseDate(moment(m.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < 8) {
        m.ban();
    };
    function parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    };
    
    function datediff(first, second) {
        return Math.round((second-first)/(1000*60*60*24));
    };
});
//////////////////////////////////////CLEAR/////////////////////////////////
client.on("message", message => {
    var prefix = "$"; // غير هنا حط البرفكس
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: "#9B59B6",
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "F5AmEh.bot" // غير هنا حط اسم البوت
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
///////////////////////////////RULES/////////////////////////////////////
client.on('message', message => {
            if (message.content.startsWith("$rules")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     اولا ' ,' ممنوع السب ')
.addField('     ثانيا ' ,' لا تسوي سبام  ')
.addField('     ثالثا ' ,' لا تزعج الاخرين ')
.addField('    رابعا' ,' ممنوع الاعلانات ')
.addField('    خامسا' ,' احترم الاخرين ')
.addField('    سادسا' ,' لا تنشر في الشات او بل خاص ')//Codes Server
.addField('    سابعا' ,' لا تنشر روابط! ')
.addField('    ثامنا' ,' لا تسوي سبام ايموجي ')
.addField('    تاسعا' ,' لا تطلب رتبه الاداره ! ')
.setColor("#9B59B6")
  message.channel.sendEmbed(embed);//Codes Server
    }
});
/////////////////////////////////MUTE UNMUTE + TIME AND CAUSE///////////////////////////////////////
const ms = require("ms");
  client.on("message", message => {
 if(!message.channel.guild) return;  
  if (message.author.bot) return;
 
  let command = message.content.split(" ")[0];
 
  if (message.content.split(" ")[0].toLowerCase() === prefix + "unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return;
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply(" I Can’t Find 'Muted' Role ").catch(console.error).then(message => message.delete(4000))
  if (message.mentions.users.size < 1) return message.reply(' Error : ``Mention a User``').catch(console.error).then(message => message.delete(4000))
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return;
 
  if (message.guild.member(user).removeRole(muteRole.id)) {
      return message.reply("User Has Been UnMuted.").catch(console.error).then(message => message.delete(4000))
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      return message.reply("User Has Been UnMuted.").catch(console.error).then(message => message.delete(4000))
    });
  }
 
};
 
});


client.on('message',function(message) {
 if(!message.channel.guild) return;    let messageArray = message.content.split(' ');
    let muteRole =  message.guild.roles.find('name', 'Muted');
    let muteMember = message.mentions.members.first();
    let muteReason = messageArray[2];
    let muteDuration = messageArray[3];
 if (message.content.split(" ")[0].toLowerCase() === prefix + "mute") {
            
  if (message.author.bot) return;
       if(!muteRole) return message.guild.createRole({name: 'Muted'}).then(message.guild.channels.forEach(chan => chan.overwritePermissions(muteRole, {SEND_MESSAGES:false,ADD_REACTIONS:false})));
       if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.channel.send(' Error : You Need `` MANAGE_ROLES ``Permission ');
       if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(' Error : I Don’t Have `` MANAGE_ROLES ``Permission ');
       if(!muteMember) return message.channel.send(' Error : ``Mention a User``').then(message => message.delete(4000))
       if(!muteReason) return message.channel.send(' Error : ``Supply a Reason``').then(message => message.delete(4000))
       if(!muteDuration) return message.channel.send(' Error : `` Supply Mute Time `` \n Ex: #mute @user reason 1m ').then(message => message.delete(4000))
       if(!muteDuration.match(/[1-7][s,m,h,d,w]/g)) return message.channel.send(' Error : `` Invalid Mute Duration``').then(message => message.delete(4000))
       message.channel.send(`${muteMember} Has Been Muted.`).then(message => message.delete(5000))
       muteMember.addRole(muteRole);
       muteMember.setMute(true)
       .then(() => { setTimeout(() => {
           muteMember.removeRole(muteRole)
           muteMember.setMute(false)
       }, mmss(muteDuration));
       });
   } 
});
/////////////////////////////////////////////////////////////ID///////////////////////////////////////////////////////
client.on('message', message => {
    if (message.content === "$id") {
    var year = message.createdAt.getFullYear()
    var month = message.createdAt.getMonth()
    var day = message.createdAt.getDate()
         let embed = new Discord.RichEmbed()
         .setAuthor(message.author.username, message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)
        .addField("**اسمك:**",  '**[ ' + `${message.author.username}` + ' ]**')
          .setThumbnail(message.author.avatarURL)
                   .setFooter(`${message.author.username}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
      .addField('الكود الخاص بك:', message.author.discriminator)
      .addField("**عدد الايام منذ افتتاح حسابك:**", message.author.createdAt.getDate())
        .addField("** تم افتتاح حسابك عام:**", message.createdAt.getFullYear())
            .addField("** عدد الشهور منذ افتتاح حسابك:**", message.createdAt.getMonth())
    
      message.channel.send({embed});
        }
    });
///////////////////////////////////////////////////HELP/////////////////////////////////////////////////////////
client.on('message', message => {
  var prefix = "$";
 if (message.content.startsWith(prefix + 'help')) {
     let pages = [
 	`=-=-=-=-=-=** 🌍 Public Commands - اوامر عامة 🌍 **=-=-=-=-=-=
**   ❖ $rules ===> To Show The Main Rules Of The Server | لعرض القوانين الاساسية
     ❖ $user ====> Information Of Your Profile | معلومات حسابك
     ❖ $id ======> To Show Your ID | ايدي حسابك
     ❖ $ping ====> Ping Of Bot | بنج حك البوت
     ❖ $system ==> Information Of The Bot | معلومات البوت
     ❖ en$info ==> Information Of The Server Translated To English | معلومات السيرفر متردم بالانجليزي
     ❖ ar$info ==> Information Of The Server Translated To Arabic | معلومات السيرفر متردم بالعربي
     ❖ $members ====> Members Count | عدد الاعضاء
     ❖ $roles ===> Show Roles Of The Server | اضهار الرانكات
     ❖ $link ====> To Make Your Own Temp Invite Link | عشان تسوي رابط انفايت مؤقت خاص بك      
     ❖ $emojis ==> Emoji Of Server | ايموجيات السيرفر    
     ❖ $avatar ==> Your Avatar |صورتك الشخصية
     ❖ $new ====> To Open A New Ticket | لفتح ت\كرة جديدة
     ❖ $emojis => To Show Emojis List | لفتح قائمة الايموجيز
**
     ===========================================================
       React With ▶ To See Admins Commands`,
 	`=-=-=-=-=-= **🔧  Admin Commands - اوامر ادارية 🔧** =-=-=-=-=-=
**   ❖ $bc => Broadcast | رسالة جماعية الى كل اعضاء السيرفر
     ❖ $role @user <rank> => Give User Rank | لأعطاء رتبة لعضو معين
     ❖ $role all <rank> => Give All Rank [SOON] | لأعطاء رتبة للجميع
     ❖ $clear => Clear Chat | مسح الشات
     ❖ $mute @user <reason> => Mute User | اعطاء العضو ميوت لازم رتبة <Muted>
     ❖ $unmute @user => Unmute User | لفك الميوت عن الشخص 
     ❖ $kick @user <reason> => Kick User From Server | طرد الشخص من السيرفر
     ❖ $ban @user <reason> => Ban User From Server | حضر الشخص من السيرفر
     ❖ $unban => To Unban A User | لفك البان
     ❖ $unbanall => To Unban All Users | لفك البان من كل الاعضاء الي عندها بان
     ❖ $hideall => To Hide All Rooms | تقفيل كل الرومات
     ❖ $showall => To Show All Rooms | فتح كل الرومات
     ❖ $bl => To Show Ban List | لفتح قائمة الاعضاء المحظورين
     ** 
     ===========================================================
       React With ▶ To See Games Commands [SOON] `,
 	`=-=-=-=-=-= **  Games Commands - اوامر الالعاب  ** =-=-=-=-=-=
**   ❖ $fast => لعبة سرعة كتابة 
     ❖ +xo @user => Game XO [SOON] | لعب اكس او
     ❖ +rps => Rock & Paper & Scissors [SOON] | لعبة حجر ورقة مقص
     ❖ +slots => Game Of Fruits [SOON] | لعبة الفواكه
     ❖ +زواج @user => [SOON] لعبة الزواج
     ❖ $لعبة فكك [SOON] <= [ فكك
     ❖ +لعبة عواصم [SOON] <= عواصم
     ❖ +البوت يعطيك نصائح [SOON] <= هل تعلم
     ❖ +skin => [SOON] Ur Mc Skin
     ❖ +لو خيروك => [SOON] Funny Game Yay
**
      ===========================================================
	  React With ▶ To See Music Commands`,
	`=-=-=-=-=-=  ** :musical_note: Music Commands  -  اوامر الاغاني :musical_note:**  =-=-=-=-=-=
**       ❖ 0help => To Show The Help Menu | لعرض قائمة المساعدة
**
	 ===========================================================
       React With ▶ To See Quran Commands [SOON] `,
	`=-=-=-=-=-= ** :kaaba: Quran Commands  -  اوامر القرأن :kaaba:**  =-=-=-=-=-=
   **  ❖+قران => For Start Quran | لتشغيل القرأن
	 ❖:regional_indicator_a: القرآن كاملاً ماهر المعيقلي
     ❖:regional_indicator_b: سورة البقرة كاملة للشيخ مشاري العفاسي
     ❖:regional_indicator_c: سورة الكهف كاملة بصوت مشارى بن راشد العفاسي
     ❖:stop_button: لإيقاف القرآن الكريم
     ❖:regional_indicator_d: القرآن كاملاً عبدالباسط عبدالصمد
     ❖:regional_indicator_e: القرآن كاملاً ياسر الدوسري
     ❖:regional_indicator_f: سورة الواقعه بصوت الشيخ مشاري بن راشد العفاسي
 	    DgPro**`]
 	let page = 1;
 
     let embed = new Discord.RichEmbed()
     .setColor("#9B59B6")
     .setFooter(`Page ${page} of ${pages.length}`)
     .setDescription(pages[page-1])
 
     message.channel.sendEmbed(embed).then(msg => {
 
         msg.react('◀').then( r => {
             msg.react('▶')
 
 
         const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
         const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
 
 
         const backwards = msg.createReactionCollector(backwardsFilter, { time: 20000});
         const forwards = msg.createReactionCollector(forwardsFilter, { time: 20000});
 
 
 
         backwards.on('collect', r => {
             if (page === 1) return;
             page--;
             embed.setDescription(pages[page-1]);
             embed.setFooter(`Page ${page} of ${pages.length}`);
             msg.edit(embed)
         })
         forwards.on('collect', r => {
             if (page === pages.length) return;
             page++;
             embed.setDescription(pages[page-1]);
             embed.setFooter(`Page ${page} of ${pages.length}`);
             msg.edit(embed)
         })
         })
     })
     }
 });
//////////////////////////////////////////EMOJIS LIST///////////////////////////////
client.on('message', message => { 
    if (message.content.startsWith(prefix + 'emojis')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const EmojiList = new Discord.RichEmbed()
            .setTitle('➠ Emojis') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor("#9B59B6") 
            .setDescription(List) 
            .setFooter(message.guild.name) 
        message.channel.send(EmojiList) 
    }
});

///////////////////////////MENTION BOT = REPLY/////////////////////////////////////
client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply(" كيف اقدر اساعدك!!");
    }
});
/////////////////////////////////////SERVER LOGO/////////////////////////////////////////
client.on("message", message => {
    const prefix = "$"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === "$logo"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`هذه هي صورة سيرفر ** ${message.guild.name} **`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor("#9B59B6")
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
////////////////////////////////////////////HIDE ALL AND SHOW THEM/////////////////////////////////////////////////
client.on('message', msg => {
  if(msg.content === '$hideall') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: false,
        READ_MESSAGES: false
    });
}); //JakeTOXIC
    msg.reply('**All Channels Have Been Hidden** ✅')
  }
});
client.on('message', msg => {
  if(msg.content === '$showall') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
    });
});
    msg.reply('**All Channels Have Been Shown** ✅')
  }
}); 
///////////////////////////////////////////////////////UNBAN ALL///////////////////////////////////////////////////////
client.on('message',async message => {
  if(message.content === '$unbanall') {
    var user = message.mentions.users.first();
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك صلاحية `**');
    if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
    const guild = message.guild;

  message.guild.fetchBans().then(ba => {
  ba.forEach(ns => {
  message.guild.unban(ns);
  const embed= new Discord.RichEmbed()
        .setColor("#9B59B6")
        .setAuthor("Succes!", "https://images-ext-1.discordapp.net/external/vp2vj9m0ieU5J6SHg6ObIsGpTJyoZnGAebrd0_vi848/https/i.imgur.com/GnR2unD.png?width=455&height=455")
        .setDescription(`**:white_check_mark: Has Been Unban For All**`)
    .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  message.channel.sendEmbed(embed);
  guild.owner.send(`سيرفر : ${guild.name}
  **تم فك الباند عن الجميع بواسطة** : <@${message.author.id}>`) 
  });
  });
  }
  });
///////////////////////////////////////BANLIST/////////////////////////////////////////
client.on("message", async message => {
    if(message.content.startsWith(prefix + "bl")) {
        if(!message.guild) return;
                if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('**Sorry But You Dont Have Permission** `BAN_MEMBERS`' );
        message.guild.fetchBans()
        .then(bans => {
            let b = bans.size;
            let bb = bans.map(a => `${a}`).join(" - ");
            message.channel.send(`**\`${b}\` | ${bb}**`);
        });
    }
});
///////////////////////////////////////////////////COUNT////////////////////////////////////
client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='$members')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.iconURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle(' عدد اعضاء السيرفر  ')
      .addBlankField(true)
      .addField('.',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });
/////////////////////////////////AUTO JOIN GIVE ROLE//////////////////////////
client.on('guildMemberAdd', (member) => {
    var channel = member.guild.channels.find('name', 'global-chat');
channel.send(`@${member.user.tag} تم اعطاء العضو رتبت ممبر`)
member.addRole(member.guild.roles.find('name', '【MEMBERS】 '));
});
///////////////////////////////MOVE////////////////////////////////////////
client.on('message',message => {
if(!message.channel.guild) return;
	var prefix1 = "$";
if (!message.content.startsWith(prefix1)) return;
	var command = message.content.split(" ")[0];
	 command = command.slice(prefix1.length);
	if (command == "$move") {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("**:x: Invalid User! :x:**")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannelname = message.member.voiceChannel.name;
 var authorchannel = message.member.voiceChannelID;
 var userid = message.mentions.members.first().id;
 
 message.guild.members.get(userid).setVoiceChannel(authorchannel).then(m => message.channel.send(`:white_check_mark: **<@${userid}> moved to \`\`${authorchannelname}\`\`**`))
	 
} else {
message.channel.send("**:x: User must be in voice channel! :x:**")
}
} else {
 message.channel.send("**:x: You must be in voice channel! :x:**")
}
} else {
message.react("❌")
 }}})
//////////////////////////////WELCOME///////////////////////////////////
client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("520623473530372118");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`**Welcome To __𝓗𝓞𝓣 𝓡𝓮𝔀𝓪𝓻𝓭𝓼__ Server** :rose:`), 4000)        
}
});
////////////////////////AUTO BAN LEAVE + UNBAN HIM////////////////////////////////////////////
client.on('guildMemberRemove', async function(member) {
  try {
    await member.ban({
      days: 7,
      reason: 'Automatic Softban to Remove Messages'
    });
    await member.guild.unban(member, 'Automatic Softban to Remove Messages');
  } catch (e) {
    console.log(e);
  }
})
////////////////////////CODE APPEARS THE SERVERS THAT CONTAINS UR BOT////////////////////////////
client.on('message', message => {
       if (message.content.startsWith(prefix + 'botinvites')) {
     let msg =  client.guilds.map(guild => `**${guild.name}** عدد الاعضاء: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`${client.guilds.size}سيرفرات `)
  .setDescription(`${msg}`)
  .setColor("#9B59B6");
  message.channel.send(embed);
}
});
///////////////////////////////////////////////INVITE THE BOT////////////////////////////////////////////
client.on('message', message => {
  if (true) {
if (message.content === '$inv') {
      message.author.send('**  `https://discordapp.com/oauth2/authorize?client_id=515938020747116547&permissions=268435488&scope=bot`  |  تفضل رابط البوت     **').catch(e => console.log(e.stack));
 
    }
   }
  });
 
 
client.on('message', message => {
     if (message.content === "$inv") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField("** Done | تــــم**" , "** |  تــــم ارســالك في الخــاص**")
     
     
     
  message.channel.sendEmbed(embed);
    }
});
///////////////////////////////////////////TAG//////////////////////////////////////////
client.on('message', msg => {
  let prefix = '$';//البرفكس
  let mentions = msg.guild.member(msg.mentions.users.first()); 
if(msg.content.startsWith(prefix + "tag")){ // !tag @someone
  
 msg.channel.send(`**tag [${mentions}] with ID: [${mentions.user.id}]
 
 tag user is [${mentions.user.discriminator}]
 
 sender by ${msg.author}
 **`);

}

})
////////////////////////////////MC SERVERS STATS///////////////////////////////////
client.on('message', message => {
  const port = '25565'
  if(message.content.startsWith('$mcstats')) {
 const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("**:x: You forgot to mention __the Server IP__ :x:**");
        let embed = new Discord.RichEmbed()
        .setColor("#9B59B6")
        .setThumbnail(`https://api.minetools.eu/favicon/${args}/25565`)
        .addField("📜 Server IP",`${args}`,true)
        .addField("🌐 Server Port",`${port}`)
        .setImage(`http://status.mclive.eu/${args}/${args}/25565/banner.png`)
        .setFooter(`McStats`)
                .setTimestamp()
    message.channel.send(embed)      
}})
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
