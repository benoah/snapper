import React from "react";

import styles from "./CardholderList.module.css";

export default function CardHolderList(person) {
  let { pid, lastname, mobile, name, image, lastcall, kritiskeoppgaver } = person;

  return (
<div className="container">
<div key={pid} className="card">
<div className="row">
<div className="col">
 <img src={image} className={styles.profileImg} alt={"person"} />
</div> 
<div className="col">
  <h5 className = {styles.profileHeader}>{name}</h5>
  <p>{lastname}@snapper.com/{mobile}{" "} </p>
</div>
<div className="col">
<p>Siste Samtale</p>
<p>{lastcall}</p>
</div>
<div className="col">
<p>kritiskeoppgaver</p>
<p>{kritiskeoppgaver}</p>
</div>
</div>
</div>

  </div>
  );
}


