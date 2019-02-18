// added an extra wrapping div because we need one parent element, not two siblings for compnents to work
Vue.component('tabs', {
	template: 
	`
	<div>
		<div class="tabs">
  			<ul>
  			  <li v-for="tab in tabs" :class="{ 'is-active' : tab.isActive }">

  			  <a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>

  			  </li>
  			</ul>
		</div>

		<div class="tabs-details">

			<slot></slot>

		</div>
	</div>
	`,

	//be clear on what data the component exposes
	data() {
		return { tabs:[] };
	},

	// when this component is created, make tabs and make it equal to the tab children
	created() {
		this.tabs = this.$children;
	},

	//define any methods that the component needs
	methods: {
		selectTab(selectedTab) {
			this.tabs.forEach( tab => {
				tab.isActive = (tab.name == selectedTab.name);
			})
		}
	}
});

Vue.component('tab', {
	template: `

		<div v-show="isActive"><slot></slot></div>

	`,
	// bring in the name from the html to be used in this 
	// properties are immutable
	props: {
		name: { required: true },
		selected: { default: false }
	},

	data() {
		return {
			isActive: false,
		}
		
	},

	computed: {
		href() {
			return '#' + this.name.toLowerCase().replace(/ /g, '-');
		}
	},

	mounted() {
		this.isActive = this.selected;
	}

});

new Vue({
	el: '#root',

});