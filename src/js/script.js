'use strict';

window.addEventListener('DOMContentLoaded', () => {
   // Burger
   const burger = document.querySelector('.burger'),
         menu = document.querySelector('.menu');

   burger.addEventListener('click', () => {
      burger.classList.toggle('active-burger');
      menu.classList.toggle('active-menu');
      document.body.classList.toggle('scroll-off');
   });
   // ----------------------------------------

   // Data and reflection result on web-page
   const data = {
      allStudents: 200,
      studentsSuccesefullyPassed: 145,
      moneyEarnedByStudents: 650000,
   }
   
   function reflectResults(data) {
      const students = document.querySelector('.statictics__students-quantity'),
            studentsPassed = document.querySelector('.statictics__success-quantity'),
            moneyEarned = document.querySelector('.wage__amount'),
            scale = document.querySelector('.wage__scale-inner');
      
      students.innerText = data.allStudents;
      studentsPassed.innerText = data.studentsSuccesefullyPassed;
      moneyEarned.innerText = `${+data.moneyEarnedByStudents / 1000 > 1 ? Math.floor(+data.moneyEarnedByStudents / 1000) : ''} ${+data.moneyEarnedByStudents % 1000 ? +data.moneyEarnedByStudents % 1000 : '000'}₽`;

      scale.style.width = `${(+data.moneyEarnedByStudents / 1000000) * 100}%`;
   }

   reflectResults(data);
   // ------------------------------------------- 

   // Form, links
   const form = document.querySelector('form');
   const links = document.querySelectorAll('a');

   form.addEventListener('submit', (e) => {
      e.preventDefault();
   })

   links.forEach(link => {
      link.addEventListener('click', (e) => {
         e.preventDefault();
      })
   })
   // --------------------------------------------

   // Arrow
   const arrow = document.querySelector('.arrow-up'),
         sectionArrowToShow = document.querySelector('.info');

   window.addEventListener('scroll', (e) => {
      if (window.scrollY > +sectionArrowToShow.offsetTop - 1) {
         arrow.classList.add('show');
      } else {
         arrow.classList.remove('show');
      }
   });

   arrow.addEventListener('click', () => {
      window.scrollTo(window.scrollY, 0);
   });
   // --------------------------------------------

   // Timer
   timer('.timer', '2022-12-1')

   function timer (id, deadline){
   
      function getTimeRemaining(endtime) {
         let days, hours, minutes, seconds;
         const t = Date.parse(endtime) - Date.parse(new Date());
   
         if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
         } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            minutes = Math.floor((t / 1000 / 60) % 60);
            seconds = Math.floor((t / 1000) % 60);
         }   
         
         return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
         };
      }
   
      function getZero(num) {
         if(num >= 0 && num < 10) {
            return `0${num}`;
         } else {
            return num;
         }
      }
   
      function setClock(selector, endtime) {
         const timer = document.querySelector(selector),
               days = timer.querySelector('#days'),
               hours = timer.querySelector('#hours'),
               minutes = timer.querySelector('#minutes'),
               seconds = timer.querySelector('#seconds'),
               timeInterval = setInterval(updateClock, 1000);
   
         updateClock();
   
         function updateClock() {
            const t = getTimeRemaining(endtime);
   
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
   
            if (t.total <= 0) {
               clearInterval(timeInterval);
            }
         }
      }
   
      setClock(id, deadline);
   }
   // -------------------------------------------------
});