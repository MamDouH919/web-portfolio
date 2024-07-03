import { withRouter } from "react-router";
import './App.css';
import { useEffect, useState } from "react";
import Preloader from "./Components/Customs/loading/PreLoading";
import AnimationPage from "./Components/Customs/loading/AnimationPage";
import Routes from "./Routes/Routes";
import withApolloProvider from "./Hooks/ApolloProv";

function App(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <Preloader />
  ) : (
    <AnimationPage>
      <Routes {...props} />
    </AnimationPage>
  );
}

export default withApolloProvider(withRouter(App));
