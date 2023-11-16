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
