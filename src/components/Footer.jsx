
const Footer = () => {
    
    let currentYear = new Date().getFullYear();

    return (
        <div>
            <footer className="container-fluid text-center">
                <hr />
                <p className="pt-10"><b> Copyright @ { currentYear } </b></p>
            </footer>
        </div>
    );
};

export default Footer;