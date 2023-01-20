import { Button ,Flex} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext"

function Profile() {
    const {user,logout}=useAuth();
    
    const handleLogout=() =>{
      logout();
    }
    console.log(user)
    
  return (
    <div >
      <Flex marginBottom={783}>
        
        <h1>USER =</h1>
        
        <code>{JSON.stringify(user)}</code>
        <br></br>
        <br></br>
        <Link to="/"><Button colorScheme="red" variant="solid" onClick={handleLogout}>LOGOUT</Button></Link>

      </Flex>
    </div>
  )
}

export default Profile