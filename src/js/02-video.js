import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');

const onPlay = currentTime => {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(currentTime.seconds)
  );
};

player.on('timeupdate', throttle(onPlay, 1000));

const getCurrentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

player
  .setCurrentTime(getCurrentTime || 0) 
  
