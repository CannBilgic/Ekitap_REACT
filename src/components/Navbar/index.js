
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";

const Navbar = () => {
  const {loggedIn} = useAuth();
  const {items} = useBasket();
  console.log("LOGGEDIN",loggedIn )
  console.log("itemim",items)


  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <div className="logo">
            <Link to="/">Ekitap</Link>
          </div>
          <ul className={styles.menu}>
            <li>
              <Link to="/">Products</Link>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          {
            !loggedIn&& (
              <>
              <Link to="/register">
            <Button colorScheme="blue">Register</Button>
            </Link>
            <Link to="/login">
            <Button colorScheme="red">Login</Button>
            </Link>
              </>
            )
           
          }
          {
            loggedIn &&(
              <>
              {
                
                items.length>0 &&(
                  
                  <Link to="/basket">
                    <Button colorScheme="red" variant="outline">
                      Basket ({items.length})
                    </Button>
                  </Link>
                )
                
              }

              <Link to="/profile">
              <Button colorScheme="red" > Profile</Button>
              </Link>
              </>
            )
          }

            
            
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
