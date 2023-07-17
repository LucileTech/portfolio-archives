import React, { useState } from "react";
import koalou from "./../../Images/koalou3.png";
import octopus from "./../../Images/octopus3.png";
import postit from "./../../Images/postit1.png";
import catgame from "./../../Images/catgame1.png";
import onecomunity from "./../../Images/onecomunity.png";
import imagevault from "./../../Images/imagevault.png";

const Works = ({ theme }: { theme: string }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <div className="App-section App-work-section" id="projectsSection">
      <h2 className="Section-title work">EXPERIENCE</h2>
      {/* <div className="content">
        <h3>News</h3>
        <h5>Archivist for the TV Show C Dans l'Air, Maximal Production</h5>
        <h5>Archivist for the TV Show C Ce Soir, Together Media</h5>
        <h5>Archivist for Brut'news videos</h5>

        <h3>TV Shows</h3>
        <h5>Archivist on Jammy</h5>
        <h5>Archivist for 20 years of unforgettable images, Kiosco TV</h5>
        <h5>Archivist on 2 hours of laughs</h5>

        <h3>Documentaries</h3>
        <h5>Archivist for Lettre à L'enfant, Kaléo Films</h5>
        <h5>Archivist for Après le chaos, Varsovie</h5>
        <h5>Solidarnosc, first breach, 13 Productions</h5>
        <h5>Teddy Riner, hors norme, France TV Studio</h5>
        <h5>Archivist on a documentary about Taxi</h5>

        <h3>Institutional projects</h3>
        <h5>
          Several reinforcement for Elephant Adventures and Elephant At Work
        </h5>

        <h3>Screenwriting</h3>
        <h5>Script Coordinator for The Oligarchs Productions</h5>
        <h5>Script Development for EDI Films Productions</h5>
        <h5>
          Screenwriter and director of "Image du Temps", Won First Prize on the
          15th day of the short film, awarded by Stéphane Brizé.
        </h5>
        <h5>Script Reader for Talents Adami Cannes</h5>

        <h3>Producer</h3>
        <h5>“La Piscine” by Rosa Bursztein, Mon Voisin Productions</h5>
        <h5>“Nothing can stop you” by David Hourrègues, AS&M Productions</h5>

        <h3>Other projects</h3>
        <h5>
          Assistant Curator of the exhibition “Maurice Pialat, painter and
          filmmaker”{" "}
        </h5>
        <h5>
          Volunteer Web Developer for the Open Source porject One Community
          Global
        </h5>
      </div> */}

      {/* <div className="tg-wrap">
        <table className="tg">
          <thead>
            <tr>
              <td className="td-top-title">
                STOCK FOOTAGE RESEARCH AND CLEARANCE
              </td>
            </tr>
          </thead>
        </table>
      </div> */}

      <div className="tg-wrap">
        <table className="tg">
          <thead>
            {" "}
            <tr>
              <td className="td-title">NEWS</td>
              <td className="td-title">TV SHOWS</td>
              <td className="td-title">DOCUMENTARIES</td>
              <td className="td-title">INSTITUTIONAL</td>
            </tr>
            <tr>
              <td className="td-content">
                <p>
                  TV News Program <span className="italic">C Dans l'Air</span>,
                  Maximal Production
                </p>
                <p>
                  TV Program <span className="italic">C Ce Soir</span>, Together
                  Media
                </p>
                <p>
                  <span className="italic">Brut</span> news video, Together
                  Media
                </p>
              </td>
              <td className="td-content">
                <p>Le monde de Jamy (The World of Jamy), Elephant & Cie</p>
                <p>
                  20 ans d'images inoubliables (20 years of unforgettable
                  images), Kiosco TV
                </p>
                <p>
                  2 heures de rire et d'émotion (2 hours of laughs and emotion),
                  Satisfaction, the Television Agency
                </p>
              </td>
              <td className="td-content">
                <p>Lettre à L'enfant (Letter to the child), Kaléo Films</p>
                <p>Après le chaos (After Chaos), Varsovie</p>
                <p>
                  Solidarnosc, La première brèche (Solidarnosc, first breach),
                  13 Productions
                </p>
                <p>
                  Teddy Riner, hors norme (Teddy Riner, extraordinary), France
                  TV Studio
                </p>
                <p>
                  20 ans de saga Taxi (20 years of Taxi'saga), TF1 Productions
                </p>
              </td>
              <td className="td-content">
                <p>
                  Several reinforcement for Elephant Adventures and Elephant At
                  Work
                </p>
              </td>
            </tr>
          </thead>
        </table>
      </div>

      <div className="tg-wrap">
        <table className="tg">
          <thead>
            {" "}
            <tr>
              <td className="td-title">SCREENWRITER</td>
              <td className="td-title">PRODUCER</td>
              <td className="td-title">OTHER PROJECTS</td>
            </tr>
            <tr>
              <td className="td-content">
                <p>Script Coordinator for The Oligarchs Productions</p>
                <p>Script Development for EDI Films Productions</p>
                <p>
                  Screenwriter and director of Image du Temps (Picture of Time),
                  <br />
                  Won First Prize on the 15th day of the short film, awarded by
                  Stéphane Brizé.
                </p>
                <p>Script Reader for Talents Adami Cannes</p>
              </td>
              <td className="td-content">
                <p>La Piscine by Rosa Bursztein, Mon Voisin Productions</p>
                <p>
                  Nothing can stop you by David Hourrègues, AS&M Productions
                </p>
              </td>
              <td className="td-content">
                {" "}
                <p>
                  Assistant Curator of the exhibition Maurice Pialat, painter
                  and filmmaker{" "}
                </p>
                <p>
                  Volunteer Web Developer for the Open Source porject One
                  Community Global
                </p>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Works;
