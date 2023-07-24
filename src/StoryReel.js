import React from "react";
import "./StoryReel.css";
import Story from "./Story";
import alin from "./assets/alin.jpg";
import alinp from "./assets/alinp.jpg";
import stef from "./assets/stef.jpg";
import iorga from "./assets/iorga.jpg";
import iorgap from "./assets/iorgap.jpg";
import calin from "./assets/calin.jpg";
import vlad from "./assets/vlad.jpg";
function StoryReel() {
  return (
    <div className="storyReel">
      <Story image={stef} profileSrc={stef} title="Stefania Penaru" />
      <Story image={vlad} profileSrc={vlad} title="Vlad Anton" />
      <Story image={alin} profileSrc={alinp} title="Alin Sterie" />
      <Story image={calin} profileSrc={calin} title="Bogdan Calin" />
      <Story image={iorgap} profileSrc={iorga} title="Antonio Iorga" />
    </div>
  );
}

export default StoryReel;
