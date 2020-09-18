<template>

    <div class='login-view-container'>
        <b-field>
            <b-input placeholder="email" type="email"></b-input>
        </b-field>
        <b-field>
            <b-input placeholder="User handle (custom validation for only lowercase)"
              type="text"
              required
              validation-message="Only lowercase is allowed"
              pattern="[a-z]*">
            </b-input>
        </b-field>


        <b-field label="Username"
            type="is-danger"
            message="This username is invalid">
            <b-input type="text"
                value="user"
                v-model="username"
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Password"
            type="is-warning"
            :message="['Password is too short', 'Password must have at least 8 characters']">
            <b-input value="" type="password" v-model="password" maxlength="30" placeholder="password"></b-input>
        </b-field>




        <b-button @click="handleLogin">Login</b-button>


        <!--FOR REGISTERING
        <b-field label="Username"
        type="is-success"
        message="This username is available">
        <b-input value="johnsilver" maxlength="30"></b-input>
        </b-field> -->
    </div>
</template>



<script>
export default{
    name: "Login",
    data: function(){
        return{
            username:'',
            password:'',
        }
    },
    methods: {
        // Register function not implemented yet 
        // register: function(){
        //     fetch('http://127.0.0.1:8000/auth/users/login/', {
        //         method: 'post',
        //         headers:{
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             email: this.username,
        //             password: this.password
        //         })
        //     })
        //     .then(response => response.json())
        //     .then(data => console.log(data))
        //     .then(data => {
        //         this.$emit('loggedIn', data)
        //     })
        // },
        handleLogin: function(){
            fetch('http://127.0.0.1:8000/auth/users/login/', {
                method: 'post',
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: this.email,
                    password: this.password
                })
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .then(data => {
                this.$emit('loggedIn', data)
            })
        }
    }
}

</script>

<style>
    .login-view-container{
        width: 50%;
        margin: 0 auto;
    }
    .help.is-danger,.help.is-warning, .taginput .is-danger.taginput-container.is-focusable, .is-danger.textarea, .is-danger.input{
        color: darkred;
        border-color: darkred;
    }
    .taginput .is-warning.taginput-container.is-focusable, .is-warning.textarea, .is-warning.input{
        border-color: darkred;
    }
</style>