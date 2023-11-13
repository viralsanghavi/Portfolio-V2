const ImageContainer = ({photoUrl, projectUrl}) => {
  const handleDivClick = () => {
    window.open(projectUrl, "_blank"); // Open the URL in a new tab or window
  };

  return (
    <div
      style={{
        maxWidth: 630,
        height: 360,
      }}
      className="relative w-full rounded-2xl overflow-hidden gap-8 shadow-md cursor-pointer"
      onClick={handleDivClick}
    >
      {/* -translate-y-[calc(100vh-30%)] */}
      <img
        src={photoUrl ?? "/viral.jpg"}
        className="translate-y-0 hover:-translate-y-[50%] w-full  h-auto transition-all ease-in-out transform duration-[8000ms]"
      />
    </div>
  );
};

export default ImageContainer;
