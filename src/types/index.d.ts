interface Rule {
	id: number
	name: string
	type: string
	ext?: string
	size1?: number
	size2?: number
	expanded?: boolean
	gr: Group[]
}

interface Group {
	id: number
	name: string
	expanded?: boolean
	rule: string
	list: Hran[]
}

interface Hran {
	id: number
	name: string
	type: string
	state: string
	size: number
	main: boolean
	arch: boolean
	temp: boolean
}

interface Config {
	id: string
	label: string
	save?: boolean
	url?: RouteLocationRaw
	children: Config[]
}
