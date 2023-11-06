// import React, { useState, useEffect } from "react";

// export const CreateAccount = () => {

//     const initdata = {
//         full_name: "",
//         email: "",
//         password: "",
//         retype_pass: ""
//     };

//     const [data, setData] = useState(initdata);

//     const dataChange = (e) => {
//         setData({
//             ...data,
//             [e.target.name]: e.target.value,
//         });
//     };

//     return (
//         <div>
//             <h2>Create Account</h2>
//             <label>
//                 <span>Full Name</span>
//                 <br />
//                 <input
//                     type="text"
//                     name="fullname"
//                     value={data.full_name}
//                     onChange={dataChange}
//                 />
//                 <br />
//             </label>
//             <label>
//                 <span>Email</span>
//                 <br />
//                 <input
//                     type="email"
//                     name="email"
//                     value={data.email}
//                     onChange={dataChange}
//                 />
//                 <br />
//             </label>
//             <label>
//                 <span>Password</span>
//                 <br />
//                 <input
//                     type="password"
//                     name="password"
//                     value={data.password}
//                     onChange={dataChange}
//                 />
//                 <br />
//             </label>
//             <label>
//                 <span>Re-type Password</span>
//                 <br />
//                 <input
//                     type="password"
//                     name="password"
//                     value={data.password}
//                     onChange={dataChange}
//                 />
//                 <br />
//             </label>
//             <br />
//             <button onClick={login}>Create Account</button>
//         </div>
//     )
// }

