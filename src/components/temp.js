// function Component2() {
// 	return (
// 		<SecondContext.Consumer>
// 			{({ count }) => <Component3 count={count} />}
// 		</SecondContext.Consumer>
// 	);
// }

// export default function App() {
// 	return (
// 		<FirstContext.Provider value={{ count: 1 }}>
// 			<Component1 />
// 			<SecondContext.Provider value={{ count: 2 }}>
// 				<Component2 />
// 			</SecondContext.Provider>
// 		</FirstContext.Provider>
// 	);
// }