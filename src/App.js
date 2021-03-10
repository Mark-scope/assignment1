import MyFirstComponent from './myfirstcomponent'
import MySecondComponent from './mysecondcomponent'
import MyThirdComponent from './mythirdcomponent'
import MyFourthComponet from './myfourthcomponent'
import MyFithComponent from './myfithcomponent'
import MySixthComponent from './mysixthcomponent'
import MySeventhComponent from './myseventhcomponent'
import MyEightComponent from './myeightcomponent'
import MyNinthComponent from './myninthcomponent'
import MyTenthComponent from './mytenthcomponent'
import MasterComponent from './MasterComponents'


function App() {
  
  return (
    <div>
      {/* <MyFirstComponent />
      <MySecondComponent />
      <MyThirdComponent />
      <MyFourthComponet />
      <MyFithComponent />
      <MySixthComponent />
      <MySeventhComponent />
      <MyEightComponent />
      <MyNinthComponent />
      <MyTenthComponent /> */}
      <MasterComponent name='1' height='45' />
      <MasterComponent name='2' height='67' />
      <MasterComponent name='3' height='34' />
      <MasterComponent name='4' height='38' />

    </div>
  );
}
export default App;
