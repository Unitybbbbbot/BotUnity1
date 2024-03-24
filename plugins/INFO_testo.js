const handler = async (m, {conn, usedPrefix: _p}) => {
  const info = `
*⍣botwhaita⍣*
Tutorial
https://www.youtube.com/watch?v=6Cg1yUMz-Do
Se non riesci cosi lascia perdere, sei troppo stupido.
    `.trim();

  conn.reply(m.chat, info);
};
handler.command = /^(tutorial)$/i;

export default handler;
