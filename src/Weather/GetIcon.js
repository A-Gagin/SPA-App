function GetIcon(code){
    const makeURL = "http://openweathermap.org/img/wn/" + code + "@2x.png";
    const url = new URL(makeURL);
    return (
        <div style = {{backgroundColor: "#75a4e6", borderRadius: "50%"}}>
            <img src = {url} alt = "icon"/>
        </div>
    )
}
export default GetIcon;