<template>
    <div>
        <div class='login-view-container' v-if="$attrs.isLogin">
            <!-- Login welcome -->
            <div class='welcome-message-login'>
                <h4>{{loginWelcome}}</h4>
                <p>{{loginWelcomeSub}}</p>
            </div>

            <!-- Login Fields -->
            <div>
                <b-field>
                    <b-input placeholder="email" v-bind:class="{'error':$attrs.error}" v-model="username" type="email"></b-input>
                </b-field>
                <b-field>
                    <b-input value="" v-bind:class="{'error':$attrs.error}"  type="password" v-model="password" maxlength="30" placeholder="password"></b-input>
                </b-field>
            </div>
            <!-- Login button  -->
            <b-button class="button login-button" @click="login">Log In</b-button>
        </div>


        <div class="reg-view-container" v-if="$attrs.isRegister">
            <!-- Register welcome -->
            <div class='welcome-message-login'>
                <h4>{{registerWelcome}}</h4>
                <p>{{registerWelcomeSub}}</p>
            </div>


            <div class='reg-cols-container'>
                <!-- Registration Fields - left column -->
                <div class="reg-col-l-web">
                    <!-- Personal information -->
                    <p class="edit-create-field-labels"> 
                        Personal information
                    </p>
                    <b-field class="register-fields">
                        <b-input placeholder="Enter first name" v-bind:class="{'error':$attrs.error}" v-model="realtor.firstName" type="text"></b-input>
                    </b-field>
                    <b-field class="register-fields">
                        <b-input placeholder="Enter last name" v-bind:class="{'error':$attrs.error}" v-model="realtor.lastName" type="text"></b-input>
                    </b-field>

                    <!-- Location  -->
                    <p class="edit-create-field-labels"> 
                        Location
                    </p>
                    <!-- State (Select Menu)-->
                    <b-field  class="register-fields">
                        <select class="input" name="state" @change="selectState($event)">
                            <option class="input">-- Select state -- </option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </b-field>
                    <!-- County  -->
                    <b-field>
                        <b-input placeholder="Enter primary county" v-bind:class="{'error':$attrs.error}" v-model="realtor.county" type="text"></b-input>
                    </b-field>
                    <!-- Zip code  -->
                    <b-field>
                        <b-input placeholder="Enter postal code of business location" v-bind:class="{'error':$attrs.error}" v-model="realtor.zip" type="text"></b-input>
                    </b-field>
                </div>  

                <!-- Registration Fields - right column -->
                <!-- Account details  -->
                <div  class="reg-col-r-web">
                    <p class="edit-create-field-labels"> 
                        Account details
                    </p>
                <b-field>
                        <b-input class="register-fields" placeholder="Enter email" v-bind:class="{'error':$attrs.error}" v-model="realtor.email" type="email"></b-input>
                    </b-field>
                    <b-field>
                        <b-input class="register-fields" placeholder="Enter password" v-bind:class="{'error':$attrs.error}"  type="password" v-model="realtor.password" maxlength="30"></b-input>
                    </b-field>
                </div>
            </div>


            <!-- Register button -->
            <div>
                <b-button class="login-button" @click="register">Register</b-button>
            </div>

            <!-- Invalid login error message  -->
            <p v-if="$attrs.error" v-bind:class="{'error':$attrs.error}" >
                Log in failed. Invalid username or password. 
            </p>

            <!-- Invalid registration error message  -->
            <p v-if="$attrs.error" v-bind:class="{'error':$attrs.error}" >
                Invalid entry. Please fill in all fields correctly. 
            </p>
        </div>
  
    </div>
</template>



<script>
export default{
    name: "Login",
    data: function(){
        return{
            username:'',
            password:'',
            realtor: {
                firstName: '',
                lastName: '',
                state: '',
                county: '',
                zip: '',
                email: '',
                password: ''
            },
            loginWelcome: 'Welcome back!',
            loginWelcomeSub: 'Log in to manage your listings.',
            registerWelcome: "We're glad you're here!",
            registerWelcomeSub: 'Register as a real estate agent to post and manage property listings.'
        }
    },
    methods: {
        // Register a new realtor user 
        register: function(){
            fetch(`${this.$URL}/auth/users/register/`, {
                method: 'post',
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: this.realtor.email,
                    email: this.realtor.email,
                    password: this.realtor.password,
                    first_name: this.realtor.firstName,
                    last_name: this.realtor.lastName,
                    state: this.realtor.state,
                    county: this.realtor.county,
                    zip: this.realtor.zip
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log('this is the res from registering', data)
                this.$emit("loggedIn", data)
            })
        },
        // Login as a realtor user 
        login: function(){
            fetch(`${this.$URL}/auth/users/login/`, {
                method: 'post',
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: this.username,
                    email: this.username,
                    password: this.password
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.$emit("loggedIn", data)
            })
        },
        selectState: function(event){
            this.realtor.state = event.target.value
        },
    }
}
</script>

<style>
.welcome-message-login{
    padding: 30px;
}
.welcome-message-login p, .welcome-message-login h4{
    text-align: center;
}
.login-view-container{
    width: 50%;
    min-width: 350px;
    margin: 0 auto; 
    padding: 100px 20px 100px 20px;
}
.reg-view-container{
    width: 70%;
    min-width: 350px;
    max-width: 700px;
    margin: 0 auto; 
    padding: 100px 20px 100px 20px;
}
.reg-cols-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
}
@media only screen and (min-width: 700px){
    .reg-cols-container{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .reg-col-l-web{
        width: 50%;
        padding-right: 40px;
    }
    .reg-col-r-web{
        width: 50%;
        padding-left:40px;
        border-left: solid 1px lightgrey;
    }
}
.register-fields{
    width: 100%;
    max-width: 350px;
}
.button.login-button{
    width: 100%;
    background-color: rgb(240, 240, 240);
}
.button.login-button{
    font-size: .9em;
    margin-bottom: 20px;
}
.error{
    border-color: red 1px solid;
    font-size: .8em;
    color: red;
    text-align: center;
}
</style>