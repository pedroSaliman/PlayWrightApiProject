const {test,expect,request}=require("@playwright/test");
/////////////////////////////////
///////////////First call/////////////
/////////////////////////////////
test.skip("firstcall",async()=>{
const api =await request.newContext();
const get=await api.get("https://reqres.in/api/users?page=2");
expect(get.ok()).toBeTruthy();
const bodyrequest=await get.json();
console.log(bodyrequest);
const fname= await bodyrequest.data[0].first_name;
expect(fname).toEqual("Michael");


})
/////////////////////////////////
///////////////Single User/////////////
/////////////////////////////////

test.skip("Single User",async()=>{
    const api =await request.newContext();
    const get=await api.get("https://reqres.in/api/users/2");
    expect(get.ok()).toBeTruthy();
    const bodyrequest=await get.json();
    console.log(bodyrequest);
    const fname= await bodyrequest.data.email;
    expect(fname).toEqual("janet.weaver@reqres.in");
    
    
   });

/////////////////////////////////
///////////////Single User unknown/////////////
/////////////////////////////////
test.skip("Single User unknown",async()=>{
    const api =await request.newContext();
    const get=await api.get("https://reqres.in/api/unknown");
    expect(get.ok()).toBeTruthy();
    const bodyrequest=await get.json();
    console.log(bodyrequest);
    const name= await bodyrequest.data[0].name;
    expect(name).toEqual("cerulean");
    
    
    });    
/////////////////////////////////
///////////////Single Resources/////////////
/////////////////////////////////
test.skip("Single Resources",async()=>{
    const api =await request.newContext();
    const get=await api.get("https://reqres.in/api/unknown/2");
    expect(get.ok()).toBeTruthy();
    const bodyrequest=await get.json();
    console.log(bodyrequest);
    const name= await bodyrequest.data.name;
    expect(name).toEqual("fuchsia rose");
    
    
    });     
    
/////////////////////////////////
///////////////Create/////////////
/////////////////////////////////
test.skip("post",async()=>{
    
    const api =await request.newContext();
    const post=await api.post("https://reqres.in/api/users",{
        data:{
            "name": "mohamed",
            "job": "tester"
        }
    });
    expect(post.ok()).toBeTruthy();
    const bodyrequest=await post.json();
    console.log(bodyrequest);
    const name= await bodyrequest.name;
    expect(name).toEqual("mohamed");
    
    
    });
 /////////////////////////////////
///////////////UPDATE/////////////
/////////////////////////////////
 test.skip("put",async()=>{
    
    const api =await request.newContext();
    const put=await api.put("https://reqres.in/api/users/2",{
        data:{
            "name": "mohamed",
            "job": "developer"
        }
    });
    expect(put.ok()).toBeTruthy();
    const bodyrequest=await put.json();
    console.log(bodyrequest);
    const job= await bodyrequest.job;
    expect(job).toEqual("developer");
    
    
    });
/////////////////////////////////
///////////////Delete/////////////
/////////////////////////////////
test.skip("delete",async()=>{
    
    const api =await request.newContext();
    const del=await api.delete("https://reqres.in/api/users/2");
    expect(del.ok()).toBeTruthy();
   
    
    
    });









 /////////////////////////////////
///////////////Register/////////////
/////////////////////////////////  
 test.skip("Register",async()=>{
    
    const api =await request.newContext();
    const post=await api.post("https://reqres.in/api/register",{
        data:{
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
    });
    expect(post.ok()).toBeTruthy();
    const bodyrequest=await post.json();
    console.log(bodyrequest);
    const token= await bodyrequest.token;
    expect(token).toEqual("QpwL5tke4Pnpja7X4");
    
    
    });
/////////////////////////////////
///////////////Register Error/////////////
/////////////////////////////////
test.skip("Register Error",async()=>{
    
    const api =await request.newContext();
    const post=await api.post("https://reqres.in/api/register",{
        data:{
            "email": "sydney@fife"
        }
    });
    expect(post.status()).toEqual(400);
    const bodyrequest=await post.json();
    console.log(bodyrequest);
    const error= await bodyrequest.error;
    expect(error).toEqual("Missing password");
    
    
    });

/////////////////////////////////
///////////////Login/////////////
/////////////////////////////////
 
 test.skip("Login",async()=>{
    
    const api =await request.newContext();
    const post=await api.post("https://reqres.in/api/login",{
        data:{
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        }
    });
    expect(post.ok()).toBeTruthy();
    const bodyrequest=await post.json();
    console.log(bodyrequest);
    const token= await bodyrequest.token;
    expect(token).toEqual("QpwL5tke4Pnpja7X4");
    
    
    });  
 /////////////////////////////////
///////////////Login Error/////////////
/////////////////////////////////    
    test.skip("Login Error",async()=>{
    
        const api =await request.newContext();
        const post=await api.post("https://reqres.in/api/register",{
            data:{
                "email": "peter@klaven"
            }
        });
        expect(post.status()).toEqual(400);
        const bodyrequest=await post.json();
        console.log(bodyrequest);
        const error= await bodyrequest.error;
        expect(error).toEqual("Missing password");
        
        
        });
/////////////////////////////////
//////////////Delay//////////////
/////////////////////////////////
test.only("delay",async()=>{
const api =await request.newContext();
const get=await api.get("https://reqres.in/api/users?delay=3");
expect(get.ok()).toBeTruthy();
const bodyrequest=await get.json();
console.log(bodyrequest);
const fname= await bodyrequest.data[0].first_name;
expect(fname).toEqual("George");


})        
   








































