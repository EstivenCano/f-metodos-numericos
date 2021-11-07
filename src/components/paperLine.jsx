import Paper from "@mui/material/Paper";

const PaperLine = (props) => {
  return (
    <Paper
      {...props}
      sx={{
        height: "100%",
        marginInline: 0.5,
        width: "2px",
        transform: "rotate(20deg)",
        rotate: "20deg",
      }}
    />
  );
};

export default PaperLine;
