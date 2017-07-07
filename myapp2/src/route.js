import One from './component/One.vue'
import Tow from './component/Tow.vue'
import Three from './component/Three.vue'

import A from './component/a.vue'
import B from './component/b.vue'
import C from './component/c.vue'

export default [
{
	path:'/one',component:One
	,children:[
			{path:'/one/a',component:A},
			{path:'/one/b',component:B},
			{path:'/one/c',component:C},
			{path:'/one',redirect:'/one/a'}
			]
},
{path:'/tow',component:Tow},
{path:'/three',component:Three},
{path:'*',redirect:'/one'}
]
