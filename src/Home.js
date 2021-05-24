import { Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
function Home() {
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
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h1">Weather and Restaurant Finder</Typography>
            <Typography variant="h4">Written by Angela Gagin (afg4pr) for Launch SWE 2021</Typography>

            <br />
            <br />
            <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", marginLeft: "auto", marginRight: "auto" }}>
                <Typography variant="h5">Do you need the...</Typography>
                <br />


                <Button variant="contained" color="secondary" style={{ marginLeft: "10px", marginRight: "10px" }} onClick={dummyWea}>
                    Weather Finder
                </Button>

                <Typography variant="h5">or the</Typography>

                <Button variant="contained" color="secondary" style={{ marginLeft: "10px", marginRight: "10px" }} onClick={dummyRes}>
                    Restaurant Finder
                </Button>
            </div>
        </div>
    );
}
export default Home;