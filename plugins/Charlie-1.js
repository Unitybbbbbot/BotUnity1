let handler  = async (m, { conn }) => { 

   conn.reply(m.chat,` ${author} *ha detto* \n*“${pickRandom(global.charlie)}”*\n   
${author} 
   `, m) 
 } 

 handler.help = ['si o no']
handler.tags = ['si o no']
handler.customPrefix = /si/i
handler.command = new RegExp



  

 export        default handler 

  

 function pickRandom(list) { 

   return list[Math.floor(list.length * Math.random())] 

 } 

  

 // charlie charlie by odin el fucker kkkkkkkkkk 

 global.charlie = [ 

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No",   

 "Si","No","Si","No", "Si","No", "Si","No", "Si","No" 

 ] 
