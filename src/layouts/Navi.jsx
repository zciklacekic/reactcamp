import {React, useState} from "react";
import CartSummary from "./CartSummary";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

function handleSignOut(params){
  setIsAuthenticated(false)
}
function handleSignIn(params){
  setIsAuthenticated(true)
}

  return (
    <div>
      <Menu inverted fixed>
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
          <CartSummary/>
            {isAuthenticated?<SignedIn signOut={handleSignOut} bisey="1"/>:<SignedOut signIn={handleSignIn} />}
            
            
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
