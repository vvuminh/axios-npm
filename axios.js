var axios = require('axios');
require('dotenv').config();

axios({
    method: 'get',
    url: process.env.url,
    headers: {
        'x-api-key' : process.env.OLM_TOKEN
    }
})
.then(res => {
    //console.log(res);
    //var data = JSON.parse(res);
    console.log('data',res.data);
    
})
.catch(err => {
    console.log('loi roi1',err);
    
})

// private async getForm(ldp_id : string) : Promise<any> {
//     return await request({
//         headers: {
//             'Content-Type': 'application/json',

//             'x-api-key' : process.env.OLM_TOKEN
//         },
//         uri: 'https://api-dev.hocmai.vn/olm/ldp/'+ ldp_id + '/forms',
//         method: 'GET',
//     })

// axios({
//     method:'get',
//     url:'http://bit.ly/2mTM3nY',
//     responseType:'stream'
//   })
//     .then(function(response) {
//     console.log(response.data.responseUrl);
//     // response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//   })
//   .catch(function (error) {
//     console.log('errr roi  ',error);
//   });

// //      use axios 
// // khong co server tu lay localhost:80

//   axios.get('/user?ID=12345')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
 
// // Optionally the request above could also be done as
// axios.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


//   // axios post

//   axios.post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//   // Send a POST request
//   axios({
//     method: 'post',
//     url: '/user/12345',
//     data: {
//       firstName: 'Fred',
//       lastName: 'Flintstone'
//     }
//   });

// // Performing multiple concurrent requests

// function getUserAccount() {
//   return axios.get('/user/12345');
// }
 
// function getUserPermissions() {
//   return axios.get('/user/12345/permissions');
// }
 
// axios.all([getUserAccount(), getUserPermissions()])
//   .then(axios.spread(function (acct, perms) {
//     // Both requests are now complete
//   }));
