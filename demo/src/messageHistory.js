import monsterImgUrl from './../assets/monster.png';


function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes*60000);
}

let date = new Date();
export default [
  {sender: "1",type: 'text', author: 'me', data: {date: addMinutes(date,1), text: "Why don't they have salsa on the table?" }},
  {sender: "2",type: 'text', author: 'them', data: {date: addMinutes(date,2), text: 'What do you need salsa for?'}},
  {sender: "3",type: 'text', author: 'me', data: {date: addMinutes(date,3), text: 'Salsa is now the number one condiment in America.'} },
  {sender: "1",type: 'text', author: 'them', data: {date: addMinutes(date,3), text: "You know why? Because people like to say 'salsa.' 'Excuse me, do you have salsa?' 'We need more salsa.' 'Where is the salsa? No salsa?'"} },
  {sender: "3",type: 'text', author: 'me', data: {date: addMinutes(date,3), text: "You know it must be impossible for a Spanish person to order seltzer and not get salsa. 'I wanted seltzer, not salsa.'"} },
  {sender: "1",type: 'text', author: 'them', data: {date: addMinutes(date,3), text: "Don't you know the difference between seltzer and salsa?? You have the seltezer after the salsa!", } },
  {sender: "3",type: 'text', author: 'me', data: {date: addMinutes(date,4), text: 'See, this should be a show. This is the show. '} },
  {sender: "2",type: 'text', author: 'them', data: {date: addMinutes(date,4), text: 'What?'} },
  {sender: "3",type: 'text', author: 'me', data: {date: addMinutes(date,4), text: 'This. Just talking.'} },
  {sender: "1",type: 'text', author: 'them', data: {date: addMinutes(date,5), text: 'Yeah, right.'} },
  {sender: "3",type: 'text', author: 'me', data: {date: addMinutes(date,6), text: "I'm really serious. I think that's a good idea. "} },
  {sender: "1",type: 'text', author: 'them', data: {date: addMinutes(date,7), text: "Just talking? Well what's the show about?"} },
  {sender: "3",type: 'text', author: 'me', data: {date: addMinutes(date,8), text: "It's about nothing." }},
  {sender: "1",type: 'text', author: 'them', data: {date: addMinutes(date,9), text: 'No story?'} },
  {sender: "3",type: 'text', author: 'me', data: {date: addMinutes(date,10), text: 'No forget the story. '} },
  {sender: "2",type: 'text', author: 'them', data: {date: addMinutes(date,12), text: "You've got to have a story."} }
];
