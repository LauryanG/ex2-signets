import dossTab from '../data/liste-dossiers.json';
import Dossier from './Dossier';
import '../scss/ListeDossiers.scss';

export default function ListeDossiers() {
  return (
    <ul className="ListeDossiers">
      {
        dossTab.map( 
          dossier =>  <li style={{backgroundColor: dossier.couleur}} ><Dossier key={dossier.id} {...dossier} /></li>
        )
      }
    </ul>
  );
}