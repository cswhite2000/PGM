(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{157:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return r})),l.d(t,"metadata",(function(){return s})),l.d(t,"rightToc",(function(){return c})),l.d(t,"default",(function(){return u}));var n=l(1),a=l(9),b=(l(0),l(180)),r={id:"spawns",title:"Spawns"},s={id:"modules/spawns",title:"Spawns",description:"The spawns module is required in a complete map XML because it specifies where players and observers can spawn. Default and observer spawns are defined with the `<default>` element and all other spawns in `<spawn>` elements. Only one default spawn element may be defined per map.",source:"@site/docs/modules/spawns.mdx",permalink:"/PGM/docs/modules/spawns",editUrl:"https://github.com/Electroid/PGM/edit/docs/docs/modules/spawns.mdx",sidebar:"Modules",previous:{title:"Regions",permalink:"/PGM/docs/modules/regions"},next:{title:"Portals",permalink:"/PGM/docs/modules/portals"}},c=[{value:"Respawn Module",id:"respawn-module",children:[]}],i={rightToc:c};function u(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,l,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The spawns module is required in a complete map XML because it specifies where players and observers can spawn. Default and observer spawns are defined with the ",Object(b.b)("inlineCode",{parentName:"p"},"<default>")," element and all other spawns in ",Object(b.b)("inlineCode",{parentName:"p"},"<spawn>")," elements. Only one default spawn element may be defined per map."),Object(b.b)("p",null,"Multiple spawns from the same team can be grouped inside of a single ",Object(b.b)("inlineCode",{parentName:"p"},"<regions>")," element inside ",Object(b.b)("inlineCode",{parentName:"p"},'<spawns team="team-id">'),". Spawn positions are picked randomly inside of the defined regions. Since the plugin will not validate the spawn position by default, regions should be checked to make sure that they don't intersect with solid objects or are midair. Spawns can also be defined with the ",Object(b.b)("inlineCode",{parentName:"p"},'safe="true"')," attribute, PGM will then check that the player spawns on a solid object and not midair."),Object(b.b)("p",null,"The regions element accepts more than one region or region area. If they are not inside a ",Object(b.b)("inlineCode",{parentName:"p"},"<union>")," element one region will be picked at random for each spawn event."),Object(b.b)("p",null,"Respawn behavior such as delays, etc. can be customized with the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"#respawn"}),"respawn")," module."),Object(b.b)("div",{className:"table-container"},Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"Element"),Object(b.b)("th",null,"Description"),Object(b.b)("th",null))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"<spawns> </spawns>")),Object(b.b)("td",{colspan:"2"},"A node containing the spawns for this map.")),Object(b.b)("tr",null,Object(b.b)("th",null,"Sub-elements"),Object(b.b)("th",null),Object(b.b)("th",null,"Value/Children")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"<spawn>")),Object(b.b)("td",null,"An individual spawn where a team will spawn"),Object(b.b)("td",null,Object(b.b)("label",null,"<regions>"))),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"<default>")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--warning",title:"Only one of this child permitted per parent"},"Unique"),"The spawn for observers and teams without a spawn.",Object(b.b)("br",null),Object(b.b)("i",null,"Only one default spawn element is allowed per map.")),Object(b.b)("td",null,Object(b.b)("label",null,"<regions>")))))),Object(b.b)("h5",{id:"spawn--default-element-attributes"},"Spawn & Default Element Attributes"),Object(b.b)("div",{className:"table-container"},Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"Attribute"),Object(b.b)("th",null,"Description"),Object(b.b)("th",null,"Value"),Object(b.b)("th",null,"Default"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"team")),Object(b.b)("td",null,"The team this spawn applies to."),Object(b.b)("td",null,Object(b.b)("a",{href:"/modules/teams"},"Team ID")),Object(b.b)("td",null)),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"safe")),Object(b.b)("td",null,"Validate that the player spawns in a safe location."),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--primary"},"true/false")),Object(b.b)("td",null,"false")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"sequential")),Object(b.b)("td",null,"Spawns players at the next region in a list if the one prior to it isn't safe.",Object(b.b)("br",null),Object(b.b)("i",null,"Requires the ",Object(b.b)("label",null,"safe")," attribute set to true.")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--primary"},"true/false")),Object(b.b)("td",null,"false")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"spread")),Object(b.b)("td",null,"Spawn players as far away as possible from enemy players."),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--primary"},"true/false")),Object(b.b)("td",null,"false")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"exclusive")),Object(b.b)("td",null,"Spawn regions are assigned exclusively to one player or team and only they will spawn there."),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--primary"},"true/false")),Object(b.b)("td",null,"false")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"persistent")),Object(b.b)("td",null,"Once a player has been assigned a spawn they will spawn there even if they leave and rejoin the game."),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--primary"},"true/false")),Object(b.b)("td",null,"false")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"kit")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"The kit to apply to players when they are spawned in this spawn."),Object(b.b)("td",null,Object(b.b)("a",{href:"/modules/kits"},"Kit ID")),Object(b.b)("td",null)),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"filter")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Filter when this spawn is used."),Object(b.b)("td",null,Object(b.b)("a",{href:"/modules/filters"},"Filter")),Object(b.b)("td",null))))),Object(b.b)("h5",{id:"spawn--default-element-sub-elements"},"Spawn & Default Element Sub-elements"),Object(b.b)("div",{className:"table-container"},Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"Element"),Object(b.b)("th",null,"Description"),Object(b.b)("th",null,"Value/Children"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"<regions>")),Object(b.b)("td",null,"The region or regions where players will spawn."),Object(b.b)("td",null,Object(b.b)("a",{href:"/modules/regions"},"Regions")))))),Object(b.b)("h5",{id:"regions-element-attributes"},"Regions Element Attributes"),Object(b.b)("div",{className:"table-container"},Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"Attribute"),Object(b.b)("th",null,"Description"),Object(b.b)("th",null,"Value"),Object(b.b)("th",null,"Default"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"angle")),Object(b.b)("td",null,"The exact block coordinates that the player looks at when spawned.",Object(b.b)("br",null),Object(b.b)("i",null,"This attribute will negate any angles set by the ",Object(b.b)("label",null,"yaw")," ","and ",Object(b.b)("label",null,"pitch")," attributes.")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--primary"},"X,Y,Z")),Object(b.b)("td",null)),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"yaw")),Object(b.b)("td",null,"The horizontal angle the player looks to when spawned.",Object(b.b)("br",null),Object(b.b)("i",null,"South 0, East -90, North 180 and West 90.")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--primary"},"-180 to 180")),Object(b.b)("td",null,"0")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"pitch")),Object(b.b)("td",null,"The vertical angle the player looks to when spawned.",Object(b.b)("br",null),Object(b.b)("i",null,"-90 is straight up 90 is straight down.")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--primary"},"-90 to 90")),Object(b.b)("td",null,"0"))))),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"TIP:")," Copy the yaw and pitch from the F3 screen in minecraft (the ",Object(b.b)("inlineCode",{parentName:"p"},"Facing: Direction (Axis) (Yaw/Pitch)")," line)."),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Examples")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<spawns>\n    <spawn team="red" kit="red">\n        <regions yaw="90">\n            <cuboid min="-2,13,71" max="-9,13,78"/>\n        </regions>\n    </spawn>\n    <spawn team="blue" kit="blue">\n        <regions yaw="-90">\n            <cuboid min="2,13,-71" max="9,13,-78"/>\n        </regions>\n    </spawn>\n    <default>\n        <regions yaw="0">\n            <cuboid min="-1,16,-1" max="2,20,2"/>\n        </regions>\n    </default>\n</spawns>\n')),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- Example spawns from Assualt --\x3e\n<spawns>\n    <spawn team="blue" kit="blue">\n        <regions yaw="-90">\n            <region id="blue-spawn"/>\n        </regions>\n    </spawn>\n    <spawn team="red" region="red-spawn" kit="red">\n        <regions yaw="90">\n            <region id="red-spawn"/>\n        </regions>\n    </spawn>\n    <default kit="obs">\n        <regions yaw="-135">\n            <region id="obs-spawn"/>\n        </regions>\n    </default>\n</spawns>\n\n<spawns safe="true" sequential="true">\n    <spawn team="blue" kit="blue" yaw="180">\n        <regions>\n            <cuboid min="-10,71,5" max="12,126,27"/> \x3c!-- Players will spawn here first --\x3e\n            <cuboid min="-10,6,5" max="12,6,27"/> \x3c!-- Secondary spawn if the first isn\'t available --\x3e\n            <point>1,8,0</point> \x3c!-- Tertiary spawn if all other team spawns aren\'t safe --\x3e\n        </regions>\n    </spawn>\n    <spawn team="red" kit="red" yaw="0">\n        <regions>\n            <cuboid min="-10,71,-27" max="12,126,-5"/>\n            <cuboid min="-10,6,-27" max="12,6,-5"/>\n            <point>1,8,0</point>\n        </regions>\n    </spawn>\n</spawns>\n')),Object(b.b)("h3",{id:"respawn-module"},"Respawn Module"),Object(b.b)("p",null,"The respawn module allows the map creator to adjust the respawn time and if players are automatically respawned. The respawn time must be greater than 1 second (20 ticks), if the respawn time is less it will automatically default to one second, allowing the death to fully complete and the player to be reset properly."),Object(b.b)("p",null,"To allow players to spawn at a bed set the bed attribute to true. Players spawning at beds will not spawn with a kit even if there is one specified. If a player has a bed spawn location set it overrides all other spawn regions for that player."),Object(b.b)("div",{className:"table-container"},Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"Element"),Object(b.b)("th",null,"Description"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"<respawn/>")),Object(b.b)("td",null,"Node specifying the respawn settings for this map."))))),Object(b.b)("h5",{id:"respawn-attributes"},"Respawn Attributes"),Object(b.b)("div",{className:"table-container"},Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"Attribute"),Object(b.b)("th",null,"Description"),Object(b.b)("th",null,"Value"),Object(b.b)("th",null,"Default"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"delay")),Object(b.b)("td",null,"Delay a players respawn for this duration."),Object(b.b)("td",null,Object(b.b)("a",{href:"/reference/time_periods"},"Time Period")),Object(b.b)("td",null,"2s")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"auto")),Object(b.b)("td",null,"Auto respawn the player after the delay time has elapsed."),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--primary"},"true/false")),Object(b.b)("td",null,"false")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"blackout")),Object(b.b)("td",null,"Dead players get a blindness effect applied."),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--primary"},"true/false")),Object(b.b)("td",null,"false")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"spectate")),Object(b.b)("td",null,"Allow dead players to fly around."),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--primary"},"true/false")),Object(b.b)("td",null,"false")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"bed")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--danger"},"N/A"),"Allow players to respawn from beds."),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--primary"},"true/false")),Object(b.b)("td",null,"false")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"message")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Message to display on the respawn screen to respawning players."),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--primary"},"Formatted Text")),Object(b.b)("td",null))))),Object(b.b)("h5",{id:"respawn-sub-elements"},"Respawn Sub-elements"),Object(b.b)("div",{className:"table-container"},Object(b.b)("table",null,Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",{style:{minWidth:"125px"}},"Element"),Object(b.b)("th",null,"Description"),Object(b.b)("th",null,"Value/Children"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"<message>")),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),"Message to display on the respawn screen to respawning players."),Object(b.b)("td",null,Object(b.b)("span",{className:"badge badge--primary"},"Formatted Text")))))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- Default auto respawn of 2 seconds --\x3e\n<respawn auto="true"/>\n\n\x3c!-- Allow players to respawn after 3 seconds, blackout the player when they die --\x3e\n<respawn delay="3s" blackout="true"/>\n\n\x3c!-- Allow respawning after 5s, display translatable waiting on flag drop respawn message --\x3e\n<respawn delay="5s" spectate="true">\n    <message>{translate: "death.respawn.confirmed.waiting.flagDropped"}</message>\n</respawn>\n')))}u.isMDXComponent=!0},180:function(e,t,l){"use strict";l.d(t,"a",(function(){return o})),l.d(t,"b",(function(){return O}));var n=l(0),a=l.n(n);function b(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function s(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){b(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function c(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},b=Object.keys(e);for(n=0;n<b.length;n++)l=b[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)l=b[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):s({},t,{},e)),l},o=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var l=e.components,n=e.mdxType,b=e.originalType,r=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),o=u(l),p=n,O=o["".concat(r,".").concat(p)]||o[p]||d[p]||b;return l?a.a.createElement(O,s({ref:t},i,{components:l})):a.a.createElement(O,s({ref:t},i))}));function O(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=l.length,r=new Array(b);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var i=2;i<b;i++)r[i]=l[i];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,l)}p.displayName="MDXCreateElement"}}]);