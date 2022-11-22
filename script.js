new Vue({
	el: '#app',
	data: {
		arrEmail: [],
	},
	methods: {
		getEmail() {
			for (let i = 0; i < 10; i++) {
				axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then(axiosResponse => {
					this.arrEmail.push(axiosResponse.data.response);
				})
			}
		},
	},
});