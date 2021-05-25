import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
function Navbar(props) {
    return (
        <div style={{ padding: "15px" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="secondary" style={{ marginLeft: "10px", marginRight: "10px" }}>
                    Home
                </Button>
            </Link>

            <Link to="/weather" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="secondary" style={{ marginLeft: "10px", marginRight: "10px" }}>
                    Weather
                </Button>
            </Link>

            <Link to="/restaurants" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="secondary" style={{ marginLeft: "10px", marginRight: "10px" }}>
                    Restaurants
                </Button>
            </Link>
        </div>
    );
};

export default Navbar;