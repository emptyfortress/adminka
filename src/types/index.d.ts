interface Rule {
	id: number
	text: string
	type: string
	typ?: sting
	drop?: boolean
	drag?: boolean
	ext?: string
	size1?: number
	size2?: number
	expanded?: boolean
	gr: Group[]
}

// interface Group {
// 	id: number
// 	text: string
// 	type: string
// 	rule?: string
// 	drag?: boolean
// 	drop?: boolean
// 	children: Hran[]
// }

interface Hran {
	id: number
	text: string
	type?: string
	typ?: string
	state?: string
	rule?: string
	size?: number
	main?: boolean
	arch?: boolean
	temp?: boolean
	drag?: boolean
	drop?: boolean
	children?: Hran[]
}

interface Config {
	id: string
	label: string
	save?: boolean
	url?: RouteLocationRaw
	children?: Config[]
}
interface Stat {
	data: T // Node data.
	open: boolean // Is opened.
	parent: Stat<T> | null // Parent stat.
	children: Stat<T>[] // Children stats.
	level: number // Level start from 1.
	isStat: boolean // Detect if is stat object.
	hidden: boolean // If hidden.
	checked: boolean | 0 // If checked. 0 mean just some children checked.
	draggable: boolean | null // null means inherit parent.
	droppable: boolean | null // null means inherit parent.
	style: any // Customize node style. Vue's style format.
	class: any // Customize node class name. Vue's class format.
}
