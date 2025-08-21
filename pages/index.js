import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Headphones, MessageSquare, Users, Building2, Star, Clock, ChevronRight, Phone } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import OpusButton from '@/components/OpusButton';

export default function Landing(){
  const [open, setOpen] = useState(false);
  return (
  <div className="min-h-screen bg-white text-gray-900 dark:bg-slate-950 dark:text-slate-100">
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto h-16 px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3"><div className="w-9 h-9 rounded-xl grid place-items-center font-bold text-white" style={{background:'var(--brand-green)'}}>OP</div><div className="font-semibold">OPUS</div></div>
        <nav className="hidden md:flex items-center gap-6 text-sm opacity-90"><a href="#how">Как работает</a><a href="#features">Возможности</a><a href="#stats">Цифры</a><a href="#contact">Контакты</a></nav>
        <div className="flex items-center gap-3"><ThemeToggle/><OpusButton onClick={()=>setOpen(true)} className="hidden sm:inline-flex">Оставить заявку</OpusButton><a href="tel:+996500000921" className="inline-flex items-center gap-2 px-3 h-9 rounded-xl border border-slate-300 dark:border-slate-700"><Phone className="w-4 h-4"/> +996 500 000 921</a></div>
      </div>
    </header>
    <section className="max-w-6xl mx-auto px-4 md:px-8 pt-14 md:pt-24 pb-10 md:pb-20 grid md:grid-cols-2 items-center gap-10">
      <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Инфраструктура гибкой занятости для HoReCa</h1>
        <p className="mt-4 opacity-80">OPUS — «скорая помощь» для бизнеса: уборщицы, посудомойщицы и другой персонал в один клик.</p>
        <div className="mt-6 flex gap-3 flex-wrap"><OpusButton onClick={()=>setOpen(true)}>Создать заказ</OpusButton><OpusButton variant="outline" className="border-2">Стать исполнителем</OpusButton></div>
        <ul className="mt-6 space-y-2 text-sm md:text-base"><li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400"/>Подбор за 15 минут</li><li className="flex items-center gap-2"><Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400"/>Проверенные исполнители</li><li className="flex items-center gap-2"><Headphones className="w-4 h-4 text-emerald-600 dark:text-emerald-400"/>Поддержка WhatsApp/Telegram</li></ul>
      </motion.div>
      <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.1}}>
        <div className="rounded-3xl p-6 border bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-950 border-slate-200 dark:border-slate-800">
          <div className="rounded-2xl p-6 bg-slate-900 text-white">
            <div className="text-white/90 text-lg font-semibold">Заявка ресторана</div>
            <div className="mt-4 grid gap-3 text-white/80 text-sm"><div className="flex justify-between"><span>Тип:</span><span className="font-medium">Посудомойщица</span></div><div className="flex justify-between"><span>Адрес:</span><span className="font-medium">Бишкек, Исанова 21</span></div><div className="flex justify-between"><span>Смена:</span><span className="font-medium">Сегодня, 18:00–00:00</span></div><div className="flex justify-between"><span>Ставка:</span><span className="font-medium">1200 c</span></div></div>
            <div className="mt-6 flex gap-2"><OpusButton className="grow" onClick={()=>setOpen(true)}>Подобрать</OpusButton><OpusButton variant="outline" className="bg-white/10 text-white border-white/20">Детали</OpusButton></div>
          </div>
        </div>
      </motion.div>
    </section>
    <footer id="contact" className="border-t border-slate-200 dark:border-slate-800 py-10 mt-10"><div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-6"><div><div className="flex items-center gap-3"><div className="w-9 h-9 rounded-xl grid place-items-center font-bold text-white" style={{background:'var(--brand-green)'}}>OP</div><div className="font-semibold">OPUS</div></div><p className="mt-3 text-sm opacity-80">Инфраструктура гибкой занятости.</p></div><div><div className="font-semibold mb-2">Контакты</div><ul className="text-sm opacity-80 space-y-1"><li>Бишкек, Кыргызстан</li><li><a href="tel:+996500000921" className="underline">+996 500 000 921</a></li><li>Instagram: @opus_kg</li></ul></div><div><div className="font-semibold mb-2">Для бизнеса</div><ul className="text-sm opacity-80 space-y-1"><li><a href="#">Личный кабинет</a></li><li><a href="#">FAQ</a></li><li><a href="#">Политика конфиденциальности</a></li></ul></div></div><div className="max-w-6xl mx-auto px-4 md:px-8 mt-8 text-xs opacity-60">© {new Date().getFullYear()} OPUS</div></footer>
    <OrderForm open={open} onClose={()=>setOpen(false)}/>
  </div>)
}

function OrderForm({open,onClose}){
  const [form,setForm]=useState({role:'Посудомойщица',date:'',time:'',address:'',rate:'',name:'',phone:''});
  const handle=e=>setForm({...form,[e.target.name]:e.target.value});
  const submit=e=>{e.preventDefault(); console.log('ORDER_SUBMIT',form); alert('Заявка отправлена!'); onClose();};
  return (<div aria-hidden={!open} className={`fixed inset-0 z-50 ${open?'':'pointer-events-none'}`}>
    <div className={`absolute inset-0 bg-black/30 transition-opacity ${open?'opacity-100':'opacity-0'}`} onClick={onClose}/>
    <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-xl transition-transform ${open?'translate-x-0':'translate-x-full'}`}>
      <div className="p-6 space-y-4"><h3 className="text-xl font-semibold">Создать заказ</h3>
        <form onSubmit={submit} className="grid gap-3">
          <label className="grid gap-1"><span className="text-sm">Кого ищете</span><select name="role" value={form.role} onChange={handle} className="border rounded-md px-3 py-2 bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700"><option>Посудомойщица</option><option>Уборщица</option><option>Техничка</option></select></label>
          <div className="grid grid-cols-2 gap-3"><label className="grid gap-1"><span className="text-sm">Дата</span><input type="date" name="date" value={form.date} onChange={handle} className="border rounded-md px-3 py-2 bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700" required/></label><label className="grid gap-1"><span className="text-sm">Время</span><input type="time" name="time" value={form.time} onChange={handle} className="border rounded-md px-3 py-2 bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700" required/></label></div>
          <label className="grid gap-1"><span className="text-sm">Адрес</span><input name="address" value={form.address} onChange={handle} placeholder="Город, улица, №" className="border rounded-md px-3 py-2 bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700" required/></label>
          <label className="grid gap-1"><span className="text-sm">Ставка (сом)</span><input type="number" name="rate" value={form.rate} onChange={handle} placeholder="1200" className="border rounded-md px-3 py-2 bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700" required/></label>
          <div className="grid grid-cols-2 gap-3"><label className="grid gap-1"><span className="text-sm">Контактное лицо</span><input name="name" value={form.name} onChange={handle} placeholder="Имя" className="border rounded-md px-3 py-2 bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700" required/></label><label className="grid gap-1"><span className="text-sm">Телефон</span><input name="phone" value={form.phone} onChange={handle} placeholder="+996..." className="border rounded-md px-3 py-2 bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700" required/></label></div>
          <div className="flex gap-3 pt-2"><OpusButton type="submit" className="grow">Отправить</OpusButton><OpusButton type="button" variant="outline" onClick={onClose}>Отмена</OpusButton></div>
        </form><p className="text-xs opacity-60">Отправляя заявку, вы соглашаетесь с политикой обработки персональных данных.</p>
      </div>
    </div>
  </div>)
}
