import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
function Navbar(props) {
    let history = useHistory();
    const dummyRes = () => {

        history.push({
            pathname: '/restaurants',
            state: {
                lat: 0,
                lon: 0
            }
        });
    }
    const dummyWea = () => {

        history.push({
            pathname: '/weather',
            state: {
                city: "Charlottesville",
                isRequest: false
            }
        });
    }
    return (
        <div style={{ padding: "15px" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
                <Button variant="contained" color="secondary" style={{ marginLeft: "10px", marginRight: "10px" }}>
                    Home
                </Button>
            </Link>

            <Button variant="contained" color="secondary" style={{ marginLeft: "10px", marginRight: "10px" }} onClick={dummyWea}>
                Weather
            </Button>


            <Button variant="contained" color="secondary" style={{ marginLeft: "10px", marginRight: "10px" }} onClick={dummyRes}>
                Restaurants
            </Button>
        </div>
    );
};

export default Navbar;