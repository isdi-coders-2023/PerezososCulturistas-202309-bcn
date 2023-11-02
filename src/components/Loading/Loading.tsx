const Loading = (): React.ReactElement => {
  return (
    <div className="loading">
      <img
        className="loading--gif"
        src="/images/goku-loading.gif"
        alt="Goku playing with Dragon Balls"
      />
      <span className="loading--feedback">Loading...</span>
    </div>
  );
};

export default Loading;
