import MenuNmber from '../lib/MenuNmber.js';
import fs from 'fs-extra';


export const Groups = {
    

    async exec({ from, client, pushname, messages, MessageType }) {

        const body = messages && messages.conversation ? messages.conversatio : messages && messages.extendedTextMessage ? messages.extendedTextMessage.text : messages && messages.imageMessage ? messages.imageMessage.caption : messages && messages.videoMessage ? messages.videoMessage.caption : ''

        if (body === '1'){

            MenuNmber(from, 10)

            let group_name = 'من فضلك ادخل إسم المجموعة 💬'
            await client.sendMessage(from, group_name, MessageType.text).catch((erro) => console.log(erro));
        }

        else if (body === '2'){

            let GroupsMenu = fs.readJsonSync(`./db/GroupsMenu.json`);
            var list_group = '            ═✪〘 المجموعات 〙✪═ \n\n'
            for (let lop of GroupsMenu) {

                list_group += `إسم المجموعة: ${lop.name} \n`
                list_group += `${lop.url} \n\n`
            }
            list_group += '\n\n*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

            await client.sendMessage(from, list_group, MessageType.text, { detectLinks: false }).catch((erro) => console.log(erro));
            
            
        }

        else if (body === '3'){

            let GroupsMenu = fs.readJsonSync('./db/GroupsMenu.json');
            let listgroups = GroupsMenu[Math.floor(Math.random() * GroupsMenu.length)]
            let msg = `إسم المجموعة: ${listgroups.name} \n`
            msg += `${listgroups.url}`
            await client.sendMessage(from, msg, MessageType.text).catch((erro) => console.log(erro));
            
        }

        else if (body === 'Hi' || body === 'hi' || body === 'خدمة' || body === 'خدمه' || body === '#'){

            MenuNmber(from, 0)

            let mesg = ` مرحباً بك ${pushname} 👋  \n\n`
            mesg += 'من فضلك قم بكتابة *رقم* الخدمة ✉️ \n\n\n'
            mesg += '1- قائمة القرآن الكريم 📖 \n'
            mesg += '2- قائمة الأذكار 📿 \n'
            mesg += '3- فيديوهات قرآن عشوائية 🎥 \n'
            mesg += '4- صورة عشوائية 🖼️ \n'
            mesg += '5- قائمة الملصقات 🪧 \n'
            mesg += '6- محاضرات عشوائية 🌾 \n'
            mesg += '7- قائمة القروبات ⚜️ \n\n\n\n'
            mesg += 'إحصائيات البوت \n'
            mesg += `عدد المحادثات الحالية : ${client.chats.length}\n`
            mesg += `عدد جهات الإتصال : ${Object.keys(client.contacts).length}\n\n`
            mesg += 'بمجرد إضافة البوت لقروبك سيبدأ بنشر الرسائل بشكل تلقائي ⚠️\n\n'
            mesg += 'يمكنك متابعة البوت على تيليجرام عبر الحساب @adhk2r_bot 🤖'
        
            await client.sendMessage(from, mesg, MessageType.text).catch((erro) => console.log(erro));

        }

    }

}