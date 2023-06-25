import { Card } from "./Card/Card";
import { Counter } from "./Counter/Counter"
import { Container } from "./Container/Container";

const App = () => {
    return (
    <Container>
         <Counter/>
        {/* <Card isOnline /> */}
    </Container>
    )
}

export default App