const App = ({ initialButtonText }) => {
  const [buttonText, setbuttonText] = React.useState(initialButtonText);
  const [buttonColor, setbuttonColor] = React.useState('');

  const onButtonClick = () => {
    setbuttonText('Hello from React!!!');
    setbuttonColor('green-btn');
  };
  return (
    <div className="app">
      <button className={buttonColor} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me" />);
