const styles = {
    MainGridContainer:{
        display: "grid",
        gridTemplateColumns: "1fr 1fr"
    },
    SecondColumneGridContainer:{
        display: "grid",
        gridTemplateColumns: "200px 200px",
        gap: 10,
        placeContent: "left",
    },
    SecondColumneGridColumn:{
         display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap:1
    },
    Checkbox:{
        color:'#fff',
        width: 30,
        height: 30,
        placeContent: "center",
        textAlign: "center",
        "&:hover": {
        backgroundColor: "yellow",
        cursor: "pointer",
        },
        "&.Mui-checked": {
        backgroundColor: "blue",
        },
    }
}
export default styles;