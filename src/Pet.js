// const Pet = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, "Luna"),
//     React.createElement("h3", {}, "Dog"),
//     React.createElement("h3", {}, "Japenese Spintcher"),
//   ]);
// };

const Pet = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.animal}</h3>
      <h3>{props.breed}</h3>
    </div>
  );
};

export default Pet;
