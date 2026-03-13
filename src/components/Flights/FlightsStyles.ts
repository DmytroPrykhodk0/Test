const styles = {
    Card:{
    backgroundColor: "#fff",
        borderRadius: "8px",
        padding: 2,
        boxShadow: 2,
        transition: "0.1s",
        "&:hover": {
        boxShadow: 6,
        }
    },
    CardFavoriteButton:{
         color: "#1f2a37" ,
          minWidth: 190,
          height: 40,
          backgroundColor: "#f4bf19",
          fontSize: "14px",
          fontWeight: 700,
          textTransform: "none",
          borderRadius: "4px",
          boxShadow: "none",
          px: 2.5,
          "&:hover": {
            backgroundColor: "#e0ad12",
            boxShadow: "none",
          },
          "& .MuiButton-startIcon": {
            marginRight: "10px",
          },
          "& .MuiButton-startIcon svg": {
            fontSize: 22,
          },
    },
    CardMoreButton:{
        height: 40,
          background: "linear-gradient(180deg, #3f8ae0 0%, #246cc7 100%)",
          fontSize: "14px",
          fontWeight: 700,
          textTransform: "none",
          borderRadius: "4px",
          "&:hover": {
            background: "linear-gradient(180deg, #377ed0 0%, #1f5fb0 100%)",
          },
    },
    CardActions:{
        padding: 0, 
        display: "flex", 
        gap: 2 
    },
    CardContentTitleWrap:{
        padding: "0 0 15px 0", 
        borderBottom: "1px solid #e5e7eb"
    },
    CardContentBodyWrap:{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
    }

}

export default styles