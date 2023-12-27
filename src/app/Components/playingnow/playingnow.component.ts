import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayingnowService } from 'src/app/services/playingnow.service';
import { IMusic } from 'src/app/interfaces/IMusic';

@Component({
  selector: 'app-playingnow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playingnow.component.html',
  styleUrls: ['./playingnow.component.css'],
})
export class PlayingnowComponent {
  music: IMusic = {
    recenttracks: {
      track: [
        {
          artist: {
            '#text': '',
          },
          image: [
            {
              '#text': '',
            },
            {
              '#text': '',
            },
            {
              '#text': '',
            },
          ],
          name: '',
          url: '',
        },
      ],
    },
  };

  constructor(private playingapi: PlayingnowService) {
    this.getMusic();
  }
  getMusic() {
    this.playingapi.GetMusic().subscribe((music) => {
      var musicImg = music.recenttracks.track[0].image[2]['#text'];

      if (musicImg.includes('2a96cbd8b46e442fc41c2b86b821562f.png')) {
        music.recenttracks.track[0].image[2]['#text'] =
          '../../../assets/tidal.jpeg';
      }
      this.music = music;
    });
    setTimeout(() => {
      this.getMusic();
    }, 3000);
  }
}
