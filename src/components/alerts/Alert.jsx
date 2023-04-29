import { useEffect } from "react";
import { useAlertContext } from "../../contexts/AlertContext";
import "./Alert.css";

const Alert = () => {
  const { alert, setAlert } = useAlertContext();

  useEffect(() => {
    if (alert.message) {
      setTimeout(() => {
        setAlert({
          type: null,
          message: "",
        });
      }, 2000);
    }
  }, [alert]);

  return (
    <>
      {alert?.message ? (
        <div className="alert-container">
          <div className={`alert alert-${alert?.type}`}>
            <p className="alert-msg">{alert?.message}</p>
            <div className="alert-loader"></div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Alert;
