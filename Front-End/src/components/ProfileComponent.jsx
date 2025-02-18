import pfp from "../assets/pfp.png";

function ProfileComponent() {
  return (
    <div className="container flex py-20 px-40 justify-center mx-auto gap-20 items-center">
      <div className="flex-1">
        <h1 className="text-center text-6xl pb-8">Generasi Emas Binus</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum eius
          non illo atque eveniet quia quis itaque veniam velit at, sapiente est
          consectetur similique ipsum impedit ullam delectus beatae doloribus
          earum, expedita quam perferendis, eaque quibusdam a. Sint culpa ipsa,
          molestiae quisquam optio, velit unde perspiciatis ad cupiditate eius
          itaque.
        </p>
      </div>
      <div>
        <img src={pfp} className="w-full h-full object-cover" alt="Profile" />
      </div>
    </div>
  );
}

export default ProfileComponent;
