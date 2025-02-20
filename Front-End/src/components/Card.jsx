function Card(props) {
  return (
    <div className="flex flex-col w-80 font-primary bg-bgSecondary rounded-2xl overflow-hidden">
      <img src={props.image} className="w-full h-full object-cover" alt="" />
      <div className="text-center px-5 py-5">
        <h1 className="text-xl font-bold text-primary">{props.name}</h1>
        <p className="text-sm mt-2 text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
          suscipit, quidem veritatis voluptates sit soluta ipsum magnam magni
          cupiditate sunt veniam non repellat earum unde incidunt error, facilis
          quibusdam maxime quos ducimus. Exercitationem suscipit numquam odio
          illum tenetur quibusdam esse laborum nesciunt, voluptate dolorem
          ratione magni id doloremque quaerat eligendi!
        </p>
      </div>
    </div>
  );
}

export default Card;
