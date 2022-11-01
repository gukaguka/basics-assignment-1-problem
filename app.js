const app = Vue.createApp({
data(){
return{
	name: "",
	age: 27,
	image: "https://cdn.vox-cdn.com/thumbor/VFFEF-CI717yeFp1Zu1mBXrunPc=/360x0:1562x801/1400x1400/filters:focal(360x0:1562x801):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/47629977/zoolander-2-blue-steel-screencap_1920.0.0.jpg"
};
},
methods: {
	randomNum(){
		var result = Math.random();
		return result;
	}
}

});

app.mount('#assignment');