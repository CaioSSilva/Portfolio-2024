export interface IMusic {
  recenttracks: {
    track: [
      {
        artist: {
          '#text': string;
        };
        image: [
          {
            '#text': string;
          },
          {
            '#text': string;
          },
          {
            '#text': string;
          }
        ];
        name: string;
      }
    ];
  };
}
