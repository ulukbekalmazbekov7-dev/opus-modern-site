import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
export default function ThemeToggle(){
  const [dark, setDark] = useState(false);
  useEffect(()=>{ if(localStorage.getItem('opus:theme')==='dark') setDark(true)},[]);
  useEffect(()=>{ const r=document.documentElement; dark?r.classList.add('dark'):r.classList.remove('dark'); localStorage.setItem('opus:theme', dark?'dark':'light')},[dark]);
  return <button onClick={()=>setDark(v=>!v)} className="inline-flex items-center gap-2 px-3 h-9 rounded-xl bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700">{dark?<Sun className="w-4 h-4 text-yellow-400"/>:<Moon className="w-4 h-4"/>}<span className="text-sm">{dark?'Светлая':'Тёмная'}</span></button>
}
