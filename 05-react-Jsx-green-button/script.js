const App = () => {
    let [buttonText, setbuttonText] = React.useState('Clicl me please');
    
    const onButtonClick = () => {
        setbuttonText('Hello from react!!!');
    };

    return (
        <div className="app">
            {/*
                - в JSX классы подключаются при помощи className
                - внутри JSX используются двойные кавычки
                - при добавлении JS внутри JSX необходимо использовать {}
            */}
            <button onClick={onButtonClick}>{buttonText}</button>
        </div>
    );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);