import io from 'socket.io-client';

const socket = io('http://10.81.22.208:3000/', {
  transports: ['websocket'],
});
export default socket;
