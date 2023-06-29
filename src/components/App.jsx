//  import { Card } from "./Card/Card";
//  import { Counter } from "./Counter/Counter"
import { ColorPicker } from "./Card/ColorPicker/ColorPicker";
import { Container } from "./Container/Container";
import { Dropdown } from "./Dropdown/Dropdowm";

const ColorPickerOptions = [
    {label:'red', color:'#F44336' },
    {label:'blue' ,color:'#2196F3' },
    {label:'green', color:'#4CAF50'},
    {label:'grey', color:'#607D8B' },
    {label:'pink', color:'#E91E63'} ,
    {label:'indigo', color:'#3F5185' },
]

const App = () => {
    return (
    <Container>
        <Dropdown/>
         {/* <Counter/>  */}
         {/* <Card isOnline /> */}
         <ColorPicker
         options ={ColorPickerOptions}/>
    </Container>
    )
}

export default App