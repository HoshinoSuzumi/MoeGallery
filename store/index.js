export const state = () => ({
  token: null,
  folded: false,
  galleries: [
    {
      id: 0,
      title: '图集一',
      description: '无论走到哪里，都应该记住，过去都是假的，回忆是一条没有尽头的路，一切以往的春天都不复存在，就连那最坚韧而又狂乱的爱情归根结底也不过是一种转瞬即逝的现实。',
      time: 1566911031250,
      tags: ['游戏', '动漫'],
      images: [
        'http://192.168.0.201:8002/images/001.png',
        'http://192.168.0.201:8002/images/002.png',
        'http://192.168.0.201:8002/images/003.png',
        'http://192.168.0.201:8002/images/004.png',
        'http://192.168.0.201:8002/images/005.png',
        'http://192.168.0.201:8002/images/006.png',
      ]
    },
    {
      id: 1,
      title: '图集二',
      description: '有很多辛苦的事情，从结果上来说并不好。但是一起努力的过程，绝对不是没用的。我是这么想的。所以现在不是停滞不前的时候。',
      time: 1566911031250,
      tags: ['游戏', '动漫'],
      images: [
        'http://192.168.0.201:8002/images/007.png',
        'http://192.168.0.201:8002/images/008.png',
        'http://192.168.0.201:8002/images/009.png',
        'http://192.168.0.201:8002/images/010.png',
        'http://192.168.0.201:8002/images/011.png',
        'http://192.168.0.201:8002/images/012.png',
        'http://192.168.0.201:8002/images/013.png',
        'http://192.168.0.201:8002/images/014.png',
        'http://192.168.0.201:8002/images/015.png',
        'http://192.168.0.201:8002/images/016.png',
        'http://192.168.0.201:8002/images/017.png',
        'http://192.168.0.201:8002/images/018.png',
        'http://192.168.0.201:8002/images/019.png',
        'http://192.168.0.201:8002/images/020.png',
      ]
    }
  ],
});

export const mutations = {
  updateToken(state, token) {
    state.token = token;
  }
};
