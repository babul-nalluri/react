const parent = React.createElement(
    "div",
    {id:"parent"},
        [React.createElement(
            "div",
            {id:"child"},
            [React.createElement("h1",{},"I am h1 tage"),
            React.createElement("h1",{},"I am h1 tage")]
        ),
        React.createElement(
            "div",
            {id:"child"},
            [React.createElement("h1",{},"I am h1 tage"),
            React.createElement("h1",{},"I am h1 tage")]
        )]
);

//J SX

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);