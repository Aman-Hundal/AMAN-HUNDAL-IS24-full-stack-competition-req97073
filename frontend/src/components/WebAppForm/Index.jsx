import FormMain from "./FormMain";

const WebAppForm = (props) => {
  const { saveWebAppData } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="form-main">
        <h2>Create a New Web Application</h2>
        <FormMain saveWebAppData={saveWebAppData} />
      </div>
    </div>
  );
};

export default WebAppForm;
