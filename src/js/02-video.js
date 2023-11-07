import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let timePosition = JSON.parse(localStorage.getItem('videoplayer-current-time'));
console.log('timePosition', timePosition);

// методa on() і відстежувати подію timeupdate - оновлення часу відтворення.

player.on('timeupdate', throttle(function (ev) {
  console.log('played the video!', ev.seconds);
  localStorage.setItem("videoplayer-current-time", JSON.stringify(ev.seconds));
}, 1000));

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

// Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції.

player.setCurrentTime(timePosition).then(function (seconds) {
  // seconds = the actual time that the player seeked to
}).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      // the time was less than 0 or greater than the video’s duration
      break;

    default:
      // some other error occurred
      break;
  }
});