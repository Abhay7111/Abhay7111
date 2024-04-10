// import React, { useState } from 'react';

// const Myform = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const userData = { name, email };
//     console.log(userData);
//     // Now you can use userData as you wish
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={e => setName(e.target.value)} />
//       </label>
//       <label>
//         Email:
//         <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
//       </label>
//       <input type="submit" value="Submit" />
//     </form>
//   );
// };

// // Usage
// <Myform />;
