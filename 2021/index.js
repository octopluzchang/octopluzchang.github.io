

document.addEventListener('DOMContentLoaded', function () {

  LottieInteractivity.create({
    player: '#anim01',
    mode: 'scroll',
    container: "#MyContainerId",
    actions: [
      {
        visibility: [0, 0.3],
        type: 'play',
        frames: [0, 180]
      },
      {
        visibility: [0.3, 1],
        type: 'seek',
        frames: [50, 180]
      }
    ],
  });
});
