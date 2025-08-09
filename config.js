const fs = require("fs");
require("dotenv").config();

let config = {
    prefix: process.env.PREFIX || "?",
    ownerName: process.env.OWNER_NAME || "BŌTGØDJÅY",
    ownerNumber: process.env.OWNER_NUMBER || "2349163481768",
    mode: process.env.MODE || "private",
    region: process.env.REGION || "Nigeria",
    botName: process.env.BOT_NAME || "𝐑𝐢𝐚𝐬 𝐆𝐫𝐞𝐦𝐨𝐫𝐲",
    exifPack: process.env.EXIF_PACK || "𝐑𝐢𝐚𝐬 𝐆𝐫𝐞𝐦𝐨𝐫𝐲",
    exifAuthor: process.env.EXIF_AUTHOR || "𝑴𝒂𝒅𝒆 𝑩𝒚 𝑻𝒐𝒙𝒙𝒊𝒄",
    timeZone: process.env.TIME_ZONE || "Africa/Lagos",
    presenceStatus: process.env.PRESENCE_STATUS || "typing",
    autoRead: process.env.AUTO_READ?.toLowerCase() === "false" || false,
    autoViewStatus: process.env.AUTO_VIEW_STATUS?.toLowerCase() === "false" || false,
    autoReact: process.env.AUTO_REACT?.toLowerCase() === "false" || false,
    sessionId: process.env.SESSION_ID || "PRINCE-MDX~xF6VkCN2MuZVVDjILyQ8",
    autoRejectEnabled: process.env.AUTO_REJECT_ENABLED?.toLowerCase() === "false" || false,
    antiDelete: process.env.ANTIDELETE?.toLowerCase() === "true" || false,
    sessionSite: process.env.SESSION_SITE || 'https://session-toxxictech.zone.id',    
    menuType: process.env.MENU_TYPE || 1  // 1 = Image, 2 = Video
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(`🔥 Update detected in '${__filename}', reloading Rias Gremory's config...`);
    delete require.cache[file];
    config = require(file);
});

module.exports = config;
