import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h1">Weather and Restaurant Finder</Typography>
            <Typography variant="h4">Written by Angela Gagin (afg4pr) for Launch SWE 2021</Typography>

            <br />
            <br />
            <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", marginLeft: "auto", marginRight: "auto" }}>
                <Typography variant="h5">Do you need the...</Typography>
                <br />


                <Link to="/weather" style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="secondary" style={{ marginLeft: "10px", marginRight: "10px" }}>
                        Weather Finder
                    </Button>
                </Link>

                <Typography variant="h5">or the</Typography>

                <Link to="/restaurants" style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="secondary" style={{ marginLeft: "10px", marginRight: "10px" }}>
                        Restaurant Finder
                    </Button>
                </Link>
            </div>
        </div>
    );
}
export default Home;