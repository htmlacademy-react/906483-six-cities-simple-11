import './loading-screen.css'

function LoadingScreen(): JSX.Element {
  return (
    <div
      className={'load-element'}
    >
      <div>Loading ...</div>
      <div className={'spinner'}></div>
    </div>
  );
}

export default LoadingScreen;
