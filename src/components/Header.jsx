
const Header = (props) => {
    return (
        <div>
            <header className="container-fluid text-center">
                <h1>{props.title}</h1>
            </header>       
        </div>
    );
};

export default Header;