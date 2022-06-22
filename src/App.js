import { Box } from "@mui/material";
import Header from "./Pages/Header";
import SideBar from "./Pages/SideBar";
import Navigator from "./Routes/Navigator";

function App() {
  return (
    <Box sx={{display: 'flex', width:'100vw', height:'100vh'}} >
        {/* <Box sx={{ width: '20%', height: '100%', backgroundColor: 'red'}}>        
          <SideBar/>
        </Box> */}
        <Box sx={{ width: '100%', height: '100%', backgroundColor: '#b2b2b2', margin:'auto' }}>
          <Box sx={{ width: '93%', height: '8%',  margin: 'auto', marginTop:'0.8%', backgroundColor: 'primary.dark', boxShadow: 10,borderRadius:3}}>            
            <Header/>
          </Box>
          <Box sx={{ width: '93%', height: '87%',  margin: 'auto', marginTop:'0.8%', backgroundColor: 'white', boxShadow: 10,borderRadius:3}}>            
            <Navigator/>
          </Box>
        </Box>
           
    </Box>
    
  );
}

export default App;
