import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled>
      <div className="loading">
        <img
          className="loading--gif"
          src="/images/loading-image.webp"
          alt="Goku playing with Dragon Balls"
          width="350"
          height="250"
        />
        <span className="loading--feedback">Loading...</span>
      </div>
    </LoadingStyled>
  );
};

export default Loading;
