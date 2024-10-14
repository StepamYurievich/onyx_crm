// import React from 'react';
// import './styles/_navbaritems.sass'
// import news from '../../assets/items/News.svg'
// import suitcases from '../../assets/items/Suitcase.svg'
// import users from '../../assets/items/Users.svg'
// import chart from '../../assets/items/Chart_Pie.svg'
// import addToQueue from '../../assets/items/Add_To_Queue.svg'
// import purshe from '../../assets/items/Purshe.svg'
// import py from '../../assets/items/Cookie.svg'
// import bell from '../../assets/items/Bell.svg'
// import store from '../../assets/items/Store.svg'
// import command from '../../assets/items/Command.svg'
// import target from '../../assets/items/Target.svg'
// import shield from '../../assets/items/Shield_Check.svg'
//
// const NavBarItems = () => {
//     const items = [
//         {item:"Учёт записей",img:news,alt:"news"},
//         {item:"Сотрудники",img:suitcases,alt:"users"},
//         {item:"Клиенты",img:users,alt:"clients"},
//         {item:"Аналитика",img:chart,alt:"analitika"},
//         {item:"Онлайн запись",img:addToQueue,alt:"add"},
//         {item:"Финансы",img:purshe,alt:"cash"},
//         {item:"Услуги",img:py,alt:"pay"},
//         {item:"Уведомления",img:bell,alt:"bell"},
//         {item:"Склад",img:store,alt:"sklad"},
//         {item:"Тарифы",img:command,alt:"trifs"},
//         {item:"Лог действий",img:target,alt:"target"},
//         {item:"Поддержка",img:shield,alt:"support"},
//     ]
//     const [isActive, setIsActive] = React.useState(null)
//
//     const handleClick = (index) => {
//         setIsActive(isActive === index ? null : index);
//     }
//     return (
//         <div className="navbaritems">
//             <span className={"navbaritems_span"}>Панель инструментов</span>
//             <section className={"navbaritems_items"}>
//                 <ul className={"navbaritems_items-ul"}>
//                     {items.map((item,index) => (
//                         <li
//                             key={index}
//                             className={ isActive === index ? "navbaritems_items-li active" : 'navbaritems_items-li'}
//                             onClick={()=>handleClick(index)}
//                         >
//                             <img src={item.img} alt={item.alt}/>
//                             <span>{item.item}</span>
//                         </li>
//                     ))}
//                 </ul>
//             </section>
//         </div>
//     );
// };
//
// export default NavBarItems;
