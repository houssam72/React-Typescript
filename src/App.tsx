import "./App.css";
// import { Heading } from "./components/Heading";
// import { Oscar } from "./components/Oscar";
// import { Status } from "./components/Status";
// import { Greet } from "./components/Greet";
// import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import { Counter } from "./components/class/Counter";
import { User } from "./components/state/User";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { List, List1 } from "./components/Generic Props/List";
import {
  RandomNumber,
  RandomNumberNotGod,
} from "./components/Restruction/RunderNumber";
import { Toast } from "./components/templateliterals/Toast";
import { CustomButton } from "./components/html/Button";
import { Text } from "./components/polymorphic/Text";
// import { Input } from "./components/Input";
// import Person from './components/Person';
// import PersonList from './components/PersonList';

function App() {
  // const personName={
  //   first:'Bruce',
  //   last:'Wayne'
  // }

  // const nameList=[
  //   {
  //     first:'Bruce',
  //     last:'Wayne'
  //   },{
  //     first:'Clark',
  //     last:'Kent'
  //   },{
  //     first:'Princess',
  //     last:'Diana'
  //   },{
  //     first:'Jhown',
  //     last:'Snow'
  //   }
  // ]
  return (
    <div className="App">
      {/* <Greet name='Vishwas' messageCount={20} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/> */}

      {/* Union of string literals as our Type   */}
      {/* <Status status="loading" /> */}
      {/* if we dont use 'loading' or 'success' or 'error' in the status value it will not work*/}

      {/* Child is a string */}
      {/* <Heading>PlaceHolder text</Heading> */}

      {/* Child is a react component */}
      {/* <Oscar>
        <Heading>PlaceHolder text</Heading>
      </Oscar> */}

      {/* Optional types */}
      {/* SomeTimes it might so happen that a component prop doesn't haved to be passed */}
      {/* <Greet name='Vishwas' messageCount={20} isLoggedIn={true}/>
      <Greet name="Vishwas"  isLoggedIn={true} /> */}

      {/* <Button
        handleClick={(event, id) => console.log("Button Clicked", event, id)}
      /> */}
      {/* Typically with the  input eelements the component would need two props the input value 
and the onChange handler */}
      {/* <Input value='' handleChange={(e)=>console.log(e)}/> */}

      {/* <Container styles={{ border: "1px solid black", padding: "1 rem" }} /> */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* <UserContextProvider>
        <User/>
      </UserContextProvider> */}

      {/* <Counter message="test" /> */}

      {/* <Private isLoggedIn={true} Component={Profile} /> */}

      {/* <List1 items={[1, 2, 3]} onClick={(item) => console.log(item)} />
      <List
        items={[
          { id: 1, firstName: "Houssam", lastName: "Baaloul" },
          { id: 1, firstName: "Houssam", lastName: "Baaloul" },
          { id: 1, firstName: "Houssam", lastName: "Baaloul" },
        ]}
        onClick={(item) => console.log(item)}
      /> */}

      {/* <RandomNumberNotGod value={2} isPositive isNegative isZero /> */}
      {/* <RandomNumber value={3} isPositive isNegative isZero /> ca marche pas car on mis les trois  isPositive isNegative isZero */}
      {/* Solution */}
      {/* <RandomNumber value={3} isNegative /> */}

      {/* <Toast position="center-bottom" /> */}

      {/* <CustomButton variant="primary">Primary Button</CustomButton> */}

      <Text as='h1' size="lg">Heading</Text>
      <Text as='p' size="lg">Paragraph</Text>
      <Text as='div' size="lg" color="secondary">
        LAbel
      </Text>
      {/* We want this text component to behave like different html 
       elements bas on as prop Such a component is call Polymorphic componenet 
       */}
    </div>
  );
}

export default App;
