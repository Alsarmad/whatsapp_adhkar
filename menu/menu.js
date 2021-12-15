import MenuNmber from '../lib/MenuNmber.js';
import { video } from './video.js';
import { photo } from './photo.js';
import fs from 'fs-extra';
export const menu = {

  async exec({ from, client, pushname, body, isGroup, MessageType, Mimetype }) {

    const new_user = fs.readJsonSync('./db/new_user.json');
    const group_user = fs.readJsonSync('./db/group_user.json');
    const LecturesJson = fs.readJsonSync('./menu/Lectures.json');


    if (body === 'hi' || body === 'Hi' || body === 'خدمة' || body === 'خدمه' || body === '#') {

      let mesg = ` مرحباً بك ${pushname} 👋  \n\n`
      mesg += 'من فضلك قم بكتابة *رقم* الخدمة ✉️ \n\n\n'
      mesg += '1- قائمة القرآن الكريم 📖 \n'
      mesg += '2- قائمة الأذكار 📿 \n'
      mesg += '3- فيديوهات قرآن عشوائية 🎥 \n'
      mesg += '4- صورة عشوائية 🖼️ \n'
      mesg += '5- قائمة الملصقات 🪧 \n'
      mesg += '6- محاضرات عشوائية 🌾 \n'
      mesg += '7- قائمة القروبات ⚜️ \n'
      mesg += '8- بطاقات القرآن 🎴 \n\n\n\n'
      mesg += 'إحصائيات البوت \n'
      mesg += `عدد المحادثات الحالية : ${client.chats.length}\n`
      mesg += `عدد جهات الإتصال : ${Object.keys(client.contacts).length}\n\n`
      mesg += 'بمجرد إضافة البوت لقروبك سيبدأ بنشر الرسائل بشكل تلقائي ⚠️\n\n'
      mesg += 'يمكنك متابعة البوت على تيليجرام عبر الحساب @adhk2r_bot 🤖'

      await client.sendMessage(from, mesg, MessageType.text).catch((erro) => console.log(erro));

    }

    else if (body === '1') {

      MenuNmber(from, 1)

      let quran_menu = 'قم بإختيار القارئ 🔊 \n\n'
      quran_menu += '1- أدريس أبكر \n'
      quran_menu += '2- ماهر المعيقلي \n'
      quran_menu += '3- عبدالله الموسى \n'
      quran_menu += '4- علي جابر \n'
      quran_menu += '5- عبدالرحمن السديس \n'
      quran_menu += '6- خالد الجليل \n\n\n'
      quran_menu += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

      await client.sendMessage(from, quran_menu, MessageType.text).catch((erro) => console.log(erro));

    }

    else if (body === '2') {

      MenuNmber(from, 6)

      let adhkar_menu = '1- أذكار الصباح ☀️ \n'
      adhkar_menu += '2- أذكار المساء 🌑 \n'
      adhkar_menu += '3- أذكار النوم 😴 \n'
      adhkar_menu += '4- أذكار عشوائية 🔄 \n'
      adhkar_menu += '5- أدعية نبوية 🤲 \n'
      adhkar_menu += '6- أذكار عند سماع الآذان 📢 \n'
      adhkar_menu += '7- أذكار المسجد 🕌 \n'
      adhkar_menu += '8- أذكار الوضوء 💦 \n'
      adhkar_menu += '9- أذكار دخول وخروج المنزل 🏠\n'
      adhkar_menu += '10- أذكار الخلاء 🚻 \n'
      adhkar_menu += '11- أذكار الطعام 🥣 \n'
      adhkar_menu += '12- دُعَاءُ خَتْمِ القُرْآنِ الكَريمِ 📖 \n\n\n'
      adhkar_menu += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

      await client.sendMessage(from, adhkar_menu, MessageType.text).catch((erro) => console.log(erro));

    }

    else if (body === '3') {

      let listvideo = video[Math.floor(Math.random() * video.length)]
      await client.sendMessage(from, { url: listvideo }, MessageType.video).catch((erro) => console.log(erro));

    }

    else if (body === '4') {

      let listphoto = photo[Math.floor(Math.random() * photo.length)]
      await client.sendMessage(from, { url: listphoto }, MessageType.image, { thumbnail: Buffer.alloc(0) }).catch((erro) => console.log(erro));

    }

    else if (body === '5') {

      MenuNmber(from, 7)

      let sticker_menu = '1- ملصق عشوائي 🔄 \n'
      sticker_menu += '2- ملصقات يوم الجمعة 🕌 \n'
      sticker_menu += '3- ملصقات صباح الخير ☀️ \n'
      sticker_menu += '4- ملصقات مساء الخير 🌑 \n'
      sticker_menu += '5- صانع الملصقات 🪧 \n\n'
      sticker_menu += '⚠️ لتغير حقوق الملصق قم بإرسال كلمة Me متبوعة بالحقوق \n```Me Bot Adhkar```\n\n\n'
      sticker_menu += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

      await client.sendMessage(from, sticker_menu, MessageType.text).catch((erro) => console.log(erro));

    }

    else if (body === '6') {

      let listlectures = LecturesJson[Math.floor(Math.random() * LecturesJson.length)]
      let msg = `✽\n\n${listlectures.Lectures}\n\n`
      msg += `*الشيخ:* ${listlectures.Author} 🔊 `

      await client.sendMessage(from, { url: listlectures.FilePath }, MessageType.video, { caption: msg }).catch((erro) => console.log(erro));

    }

    else if (body === '7') {

      MenuNmber(from, 9)
      fs.writeJsonSync(`./db/Group/${from}.json`, [])
      let menu_group = '1- نشر قروبك ✉️ \n'
      menu_group += '2- قائمة القروبات ⚜️\n'
      menu_group += '3- قروب عشوائي 🔄\n\n'
      menu_group += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

      await client.sendMessage(from, menu_group, MessageType.text).catch((erro) => console.log(erro));

    }

    else if (body === '8') {

      MenuNmber(from, 12)
      let msg = 'مشروع يهدف إلى خدمة القرآن الكريم وحفّاظِهِ وقارئيه، عن طريق توفير مَتْنٍ مختصرٍ شاملٍ لسور القرآن، وتوفير محتواه مقروؤاً ومرئياً \n\n'
      msg += '*محتوياتُ (البِطَاقَات):*\n\n'
      msg += 'وضعتُ ثمانيةَ (8) عناصرَ موحَّدَةً في كلِّ بطاقةِ تعريفٍ بالسورةِ، وجعلتُهَا مرتبةً ومُرَقَّمَةً، وكتبتُها بعباراتٍ واضحةٍ، وجُمَلٍ مختصرةٍ، وأسلوبٍ ميسرٍ ليسهُلَ حفظُهَا.\n\n'
      msg += '1- آيَـــــــــــــــاتُـــــها \n'
      msg += '2- مَعــــــنَـى اسْـــــــمِها \n'
      msg += '3- سَبَبُ تَسْمِيَتِها \n'
      msg += '4- أَسْـــــمَاؤُهـا \n'
      msg += '5- مَقْصِدُها العَامُّ \n'
      msg += '6- سَبَبُ نُزُولِهَا \n'
      msg += '7- فَضْــــــلُها \n'
      msg += '8- مُنَــاسَــبَاتُــها \n\n'
      msg += '⚠️ لإرسال البطاقة صورة وصوت قم بإرسال رقم السورة او إسم السورة \n\n\n'
      msg += '*【 للرجوع للقائمة الرئيسية أرسل #️ 】*'

      await client.sendMessage(from, msg, MessageType.text).catch((erro) => console.log(erro));

    }

    else if (body === 'dbjson') {

      await client.sendMessage(from, { url: './db/group_user.json' }, MessageType.document, { mimetype: Mimetype.pdf, filename: 'group_user.json' }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: './db/new_user.json' }, MessageType.document, { mimetype: Mimetype.pdf, filename: 'new_user.json' }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: './db/GroupsMenu.json' }, MessageType.document, { mimetype: Mimetype.pdf, filename: 'GroupsMenu.json' }).catch((erro) => console.log(erro));
      await client.sendMessage(from, { url: './db/db.json' }, MessageType.document, { mimetype: Mimetype.pdf, filename: 'db.json' }).catch((erro) => console.log(erro));

    }

    else if (!group_user.includes(from) && isGroup) {

      group_user.push(from)
      fs.writeJsonSync('./db/group_user.json', group_user, { spaces: '\t' })

    }

    else if (!new_user.includes(from) && !isGroup) {


      let mesg = ` مرحباً بك ${pushname} 👋  \n\n`
      mesg += 'من فضلك قم بكتابة *رقم* الخدمة, ولمعرفة خدمات البوت أرسل كلمة خدمة ✉️'

      new_user.push(from)
      fs.writeJsonSync('./db/new_user.json', new_user, { spaces: '\t' })
      await client.sendMessage(from, mesg, MessageType.text).catch((erro) => console.log(erro));

    }

  }

};