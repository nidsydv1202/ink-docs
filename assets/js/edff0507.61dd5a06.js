"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9334],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Storing Values",slug:"/basics/storing-values"},i=void 0,s={unversionedId:"basics/storing-values",id:"basics/storing-values",title:"Storing Values",description:"Here is how you store simple values in storage:",source:"@site/docs/basics/storing-values.md",sourceDirName:"basics",slug:"/basics/storing-values",permalink:"/basics/storing-values",draft:!1,editUrl:"https://github.com/ink-docs/edit/master/docs/basics/storing-values.md",tags:[],version:"current",frontMatter:{title:"Storing Values",slug:"/basics/storing-values"},sidebar:"reference",previous:{title:"Contract Template",permalink:"/basics/contract-template"},next:{title:"Reading Values from Storage",permalink:"/basics/reading-values"}},c={},l=[{value:"Supported Types",id:"supported-types",level:2},{value:"Initializing Storage in Constructors",id:"initializing-storage-in-constructors",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here is how you store simple values in storage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\npub struct MyContract {\n    // Store a bool\n    my_bool: bool,\n    // Store some number\n    my_number: u32,\n}\n/* --snip-- */\n")),(0,a.kt)("h2",{id:"supported-types"},"Supported Types"),(0,a.kt)("p",null,"Substrate contracts may store types that are encodable and decodable with\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-codec"},"Parity Codec")," which includes most Rust common data\ntypes such as ",(0,a.kt)("inlineCode",{parentName:"p"},"bool"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"u{8,16,32,64,128}"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"i{8,16,32,64,128}"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),", tuples, and arrays."),(0,a.kt)("p",null,"ink! provides Substrate specific types like ",(0,a.kt)("inlineCode",{parentName:"p"},"AccountId"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Balance"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Hash")," to smart contracts as if\nthey were primitive types. "),(0,a.kt)("p",null,"ink! also provides a ",(0,a.kt)("inlineCode",{parentName:"p"},"Mapping")," storage type. You can read more about it ",(0,a.kt)("a",{parentName:"p",href:"/datastructures/mapping"},"here"),"."),(0,a.kt)("p",null,"Here is an example of how you would store an ",(0,a.kt)("inlineCode",{parentName:"p"},"AccountId")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Balance"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// We are importing the default ink! types\nuse ink_lang as ink;\n\n#[ink::contract]\nmod MyContract {\n\n    // Our struct will use those default ink! types\n    #[ink(storage)]\n    pub struct MyContract {\n        // Store some AccountId\n        my_account: AccountId,\n        // Store some Balance\n        my_balance: Balance,\n    }\n    /* --snip-- */\n}\n")),(0,a.kt)("h2",{id:"initializing-storage-in-constructors"},"Initializing Storage in Constructors"),(0,a.kt)("p",null,"Constructors are how values get initialized.\nEvery ink! smart contract must have a constructor which is run once when a contract is created. ink! smart contracts can have multiple constructors:"),(0,a.kt)("p",null,"Note that if you have a contract whose storage contains ",(0,a.kt)("inlineCode",{parentName:"p"},"Mapping'"),"s you will need to use\n",(0,a.kt)("inlineCode",{parentName:"p"},"ink_lang::utils::initialize_contract")," in your constructor. See the\n",(0,a.kt)("a",{parentName:"p",href:"/datastructures/mapping"},(0,a.kt)("inlineCode",{parentName:"a"},"Mapping")," documentation")," for more details."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod mycontract {\n\n    #[ink(storage)]\n    pub struct MyContract {\n        number: u32,\n    }\n\n    impl MyContract {\n        /// Constructor that initializes the `u32` value to the given `init_value`.\n        #[ink(constructor)]\n        pub fn new(init_value: u32) -> Self {\n            Self {\n                number: init_value,\n            }\n        }\n\n        /// Constructor that initializes the `u32` value to the `u32` default.\n        #[ink(constructor)]\n        pub fn default() -> Self {\n            Self {\n                number: Default::default(),\n            }\n        }\n    /* --snip-- */\n    }\n}\n")))}p.isMDXComponent=!0}}]);