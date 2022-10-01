import { useEffect } from "react";

export default function Counter(props) {
  useEffect(() => {
    // console.log("component is mounted");
    // this should be executed only when the component is mounted
    // if deoendency array is empty -> it will act as componentDidMount
    return () => {
      // console.log("component unmounted");
    };
  }, []); // dependency array
  return <div>Counter {props.count}</div>;
}
// export default function Counter(props) {
//   // const [products, setProducts] = useState([]);
//   // useEffect(() => {
//   //   fetch("https://fakestoreapi.com/products")
//   //     .then((res) => res.json())
//   //     .then((json) => setProducts(json));
//   // }, []);
//   // useEffect(() => {
//   //   console.log("component is mounted");
//   //   // this should be executed only when the component is mounted
//   //   // if deoendency array is empty -> it will act as componentDidMount
//   // }, []); // dependency array
//   // console.log({ products });
//   return <div>Counter {props.count}</div>;
// }
// import { Component } from "react";

// class Counter extends Component {
//   componentDidMount() {
//     console.log("component is mounted");
//     // fetch some data
//     // subscribe to event listeners
//   }

//   componentDidUpdate() {
//     console.log("component updated");
//   }

//   componentWillUnmount() {
//     console.log("component will be unmounted after this");
//     // clean up code
//     // unsubscribe to event listeners
//   }
//   render() {
//     return <div>Counter {this.props.count}</div>;
//   }
// }

// export default Counter;
