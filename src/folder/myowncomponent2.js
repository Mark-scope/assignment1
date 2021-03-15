import Myown1Component from './myowncomponent1'

function Myown2Component(props){
    return(
        <div> <Myown1Component
            name = {props.name}
            age = {props.age}
            class = {props.class} />
        </div>
    )
}
export default Myown2Component