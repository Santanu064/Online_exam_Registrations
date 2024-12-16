
const url = "online-registration-backend-six.vercel.app";

export const addUser = async (data) => {
  try {
   const res = await axios.post(`${url}/registration`, data);
   alert(res.data.msg);
  } catch (error) {
    console.log("Error while calling AddUser Api", error.message);
  }
};

export const LogUser = async (data) => {
try {
 const res = await axios.post(`${url}/UserLogin`, data);
console.log(res);
if (res) {
  //rendering
  localStorage.setItem("testObject", JSON.stringify(res.data));
  window.location.href = "index.html";
}

 
} catch (error) {
  console.log("Error while calling Logdata Api", error.message);
  
}
}
