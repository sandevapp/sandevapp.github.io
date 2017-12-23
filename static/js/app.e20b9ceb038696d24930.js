webpackJsonp([1],{NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"Navbar"}},[t("nav",[t("div",{staticClass:"nav-wrapper blue"},[t("router-link",{staticClass:"brand-logo center",attrs:{to:"/"}},[this._v("Employee Manager")])],1)])])},staticRenderFns:[]},s={name:"app",data:function(){return{}},components:{Navbar:a("VU/8")({name:"Navbar",data:function(){return{}}},n,!1,null,null,null).exports}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Navbar"),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]},l=a("VU/8")(s,o,!1,null,null,null).exports,r=a("/ocq"),m=a("Sazm"),c=a.n(m),d=(a("3VHS"),c.a.initializeApp({apiKey:"AIzaSyCGrKQAubFnX6P26b7nVYg-BLg1W18Lwq0",authDomain:"vuejs-f46f1.firebaseapp.com",databaseURL:"https://vuejs-f46f1.firebaseio.com",projectId:"vuejs-f46f1",storageBucket:"vuejs-f46f1.appspot.com",messagingSenderId:"180776650901"}).firestore()),p={name:"CreateEmployee",data:function(){return{Employee:null,Fullname:null,Age:null,Department:null,Position:null}},methods:{createdata:function(){var e=this;d.collection("employees").add({employee_id:this.Employee,name:this.Fullname,age:this.Age,department:this.Department,position:this.Position}).then(function(t){e.$router.push("/")})}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"CreateEmployee"}},[a("form",{on:{submit:function(t){t.preventDefault(),e.createdata(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.Employee,expression:"Employee"}],staticClass:"materialize-textarea",attrs:{id:"Employee"},domProps:{value:e.Employee},on:{input:function(t){t.target.composing||(e.Employee=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"Employee"}},[e._v("Employee Identification")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s7"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.Fullname,expression:"Fullname"}],staticClass:"materialize-textarea",attrs:{id:"Fullname"},domProps:{value:e.Fullname},on:{input:function(t){t.target.composing||(e.Fullname=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"Fullname"}},[e._v("Fullname")])]),e._v(" "),a("div",{staticClass:"input-field col s5"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.Age,expression:"Age"}],staticClass:"materialize-textarea",attrs:{id:"Age"},domProps:{value:e.Age},on:{input:function(t){t.target.composing||(e.Age=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"Age"}},[e._v("Age")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.Department,expression:"Department"}],staticClass:"materialize-textarea",attrs:{id:"Department"},domProps:{value:e.Department},on:{input:function(t){t.target.composing||(e.Department=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"Department"}},[e._v("Department")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.Position,expression:"Position"}],staticClass:"materialize-textarea",attrs:{id:"Position"},domProps:{value:e.Position},on:{input:function(t){t.target.composing||(e.Position=t.target.value)}}}),e._v(" "),a("label",{attrs:{for:"Position"}},[e._v("Position")])])]),e._v(" "),a("router-link",{staticClass:"btn blue",attrs:{to:"/"}},[e._v("Back")]),e._v(" "),a("input",{staticClass:"btn blue",attrs:{type:"submit",value:"Create"}})],1)])},staticRenderFns:[]},v=a("VU/8")(p,u,!1,null,null,null).exports,f={name:"Dashboard",data:function(){return{employee:[]}},created:function(){var e=this;d.collection("employees").orderBy("employee_id").get().then(function(t){t.forEach(function(t){var a={doc_id:t.id,employee_id:t.data().employee_id,name:t.data().name,age:t.data().age,department:t.data().department,position:t.data().position};e.employee.push(a)})})}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"Dashboard"}},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[e._v("Create Employee\n\t\t\t\t"),a("router-link",{staticClass:"waves-effect waves-light btn secondary-content blue",attrs:{to:"/create"}},[e._v("Create")])],1)]),e._v(" "),e._l(e.employee,function(t){return a("div",[a("li",{staticClass:"collection-item"},[a("div",[e._v(e._s(t.employee_id)+" | "+e._s(t.name)+" \n\t\t\t \t\t"),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"ViewEmployee",params:{employee_id:t.employee_id}}}},[a("i",{staticClass:"material-icons blue600"},[e._v("remove_red_eye")])])],1)])])})],2)])},staticRenderFns:[]},h=a("VU/8")(f,_,!1,function(e){a("p6zQ")},null,null).exports,y={name:"EditEmployee",data:function(){return{Employee:null,Fullname:null,Age:null,Department:null,Position:null}},beforeRouteEnter:function(e,t,a){d.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.Employee=e.data().employee_id,t.Fullname=e.data().name,t.Age=e.data().age,t.Department=e.data().department,t.Position=e.data().position})})})},watch:{$route:"fetchdata"},methods:{fetchdata:function(){var e=this;d.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.Employee=t.data().employee_id,e.Fullname=t.data().name,e.Age=t.data().age,e.Department=t.data().department,e.Position=t.data().position})})},editing:function(){var e=this;d.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.update({employee_id:e.Employee,name:e.Fullname,age:e.Age,department:e.Department,position:e.Position}).then(function(){return e.$router.push({name:"ViewEmployee",params:{employee_id:e.Employee}})})})})}}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"EditEmployee"}},[a("form",{on:{submit:function(t){t.preventDefault(),e.editing(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.Employee,expression:"Employee"}],staticClass:"materialize-textarea",attrs:{disabled:"",id:"Employee"},domProps:{value:e.Employee},on:{input:function(t){t.target.composing||(e.Employee=t.target.value)}}}),e._v(" "),a("label",{staticClass:"active",attrs:{for:"Employee"}},[e._v("Employee Identification")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s7"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.Fullname,expression:"Fullname"}],staticClass:"materialize-textarea",attrs:{id:"Fullname"},domProps:{value:e.Fullname},on:{input:function(t){t.target.composing||(e.Fullname=t.target.value)}}}),e._v(" "),a("label",{staticClass:"active",attrs:{for:"Fullname"}},[e._v("Fullname")])]),e._v(" "),a("div",{staticClass:"input-field col s5"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.Age,expression:"Age"}],staticClass:"materialize-textarea",attrs:{id:"Age"},domProps:{value:e.Age},on:{input:function(t){t.target.composing||(e.Age=t.target.value)}}}),e._v(" "),a("label",{staticClass:"active",attrs:{for:"Age"}},[e._v("Age")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.Department,expression:"Department"}],staticClass:"materialize-textarea",attrs:{id:"Department"},domProps:{value:e.Department},on:{input:function(t){t.target.composing||(e.Department=t.target.value)}}}),e._v(" "),a("label",{staticClass:"active",attrs:{for:"Department"}},[e._v("Department")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.Position,expression:"Position"}],staticClass:"materialize-textarea",attrs:{id:"Position"},domProps:{value:e.Position},on:{input:function(t){t.target.composing||(e.Position=t.target.value)}}}),e._v(" "),a("label",{staticClass:"active",attrs:{for:"Position"}},[e._v("Position")])])]),e._v(" "),a("router-link",{staticClass:"btn blue",attrs:{to:"/"}},[e._v("Back")]),e._v(" "),a("input",{staticClass:"btn blue",attrs:{type:"submit",value:"Edit"}})],1)])},staticRenderFns:[]},C=a("VU/8")(y,g,!1,null,null,null).exports,E={name:"ViewEmployee",data:function(){return{doc_id:null,employee_id:null,name:null,age:null,department:null,position:null}},beforeRouteEnter:function(e,t,a){d.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.doc_id=e.id,t.employee_id=e.data().employee_id,t.name=e.data().name,t.age=e.data().age,t.department=e.data().department,t.position=e.data().position})})})},watch:{$route:"fetchdata"},methods:{fetchdata:function(){var e=this;d.collection("employees").where("employees","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.doc_id=t.id,e.employee_id=t.data().employee_id,e.name=t.data().name,e.age=t.data().age,e.department=t.data().department,e.position=t.data().position})})},deleting:function(){var e=this;d.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})})}}},b={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"ViewEmployee"}},[t("ul",{staticClass:"collection"},[t("li",{staticClass:"collection-item"},[this._v(this._s(this.doc_id))]),this._v(" "),t("li",{staticClass:"collection-item"},[this._v(this._s(this.employee_id))]),this._v(" "),t("li",{staticClass:"collection-item"},[this._v(this._s(this.name))]),this._v(" "),t("li",{staticClass:"collection-item"},[this._v(this._s(this.age))]),this._v(" "),t("li",{staticClass:"collection-item"},[this._v(this._s(this.department))]),this._v(" "),t("li",{staticClass:"collection-item"},[this._v(this._s(this.position))])]),this._v(" "),t("router-link",{staticClass:"waves-effect waves-light btn blue",attrs:{to:"/"}},[this._v("Back")]),this._v(" "),t("a",{staticClass:"waves-effect waves-light btn red",on:{click:this.deleting}},[this._v("Delete")]),this._v(" "),t("router-link",{staticClass:"waves-effect waves-light btn blue",attrs:{to:{name:"EditEmployee",params:{employee_id:this.employee_id}}}},[this._v("Edit")])],1)},staticRenderFns:[]},w=a("VU/8")(E,b,!1,null,null,null).exports;i.a.use(r.a);var x=new r.a({routes:[{path:"/",name:"Dashboard",component:h},{path:"/create",name:"CreateEmployee",component:v},{path:"/edit/:employee_id",name:"EditEmployee",component:C},{path:"/view/:employee_id",name:"ViewEmployee",component:w}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:x,template:"<App/>",components:{App:l}})},p6zQ:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.e20b9ceb038696d24930.js.map