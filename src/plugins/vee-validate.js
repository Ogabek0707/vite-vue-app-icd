import { defineRule, Form, Field, ErrorMessage, configure } from "vee-validate";
import { required, min, max, email } from '@vee-validate/rules'

export default{
      install(app){
            app.component("VeeForm", Form)
            app.component("VeeField", Field)
            app.component("ErrorMessage", ErrorMessage)

            defineRule("required", required)
            defineRule("min", min)
            defineRule("max", max)
            defineRule("email", email)
            // defineRule("day_active", (value)=>{
            //       if(value == true || value == false){
            //             return ""
            //       }else {
            //             return "The field Day is required"
            //       }
            // })
            configure({
                  generateMessage:(ctx)=>{
                        const message = {
                              required: `${ctx.field} is required`,
                              min: `${ctx.field} is must be at least 6 characters and contain at least one uppercase and one lowercase letter`,
                              max: `${ctx.field}is number of characters exceeded`,
                              email: `The field ${ctx.field} is too long`
                        }
                        return message[(ctx.rule.name)] ? message[(ctx.rule.name)] : `${ctx} is required`
                  },
                  validateOnBlur: true,
                  validateOnChange: true,
                  validateOnModelUpdate: true,
                  validateOnInput: true
            })
      }
}