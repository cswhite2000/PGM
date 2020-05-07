(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var l=n(1),b=n(9),a=(n(0),n(192)),i={id:"regions",title:"Regions"},r={id:"modules/mechanics/regions",title:"Regions",description:"Regions are a type of filter that filters the coordinates of a query. They are used to define, among other things, the area a filter applies to or where a portal links from. There are two distinct types of regions; block bounded regions, which contain a finite amount of blocks and unbounded regions that contain a infinite amount. All regions and region modifiers can have a `id` attribute to reference them from kits, portals, etc.",source:"@site/docs/modules/mechanics/regions.mdx",permalink:"/PGM/docs/modules/mechanics/regions",editUrl:"https://github.com/Electroid/PGM/edit/docs/docs/modules/mechanics/regions.mdx",sidebar:"Modules",previous:{title:"Filters",permalink:"/PGM/docs/modules/mechanics/filters"},next:{title:"Spawns",permalink:"/PGM/docs/modules/mechanics/spawns"}},c=[{value:"Applying Things to Regions",id:"applying-things-to-regions",children:[]},{value:"Region Modifiers",id:"region-modifiers",children:[]},{value:"Point Providers",id:"point-providers",children:[]}],o={rightToc:c};function s(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(a.b)("wrapper",Object(l.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Regions are a type of filter that filters the coordinates of a query. They are used to define, among other things, the area a filter applies to or where a portal links from. There are two distinct types of regions; block bounded regions, which contain a finite amount of blocks and unbounded regions that contain a infinite amount. All regions and region modifiers can have a ",Object(a.b)("inlineCode",{parentName:"p"},"id")," attribute to reference them from kits, portals, etc."),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'<regions>\n    <rectangle id="xyzzy-region" min="-50,-50" max="50,50"/>\n</regions>\n\n\x3c!-- Region reference --\x3e\n<region id="xyzzy-region"/>\n')),Object(a.b)("p",null,"The area a region applies to is specified with one or more of the following elements. Use ",Object(a.b)("inlineCode",{parentName:"p"},"oo")," and ",Object(a.b)("inlineCode",{parentName:"p"},"-oo")," to specify positive/negative infinity in coordinates. See the ",Object(a.b)("a",Object(l.a)({parentName:"p"},{href:"/guides/regions"}),"Properly Defining Regions")," guide for information on how to properly get the coordinates of a region."),Object(a.b)("h5",{id:"region-types"},"Region Types"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Block Bounded Regions"),Object(a.b)("th",null)),Object(a.b)("tr",null)),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,'<cuboid id="abc" min="X1,Y1,Z1" max="X2,Y2,Z2"/>'),Object(a.b)("br",null),"A rectangular solid from ",Object(a.b)("label",null,"X1,Y1,Z1")," to ",Object(a.b)("label",null,"X2,Y2,Z2"),".",Object(a.b)("br",null),Object(a.b)("i",null,"Only block bounded when using finite coordinates.")),Object(a.b)("td",{className:"text-right"},Object(a.b)("span",{className:"badge badge--primary"},"Randomize-able"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,'<cylinder id="abc" base="X,Y,Z" radius="R" height="H"/>'),Object(a.b)("br",null),"A cylinder located at ",Object(a.b)("label",null,"X,Y,Z")," with a radius of ",Object(a.b)("label",null,"R")," and a height of ",Object(a.b)("label",null,"H"),".",Object(a.b)("br",null),Object(a.b)("i",null,"Only block bounded when using a finite radius.")),Object(a.b)("td",{className:"text-right"},Object(a.b)("span",{className:"badge badge--primary"},"Randomize-able"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,'<block id="abc">X,Y,Z</block>'),Object(a.b)("br",null),"A single block located at ",Object(a.b)("label",null,"X,Y,Z"),"."),Object(a.b)("td",{className:"text-right"},Object(a.b)("span",{className:"badge badge--primary"},"Randomize-able"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,'<sphere id="abc" origin="X,Y,Z" radius="R"/>'),Object(a.b)("br",null),"A sphere located at ",Object(a.b)("label",null,"X,Y,Z")," with a radius of ",Object(a.b)("label",null,"R"),".",Object(a.b)("br",null),Object(a.b)("i",null,"Only block bounded when using a finite radius.")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,'<point id="abc">X,Y,Z</point>'),Object(a.b)("br",null),"A single point region located at ",Object(a.b)("label",null,"X,Y,Z"),".",Object(a.b)("br",null),Object(a.b)("i",null,"This region will always return the same location even when used in a randomized context, e.g., spawns.")),Object(a.b)("td",{className:"text-right"},Object(a.b)("span",{className:"badge badge--primary"},"Randomize-able"))),Object(a.b)("tr",null,Object(a.b)("td",{colspan:"2"},Object(a.b)("b",null,"Unbounded Regions"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,'<rectangle id="abc" min="X1,Z1" max="X2,Z2"/>'),Object(a.b)("br",null),"A rectangle from ",Object(a.b)("label",null,"X1,Z1")," to ",Object(a.b)("label",null,"X2,Z2"),"."),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,'<circle id="abc" center="X,Z" radius="R"/>'),Object(a.b)("br",null),"A circle located at ",Object(a.b)("label",null,"X,Z")," with a radius of ",Object(a.b)("label",null,"R"),". ",Object(a.b)("br",null),Object(a.b)("i",null,"The region goes from 0 to map height, i.e. PGM doesn't check the players Y position.")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,'<half normal="1,0,1" origin="100,50,0" id="abc"/>'),Object(a.b)("br",null),"Half of the world split by a plane pointing towards a normal."),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,'<below x="" y="" z="" id="abc"/>'),"|",Object(a.b)("label",null,'<above x="" y="" z="" id="abc"/>'),Object(a.b)("br",null),"Half of the world split at the specified axis.",Object(a.b)("br",null),"If multiple axises are defined the specified parts of each axis are intersected and returned."),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",{colspan:"2"},Object(a.b)("b",null,"Static Regions"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<empty/>"),Object(a.b)("br",null),"A zero size/position region, contains nothing."),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<nowhere/>"),Object(a.b)("br",null),"A reference-able zero size/position region, contains nothing. Can be referenced with the ID: ",Object(a.b)("label",null,"nowhere")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<everywhere/>"),Object(a.b)("br",null),"A reference-able infinite size region, contains everything. Can be referenced with the ID: ",Object(a.b)("label",null,"everywhere")),Object(a.b)("td",null))))),Object(a.b)("h4",{id:"half-space-regions"},"Half-space Regions"),Object(a.b)("p",null,"A half-space region contains everything on one side of an arbitrary plane. The plane is defined by an origin point and a normal vector, and the region contains everything on the side of the plane that the normal is pointing towards. The example below defines a region with a diagonal boundary:"),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'<half origin="5,0,0" normal="1,1,0"/>\n')),Object(a.b)("p",null,"The above and below regions can be used to conveniently define axis-aligned half-spaces:"),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'<above y="50"/>         \x3c!-- Everything above Y=50 --\x3e\n<below x="0" z="0"/>    \x3c!-- Everything in the -X, -Z quadrant --\x3e\n')),Object(a.b)("h3",{id:"applying-things-to-regions"},"Applying Things to Regions"),Object(a.b)("p",null,"Filters, kits, and velocity changes can be applied to regions by using an ",Object(a.b)("inlineCode",{parentName:"p"},"<apply>")," element. The apply element can contain more than one region. If the apply element contains more than one region the same settings are applied to all of them. Applies with no region default to ",Object(a.b)("inlineCode",{parentName:"p"},"<everywhere/>"),". Applies can also be defined in the filters element."),Object(a.b)("p",null,"The order in which apply elements are specified determines which takes precedence when regions overlap. Applies specified first override those specified further down in the XML. See ",Object(a.b)("a",Object(l.a)({parentName:"p"},{href:"/guides/filter_apply_order"}),"filter apply order")," for a more detailed example. The region an apply affects can be specified as an attribute or in a ",Object(a.b)("inlineCode",{parentName:"p"},"<region>")," sub-element."),Object(a.b)("h5",{id:"apply-element-attributes"},"Apply Element Attributes"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",{style:{minWidth:"175px"}},"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"),Object(a.b)("th",null,"Default"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"region")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"The region this apply affects."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/regions"},"Region")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"enter")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Filter player enter events."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/filters"},"Filter")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"leave")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Filter player leave events."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/filters"},"Filter")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"block")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Filter block place and break events."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/filters"},"Filter")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"block-place")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Filter block place events."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/filters"},"Filter")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"block-place-against")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Filter block place against events."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/filters"},"Filter")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"block-break")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Filter block break events."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/filters"},"Filter")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"block-physics")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Filter world block updates; water flowing, portals disappearing, etc."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/filters"},"Filter")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"use")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Filter right-click events."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/filters"},"Filter")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"message")),Object(a.b)("td",null,"Send a message to the player if the filter denies the event."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"String")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"early-warning")),Object(a.b)("td",null,"Warn the player before they actually break a denied block."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"false")),Object(a.b)("tr",null,Object(a.b)("td",{colspan:"4"},Object(a.b)("b",null,"Apply Effects"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"kit")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Give a kit to players entering the region."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/kits"},"Kit")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"lend-kit")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Give a kit to players entering the region, and remove it when they leave the region. This can be used only with removable kits. Any non-removable kit will generate an error. The kits page explains which kit types are removable."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/kits"},"Kit")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"velocity")),Object(a.b)("td",null,"Change a players velocity when they enter the region."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"X,Y,Z")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"filter")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"Filter when/if kits and velocities are applied."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/filters"},"Filter")),Object(a.b)("td",null))))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Apply Examples")),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- Apply a blue team usage filter and referenced the region in an attribute. --\x3e\n<apply region="region1" use="blue-team-filter"/>\n\n<apply kit="dark-tower-kit">\n    <region>\n        \x3c!-- Multiple regions or region references in a regions sub-element. --\x3e\n        <region id="region1"/>\n        <rectangle min="-5,-5" max="5,5"/>\n    </region>\n    \x3c!-- Inline effect filter --\x3e\n    <filter>\n        <team>blue</team>\n    </filter>\n</apply>\n')),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Examples")),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- Give a kit to players entering the region. --\x3e\n<apply kit="knight">\n    <region>\n        <region id="r-knight"/>\n        <region id="b-knight"/>\n    </region>\n</apply>\n\n\x3c!-- Only allow breaking of sandstone stairs and deny placing of all blocks. --\x3e\n<apply block-break="only-sandstone-stairs" block-place="never" message="You may not modify this area">\n    <region>\n        <rectangle min="-6,-58" max="7,-47"/>\n        <rectangle min="-6,48" max="7,59"/>\n    </region>\n</apply>\n\n\x3c!-- Example regions from Harb using region modifiers. --\x3e\n<regions>\n    <rectangle id="main-area" min="-50,-32" max="51,33"/>\n    <union id="bases">\n        <rectangle id="blue-base" min="-20,-62" max="21,-32"/>\n        <rectangle id="red-base" min="-20,33" max="21,63"/>\n    </union>\n    <complement id="portals-area">\n        <rectangle min="-56,-2" max="57,3"/>\n        <region id="main-area"/>\n    </complement>\n\n    \x3c!-- Protect portal areas --\x3e\n    <apply block="never" region="portals-area"/>\n    <apply block="no-tnt" region="bases" message="You may not place TNT in the bases."/>\n</regions>\n')),Object(a.b)("p",null,"An applies velocity attribute changes the players velocity when they enter the specified region. This velocity is specified as a ",Object(a.b)("inlineCode",{parentName:"p"},"X,Y,Z")," vector.\nOn the mapdev servers velocity can be tested with the ",Object(a.b)("inlineCode",{parentName:"p"},"/vel x y z")," command."),Object(a.b)("p",null,"Example using velocity for jump pads"),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'<regions>\n    \x3c!--  Yellow Pads  --\x3e\n    <apply velocity="-0.4,1.1,0.0">\n        <region>\n            <cuboid min="-1081,1,-2116" max="-1078,2,-2113"/>\n        </region>\n    </apply>\n    <apply velocity="0.0,1.4,-0.4">\n        <region>\n            <cuboid min="-1062,1,-2123" max="-1059,2,-2120"/>\n        </region>\n    </apply>\n</regions>\n')),Object(a.b)("h3",{id:"region-modifiers"},"Region Modifiers"),Object(a.b)("p",null,"Regions can be inverted, combined, subtracted, or intersected by putting them inside of the following elements."),Object(a.b)("div",{className:"table-container",style:{marginBottom:"30px"}},Object(a.b)("table",null,Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,'<negative><region id="region1"/></negative>'),"Inverse of a region, the region or regions will no longer be considered block bounded.")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,'<union><region id="region1"/><region id="region2"/>..</union>'),"Combination of multiple regions.")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,'<complement><region id="region1"/><region id="region2"/>..</complement>'),"Subtracts successive regions from the first defined region.")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,'<intersect><region id="region1"/><region id="region2"/>..</intersect>'),"Returns the area that multiple regions intersect with."))))),Object(a.b)("p",null,Object(a.b)("img",Object(l.a)({parentName:"p"},{src:"https://i.imgur.com/LGiIjbg.png",alt:"Region Combinations"}))),Object(a.b)("p",null,"Regions can be translated or mirrored with the following elements. When translating or mirroring a region the original is not modified instead a copy is created."),Object(a.b)("p",null,"When mirroring a region the origin is the central point around which the region is mirrored. This point can be inside or outside the region being mirrored. The normal specifies which direction the region is being mirrored, e.g., ",Object(a.b)("inlineCode",{parentName:"p"},"1,0,0")," would mirror along the +X axis."),Object(a.b)("div",{className:"table-container",style:{marginBottom:"30px"}},Object(a.b)("table",null,Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,'<translate offset="X,Y,Z"><region id="region1"/></translate>'),"Copy and translate a region by ",Object(a.b)("label",null,"X,Y,Z")," blocks.")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,'<mirror normal="1,0,1" origin="100,50,0"><region id="region1"/></mirror>'),"Copy and mirror a region towards a normal around a point."))))),Object(a.b)("p",null,Object(a.b)("img",Object(l.a)({parentName:"p"},{src:"https://i.imgur.com/85QHTwz.png",alt:"Region Mirror"}))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Examples")),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- Region Union--\x3e\n<regions>\n    \x3c!-- Blue Team Base --\x3e\n    <apply enter="only-blue" message="You may not enter the enemy team\'s base!">\n        <region>\n            <union>\n                <cuboid min="-20,8,-75" max="11,41,-79"/>\n                <cuboid min="8,8,-80" max="13,41,-75"/>\n            </union>\n        </region>\n    </apply>\n</regions>\n\n\x3c!-- Region Mirror --\x3e\n<regions>\n    <apply block="never" message="You may not under-bridge!">\n        <region>\n            <cuboid id="red-underside" min="-oo,-oo,-oo" max="oo,41,40"/>\n            <mirror origin="116,44,93" normal="0,0,1">\n                <region id="red-underside"/>\n            </mirror>\n            <cuboid min="-oo,-oo,-oo" max="oo,37,oo"/>\n        </region>\n    </apply>\n</regions>\n')),Object(a.b)("h3",{id:"point-providers"},"Point Providers"),Object(a.b)("p",null,"A point provider is used to return individual points inside a region. It can also be used to modify the position returned by a region to include the direction a player ends up facing when spawned, etc.\nInput can be a region, a region modifier or simply an exact ",Object(a.b)("inlineCode",{parentName:"p"},"X,Y,Z")," coordinate."),Object(a.b)("pre",null,Object(a.b)("code",Object(l.a)({parentName:"pre"},{className:"language-xml"}),'<point yaw="90" pitch="50">X,Y,Z</point>\n')),Object(a.b)("h5",{id:"point-attributes"},"Point Attributes"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"region")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),"The region the point provider modifies."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/regions"},"Randomize-able Region"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"yaw")),Object(a.b)("td",null,"Specifies what direction the player is looking horizontally from -180\xb0 to 180\xb0.",Object(a.b)("br",null),Object(a.b)("i",null,"South 0\xb0, East -90\xb0, North 180\xb0 and West 90\xb0.")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"-180 to 180"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"pitch")),Object(a.b)("td",null,"Specifies what direction the player is looking vertically from -90\xb0 to 90\xb0.",Object(a.b)("br",null),Object(a.b)("i",null,"-90\xb0 is straight up 90\xb0 is straight down.")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"-90 to 90"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"angle")),Object(a.b)("td",null,"Specify the exact block coordinates that the player should look at.",Object(a.b)("br",null),Object(a.b)("i",null,"This attribute will negate any angles set by the ",Object(a.b)("label",null,"yaw")," ","and ",Object(a.b)("label",null,"pitch")," attributes.")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"X,Y,Z")))))),Object(a.b)("h5",{id:"point-sub-elements"},"Point Sub-elements"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value/Children")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<region>")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),"The region or regions the point provider modifies."),Object(a.b)("td",null,Object(a.b)("a",{href:"/modules/regions"},"Randomize-able Regions")))))),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"NOTE:")," The pitch and yaw arguments can also accept a ",Object(a.b)("inlineCode",{parentName:"p"},"X,Y,Z")," coordinate. ",Object(a.b)("br",null),"\n",Object(a.b)("inlineCode",{parentName:"p"},"TIP:")," Copy the yaw and pitch from the F3 screen in minecraft (the ",Object(a.b)("inlineCode",{parentName:"p"},"Facing: Direction (Axis) (Yaw/Pitch)")," line)."))}s.isMDXComponent=!0},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var l=n(0),b=n.n(l);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,b=function(e,t){if(null==e)return{};var n,l,b={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var o=b.a.createContext({}),s=function(e){var t=b.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r({},t,{},e)),n},d=function(e){var t=s(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},p=Object(l.forwardRef)((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=l,O=d["".concat(i,".").concat(p)]||d[p]||u[p]||a;return n?b.a.createElement(O,r({ref:t},o,{components:n})):b.a.createElement(O,r({ref:t},o))}));function O(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var o=2;o<a;o++)i[o]=n[o];return b.a.createElement.apply(null,i)}return b.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);