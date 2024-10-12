export const deleteGroup = async (id) => {
    const accessToken = localStorage.getItem("accessToken");
    try {
        const data = {
            id : id,
          };
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/payroll/destroy/group`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        return result;
      } catch (error) {
        // setError(error.message);
        return error;
      }
  }


  export const makeInactiveGroup = async (id) => {
    const accessToken = localStorage.getItem("accessToken");
    try {
        const data = {
            id : id,
          };
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/payroll/update/group`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(result, data);
      } catch (error) {
        return error;
        // setError(error.message);
      }
  }

  export const createGroup = async (name) => {
    console.log(name);
    const accessToken = localStorage.getItem("accessToken");
    try {
        const data = {
            name : name.name,
          };
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/payroll/create/group`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(result, data);
      } catch (error) {
        // setError(error.message);
      }
  }


  //Payroll Recipients Route Groups
  export const createRecipient = async (formData, id) => {
    const accessToken = localStorage.getItem("accessToken");
    try {
        const data = {
            name : formData.name,
            amount : formData.amount,
            wallet_address : formData.wallet_address,
            schedule: formData.frequency,
            payroll_group_id : id
          };
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/payroll/create/recipient`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(result);
      } catch (error) {
        // setError(error.message);
      }
  }


  //Delete Payroll Recipient
  export const deleteRecipient = async (id) => {
    const accessToken = localStorage.getItem("accessToken");
    try {
        const data = {
            id : id,
          };
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/payroll/destroy/recipient`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        // return result;
      } catch (error) {
        // setError(error.message);
        // return error;
      }
  }
