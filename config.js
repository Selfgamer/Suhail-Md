const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27814453907";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_54_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgODgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MixcbiAgICAgICAgMjAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODksXG4gICAgICAgIDc4LFxuICAgICAgICAxMSxcbiAgICAgICAgNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMixcbiAgICAgICAgODksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMCxcbiAgICAgICAgNDksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA0NyxcbiAgICAgICAgMixcbiAgICAgICAgMTMzLFxuICAgICAgICA1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDc3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEyLFxuICAgICAgICA0MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTExLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDU5LFxuICAgICAgICA0MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDczLFxuICAgICAgICA5MixcbiAgICAgICAgMTM2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDcxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA2MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ0LFxuICAgICAgICA0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODEsXG4gICAgICAgIDIxLFxuICAgICAgICA5MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzksXG4gICAgICAgIDc5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDUxLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3K3dKRVAyR1lFZjB0bjVHUndlRHFoN3hqMm02ZGZ1ZUgycGY4dWZabDVFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0SENpcHJwVlR2dXVEMDVSekI0cElnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdiNjhiMTA2LTQ2ZGUtNGM0Ni1hMjE1LTg5NmVlNjYyMzdiMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2LFxuICAgICAgMjAzLFxuICAgICAgMTU3LFxuICAgICAgMTAwLFxuICAgICAgMjAyLFxuICAgICAgMTI2LFxuICAgICAgODYsXG4gICAgICAxMDksXG4gICAgICAxMjAsXG4gICAgICAzMCxcbiAgICAgIDExNCxcbiAgICAgIDQ0LFxuICAgICAgMjUwLFxuICAgICAgMjUyLFxuICAgICAgODYsXG4gICAgICAyMjQsXG4gICAgICA1LFxuICAgICAgMjUxLFxuICAgICAgNjMsXG4gICAgICAxNzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOSxcbiAgICAgIDI0MyxcbiAgICAgIDU5LFxuICAgICAgMyxcbiAgICAgIDEzOCxcbiAgICAgIDE1MSxcbiAgICAgIDE1NSxcbiAgICAgIDIyMSxcbiAgICAgIDc3LFxuICAgICAgNCxcbiAgICAgIDEzNixcbiAgICAgIDE0LFxuICAgICAgMTIwLFxuICAgICAgMTgwLFxuICAgICAgNDMsXG4gICAgICAxNTIsXG4gICAgICA1LFxuICAgICAgMjIxLFxuICAgICAgMTU2LFxuICAgICAgMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiODE2Rlg4QkNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3ODE0NDUzOTA3OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMDQxNTc2NTQ4MzU0MToyNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMNnM5dVFFRUt5TXBMUUdHQW9nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImErRWE4ejczUnRadmpKcXprd2VNOExPNnY2OTBWQy9ZaVo0R2VEOTFCRmc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTmN0NVp2ckdPZmlFcnVGbnpuTVBkSCtNTGRCVTVPWFdjelJDY3ZkcGZvejdUQ0J5WlFNZFZOUXloYmlSRDlOZVg0QTZvNUJGSVN1L1c3L0hJRmFIQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT3NQZnZnZmZ3aGdhYVZ0UlRKTnBwamZSelZKRk8wRCsxOXRqWk9VQWllbVA1WkJoLzdXMUtqZjFaWFR6SmpGdFJTWGZpQWJCbDNNV3pBS2hLRDlTaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc4MTQ0NTM5MDc6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI1NjA0NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpTTVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSlNNLmpzb24iOiAie1wia2V5RGF0YVwiOlwiRkNOVVVsZFNqRlBCTVNETHdWSzdGSDNZSnhpaXJUUnJCNzY2K0pGTkNqZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjg1Mzk2MDMwLFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCw3LDhdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjAyMjYxMzQzNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
