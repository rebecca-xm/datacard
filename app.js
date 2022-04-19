const app = Vue.createApp({
    data() {
        return {
            name: 'Rebecca',
            age: 30,
            imgUrl: 'https://images.unsplash.com/photo-1482005253821-5d6a2c685879?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1157&q=80'
        }
    },
    methods: {
        ageInFive() {
            return this.age + 5;
        },
        randomNumber() {
            return Math.round(Math.random() * 1)
        }
    }
})

app.mount('#assignment')