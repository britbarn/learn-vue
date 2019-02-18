//showmodal is not available to use in thie component because it has it's own scope

Vue.component('modal', {
	template: 
	`
		<div class="modal is-active">
  			<div class="modal-background"></div>
  			<div class="modal-content">
  				<div class="box">
  					<p>
  						<slot></slot>
  					</p>
  				</div>
  				
  			</div>
  
  			<button class="modal-close" @click="$emit('close')"></button>
		</div>
	`,

	// methods: {
	// 	hideModal() {
	// 		this.isVisible = false;
	// 	}
	// }
});



new Vue({
	el: '#root',

	data: {
		showModal: false
	}
});