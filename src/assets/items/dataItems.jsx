import  news from './images/News.svg'
import  suitcases from './images/Suitcase.svg'
import  users from './images/Users.svg'
import  chart from './images/Chart_Pie.svg'
import  addToQueue from './images/Add_To_Queue.svg'
import  purshe from './images/Purshe.svg'
import py from './images/Cookie.svg'
import bell from './images/Bell.svg'
import  store from './images/Store.svg'
import  command from './images/Command.svg'
import  target from './images/Target.svg'
import shield from './images/Shield_Check.svg'

import CustomCalendar from '../../components/NavBar/Items/FirstItem/Calender.jsx'

export const items = [
    {item:"Учёт записей",img:news,alt:"news",components:[<CustomCalendar/>]},
    {item:"Сотрудники",img:suitcases,alt:"users",components:[<div>12</div>,<div>1</div>,<div>3</div>]},
    {item:"Клиенты",img:users,alt:"clients",components:[<div>12</div>,<div>1</div>,<div>3</div>]},
    {item:"Аналитика",img:chart,alt:"analitika",components:[<div>12</div>,<div>1</div>,<div>3</div>]},
    {item:"Онлайн запись",img:addToQueue,alt:"add",components:[<div>12</div>,<div>1</div>,<div>3</div>]},
    {item:"Финансы",img:purshe,alt:"cash",components:[<div>12</div>,<div>1</div>,<div>3</div>]},
    {item:"Услуги",img:py,alt:"pay",components:[<div>12</div>,<div>1</div>,<div>3</div>]},
    {item:"Уведомления",img:bell,alt:"bell",components:[<div>12</div>,<div>1</div>,<div>3</div>]},
    {item:"Склад",img:store,alt:"sklad",components:[<div>12</div>,<div>1</div>,<div>3</div>]},
    {item:"Тарифы",img:command,alt:"trifs",components:[<div>12</div>,<div>1</div>,<div>3</div>]},
    {item:"Лог действий",img:target,alt:"target",components:[<div>12</div>,<div>1</div>,<div>3</div>]},
    {item:"Поддержка",img:shield,alt:"support",components:[<div>12</div>,<div>1</div>,<div>3</div>]},
]