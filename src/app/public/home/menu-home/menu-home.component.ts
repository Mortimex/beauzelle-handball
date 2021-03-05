import {Component} from '@angular/core';

@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.scss']
})
export class MenuHomeComponent {

  constructor() {
  }

  /**
   * Méthode qui permet de naviguer jusqu'a l'id envoyé.
   * @param pIdName nom de l'id.
   */
  public navigateToId(pIdName: string): void {
    document.getElementById(pIdName).scrollIntoView({block: 'start', inline: 'start'});
  }
}
