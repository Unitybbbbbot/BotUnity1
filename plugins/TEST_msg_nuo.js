const handler = async (m, {
  conn, args, participants, groupMetadata,
}) => {
  const gruppo = global.db.data.chats;
  const utenti = Object.entries(gruppo).map(([key, value]) => {
    return {
      ...value, jid: key,
    };
  });

  const sortedMessaggi = utenti.map(toNumber('messaggi')).sort(sort('messaggi'));
  const utentiMessaggi = sortedMessaggi.map(enumGetKey);
  const len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 3)) : Math.min(3, sortedMessaggi.length);
  const text = `🏆 Classifica
Top 3 migliori utenti per categoria

💬 Messaggi
🥇 ${sortedMessaggi.slice(0, len).map(({jid, messaggi}, i) => `${participants.some((m) => jid === m.name) ? ` (${groupMetadata.subject})` : '@'
      [0]}${jid.split`@`[0]} ${messaggi}`).join`\n🏅`}

`.trim();
  conn.reply(m.chat, text, m, {
    mentions: [...utentiMessaggi.slice(0, len)].filter((v) => !participants.some((p) => v === p.name)),
  });
};
handler.command = /^(p)$/i;
export default handler;
function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property];
  else return (...args) => args[ascending & 1] - args[!ascending & 1];
}
function toNumber(property, _default = 0) {
  if (property) {
    return (a, i, b) => {
      return {
        ...b[i], [property]: a[property] === undefined ? _default : a[property],
      };
    };
  } else return (a) => a === undefined ? _default : a;
}
function enumGetKey(a) {
  return a.jid;
}
