import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayingnowService } from 'src/app/services/playingnow.service';
import { IMusic } from 'src/app/interfaces/IMusic';
import { TranslateModule } from '@ngx-translate/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-playingnow',
  standalone: true,
  imports: [NgxSkeletonLoaderModule, CommonModule, TranslateModule],
  templateUrl: './playingnow.component.html',
  styleUrls: ['./playingnow.component.css'],
})
export class PlayingnowComponent {
  loaded = false;
  style = <string>document.querySelector(':root')?.classList[0];
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
          '../../../assets/tidal.webp';
      }
      this.music = music;
      this.loaded = !this.loaded;
    });
    setTimeout(() => {
      this.loaded = false;
      this.getMusic();
    }, 60000);
  }
}
