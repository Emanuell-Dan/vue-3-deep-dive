import { h } from 'vue'

const App = {
	renderer() {
		return h('div', {
			id: 'hello'
		})
	}
}

// <div id="hello" />

const App = {
	renderer() {
		return h('div', {
			id: 'hello'
		}, [
			h('span', 'world')
		])
	}
}

// <div id="hello"><span>world</span></div>

const App = {
	renderer() {
		// v-if="ok"
		return this.ok
			? h('div', { id: 'hello'	}, [ h('span', 'world') ])
			: h('p', 'other')
	}
}

const App = {
	renderer() {
		// v-if="ok"
		// v-else-if="elseIfCondition"
		return this.ok
			? h('div', { id: 'hello'	}, [ h('span', 'world') ])
			: this.elseIfCondition 
				? h('p', 'other')
				: h('span')
	}
}

const App = {
	renderer() {
		// v-for="item in list"
		return this.list.map(item => h('li', { key: item.id }, item.text))
	}
}
