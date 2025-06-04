import Card from "./Card";

import Yospfp from "../assets/Yos.jpg";
import Richiepfp from "../assets/Richie.jpg";
import Yoelpfp from "../assets/Yoel.jpg";

function ContributionStatement() {
  return (
    <div className="my-10">
      <h1 className="text-center text-5xl text-primary font-primary p-5">
        CONTRIBUTORS
      </h1>
      <div className="container flex flex-col lg:flex-row items-center lg:items-start gap-25 justify-center mx-auto mt-10">
        <Card name="William Yosua Montolalu" image={Yospfp}></Card>
        <Card name="Richie" image={Richiepfp}></Card>
        <Card name="Yoel Augustan" image={Yoelpfp}></Card>
      </div>
    </div>
  );
}

export default ContributionStatement;
