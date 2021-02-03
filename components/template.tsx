import Header from "./header"

const Template = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default Template;
