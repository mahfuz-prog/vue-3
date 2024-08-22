import { ref } from 'vue'

// function name and filename should be same
export default function useCounter() {
	const count = ref(0)

	function incrementCount() {
		count.value += 1
	}

	return {
		count,
		incrementCount
	}
}