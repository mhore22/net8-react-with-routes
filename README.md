# net8-react-with-routes
By default, when you create a new React project with .Net 8 react-routes is not included unlike the previous React Template.
This is a sample project that adds react-route to have routing on your React application.

## Prerequisites
- You should have ***Visual Studio 2022*** and ***.Net 8 SDK*** installed on your machine.
- You need to install NodeJS [v21.2.0](https://nodejs.org/dist/v21.2.0/)

## Additional npm packages needed
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [reactstrap](https://www.npmjs.com/package/reactstrap)

## Installation and Debugging

- Clone this repository
- [Set the project properties](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-react?view=vs-2022#set-the-project-properties)
- Right click on the ***.Server*** project then click ***Set as Startup Project***.
- Start the application. You don't need to run npm install, Visual Studio will automaticall run npm install when you start the application.

## React Components
Component| Description
  |-------|--------|
  |App.jsx | This is responsible for rendering the whole application|
  |Layout.jsx | This is the component for the Layout of the application. Here you can find the NavMenu and the Container being rendered.|
  |AppRoutes.jsx | Contains the list of ***routes*** and ***elements*** to be rendered on the layout.|
  |NavMenu.jsx | The top navigation menu|
  |Home.jsx | The **Home** page|
  |WeatherForecast.jsx| The **Weather Forecast** page. This page calls **weatherforecast**controller to get the data.| 

## Add a new route
- Create your own component (e.g Counter.jsx).
  
  ```javascript
  function Counter() {
      return (
          <div>
              <h1>Counter</h1>
          </div>
      )
  }
  
  export default Counter;
  ```
  
- Open ***AppRoutes.jsx*** then import the new component.
  
```javascript
import Home from "./components/Home.jsx";
import WeatherForecast from "./components/WeatherForecast.jsx";
import Counter from "./components/Counter.jsx";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path:'/weather-forecast',
    element: <WeatherForecast />
  },
  {
    path:'/counter',
    element: <Counter />
  },
];

export default AppRoutes;
```
- Add Counter link on the ***NavMenu***.
  
```javascript
<NavItem>
  <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
</NavItem>
```

## References
- [Tutorial: Create an ASP.NET Core app with React in Visual Studio](https://learn.microsoft.com/en-us/visualstudio/javascript/tutorial-asp-net-core-with-react?view=vs-2022)
- [Tutorial: react-router-dom](https://reactrouter.com/en/main/start/tutorial)
