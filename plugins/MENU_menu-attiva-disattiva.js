import os from 'os';
import util from 'util';
import sizeFormatter from 'human-readable';
import MessageType from '@whiskeysockets/baileys';
import fs from 'fs';
import {performance} from 'perf_hooks';
const handler = async (m, {conn, usedPrefix}) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalreg = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats);
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'));
  const groups = chats.filter(([id]) => id.endsWith('@g.us'));
  const used = process.memoryUsage();
  const {restrict} = global.db.data.settings[conn.user.jid] || {};
  const {autoread} = global.opts;
  const grup = './Menu2.jpg';
  const old = performance.now();
  const neww = performance.now();
  const speed = (neww - old).toFixed(5);
  const text = `
┌──*𝑨𝑻𝑻𝑰𝑽𝑨|𝑫𝑰𝑺𝑨𝑻𝑻𝑰𝑽𝑨*──┐
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒓𝒆𝒔𝒕𝒓𝒊𝒄𝒕
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒏𝒕𝒊𝒑𝒓𝒊𝒗𝒂𝒕𝒐
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒔𝒐𝒍𝒐𝒈𝒓𝒖𝒑𝒑𝒐
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒖𝒕𝒐𝒓𝒆𝒂𝒅
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒃𝒆𝒏𝒗𝒆𝒏𝒖𝒕𝒐
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒏𝒕𝒊𝒍𝒊𝒏𝒌
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒏𝒕𝒊𝒍𝒊𝒏𝒌𝒉𝒕𝒕𝒑𝒔
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒏𝒕𝒊𝒔𝒑𝒂𝒎
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒅𝒆𝒕𝒆𝒄𝒕
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒏𝒕𝒊𝒆𝒍𝒊𝒎𝒊𝒏𝒂
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒏𝒕𝒊𝒗𝒊𝒆𝒘𝒐𝒏𝒄𝒆
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒏𝒕𝒊𝒕𝒓𝒂𝒗𝒂
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒏𝒕𝒊𝒑𝒂𝒌𝒊
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒎𝒐𝒅𝒐𝒂𝒅𝒎𝒊𝒏
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒂𝒖𝒕𝒐𝒔𝒕𝒊𝒄𝒌𝒆𝒓
│✏︎ ${usedPrefix} 𝒂𝒕𝒕𝒊𝒗𝒂/𝒅𝒊𝒔𝒂𝒃𝒊𝒍𝒊𝒕𝒂 𝒄𝒉𝒂𝒕𝒃𝒐𝒕
│✏︎ 𝐕𝐄𝐋𝐎𝐂𝐈𝐓𝐀': ${speed} 𝐬𝐞𝐜𝐨𝐧𝐝𝐢
└────*𝑩𝑶𝑻UNITY V${vs}*
`.trim();
  conn.sendFile(m.chat, grup, 'errop.jpg', text, m, false );
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menuattiva)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ms, h, m, s});
  return [h, m, s].map((v) => v.toString().padStart(2, 0) ).join(':');
}
