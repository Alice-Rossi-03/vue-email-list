const {createApp} = Vue 

createApp({
    data(){
        return{
            randomEmail: " "
        }
    }, 
    mounted(){

        
        
    },
    methods:{
        // generateEmails(){

        //     for(let i = 0; i < 10; i++){
        //         axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((result) => {
        //         console.log(result.data.response)

        //         this.randomEmail = result.data.response
        //     })
        //     }
            
        // }

        generateEmails(){

            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((result) => {
                console.log(result.data.response) 
                this.randomEmail = result.data.response
            })
        
            
        }
    }
}).mount("#app")