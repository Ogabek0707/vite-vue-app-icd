import { defineStore } from 'pinia'
import authApi from '@/api/auth/AuthApi'
import Notification from '../plugins/Notification'
import router from '@/router/index'


export const useAuthStore = defineStore({
  id: "auth",
  state:()=>({
    VerificationCode: "",
  }),
  actions: {
    async authLogin(payload){
      try{
        let res = await authApi.Login(payload)
        if(res?.access_token){
           localStorage.setItem("access_token", res?.access_token)
           Notification({text: "You can log in!!!"}, {type: "success"},{time: "3500"},{description: ""})
           setTimeout(() => {
            router.push({name: "Main-Information", params: {"res": res}})
           }, 2000);
        }
        console.log(res);
      }catch(err){
        console.log(err)
        if(err.response.data.error == "Permission denied"){
          Notification({text: "Email Error or Code Error !!!"}, {type: "danger"},{time: "3500"},{description: "Please enter correct information !!!"})
        }else if(err.response.data.error == "Key: 'LoginRequest.Email' Error:Field validation for 'Email' failed on the 'email' tag"){
          Notification({text: "Please enter a valid email !!!"}, {type: "danger"},{time: "4000"}, {description: "An example: **********@gmail.com"})
        }else if(err.response.data.message == "incorrect password"){
          Notification({text: "The code is wrong !!!"}, {type: "danger"},{time: "5000"}, {description: "Enter the correct password !"})
        }
      }
    },
    async authSignUp(payload){
      try{
        this.LoginPage = ""
        let res = await authApi.SignUp(payload)
        console.log(res);
        if(res.message == "Verification code has been sent!"){
          Notification({text: "A code has been sent to your email !!!"}, {type: "success"},{time: "4000"}, {description: "After confirming the code, you will be registered"})
          this.VerificationCode = "Yuborildi"
        }else{
          console.log("Hato");
        }
      }catch(err){
        this.VerificationCode = ""
        console.log(err);
        if(err.response.data.error == "Key: 'RegisterRequest.Email' Error:Field validation for 'Email' failed on the 'email' tag"){
          Notification({text: "Please enter a valid email !!!"}, {type: "danger"},{time: "4000"}, {description: "An example: **********@gmail.com"})
        }else if(err.response.data.error == "invalid password"){
          Notification({text: "Set a strong password !!!"}, {type: "danger"},{time: "5000"}, {description: "Paswword is must be at least 6 characters and contain at least one uppercase and one lowercase letter !"})
        }else if(err.response.data.error == "invalid phone number"){
          Notification({text: "The phone number is wrong!!!"}, {type: "danger"},{time: "5000"}, {description: "Please enter your full phone number !"})
        }else if(err.response.data.error == "email already exists"){
          Notification({text: "This email already exists !!!"}, {type: "danger"},{time: "5000"}, {description: ""})
          router.push({name: "Login"})
        }
      }
    },
    async AuthVerify(payload){
      try{
        let res = await authApi.Verify(payload)
        console.log(res);
        if(res.acsec_token){
          Notification({text: "Successfully registered !!!"}, {type: "success"},{time: "4000"}, {description: ""})
        }
      }catch(err){
        console.log(err)
        if(err.response.data.error == 'incorrect verification code'){
          Notification({text: "The code is wrong !!!"}, {type: "danger"},{time: "4000"}, {description: "Enter the code correctly"})
        }else if(err.response.data.error == "pq: duplicate key value violates unique constraint \"admins_phone_number_key\""){
          Notification({text: "This phone number is registered !!!"}, {type: "danger"},{time: "4000"}, {description: ""})
        }
      }
    },
    async authForgotP(payload){
      try{
        let res = await authApi.ForgotPassword(payload)
        console.log(res.message);
        if(res.message == "Verification code has been sent!"){
          Notification({text: "A code has been sent to your email !!!"}, {type: "success"},{time: "4000"}, {description: ""})
          setTimeout(() => {
            router.push({name: "Login"})
          }, 4000);
        }
      }catch(err){
        console.log(err);
        if(err.response.data.error == "Key: 'ForgotPasswordRequest.Email' Error:Field validation for 'Email' failed on the 'email' tag"){
          Notification({text: "Emailni to'g'ri kiriting !!!"}, {type: "danger"},{time: "4000"}, {description: "Na'muna: **********@gmail.com"})
        }else if(err.response.data.error == "sql: no rows in result set"){
          Notification({text: "Ro'yhatdan o'tilmagan !!!"}, {type: "danger"},{time: "4000"}, {description: "Iltimos ro'yhatdan o'ting"})
        }
      }
    },
    
  }
})
