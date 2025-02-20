function Content(props) {
  return (
    <div className="font-primary text-center lg:text-start p-5 lg:p-0">
      <div className="mb-10">
        <h1 className="text-4xl mb-2" style={{ color: props.titleColor }}>
          {props.title}
        </h1>
        <p className="text-primary">{props.description}</p>
      </div>
      <div className="flex flex-col gap-y-5 items-center lg:items-start">
        <p className="text-gray-400">INSTALL TUTORIAL</p>
        <span className="text-gray-400 p-5 bg-bgSecondary">
          {props.install}
        </span>
        <button className="bg-bluish text-bgSecondary font-bold w-50 p-5 transition-colors duration-300 ease-in-out hover:bg-darkbluish">
          <a href="https://vite.dev/guide/">DOWNLOAD</a>
        </button>
      </div>
    </div>
  );
}

export default Content;
