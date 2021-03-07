(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return l}));var a=n(158),r=n(159),o=(n(0),n(160)),i={title:"MetadataChangeEvent (MCE) Consumer Job",hide_title:!0,slug:"/metadata-jobs/mce-consumer-job",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-jobs/mce-consumer-job/README.md"},c={unversionedId:"metadata-jobs/mce-consumer-job/README",id:"metadata-jobs/mce-consumer-job/README",isDocsHomePage:!1,title:"MetadataChangeEvent (MCE) Consumer Job",description:"MetadataChangeEvent (MCE) Consumer Job",source:"@site/genDocs/metadata-jobs/mce-consumer-job/README.md",slug:"/metadata-jobs/mce-consumer-job",permalink:"/docs/metadata-jobs/mce-consumer-job",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-jobs/mce-consumer-job/README.md",version:"current",sidebar:"overviewSidebar",previous:{title:"MetadataAuditEvent (MAE) Consumer Job",permalink:"/docs/metadata-jobs/mae-consumer-job"},next:{title:"Metadata Ingestion",permalink:"/docs/metadata-ingestion"}},b=[{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Build",id:"build",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Start via Docker image",id:"start-via-docker-image",children:[]},{value:"Start via command line",id:"start-via-command-line",children:[]},{value:"Debugging",id:"debugging",children:[]},{value:"Endpoints",id:"endpoints",children:[]}],u={rightToc:b};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"metadatachangeevent-mce-consumer-job"},"MetadataChangeEvent (MCE) Consumer Job"),Object(o.b)("p",null,"MCE Consumer is a ",Object(o.b)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/streams/"},"Kafka Streams")," job. Its main function is to listen\n",Object(o.b)("inlineCode",{parentName:"p"},"MetadataChangeEvent")," Kafka topic for messages and process those messages and writes new metadata to ",Object(o.b)("inlineCode",{parentName:"p"},"DataHub GMS"),".\nAfter every successful update of metadata, GMS fires a ",Object(o.b)("inlineCode",{parentName:"p"},"MetadataAuditEvent")," and this is consumed by\n",Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-jobs/mae-consumer-job"},"MAE Consumer Job"),"."),Object(o.b)("h2",{id:"pre-requisites"},"Pre-requisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You need to have ",Object(o.b)("a",{parentName:"li",href:"https://www.oracle.com/java/technologies/jdk8-downloads.html"},"JDK8")," installed on your machine to be\nable to build ",Object(o.b)("inlineCode",{parentName:"li"},"DataHub GMS"),".")),Object(o.b)("h2",{id:"build"},"Build"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"MCE Consumer Job")," is already built as part of top level build:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"./gradlew build\n")),Object(o.b)("p",null,"However, if you only want to build ",Object(o.b)("inlineCode",{parentName:"p"},"MCE Consumer Job")," specifically:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"./gradlew :metadata-jobs:mce-consumer-job:build\n")),Object(o.b)("h2",{id:"dependencies"},"Dependencies"),Object(o.b)("p",null,"Before starting ",Object(o.b)("inlineCode",{parentName:"p"},"MCE Consumer Job"),", you need to make sure that ",Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/docker/kafka-setup"},"Kafka, Schema Registry & Zookeeper"),"\nand ",Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/docker/datahub-gms"},"DataHub GMS")," Docker containers are up and running."),Object(o.b)("h2",{id:"start-via-docker-image"},"Start via Docker image"),Object(o.b)("p",null,"Quickest way to try out ",Object(o.b)("inlineCode",{parentName:"p"},"MCE Consumer Job")," is running the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/docker/datahub-mce-consumer"},"Docker image"),"."),Object(o.b)("h2",{id:"start-via-command-line"},"Start via command line"),Object(o.b)("p",null,"If you do modify things and want to try it out quickly without building the Docker image, you can also run\nthe application directly from command line after a successful ",Object(o.b)("a",{parentName:"p",href:"#build"},"build"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"./gradlew :metadata-jobs:mce-consumer-job:bootRun\n")),Object(o.b)("h2",{id:"debugging"},"Debugging"),Object(o.b)("p",null,"To debug with an IDE (i.e. IntelliJ), run the ",Object(o.b)("inlineCode",{parentName:"p"},"bootRun")," task with the ",Object(o.b)("inlineCode",{parentName:"p"},"--debug-jvm")," flag. This will launch the app and\nlisten on port 5005 for a remote debugger."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"./gradlew :metadata-jobs:mce-consumer-job:bootRun --debug-jvm\n")),Object(o.b)("h2",{id:"endpoints"},"Endpoints"),Object(o.b)("p",null,"Spring boot actuator has been enabled for MCE Application.\n",Object(o.b)("inlineCode",{parentName:"p"},"healthcheck"),", ",Object(o.b)("inlineCode",{parentName:"p"},"metrics")," and ",Object(o.b)("inlineCode",{parentName:"p"},"info")," web endpoints are enabled by default."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"healthcheck")," - http://localhost:9090/actuator/health"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"metrics")," - http://localhost:9090/actuator/metrics"),Object(o.b)("p",null,"To retrieve a specific metric - http://localhost:9090/actuator/metrics/kafka.consumer.records.consumed.total"))}l.isMDXComponent=!0},158:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},159:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=b(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,p=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return n?r.a.createElement(p,c(c({ref:t},u),{},{components:n})):r.a.createElement(p,c({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);