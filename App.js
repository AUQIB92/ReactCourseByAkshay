/**
 * <div>
 * <div>
 * <h1>
 *I ma a H1 Tag
 * </h1>
 * <h1>
 *I ma a H1 Tag
 * </h1>
 * </div>
 * </div>
 *
 *
 *
 *
 *
 *
 *
 *
 */
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "h1 tag" }, "I am H1 tag"),
    React.createElement("h2", { id: "h2 tag" }, "I am H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "h1 tag" }, "I am H1 tag"),
    React.createElement("h2", { id: "h2 tag" }, "I am H2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading); //returns object
