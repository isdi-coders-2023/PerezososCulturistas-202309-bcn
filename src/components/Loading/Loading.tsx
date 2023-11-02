import LoadingStyled from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyled>
      <div className="loading">
        <img
          className="loading--gif"
          src="/images/goku-loading.gif"
          alt="Goku playing with Dragon Balls"
        />
        <span className="loading--feedback">Loading...</span>
      </div>
    </LoadingStyled>
  );
};

export default Loading;
