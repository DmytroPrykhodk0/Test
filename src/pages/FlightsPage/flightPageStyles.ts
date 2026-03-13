const styles = {
  AppBar: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    px: 4,
    py: 2,
  },
  AppBarH1: {
    color:'#000'
  },
  AppBarWrapper: {
    marginLeft: 'auto', 
    display: 'flex', 
    gap: '15px'
  },
  AppBarButton: {
    height: 48,
    px: 3,
    fontSize: "15px",
    fontWeight: 600,
    textTransform: "uppercase",
    borderRadius: "8px",
    "& .MuiButton-startIcon svg": {
      fontSize: 22
    }
  },
  Main:{
    marginTop:'30px'
  }
};

export default styles;