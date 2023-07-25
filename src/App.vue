<template>
<div v-show="!updateshow">
    <h1>
        User profile
    </h1>
    <img :src="image">


    <span>name :</span><b id="name">{{ name }}</b>
    <hr/>

    <span>email:</span><b id="email">{{ email }}</b>
    <hr/>

    <span>interest:</span><b id="interest">{{ interest }}</b>
    <hr/>

    <button @click="handleEdit">Edit</button>

    </div>

<div v-show="updateshow">

    <h1>
        User profile
    </h1>
    <img :src="image">


    <span>name :</span><input type="text" id="input-name" v-model="name">
    <hr/>

    <span>email :</span><input type="text" id="input-email" v-model="email">
    <hr/>

    <span>interest :</span><input type="text" id="input-interest" v-model="interest">
    <hr/>

    

    <button @click="handleUpdate">Update</button>

    <span></span>


</div>




</template>

<script>
import { createHydrationRenderer } from "vue";
import image from "./ginger.jpeg"
export default {
    name: "App",
    data (){
        return{
            image:image,
            name: "",
            email: "",
            interest:"",
            updateshow: false
        }
    },
    async created() {
        const update = await this.fetchUpdate ()
        this.name = update.name,
        this.email = update.email,
        this.interest = update.interest
    },

    methods:{
        handleEdit(){
            this.updateshow = true
        },

        async handleUpdate(){

            const payload = {
                name : this.name,
                email: this.email,
                interest: this.interest
            }
            const resJson = await this.updateHandle(payload)
            console.log(resJson)

            this.updateshow = false
        },
        
        async fetchUpdate() {
            const res = await fetch ('get-profile')
            return await res.json()
        },
        async updateHandle(payload){
            const res = await fetch ('update-profile', {
                method: "POST",
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body : JSON.stringify(payload)
            })
            return await res.json()
        }
    }
}
</script>
<style>
img {
    width: 220px;
    height: 270px;
    display: block;
    margin-bottom: 40px;
}

div {
    margin: 40px auto;
    width: 80%;
}

hr {
    width: 400px;
    margin: 25px 0;
}

button {
    width: 160px;
    font-size: 15px;
    height: 45px;
    border-radius: 5px;
}

button:hover {
    cursor: pointer;
}

input {
    width: 200px;
    font-size: 15px;
    padding: 10px;
}
</style>
