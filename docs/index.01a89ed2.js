!function(e,t,r,n,i){var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="function"==typeof s[n]&&s[n],a=o.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(t,r){if(!a[t]){if(!e[t]){var i="function"==typeof s[n]&&s[n];if(!r&&i)return i(t,!0);if(o)return o(t,!0);if(l&&"string"==typeof t)return l(t);var h=Error("Cannot find module '"+t+"'");throw h.code="MODULE_NOT_FOUND",h}f.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},f.cache={};var c=a[t]=new u.Module(t);e[t][0].call(c.exports,f,c,c.exports,s)}return a[t].exports;function f(e){var t=f.resolve(e);return!1===t?{}:u(t)}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=a,u.parent=o,u.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(u,"root",{get:function(){return s[n]}}),s[n]=u;for(var h=0;h<t.length;h++)u(t[h]);if(r){var c=u(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd&&define(function(){return c})}}({anU40:[function(e,t,r,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r),i.export(r,"updateFeedback",()=>m),i.export(r,"books",()=>a),i.export(r,"addBook",()=>f),i.export(r,"currentSort",()=>p),i.export(r,"uniqueCategory",()=>g),i.export(r,"displayBooks",()=>h);var s=e("firebase/firestore"),o=e("./firebaseConfig.js");let a=[];(async function(){let e=await (0,s.getDocs)((0,s.collection)(o.db,"bookLog"));a.length=0,e.forEach(e=>{a.push({id:e.id,...e.data()})})})().then(()=>{g=[...new Set(a.map(e=>e.author))],h(p,g)});let l=document.getElementById("bookForm"),u=document.getElementById("books");function h(e,t){u.innerHTML="",t.forEach(t=>{let r=document.createElement("div");r.classList.add("bookCategoryCard"),r.innerHTML=`<h3 class="categoryHeader">${t}</h3> <hr class="categoryLine">`;let n=document.createElement("div");n.classList.add("bookCategorySections"),r.appendChild(n),u.appendChild(r),a.filter(r=>r[e]===t).forEach(e=>{let t=document.createElement("div");t.classList.add("bookCard"),t.innerHTML=`
                <h3 class="book-title">${e.title}</h3>
                <p>Author: ${e.author}</p>
                <p>Genre: ${e.genre}</p><p>Rating: ${Array.from({length:5},(t,r)=>r<e.rating?"⭐":"☆").join("")}</p><div class="bookCardButtons">
                <button class="deleteBook" data-id="${e.id}">\u{274C}</button>
                <button class="editBook" data-id="${e.id}">Edit</button>
                </div>
                
            `,n.appendChild(t)})}),document.querySelectorAll(".deleteBook").forEach(e=>{e.addEventListener("click",async e=>{let t=e.target.dataset.id;await c(t)})}),document.querySelectorAll(".editBook").forEach(e=>{e.addEventListener("click",e=>{(function(e){d.style.display="block";let t=a.find(t=>t.id===e);document.getElementById("editTitle").value=t.title,document.getElementById("editAuthor").value=t.author,document.getElementById("editGenre").value=t.genre,document.getElementById("editRating").value=t.rating,document.getElementById("updateBook").dataset.id=t.id})(e.target.dataset.id)})})}async function c(e){await (0,s.deleteDoc)((0,s.doc)(o.db,"bookLog",e));let t=a.findIndex(t=>t.id===e);-1!==t&&(a.splice(t,1),h(p,g),m("Book deleted successfully!"))}async function f(e,t,r,n){let i=await (0,s.addDoc)((0,s.collection)(o.db,"bookLog"),{title:e,author:t,genre:r,rating:n});a.push({id:i.id,title:e,author:t,genre:r,rating:n}),h(p,g)}l.addEventListener("submit",async e=>{e.preventDefault();let t=document.getElementById("title").value,r=document.getElementById("author").value,n=document.getElementById("genre").value,i=document.getElementById("rating").value;await f(t,r,n,i),e.target.reset(),h(p,g),m("Book added successfully!")});let d=document.getElementById("editBook");document.getElementById("editBookForm").addEventListener("submit",async e=>{e.preventDefault();let t=document.getElementById("editTitle").value,r=document.getElementById("editAuthor").value,n=document.getElementById("editGenre").value,i=document.getElementById("editRating").value,l=document.getElementById("updateBook").dataset.id,u=(0,s.doc)(o.db,"bookLog",l);await (0,s.updateDoc)(u,{title:t,author:r,genre:n,rating:i});let c=a.findIndex(e=>e.id===l);-1!==c&&(a[c]={id:l,title:t,author:r,genre:n,rating:i},d.style.display="none",h(p,g),m("Book updated successfully!"))});let p="author",g=[...new Set(a.map(e=>e.author))];function m(e){setTimeout(()=>{document.querySelectorAll(".feedbackCard").forEach(e=>{e.remove()})},5e3);let t=document.getElementById("feedbackContainer"),r=document.createElement("div");r.classList.add("feedbackCard"),r.innerHTML=`<p>${e}</p>`,t.appendChild(r)}document.getElementById("authorSort").addEventListener("click",()=>{g=[...new Set(a.map(e=>e.author))],h(p="author",g)}),document.getElementById("titleSort").addEventListener("click",()=>{g=[...new Set(a.map(e=>e.genre))],h(p="genre",g)})},{"firebase/firestore":"59KHr","./firebaseConfig.js":"ciChV","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"59KHr":[function(e,t,r,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r);var s=e("@firebase/firestore");i.exportAll(s,r)},{"@firebase/firestore":"amS9o","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],amS9o:[function(e,t,r,n){var i,s,o,a,l=e("@parcel/transformer-js/src/esmodule-helpers.js");l.defineInteropFlag(r),l.export(r,"AbstractUserDataWriter",()=>uJ),l.export(r,"AggregateField",()=>lZ),l.export(r,"AggregateQuerySnapshot",()=>l0),l.export(r,"Bytes",()=>l1),l.export(r,"CACHE_SIZE_UNLIMITED",()=>lF),l.export(r,"CollectionReference",()=>lC),l.export(r,"DocumentReference",()=>lS),l.export(r,"DocumentSnapshot",()=>u8),l.export(r,"FieldPath",()=>l2),l.export(r,"FieldValue",()=>l5),l.export(r,"Firestore",()=>lB),l.export(r,"FirestoreError",()=>N),l.export(r,"GeoPoint",()=>l3),l.export(r,"LoadBundleTask",()=>lP),l.export(r,"PersistentCacheIndexManager",()=>h$),l.export(r,"Query",()=>lT),l.export(r,"QueryCompositeFilterConstraint",()=>uO),l.export(r,"QueryConstraint",()=>uA),l.export(r,"QueryDocumentSnapshot",()=>u4),l.export(r,"QueryEndAtConstraint",()=>uz),l.export(r,"QueryFieldFilterConstraint",()=>uk),l.export(r,"QueryLimitConstraint",()=>uF),l.export(r,"QueryOrderByConstraint",()=>uM),l.export(r,"QuerySnapshot",()=>u9),l.export(r,"QueryStartAtConstraint",()=>uU),l.export(r,"SnapshotMetadata",()=>u3),l.export(r,"Timestamp",()=>G),l.export(r,"Transaction",()=>hR),l.export(r,"VectorValue",()=>l8),l.export(r,"WriteBatch",()=>hk),l.export(r,"_AutoId",()=>q),l.export(r,"_ByteString",()=>tB),l.export(r,"_DatabaseId",()=>tX),l.export(r,"_DocumentKey",()=>X),l.export(r,"_EmptyAppCheckTokenProvider",()=>j),l.export(r,"_EmptyAuthCredentialsProvider",()=>L),l.export(r,"_FieldPath",()=>J),l.export(r,"_TestingHooks",()=>hZ),l.export(r,"_cast",()=>lw),l.export(r,"_debugAssert",()=>D),l.export(r,"_internalAggregationQueryToProtoRunAggregationQueryRequest",()=>hX),l.export(r,"_internalQueryToProtoQueryTarget",()=>hJ),l.export(r,"_isBase64Available",()=>tF),l.export(r,"_logWarn",()=>S),l.export(r,"_validateIsNotUsedTogether",()=>lg),l.export(r,"addDoc",()=>hh),l.export(r,"aggregateFieldEqual",()=>u6),l.export(r,"aggregateQuerySnapshotEqual",()=>u5),l.export(r,"and",()=>uL),l.export(r,"arrayRemove",()=>hB),l.export(r,"arrayUnion",()=>hF),l.export(r,"average",()=>u1),l.export(r,"clearIndexedDbPersistence",()=>lK),l.export(r,"collection",()=>lA),l.export(r,"collectionGroup",()=>lD),l.export(r,"connectFirestoreEmulator",()=>l_),l.export(r,"count",()=>u2),l.export(r,"deleteAllPersistentCacheIndexes",()=>hQ),l.export(r,"deleteDoc",()=>hu),l.export(r,"deleteField",()=>hM),l.export(r,"disableNetwork",()=>lW),l.export(r,"disablePersistentCacheIndexAutoCreation",()=>hH),l.export(r,"doc",()=>lk),l.export(r,"documentId",()=>l6),l.export(r,"enableIndexedDbPersistence",()=>lz),l.export(r,"enableMultiTabIndexedDbPersistence",()=>l$),l.export(r,"enableNetwork",()=>lQ),l.export(r,"enablePersistentCacheIndexAutoCreation",()=>hK),l.export(r,"endAt",()=>uG),l.export(r,"endBefore",()=>u$),l.export(r,"ensureFirestoreConfigured",()=>lj),l.export(r,"executeWrite",()=>hd),l.export(r,"getAggregateFromServer",()=>hm),l.export(r,"getCountFromServer",()=>hg),l.export(r,"getDoc",()=>he),l.export(r,"getDocFromCache",()=>hr),l.export(r,"getDocFromServer",()=>hn),l.export(r,"getDocs",()=>hi),l.export(r,"getDocsFromCache",()=>hs),l.export(r,"getDocsFromServer",()=>ho),l.export(r,"getFirestore",()=>lU),l.export(r,"getPersistentCacheIndexManager",()=>hG),l.export(r,"increment",()=>hV),l.export(r,"initializeFirestore",()=>lV),l.export(r,"limit",()=>uB),l.export(r,"limitToLast",()=>uV),l.export(r,"loadBundle",()=>lJ),l.export(r,"memoryEagerGarbageCollector",()=>hx),l.export(r,"memoryLocalCache",()=>hE),l.export(r,"memoryLruGarbageCollector",()=>hI),l.export(r,"namedQuery",()=>lX),l.export(r,"onSnapshot",()=>hc),l.export(r,"onSnapshotsInSync",()=>hf),l.export(r,"or",()=>uR),l.export(r,"orderBy",()=>uP),l.export(r,"persistentLocalCache",()=>h_),l.export(r,"persistentMultipleTabManager",()=>hA),l.export(r,"persistentSingleTabManager",()=>hC),l.export(r,"query",()=>uD),l.export(r,"queryEqual",()=>lO),l.export(r,"refEqual",()=>lN),l.export(r,"runTransaction",()=>hL),l.export(r,"serverTimestamp",()=>hP),l.export(r,"setDoc",()=>ha),l.export(r,"setIndexConfiguration",()=>hq),l.export(r,"setLogLevel",()=>E),l.export(r,"snapshotEqual",()=>u7),l.export(r,"startAfter",()=>uq),l.export(r,"startAt",()=>uj),l.export(r,"sum",()=>u0),l.export(r,"terminate",()=>lY),l.export(r,"updateDoc",()=>hl),l.export(r,"vector",()=>hU),l.export(r,"waitForPendingWrites",()=>lH),l.export(r,"where",()=>uN),l.export(r,"writeBatch",()=>hj);var u=e("@firebase/app"),h=e("@firebase/component"),c=e("@firebase/logger"),f=e("@firebase/util"),d=e("@firebase/webchannel-wrapper/bloom-blob"),p=e("@firebase/webchannel-wrapper/webchannel-blob"),g=e("1f357d3d806fe63b"),m=e("d0007d14bc1ab93c").Buffer;let y="@firebase/firestore",v="4.7.8";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}w.UNAUTHENTICATED=new w(null),w.GOOGLE_CREDENTIALS=new w("google-credentials-uid"),w.FIRST_PARTY=new w("first-party-uid"),w.MOCK_USER=new w("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b="11.3.1",x=new c.Logger("@firebase/firestore");function I(){return x.logLevel}function E(e){x.setLogLevel(e)}function _(e,...t){if(x.logLevel<=c.LogLevel.DEBUG){let r=t.map(C);x.debug(`Firestore (${b}): ${e}`,...r)}}function T(e,...t){if(x.logLevel<=c.LogLevel.ERROR){let r=t.map(C);x.error(`Firestore (${b}): ${e}`,...r)}}function S(e,...t){if(x.logLevel<=c.LogLevel.WARN){let r=t.map(C);x.warn(`Firestore (${b}): ${e}`,...r)}}function C(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e="Unexpected state"){let t=`FIRESTORE (${b}) INTERNAL ASSERTION FAILED: `+e;throw T(t),Error(t)}function D(e,t){e||A()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends f.FirebaseError{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class L{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(w.UNAUTHENTICATED))}shutdown(){}}class M{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class P{constructor(e){this.t=e,this.currentUser=w.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){void 0===this.o||A();let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),i=new O;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new O,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},o=e=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new O)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||A(),new R(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||A(),new w(e)}}class F{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=w.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);let e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class B{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new F(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(w.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class V{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class U{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,(0,u._isFirebaseServerApp)(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){void 0===this.o||A();let r=e=>{null!=e.error&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.R;return this.R=e.token,_("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?n(e):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new V(this.V));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||A(),this.R=e.token,new V(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class j{getToken(){return Promise.resolve(new V(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static newId(){let e=62*Math.floor(256/62),t="";for(;t.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(40);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let e=0;e<40;e++)r[e]=Math.floor(256*Math.random());return r}(40);for(let n=0;n<r.length;++n)t.length<20&&r[n]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(r[n]%62))}return t}}function z(e,t){return e<t?-1:+(e>t)}function $(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}class G{static now(){return G.fromMillis(Date.now())}static fromDate(e){return G.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*1e6);return new G(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new N(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-0xe7791f700||e>=0x3afff44180)throw new N(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?z(this.nanoseconds,e.nanoseconds):z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -0xe7791f700).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{static fromTimestamp(e){return new K(e)}static min(){return new K(new G(0,0))}static max(){return new K(new G(0x3afff4417f,0x3b9ac9ff))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let H="__name__";class Q{constructor(e,t,r){void 0===t?t=0:t>e.length&&A(),void 0===r?r=e.length-t:r>e.length-t&&A(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===Q.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof Q?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=Q.compareSegments(e.get(n),t.get(n));if(0!==r)return r}return Math.sign(e.length-t.length)}static compareSegments(e,t){let r=Q.isNumericId(e),n=Q.isNumericId(t);return r&&!n?-1:!r&&n?1:r&&n?Q.extractNumericId(e).compare(Q.extractNumericId(t)):e<t?-1:+(e>t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return(0,d.Integer).fromString(e.substring(4,e.length-2))}}class W extends Q{construct(e,t,r){return new W(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new N(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new W(t)}static emptyPath(){return new W([])}}let Y=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class J extends Q{construct(e,t,r){return new J(e,t,r)}static isValidIdentifier(e){return Y.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),J.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===H}static keyField(){return new J([H])}static fromServerFormat(e){let t=[],r="",n=0,i=()=>{if(0===r.length)throw new N(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},s=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new N(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new N(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?s=!s:"."!==t||s?r+=t:i(),n++}if(i(),s)throw new N(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new J(t)}static emptyPath(){return new J([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(W.fromString(e))}static fromName(e){return new X(W.fromString(e).popFirst(5))}static empty(){return new X(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===W.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return W.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new W(e.slice()))}}class Z{constructor(e,t,r,n){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=n}}function ee(e){return e.fields.find(e=>2===e.kind)}function et(e){return e.fields.filter(e=>2!==e.kind)}function er(e,t){let r=z(e.collectionGroup,t.collectionGroup);if(0!==r)return r;for(let n=0;n<Math.min(e.fields.length,t.fields.length);++n)if(0!==(r=function(e,t){let r=J.comparator(e.fieldPath,t.fieldPath);return 0!==r?r:z(e.kind,t.kind)}(e.fields[n],t.fields[n])))return r;return z(e.fields.length,t.fields.length)}Z.UNKNOWN_ID=-1;class en{constructor(e,t){this.fieldPath=e,this.kind=t}}class ei{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new ei(0,ea.min())}}function es(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1;return new ea(K.fromTimestamp(1e9===n?new G(r+1,0):new G(r,n)),X.empty(),t)}function eo(e){return new ea(e.readTime,e.key,-1)}class ea{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ea(K.min(),X.empty(),-1)}static max(){return new ea(K.max(),X.empty(),-1)}}function el(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=X.comparator(e.documentKey,t.documentKey))?r:z(e.largestBatchId,t.largestBatchId)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class eh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ec(e){if(e.code!==k.FAILED_PRECONDITION||e.message!==eu)throw e;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ef((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof ef?t:ef.resolve(t)}catch(e){return ef.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ef.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ef.reject(t)}static resolve(e){return new ef((t,r)=>{t(e)})}static reject(e){return new ef((t,r)=>{r(e)})}static waitFor(e){return new ef((t,r)=>{let n=0,i=0,s=!1;e.forEach(e=>{++n,e.next(()=>{++i,s&&i===n&&t()},e=>r(e))}),s=!0,i===n&&t()})}static or(e){let t=ef.resolve(!1);for(let r of e)t=t.next(e=>e?ef.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new ef((r,n)=>{let i=e.length,s=Array(i),o=0;for(let a=0;a<i;a++){let l=a;t(e[l]).next(e=>{s[l]=e,++o===i&&r(s)},e=>n(e))}})}static doWhile(e,t){return new ef((r,n)=>{let i=()=>{!0===e()?t().next(()=>{i()},n):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ed="SimpleDb";class ep{static open(e,t,r,n){try{return new ep(t,e.transaction(n,r))}catch(e){throw new ev(t,e)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.m=new O,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{t.error?this.m.reject(new ev(e,t.error)):this.m.resolve()},this.transaction.onerror=t=>{let r=eE(t.target.error);this.m.reject(new ev(e,r))}}get p(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(_(ed,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}S(){let e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){return new eb(this.transaction.objectStore(e))}}class eg{static delete(e){return _(ed,"Removing database:",e),ex(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,f.isIndexedDBAvailable)())return!1;if(eg.v())return!0;let e=(0,f.getUA)(),t=eg.C(e),r=em(e);return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||0<t&&t<10||0<r&&r<4.5)}static v(){var e;return void 0!==g&&"YES"===(null===(e=g.__PRIVATE_env)||void 0===e?void 0:e.F)}static M(e,t){return e.store(t)}static C(e){let t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i);return Number(t?t[1].split("_").slice(0,2).join("."):"-1")}constructor(e,t,r){this.name=e,this.version=t,this.O=r,12.2===eg.C((0,f.getUA)())&&T("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async N(e){return this.db||(_(ed,"Opening database:",this.name),this.db=await new Promise((t,r)=>{let n=indexedDB.open(this.name,this.version);n.onsuccess=e=>{t(e.target.result)},n.onblocked=()=>{r(new ev(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},n.onerror=t=>{let n=t.target.error;"VersionError"===n.name?r(new N(k.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===n.name?r(new N(k.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+n)):r(new ev(e,n))},n.onupgradeneeded=e=>{_(ed,'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);let t=e.target.result;this.O.B(t,n.transaction,e.oldVersion,this.version).next(()=>{_(ed,"Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=e=>this.L(e)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,n){let i="readonly"===t,s=0;for(;;){++s;try{this.db=await this.N(e);let t=ep.open(this.db,e,i?"readonly":"readwrite",r),s=n(t).next(e=>(t.S(),e)).catch(e=>(t.abort(e),ef.reject(e))).toPromise();return s.catch(()=>{}),await t.p,s}catch(t){let e="FirebaseError"!==t.name&&s<3;if(_(ed,"Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}function em(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}class ey{constructor(e){this.q=e,this.$=!1,this.K=null}get isDone(){return this.$}get U(){return this.K}set cursor(e){this.q=e}done(){this.$=!0}W(e){this.K=e}delete(){return ex(this.q.delete())}}class ev extends N{constructor(e,t){super(k.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ew(e){return"IndexedDbTransactionError"===e.name}class eb{constructor(e){this.store=e}put(e,t){let r;return void 0!==t?(_(ed,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(_(ed,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ex(r)}add(e){return _(ed,"ADD",this.store.name,e,e),ex(this.store.add(e))}get(e){return ex(this.store.get(e)).next(t=>(void 0===t&&(t=null),_(ed,"GET",this.store.name,e,t),t))}delete(e){return _(ed,"DELETE",this.store.name,e),ex(this.store.delete(e))}count(){return _(ed,"COUNT",this.store.name),ex(this.store.count())}G(e,t){let r=this.options(e,t),n=r.index?this.store.index(r.index):this.store;if("function"==typeof n.getAll){let e=n.getAll(r.range);return new ef((t,r)=>{e.onerror=e=>{r(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}{let e=this.cursor(r),t=[];return this.j(e,(e,r)=>{t.push(r)}).next(()=>t)}}H(e,t){let r=this.store.getAll(e,null===t?void 0:t);return new ef((e,t)=>{r.onerror=e=>{t(e.target.error)},r.onsuccess=t=>{e(t.target.result)}})}J(e,t){_(ed,"DELETE ALL",this.store.name);let r=this.options(e,t);r.Y=!1;let n=this.cursor(r);return this.j(n,(e,t,r)=>r.delete())}Z(e,t){let r;t?r=e:(r={},t=e);let n=this.cursor(r);return this.j(n,t)}X(e){let t=this.cursor({});return new ef((r,n)=>{t.onerror=e=>{n(eE(e.target.error))},t.onsuccess=t=>{let n=t.target.result;n?e(n.primaryKey,n.value).next(e=>{e?n.continue():r()}):r()}})}j(e,t){let r=[];return new ef((n,i)=>{e.onerror=e=>{i(e.target.error)},e.onsuccess=e=>{let i=e.target.result;if(!i)return void n();let s=new ey(i),o=t(i.primaryKey,i.value,s);if(o instanceof ef){let e=o.catch(e=>(s.done(),ef.reject(e)));r.push(e)}s.isDone?n():null===s.U?i.continue():i.continue(s.U)}}).next(()=>ef.waitFor(r))}options(e,t){let r;return void 0!==e&&("string"==typeof e?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){let r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ex(e){return new ef((t,r)=>{e.onsuccess=e=>{t(e.target.result)},e.onerror=e=>{r(eE(e.target.error))}})}let eI=!1;function eE(e){let t=eg.C((0,f.getUA)());if(t>=12.2&&t<13){let t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){let e=new N("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return eI||(eI=!0,setTimeout(()=>{throw e},0)),e}}return e}let e_="IndexBackfiller";class eT{constructor(e,t){this.asyncQueue=e,this.ee=t,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}te(e){_(e_,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{let e=await this.ee.ne();_(e_,`Documents written: ${e}`)}catch(e){ew(e)?_(e_,"Ignoring IndexedDB error during index backfill: ",e):await ec(e)}await this.te(6e4)})}}class eS{constructor(e,t){this.localStore=e,this.persistence=t}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.re(t,e))}re(e,t){let r=new Set,n=t,i=!0;return ef.doWhile(()=>!0===i&&n>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!r.has(t))return _(e_,`Processing collection: ${t}`),this.ie(e,t,n).next(e=>{n-=e,r.add(t)});i=!1})).next(()=>t-n)}ie(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(n=>this.localStore.localDocuments.getNextDocuments(e,t,n,r).next(r=>{let i=r.changes;return this.localStore.indexManager.updateIndexEntries(e,i).next(()=>this.se(n,r)).next(r=>(_(e_,`Updating offset: ${r}`),this.localStore.indexManager.updateCollectionGroup(e,t,r))).next(()=>i.size)}))}se(e,t){let r=e;return t.changes.forEach((e,t)=>{let n=eo(t);el(n,r)>0&&(r=n)}),new ea(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this._e&&this._e(e),e}}function eA(e){return null==e}function eD(e){return 0===e&&1/e==-1/0}function ek(e){return"number"==typeof e&&Number.isInteger(e)&&!eD(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}function eN(e){let t="";for(let r=0;r<e.length;r++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let r=t,n=e.length;for(let t=0;t<n;t++){let n=e.charAt(t);switch(n){case"\0":r+="\x01\x10";break;case"\x01":r+="\x01\x11";break;default:r+=n}}return r}(e.get(r),t);return t+"\x01\x01"}eC.ae=-1;function eO(e){let t=e.length;if(t>=2||A(),2===t)return"\x01"===e.charAt(0)&&"\x01"===e.charAt(1)||A(),W.emptyPath();let r=t-2,n=[],i="";for(let s=0;s<t;){let t=e.indexOf("\x01",s);switch((t<0||t>r)&&A(),e.charAt(t+1)){case"\x01":let o;let a=e.substring(s,t);0===i.length?o=a:(i+=a,o=i,i=""),n.push(o);break;case"\x10":i+=e.substring(s,t),i+="\0";break;case"\x11":i+=e.substring(s,t+1);break;default:A()}s=t+2}return new W(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eR="remoteDocuments",eL="owner",eM="owner",eP="mutationQueues",eF="mutations",eB="batchId",eV="userMutationsIndex",eU=["userId","batchId"],ej={},eq="documentMutations",ez="remoteDocumentsV14",e$=["prefixPath","collectionGroup","readTime","documentId"],eG="documentKeyIndex",eK=["prefixPath","collectionGroup","documentId"],eH="collectionGroupIndex",eQ=["collectionGroup","readTime","prefixPath","documentId"],eW="remoteDocumentGlobal",eY="remoteDocumentGlobalKey",eJ="targets",eX="queryTargetsIndex",eZ=["canonicalId","targetId"],e0="targetDocuments",e1=["targetId","path"],e2="documentTargetsIndex",e6=["path","targetId"],e5="targetGlobalKey",e3="targetGlobal",e8="collectionParents",e4=["collectionId","parent"],e9="clientMetadata",e7="bundles",te="namedQueries",tt="indexConfiguration",tr="collectionGroupIndex",tn="indexState",ti=["indexId","uid"],ts="sequenceNumberIndex",to=["uid","sequenceNumber"],ta="indexEntries",tl=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],tu="documentKeyIndex",th=["indexId","uid","orderedDocumentKey"],tc="documentOverlays",tf=["userId","collectionPath","documentId"],td="collectionPathOverlayIndex",tp=["userId","collectionPath","largestBatchId"],tg="collectionGroupOverlayIndex",tm=["userId","collectionGroup","largestBatchId"],ty="globals",tv=[eP,eF,eq,eR,eJ,eL,e3,e0,e9,eW,e8,e7,te],tw=[...tv,tc],tb=[eP,eF,eq,ez,eJ,eL,e3,e0,e9,eW,e8,e7,te,tc],tx=[...tb,tt,tn,ta],tI=[...tx,ty];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE extends eh{constructor(e,t){super(),this.ue=e,this.currentSequenceNumber=t}}function t_(e,t){return eg.M(e.ue,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function tS(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function tC(e,t){let r=[];for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.push(t(e[n],n,e));return r}function tA(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(e,t){this.comparator=e,this.root=t||tN.EMPTY}insert(e,t){return new tD(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,tN.BLACK,null,null))}remove(e){return new tD(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tN.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new tk(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new tk(this.root,e,this.comparator,!1)}getReverseIterator(){return new tk(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new tk(this.root,e,this.comparator,!0)}}class tk{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tN{constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:tN.RED,this.left=null!=n?n:tN.EMPTY,this.right=null!=i?i:tN.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,i){return new tN(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return tN.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return tN.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,tN.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,tN.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();let e=this.left.check();if(e!==this.right.check())throw A();return e+ +!this.isRed()}}tN.EMPTY=null,tN.RED=!0,tN.BLACK=!1,tN.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(e,t,r,n,i){return this}insert(e,t,r){return new tN(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e){this.comparator=e,this.data=new tD(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new tR(this.data.getIterator())}getIteratorFrom(e){return new tR(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof tO)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new tO(this.comparator);return t.data=e,t}}class tR{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function tL(e){return e.hasNext()?e.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e){this.fields=e,e.sort(J.comparator)}static empty(){return new tM([])}unionWith(e){let t=new tO(J.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new tM(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return $(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tF(){return"undefined"!=typeof atob}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tB{constructor(e){this.binaryString=e}static fromBase64String(e){return new tB(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new tP("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new tB(function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tB.EMPTY_BYTE_STRING=new tB("");let tV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tU(e){if(e||A(),"string"==typeof e){let t=0,r=tV.exec(e);if(r||A(),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:tj(e.seconds),nanos:tj(e.nanos)}}function tj(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function tq(e){return"string"==typeof e?tB.fromBase64String(e):tB.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tz="server_timestamp",t$="__type__",tG="__previous_value__",tK="__local_write_time__";function tH(e){var t,r;return(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[t$])||void 0===r?void 0:r.stringValue)===tz}function tQ(e){let t=e.mapValue.fields[tG];return tH(t)?tQ(t):t}function tW(e){let t=tU(e.mapValue.fields[tK].timestampValue);return new G(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tY{constructor(e,t,r,n,i,s,o,a,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}let tJ="(default)";class tX{constructor(e,t){this.projectId=e,this.database=t||tJ}static empty(){return new tX("","")}get isDefaultDatabase(){return this.database===tJ}isEqual(e){return e instanceof tX&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tZ="__type__",t0="__max__",t1={mapValue:{fields:{__type__:{stringValue:t0}}}},t2="__vector__",t6="value",t5={nullValue:"NULL_VALUE"};function t3(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?tH(e)?4:rh(e)?0x1fffffffffffff:rl(e)?10:11:A()}function t8(e,t){if(e===t)return!0;let r=t3(e);if(r!==t3(t))return!1;switch(r){case 0:case 0x1fffffffffffff:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return tW(e).isEqual(tW(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=tU(e.timestampValue),n=tU(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return tq(e.bytesValue).isEqual(tq(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return tj(e.geoPointValue.latitude)===tj(t.geoPointValue.latitude)&&tj(e.geoPointValue.longitude)===tj(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return tj(e.integerValue)===tj(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=tj(e.doubleValue),n=tj(t.doubleValue);return r===n?eD(r)===eD(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return $(e.arrayValue.values||[],t.arrayValue.values||[],t8);case 10:case 11:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(tT(r)!==tT(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!t8(r[e],n[e])))return!1;return!0}(e,t);default:return A()}}function t4(e,t){return void 0!==(e.values||[]).find(e=>t8(e,t))}function t9(e,t){if(e===t)return 0;let r=t3(e),n=t3(t);if(r!==n)return z(r,n);switch(r){case 0:case 0x1fffffffffffff:return 0;case 1:return z(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=tj(e.integerValue||e.doubleValue),n=tj(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return t7(e.timestampValue,t.timestampValue);case 4:return t7(tW(e),tW(t));case 5:return z(e.stringValue,t.stringValue);case 6:return function(e,t){let r=tq(e),n=tq(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=z(r[e],n[e]);if(0!==t)return t}return z(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=z(tj(e.latitude),tj(t.latitude));return 0!==r?r:z(tj(e.longitude),tj(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return re(e.arrayValue,t.arrayValue);case 10:return function(e,t){var r,n,i,s;let o=e.fields||{},a=t.fields||{},l=null===(r=o[t6])||void 0===r?void 0:r.arrayValue,u=null===(n=a[t6])||void 0===n?void 0:n.arrayValue,h=z((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==h?h:re(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===t1.mapValue&&t===t1.mapValue)return 0;if(e===t1.mapValue)return 1;if(t===t1.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),i=t.fields||{},s=Object.keys(i);n.sort(),s.sort();for(let e=0;e<n.length&&e<s.length;++e){let t=z(n[e],s[e]);if(0!==t)return t;let o=t9(r[n[e]],i[s[e]]);if(0!==o)return o}return z(n.length,s.length)}(e.mapValue,t.mapValue);default:throw A()}}function t7(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return z(e,t);let r=tU(e),n=tU(t),i=z(r.seconds,n.seconds);return 0!==i?i:z(r.nanos,n.nanos)}function re(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=t9(r[e],n[e]);if(t)return t}return z(r.length,n.length)}function rt(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=tU(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?tq(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,X.fromName(t).toString()):"geoPointValue"in e?(r=e.geoPointValue,`geo(${r.latitude},${r.longitude})`):"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=rt(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let i of t)n?n=!1:r+=",",r+=`${i}:${rt(e.fields[i])}`;return r+"}"}(e.mapValue):A()}function rr(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function rn(e){return!!e&&"integerValue"in e}function ri(e){return!!e&&"arrayValue"in e}function rs(e){return!!e&&"nullValue"in e}function ro(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ra(e){return!!e&&"mapValue"in e}function rl(e){var t,r;return(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[tZ])||void 0===r?void 0:r.stringValue)===t2}function ru(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return tS(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=ru(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=ru(e.arrayValue.values[r]);return t}return Object.assign({},e)}function rh(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===t0}let rc={mapValue:{fields:{[tZ]:{stringValue:t2},[t6]:{arrayValue:{}}}}};function rf(e,t){let r=t9(e.value,t.value);return 0!==r?r:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function rd(e,t){let r=t9(e.value,t.value);return 0!==r?r:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e){this.value=e}static empty(){return new rp({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!ra(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ru(t)}setAll(e){let t=J.emptyPath(),r={},n=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=i.popLast()}e?r[i.lastSegment()]=ru(e):n.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,r,n)}delete(e){let t=this.field(e.popLast());ra(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return t8(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];ra(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(tS(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new rp(ru(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,t,r,n,i,s,o){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new rg(e,0,K.min(),K.min(),K.min(),rp.empty(),0)}static newFoundDocument(e,t,r,n){return new rg(e,1,t,K.min(),r,n,0)}static newNoDocument(e,t){return new rg(e,2,t,K.min(),K.min(),rp.empty(),0)}static newUnknownDocument(e,t){return new rg(e,3,t,K.min(),K.min(),rp.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(K.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rp.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rp.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof rg&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rg(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e,t){this.position=e,this.inclusive=t}}function ry(e,t,r){let n=0;for(let i=0;i<e.position.length;i++){let s=t[i],o=e.position[i];if(n=s.field.isKeyField()?X.comparator(X.fromName(o.referenceValue),r.key):t9(o,r.data.field(s.field)),"desc"===s.dir&&(n*=-1),0!==n)break}return n}function rv(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!t8(e.position[r],t.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{}class rx extends rb{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new rA(e,t,r):"array-contains"===t?new rO(e,r):"in"===t?new rR(e,r):"not-in"===t?new rL(e,r):"array-contains-any"===t?new rM(e,r):new rx(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new rD(e,r):new rk(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(t9(t,this.value)):null!==t&&t3(this.value)===t3(t)&&this.matchesComparison(t9(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class rI extends rb{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new rI(e,t)}matches(e){return rE(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function rE(e){return"and"===e.op}function r_(e){return"or"===e.op}function rT(e){return rS(e)&&rE(e)}function rS(e){for(let t of e.filters)if(t instanceof rI)return!1;return!0}function rC(e,t){let r=e.filters.concat(t);return rI.create(r,e.op)}class rA extends rx{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){let t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class rD extends rx{constructor(e,t){super(e,"in",t),this.keys=rN("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class rk extends rx{constructor(e,t){super(e,"not-in",t),this.keys=rN("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function rN(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>X.fromName(e.referenceValue))}class rO extends rx{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return ri(t)&&t4(t.arrayValue,this.value)}}class rR extends rx{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&t4(this.value.arrayValue,t)}}class rL extends rx{constructor(e,t){super(e,"not-in",t)}matches(e){if(t4(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!t4(this.value.arrayValue,t)}}class rM extends rx{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!ri(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>t4(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e,t=null,r=[],n=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=i,this.startAt=s,this.endAt=o,this.le=null}}function rF(e,t=null,r=[],n=[],i=null,s=null,o=null){return new rP(e,t,r,n,i,s,o)}function rB(e){if(null===e.le){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(e=>(function e(t){if(t instanceof rx)return t.field.canonicalString()+t.op.toString()+rt(t.value);if(rT(t))return t.filters.map(t=>e(t)).join(",");{let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(","),t+="|ob:",t+=e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),eA(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>rt(e)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>rt(e)).join(",")),e.le=t}return e.le}function rV(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var r,n;if(r=e.orderBy[i],n=t.orderBy[i],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof rx?r instanceof rx&&t.op===r.op&&t.field.isEqual(r.field)&&t8(t.value,r.value):t instanceof rI?r instanceof rI&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,i)=>t&&e(n,r.filters[i]),!0):void A()}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!rv(e.startAt,t.startAt)&&rv(e.endAt,t.endAt)}function rU(e){return X.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function rj(e,t){return e.filters.filter(e=>e instanceof rx&&e.field.isEqual(t))}function rq(e,t,r){let n=t5,i=!0;for(let r of rj(e,t)){let e=t5,t=!0;switch(r.op){case"<":case"<=":var s;e="nullValue"in(s=r.value)?t5:"booleanValue"in s?{booleanValue:!1}:"integerValue"in s||"doubleValue"in s?{doubleValue:NaN}:"timestampValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in s?{stringValue:""}:"bytesValue"in s?{bytesValue:""}:"referenceValue"in s?rr(tX.empty(),X.empty()):"geoPointValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in s?{arrayValue:{}}:"mapValue"in s?rl(s)?rc:{mapValue:{}}:A();break;case"==":case"in":case">=":e=r.value;break;case">":e=r.value,t=!1;break;case"!=":case"not-in":e=t5}0>rf({value:n,inclusive:i},{value:e,inclusive:t})&&(n=e,i=t)}if(null!==r){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=r.position[s];0>rf({value:n,inclusive:i},{value:e,inclusive:r.inclusive})&&(n=e,i=r.inclusive);break}}return{value:n,inclusive:i}}function rz(e,t,r){let n=t1,i=!0;for(let r of rj(e,t)){let e=t1,t=!0;switch(r.op){case">=":case">":var s;e="nullValue"in(s=r.value)?{booleanValue:!1}:"booleanValue"in s?{doubleValue:NaN}:"integerValue"in s||"doubleValue"in s?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in s?{stringValue:""}:"stringValue"in s?{bytesValue:""}:"bytesValue"in s?rr(tX.empty(),X.empty()):"referenceValue"in s?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in s?{arrayValue:{}}:"arrayValue"in s?rc:"mapValue"in s?rl(s)?{mapValue:{}}:t1:A(),t=!1;break;case"==":case"in":case"<=":e=r.value;break;case"<":e=r.value,t=!1;break;case"!=":case"not-in":e=t1}rd({value:n,inclusive:i},{value:e,inclusive:t})>0&&(n=e,i=t)}if(null!==r){for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){let e=r.position[s];rd({value:n,inclusive:i},{value:e,inclusive:r.inclusive})>0&&(n=e,i=r.inclusive);break}}return{value:n,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r${constructor(e,t=null,r=[],n=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function rG(e){return new r$(e)}function rK(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function rH(e){return null!==e.collectionGroup}function rQ(e){if(null===e.he){let t;e.he=[];let r=new Set;for(let t of e.explicitOrderBy)e.he.push(t),r.add(t.field.canonicalString());let n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new tO(J.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{r.has(t.canonicalString())||t.isKeyField()||e.he.push(new rw(t,n))}),r.has(J.keyField().canonicalString())||e.he.push(new rw(J.keyField(),n))}return e.he}function rW(e){return e.Pe||(e.Pe=rJ(e,rQ(e))),e.Pe}function rY(e){return e.Te||(e.Te=rJ(e,e.explicitOrderBy)),e.Te}function rJ(e,t){if("F"===e.limitType)return rF(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new rw(e.field,t)});let r=e.endAt?new rm(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new rm(e.startAt.position,e.startAt.inclusive):null;return rF(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}function rX(e,t){let r=e.filters.concat([t]);return new r$(e.path,e.collectionGroup,e.explicitOrderBy.slice(),r,e.limit,e.limitType,e.startAt,e.endAt)}function rZ(e,t,r){return new r$(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function r0(e,t){return rV(rW(e),rW(t))&&e.limitType===t.limitType}function r1(e){return`${rB(rW(e))}|lt:${e.limitType}`}function r2(e){var t;let r;return`Query(target=${r=(t=rW(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof rx?`${t.field.canonicalString()} ${t.op} ${rt(t.value)}`:t instanceof rI?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),eA(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(e=>rt(e)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(e=>rt(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function r6(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):X.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of rQ(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=ry(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,rQ(e),t))&&(!e.endAt||!!function(e,t,r){let n=ry(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,rQ(e),t))}function r5(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function r3(e){return(t,r)=>{let n=!1;for(let i of rQ(e)){let e=function(e,t,r){let n=e.field.isKeyField()?X.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),i=r.data.field(e);return null!==n&&null!==i?t9(n,i):A()}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return A()}}(i,t,r);if(0!==e)return e;n=n||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r8{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){tS(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return tA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r4=new tD(X.comparator),r9=new tD(X.comparator);function r7(...e){let t=r9;for(let r of e)t=t.insert(r.key,r);return t}function ne(e){let t=r9;return e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function nt(){return new r8(e=>e.toString(),(e,t)=>e.isEqual(t))}let nr=new tD(X.comparator),nn=new tO(X.comparator);function ni(...e){let t=nn;for(let r of e)t=t.add(r);return t}let ns=new tO(z);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eD(t)?"-0":t}}function na(e){return{integerValue:""+e}}function nl(e,t){return ek(t)?na(t):no(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){this._=void 0}}function nh(e,t){return e instanceof nm?rn(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class nc extends nu{}class nf extends nu{constructor(e){super(),this.elements=e}}function nd(e,t){let r=nv(t);for(let t of e.elements)r.some(e=>t8(e,t))||r.push(t);return{arrayValue:{values:r}}}class np extends nu{constructor(e){super(),this.elements=e}}function ng(e,t){let r=nv(t);for(let t of e.elements)r=r.filter(e=>!t8(e,t));return{arrayValue:{values:r}}}class nm extends nu{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function ny(e){return tj(e.integerValue||e.doubleValue)}function nv(e){return ri(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e,t){this.field=e,this.transform=t}}class nb{constructor(e,t){this.version=e,this.transformResults=t}}class nx{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nx}static exists(e){return new nx(void 0,e)}static updateTime(e){return new nx(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nI(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class nE{}function n_(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new nO(e.key,nx.none()):new nC(e.key,e.data,nx.none());{let r=e.data,n=rp.empty(),i=new tO(J.comparator);for(let e of t.fields)if(!i.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),i=i.add(e)}return new nA(e.key,n,new tM(i.toArray()),nx.none())}}function nT(e,t,r,n){return e instanceof nC?function(e,t,r,n){if(!nI(e.precondition,t))return r;let i=e.value.clone(),s=nN(e.fieldTransforms,n,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,r,n):e instanceof nA?function(e,t,r,n){if(!nI(e.precondition,t))return r;let i=nN(e.fieldTransforms,n,t),s=t.data;return(s.setAll(nD(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):nI(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function nS(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&$(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof nf&&n instanceof nf||r instanceof np&&n instanceof np?$(r.elements,n.elements,t8):r instanceof nm&&n instanceof nm?t8(r.Ie,n.Ie):r instanceof nc&&n instanceof nc)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class nC extends nE{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class nA extends nE{constructor(e,t,r,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function nD(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function nk(e,t,r){var n;let i=new Map;e.length===r.length||A();for(let s=0;s<r.length;s++){let o=e[s],a=o.transform,l=t.data.field(o.field);i.set(o.field,(n=r[s],a instanceof nf?nd(a,l):a instanceof np?ng(a,l):n))}return i}function nN(e,t,r){let n=new Map;for(let i of e){let e=i.transform,s=r.data.field(i.field);n.set(i.field,e instanceof nc?function(e,t){let r={fields:{[t$]:{stringValue:tz},[tK]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&tH(t)&&(t=tQ(t)),t&&(r.fields[tG]=t),{mapValue:r}}(t,s):e instanceof nf?nd(e,s):e instanceof np?ng(e,s):function(e,t){let r=nh(e,t),n=ny(r)+ny(e.Ie);return rn(r)&&rn(e.Ie)?na(n):no(e.serializer,n)}(e,s))}return n}class nO extends nE{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nR extends nE{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var n;n=r[t],i instanceof nC?function(e,t,r){let n=e.value.clone(),i=nk(e.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(i,e,n):i instanceof nA?function(e,t,r){if(!nI(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=nk(e.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(nD(e)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(i,e,n):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=nT(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=nT(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=nt();return this.mutations.forEach(n=>{let i=e.get(n.key),s=i.overlayedDocument,o=this.applyToLocalView(s,i.mutatedFields),a=n_(s,o=t.has(n.key)?null:o);null!==a&&r.set(n.key,a),s.isValidDocument()||s.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ni())}isEqual(e){return this.batchId===e.batchId&&$(this.mutations,e.mutations,(e,t)=>nS(e,t))&&$(this.baseMutations,e.baseMutations,(e,t)=>nS(e,t))}}class nM{constructor(e,t,r,n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}static from(e,t,r){e.mutations.length===r.length||A();let n=nr,i=e.mutations;for(let e=0;e<i.length;e++)n=n.insert(i[e].key,r[e].version);return new nM(e,t,r,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF{constructor(e,t,r){this.alias=e,this.aggregateType=t,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nB{constructor(e,t){this.count=e,this.unchangedNames=t}}function nV(e){switch(e){case k.OK:return A();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return A()}}function nU(e){if(void 0===e)return T("GRPC error has no .code"),k.UNKNOWN;switch(e){case i.OK:return k.OK;case i.CANCELLED:return k.CANCELLED;case i.UNKNOWN:return k.UNKNOWN;case i.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case i.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case i.INTERNAL:return k.INTERNAL;case i.UNAVAILABLE:return k.UNAVAILABLE;case i.UNAUTHENTICATED:return k.UNAUTHENTICATED;case i.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case i.NOT_FOUND:return k.NOT_FOUND;case i.ALREADY_EXISTS:return k.ALREADY_EXISTS;case i.PERMISSION_DENIED:return k.PERMISSION_DENIED;case i.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case i.ABORTED:return k.ABORTED;case i.OUT_OF_RANGE:return k.OUT_OF_RANGE;case i.UNIMPLEMENTED:return k.UNIMPLEMENTED;case i.DATA_LOSS:return k.DATA_LOSS;default:return A()}}(s=i||(i={}))[s.OK=0]="OK",s[s.CANCELLED=1]="CANCELLED",s[s.UNKNOWN=2]="UNKNOWN",s[s.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",s[s.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",s[s.NOT_FOUND=5]="NOT_FOUND",s[s.ALREADY_EXISTS=6]="ALREADY_EXISTS",s[s.PERMISSION_DENIED=7]="PERMISSION_DENIED",s[s.UNAUTHENTICATED=16]="UNAUTHENTICATED",s[s.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",s[s.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",s[s.ABORTED=10]="ABORTED",s[s.OUT_OF_RANGE=11]="OUT_OF_RANGE",s[s.UNIMPLEMENTED=12]="UNIMPLEMENTED",s[s.INTERNAL=13]="INTERNAL",s[s.UNAVAILABLE=14]="UNAVAILABLE",s[s.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nj=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nq(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nz=new d.Integer([0xffffffff,0xffffffff],0);function n$(e){let t=nq().encode(e),r=new d.Md5;return r.update(t),new Uint8Array(r.digest())}function nG(e){let t=new DataView(e.buffer),r=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new d.Integer([r,n],0),new d.Integer([i,s],0)]}class nK{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new nH(`Invalid padding: ${t}`);if(r<0||e.length>0&&0===this.hashCount)throw new nH(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new nH(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=(0,d.Integer).fromNumber(this.Ee)}Ae(e,t,r){let n=e.add(t.multiply((0,d.Integer).fromNumber(r)));return 1===n.compare(nz)&&(n=new d.Integer([n.getBits(0),n.getBits(1)],0)),n.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ee)return!1;let[t,r]=nG(n$(e));for(let e=0;e<this.hashCount;e++){let n=this.Ae(t,r,e);if(!this.Re(n))return!1}return!0}static create(e,t,r){let n=new nK(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return r.forEach(e=>n.insert(e)),n}insert(e){if(0===this.Ee)return;let[t,r]=nG(n$(e));for(let e=0;e<this.hashCount;e++){let n=this.Ae(t,r,e);this.Ve(n)}}Ve(e){let t=Math.floor(e/8);this.bitmap[t]|=1<<e%8}}class nH extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nQ{constructor(e,t,r,n,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,nW.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new nQ(K.min(),n,new tD(z),r4,ni())}}class nW{constructor(e,t,r,n,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new nW(r,t,ni(),ni(),ni())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nY{constructor(e,t,r,n){this.me=e,this.removedTargetIds=t,this.key=r,this.fe=n}}class nJ{constructor(e,t){this.targetId=e,this.ge=t}}class nX{constructor(e,t,r=tB.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class nZ{constructor(){this.pe=0,this.ye=n2(),this.we=tB.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return 0!==this.pe}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=ni(),t=ni(),r=ni();return this.ye.forEach((n,i)=>{switch(i){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:A()}}),new nW(this.we,this.Se,e,t,r)}Me(){this.be=!1,this.ye=n2()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,this.pe>=0||A()}Le(){this.be=!0,this.Se=!0}}class n0{constructor(e){this.ke=e,this.qe=new Map,this.Qe=r4,this.$e=n1(),this.Ke=n1(),this.Ue=new tD(z)}We(e){for(let t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(let t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{let r=this.He(t);switch(e.state){case 0:this.Je(t)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(t);break;case 3:this.Je(t)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),r.Ce(e.resumeToken));break;default:A()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((e,r)=>{this.Je(r)&&t(r)})}Ze(e){let t=e.targetId,r=e.ge.count,n=this.Xe(t);if(n){let i=n.target;if(rU(i)){if(0===r){let e=new X(i.path);this.ze(t,e,rg.newNoDocument(e,K.min()))}else 1===r||A()}else{let n=this.et(t);if(n!==r){let r=this.tt(e),i=r?this.nt(r,e,n):1;0!==i&&(this.Ye(t),this.Ue=this.Ue.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch")),null==nj||nj.rt(function(e,t,r,n,i){var s,o,a,l,u,h;let c={localCacheCount:e,existenceFilterCount:t.count,databaseId:r.database,projectId:r.projectId},f=t.unchangedNames;return f&&(c.bloomFilter={applied:0===i,hashCount:null!==(s=null==f?void 0:f.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(l=null===(a=null===(o=null==f?void 0:f.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==l?l:0,padding:null!==(h=null===(u=null==f?void 0:f.bits)||void 0===u?void 0:u.padding)&&void 0!==h?h:0,mightContain:e=>{var t;return null!==(t=null==n?void 0:n.mightContain(e))&&void 0!==t&&t}}),c}(n,e.ge,this.ke.it(),r,i))}}}}tt(e){let t,r;let n=e.ge.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;try{t=tq(i).toUint8Array()}catch(e){if(e instanceof tP)return S("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{r=new nK(t,s,o)}catch(e){return S(e instanceof nH?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===r.Ee?null:r}nt(e,t,r){return 2*(t.ge.count!==r-this.st(e,t.targetId))}st(e,t){let r=this.ke.getRemoteKeysForTarget(t),n=0;return r.forEach(r=>{let i=this.ke.it(),s=`projects/${i.projectId}/databases/${i.database}/documents/${r.path.canonicalString()}`;e.mightContain(s)||(this.ze(t,r,null),n++)}),n}ot(e){let t=new Map;this.qe.forEach((r,n)=>{let i=this.Xe(n);if(i){if(r.current&&rU(i.target)){let t=new X(i.target.path);this._t(t).has(n)||this.ut(n,t)||this.ze(n,t,rg.newNoDocument(t,e))}r.ve&&(t.set(n,r.Fe()),r.Me())}});let r=ni();this.Ke.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.Xe(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.Qe.forEach((t,r)=>r.setReadTime(e));let n=new nQ(e,t,this.Ue,this.Qe,r);return this.Qe=r4,this.$e=n1(),this.Ke=n1(),this.Ue=new tD(z),n}Ge(e,t){if(!this.Je(e))return;let r=2*!!this.ut(e,t.key);this.He(e).xe(t.key,r),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,r){if(!this.Je(e))return;let n=this.He(e);this.ut(e,t)?n.xe(t,1):n.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),r&&(this.Qe=this.Qe.insert(t,r))}removeTarget(e){this.qe.delete(e)}et(e){let t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new nZ,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new tO(z),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new tO(z),this.$e=this.$e.insert(e,t)),t}Je(e){let t=null!==this.Xe(e);return t||_("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){let t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new nZ),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function n1(){return new tD(X.comparator)}function n2(){return new tD(X.comparator)}let n6={asc:"ASCENDING",desc:"DESCENDING"},n5={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},n3={and:"AND",or:"OR"};class n8{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function n4(e,t){return e.useProto3Json||eA(t)?t:{value:t}}function n9(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function n7(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ie(e){return e||A(),K.fromTimestamp(function(e){let t=tU(e);return new G(t.seconds,t.nanos)}(e))}function it(e,t){return ir(e,t).canonicalString()}function ir(e,t){let r=new W(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?r:r.child(t)}function ii(e){let t=W.fromString(e);return iI(t)||A(),t}function is(e,t){return it(e.databaseId,t.path)}function io(e,t){let r=ii(t);if(r.get(1)!==e.databaseId.projectId)throw new N(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new N(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new X(ih(r))}function ia(e,t){return it(e.databaseId,t)}function il(e){let t=ii(e);return 4===t.length?W.emptyPath():ih(t)}function iu(e){return new W(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ih(e){return e.length>4&&"documents"===e.get(4)||A(),e.popFirst(5)}function ic(e,t,r){return{name:is(e,t),fields:r.value.mapValue.fields}}function id(e,t,r){let n=io(e,t.name),i=ie(t.updateTime),s=t.createTime?ie(t.createTime):K.min(),o=new rp({mapValue:{fields:t.fields}}),a=rg.newFoundDocument(n,i,s,o);return r&&a.setHasCommittedMutations(),r?a.setHasCommittedMutations():a}function ip(e,t){var r;let n;if(t instanceof nC)n={update:ic(e,t.key,t.value)};else if(t instanceof nO)n={delete:is(e,t.key)};else if(t instanceof nA)n={update:ic(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof nR))return A();n={verify:is(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let r=t.transform;if(r instanceof nc)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof nf)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof np)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof nm)return{fieldPath:t.field.canonicalString(),increment:r.Ie};throw A()})(0,e))),t.precondition.isNone||(n.currentDocument=void 0!==(r=t.precondition).updateTime?{updateTime:n9(e,r.updateTime.toTimestamp())}:void 0!==r.exists?{exists:r.exists}:A()),n}function ig(e,t){var r;let n=t.currentDocument?void 0!==(r=t.currentDocument).updateTime?nx.updateTime(ie(r.updateTime)):void 0!==r.exists?nx.exists(r.exists):nx.none():nx.none(),i=t.updateTransforms?t.updateTransforms.map(t=>{var r,n;let i;return r=e,i=null,"setToServerValue"in(n=t)?("REQUEST_TIME"===n.setToServerValue||A(),i=new nc):"appendMissingElements"in n?i=new nf(n.appendMissingElements.values||[]):"removeAllFromArray"in n?i=new np(n.removeAllFromArray.values||[]):"increment"in n?i=new nm(r,n.increment):A(),new nw(J.fromServerFormat(n.fieldPath),i)}):[];if(t.update){t.update.name;let r=io(e,t.update.name),s=new rp({mapValue:{fields:t.update.fields}});return t.updateMask?new nA(r,s,new tM((t.updateMask.fieldPaths||[]).map(e=>J.fromServerFormat(e))),n,i):new nC(r,s,n,i)}return t.delete?new nO(io(e,t.delete),n):t.verify?new nR(io(e,t.verify),n):A()}function im(e,t){return{documents:[ia(e,t.path)]}}function iy(e,t){var r,n;let i;let s={structuredQuery:{}},o=t.path;null!==t.collectionGroup?(i=o,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=o.popLast(),s.structuredQuery.from=[{collectionId:o.lastSegment()}]),s.parent=ia(e,i);let a=function(e){if(0!==e.length)return function e(t){return t instanceof rx?function(e){if("=="===e.op){if(ro(e.value))return{unaryFilter:{field:ib(e.field),op:"IS_NAN"}};if(rs(e.value))return{unaryFilter:{field:ib(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ro(e.value))return{unaryFilter:{field:ib(e.field),op:"IS_NOT_NAN"}};if(rs(e.value))return{unaryFilter:{field:ib(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ib(e.field),op:n5[e.op],value:e.value}}}(t):t instanceof rI?function(t){let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:n3[t.op],filters:r}}}(t):A()}(rI.create(e,"and"))}(t.filters);a&&(s.structuredQuery.where=a);let l=function(e){if(0!==e.length)return e.map(e=>({field:ib(e.field),direction:n6[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let u=n4(e,t.limit);return null!==u&&(s.structuredQuery.limit=u),t.startAt&&(s.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(s.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),{ht:s,parent:i}}function iv(e,t,r,n){let{ht:i,parent:s}=iy(e,t),o={},a=[],l=0;return r.forEach(e=>{let t=n?e.alias:"aggregate_"+l++;o[t]=e.alias,"count"===e.aggregateType?a.push({alias:t,count:{}}):"avg"===e.aggregateType?a.push({alias:t,avg:{field:ib(e.fieldPath)}}):"sum"===e.aggregateType&&a.push({alias:t,sum:{field:ib(e.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:i.structuredQuery},parent:i.parent},Pt:o,parent:s}}function iw(e){var t;let r,n=il(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,o=null;if(s>0){1===s||A();let e=i.from[0];e.allDescendants?o=e.collectionId:n=n.child(e.collectionId)}let a=[];i.where&&(a=function(e){let t=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=ix(e.unaryFilter.field);return rx.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=ix(e.unaryFilter.field);return rx.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=ix(e.unaryFilter.field);return rx.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=ix(e.unaryFilter.field);return rx.create(i,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(t):void 0!==t.fieldFilter?rx.create(ix(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?rI.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return A()}}(t.compositeFilter.op)):A()}(e);return t instanceof rI&&rT(t)?t.getFilters():[t]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new rw(ix(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=eA(r="object"==typeof(t=i.limit)?t.value:t)?null:r);let h=null;i.startAt&&(h=function(e){let t=!!e.before;return new rm(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new rm(e.values||[],t)}(i.endAt)),new r$(n,o,l,a,u,"F",h,c)}function ib(e){return{fieldPath:e.canonicalString()}}function ix(e){return J.fromServerFormat(e.fieldPath)}function iI(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,t,r,n,i=K.min(),s=K.min(),o=tB.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new iE(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new iE(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new iE(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new iE(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){this.Tt=e}}function iT(e,t){let r=t.key,n={prefixPath:r.getCollectionPath().popLast().toArray(),collectionGroup:r.collectionGroup,documentId:r.path.lastSegment(),readTime:iS(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument()){var i;n.document={name:is(i=e.Tt,t.key),fields:t.data.value.mapValue.fields,updateTime:n9(i,t.version.toTimestamp()),createTime:n9(i,t.createTime.toTimestamp())}}else if(t.isNoDocument())n.noDocument={path:r.path.toArray(),readTime:iC(t.version)};else{if(!t.isUnknownDocument())return A();n.unknownDocument={path:r.path.toArray(),version:iC(t.version)}}return n}function iS(e){let t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function iC(e){let t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function iA(e){let t=new G(e.seconds,e.nanoseconds);return K.fromTimestamp(t)}function iD(e,t){let r=(t.baseMutations||[]).map(t=>ig(e.Tt,t));for(let e=0;e<t.mutations.length-1;++e){let r=t.mutations[e];if(e+1<t.mutations.length&&void 0!==t.mutations[e+1].transform){let n=t.mutations[e+1];r.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(e+1,1),++e}}let n=t.mutations.map(t=>ig(e.Tt,t)),i=G.fromMillis(t.localWriteTimeMs);return new nL(t.batchId,i,r,n)}function ik(e){var t;let r=iA(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?iA(e.lastLimboFreeSnapshotVersion):K.min();return new iE(void 0!==e.query.documents?(1===(t=e.query).documents.length||A(),rW(rG(il(t.documents[0])))):rW(iw(e.query)),e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,r,n,tB.fromBase64String(e.resumeToken))}function iN(e,t){let r;let n=iC(t.snapshotVersion),i=iC(t.lastLimboFreeSnapshotVersion);r=rU(t.target)?im(e.Tt,t.target):iy(e.Tt,t.target).ht;let s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:rB(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:r}}function iO(e){let t=iw({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?rZ(t,t.limit,"L"):t}function iR(e,t){return new nP(t.largestBatchId,ig(e.Tt,t.overlayMutation))}function iL(e,t){let r=t.path.lastSegment();return[e,eN(t.path.popLast()),r]}function iM(e,t,r,n){return{indexId:e,uid:t,sequenceNumber:r,readTime:iC(n.readTime),documentKey:eN(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{getBundleMetadata(e,t){return t_(e,e7).get(t).next(e=>{if(e)return{id:e.bundleId,createTime:iA(e.createTime),version:e.version}})}saveBundleMetadata(e,t){return t_(e,e7).put({bundleId:t.id,createTime:iC(ie(t.createTime)),version:t.version})}getNamedQuery(e,t){return t_(e,te).get(t).next(e=>{if(e)return{name:e.name,query:iO(e.bundledQuery),readTime:iA(e.readTime)}})}saveNamedQuery(e,t){return t_(e,te).put({name:t.name,readTime:iC(ie(t.readTime)),bundledQuery:t.bundledQuery})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e,t){this.serializer=e,this.userId=t}static It(e,t){return new iF(e,t.uid||"")}getOverlay(e,t){return t_(e,tc).get(iL(this.userId,t)).next(e=>e?iR(this.serializer,e):null)}getOverlays(e,t){let r=nt();return ef.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){let n=[];return r.forEach((r,i)=>{let s=new nP(t,i);n.push(this.Et(e,s))}),ef.waitFor(n)}removeOverlaysForBatchId(e,t,r){let n=new Set;t.forEach(e=>n.add(eN(e.getCollectionPath())));let i=[];return n.forEach(t=>{let n=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,r+1],!1,!0);i.push(t_(e,tc).J(td,n))}),ef.waitFor(i)}getOverlaysForCollection(e,t,r){let n=nt(),i=eN(t),s=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return t_(e,tc).G(td,s).next(e=>{for(let t of e){let e=iR(this.serializer,t);n.set(e.getKey(),e)}return n})}getOverlaysForCollectionGroup(e,t,r,n){let i;let s=nt(),o=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return t_(e,tc).Z({index:tg,range:o},(e,t,r)=>{let o=iR(this.serializer,t);s.size()<n||o.largestBatchId===i?(s.set(o.getKey(),o),i=o.largestBatchId):r.done()}).next(()=>s)}Et(e,t){return t_(e,tc).put(function(e,t,r){let[n,i,s]=iL(t,r.mutation.key);return{userId:t,collectionPath:i,documentId:s,collectionGroup:r.mutation.key.getCollectionGroup(),largestBatchId:r.largestBatchId,overlayMutation:ip(e.Tt,r.mutation)}}(this.serializer,this.userId,t))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iB{dt(e){return t_(e,ty)}getSessionToken(e){return this.dt(e).get("sessionToken").next(e=>{let t=null==e?void 0:e.value;return t?tB.fromUint8Array(t):tB.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(){}At(e,t){this.Rt(e,t),t.Vt()}Rt(e,t){if("nullValue"in e)this.ft(t,5);else if("booleanValue"in e)this.ft(t,10),t.gt(+!!e.booleanValue);else if("integerValue"in e)this.ft(t,15),t.gt(tj(e.integerValue));else if("doubleValue"in e){let r=tj(e.doubleValue);isNaN(r)?this.ft(t,13):(this.ft(t,15),eD(r)?t.gt(0):t.gt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.ft(t,20),"string"==typeof r&&(r=tU(r)),t.yt(`${r.seconds||""}`),t.gt(r.nanos||0)}else if("stringValue"in e)this.wt(e.stringValue,t),this.St(t);else if("bytesValue"in e)this.ft(t,30),t.bt(tq(e.bytesValue)),this.St(t);else if("referenceValue"in e)this.Dt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.ft(t,45),t.gt(r.latitude||0),t.gt(r.longitude||0)}else"mapValue"in e?rh(e)?this.ft(t,Number.MAX_SAFE_INTEGER):rl(e)?this.vt(e.mapValue,t):(this.Ct(e.mapValue,t),this.St(t)):"arrayValue"in e?(this.Ft(e.arrayValue,t),this.St(t)):A()}wt(e,t){this.ft(t,25),this.Mt(e,t)}Mt(e,t){t.yt(e)}Ct(e,t){let r=e.fields||{};for(let e of(this.ft(t,55),Object.keys(r)))this.wt(e,t),this.Rt(r[e],t)}vt(e,t){var r,n;let i=e.fields||{};this.ft(t,53);let s=(null===(n=null===(r=i[t6].arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.length)||0;this.ft(t,15),t.gt(tj(s)),this.wt(t6,t),this.Rt(i[t6],t)}Ft(e,t){let r=e.values||[];for(let e of(this.ft(t,50),r))this.Rt(e,t)}Dt(e,t){this.ft(t,37),X.fromName(e).path.forEach(e=>{this.ft(t,60),this.Mt(e,t)})}ft(e,t){e.gt(t)}St(e){e.gt(2)}}function iU(e){return Math.ceil((64-function(e){let t=0;for(let r=0;r<8;++r){let n=function(e){if(0===e)return 8;let t=0;return e>>4||(t+=4,e<<=4),e>>6||(t+=2,e<<=2),e>>7||(t+=1),t}(255&e[r]);if(t+=n,8!==n)break}return t}(e))/8)}iV.xt=new iV;class ij{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ot(e){let t=e[Symbol.iterator](),r=t.next();for(;!r.done;)this.Nt(r.value),r=t.next();this.Bt()}Lt(e){let t=e[Symbol.iterator](),r=t.next();for(;!r.done;)this.kt(r.value),r=t.next();this.qt()}Qt(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.Nt(e);else if(e<2048)this.Nt(960|e>>>6),this.Nt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Nt(480|e>>>12),this.Nt(128|63&e>>>6),this.Nt(128|63&e);else{let e=t.codePointAt(0);this.Nt(240|e>>>18),this.Nt(128|63&e>>>12),this.Nt(128|63&e>>>6),this.Nt(128|63&e)}}this.Bt()}$t(e){for(let t of e){let e=t.charCodeAt(0);if(e<128)this.kt(e);else if(e<2048)this.kt(960|e>>>6),this.kt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.kt(480|e>>>12),this.kt(128|63&e>>>6),this.kt(128|63&e);else{let e=t.codePointAt(0);this.kt(240|e>>>18),this.kt(128|63&e>>>12),this.kt(128|63&e>>>6),this.kt(128|63&e)}}this.qt()}Kt(e){let t=this.Ut(e),r=iU(t);this.Wt(1+r),this.buffer[this.position++]=255&r;for(let e=t.length-r;e<t.length;++e)this.buffer[this.position++]=255&t[e]}Gt(e){let t=this.Ut(e),r=iU(t);this.Wt(1+r),this.buffer[this.position++]=~(255&r);for(let e=t.length-r;e<t.length;++e)this.buffer[this.position++]=~(255&t[e])}zt(){this.jt(255),this.jt(255)}Ht(){this.Jt(255),this.Jt(255)}reset(){this.position=0}seed(e){this.Wt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Yt(){return this.buffer.slice(0,this.position)}Ut(e){let t=function(e){let t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let e=1;e<t.length;++e)t[e]^=255*!!r;return t}Nt(e){let t=255&e;0===t?(this.jt(0),this.jt(255)):255===t?(this.jt(255),this.jt(0)):this.jt(t)}kt(e){let t=255&e;0===t?(this.Jt(0),this.Jt(255)):255===t?(this.Jt(255),this.Jt(0)):this.Jt(e)}Bt(){this.jt(0),this.jt(1)}qt(){this.Jt(0),this.Jt(1)}jt(e){this.Wt(1),this.buffer[this.position++]=e}Jt(e){this.Wt(1),this.buffer[this.position++]=~e}Wt(e){let t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);let n=new Uint8Array(r);n.set(this.buffer),this.buffer=n}}class iq{constructor(e){this.Zt=e}bt(e){this.Zt.Ot(e)}yt(e){this.Zt.Qt(e)}gt(e){this.Zt.Kt(e)}Vt(){this.Zt.zt()}}class iz{constructor(e){this.Zt=e}bt(e){this.Zt.Lt(e)}yt(e){this.Zt.$t(e)}gt(e){this.Zt.Gt(e)}Vt(){this.Zt.Ht()}}class i${constructor(){this.Zt=new ij,this.Xt=new iq(this.Zt),this.en=new iz(this.Zt)}seed(e){this.Zt.seed(e)}tn(e){return 0===e?this.Xt:this.en}Yt(){return this.Zt.Yt()}reset(){this.Zt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iG{constructor(e,t,r,n){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=n}nn(){let e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new iG(this.indexId,this.documentKey,this.arrayValue,r)}}function iK(e,t){let r=e.indexId-t.indexId;return 0!==r?r:0!==(r=iH(e.arrayValue,t.arrayValue))?r:0!==(r=iH(e.directionalValue,t.directionalValue))?r:X.comparator(e.documentKey,t.documentKey)}function iH(e,t){for(let r=0;r<e.length&&r<t.length;++r){let n=e[r]-t[r];if(0!==n)return n}return e.length-t.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iQ{constructor(e){for(let t of(this.rn=new tO((e,t)=>J.comparator(e.field,t.field)),this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.sn=e.orderBy,this._n=[],e.filters))t.isInequality()?this.rn=this.rn.add(t):this._n.push(t)}get an(){return this.rn.size>1}un(e){if(e.collectionGroup===this.collectionId||A(),this.an)return!1;let t=ee(e);if(void 0!==t&&!this.cn(t))return!1;let r=et(e),n=new Set,i=0,s=0;for(;i<r.length&&this.cn(r[i]);++i)n=n.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.rn.size>0){let e=this.rn.getIterator().getNext();if(!n.has(e.field.canonicalString())){let t=r[i];if(!this.ln(e,t)||!this.hn(this.sn[s++],t))return!1}++i}for(;i<r.length;++i){let e=r[i];if(s>=this.sn.length||!this.hn(this.sn[s++],e))return!1}return!0}Pn(){if(this.an)return null;let e=new tO(J.comparator),t=[];for(let r of this._n)if(!r.field.isKeyField()){if("array-contains"===r.op||"array-contains-any"===r.op)t.push(new en(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new en(r.field,0))}}for(let r of this.sn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new en(r.field,+("asc"!==r.dir))));return new Z(Z.UNKNOWN_ID,this.collectionId,t,ei.empty())}cn(e){for(let t of this._n)if(this.ln(t,e))return!0;return!1}ln(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;let r="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===r}hn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}function iW(e){return e instanceof rx}function iY(e){return e instanceof rI&&rT(e)}function iJ(e){return iW(e)||iY(e)||function(e){if(e instanceof rI&&r_(e)){for(let t of e.getFilters())if(!iW(t)&&!iY(t))return!1;return!0}return!1}(e)}function iX(e,t){return e instanceof rx||e instanceof rI||A(),t instanceof rx||t instanceof rI||A(),i0(e instanceof rx?t instanceof rx?rI.create([e,t],"and"):iZ(e,t):t instanceof rx?iZ(t,e):function(e,t){if(e.filters.length>0&&t.filters.length>0||A(),rE(e)&&rE(t))return rC(e,t.getFilters());let r=r_(e)?e:t,n=r_(e)?t:e,i=r.filters.map(e=>iX(e,n));return rI.create(i,"or")}(e,t))}function iZ(e,t){if(rE(t))return rC(t,e.getFilters());{let r=t.filters.map(t=>iX(e,t));return rI.create(r,"or")}}function i0(e){if(e instanceof rx||e instanceof rI||A(),e instanceof rx)return e;let t=e.getFilters();if(1===t.length)return i0(t[0]);if(rS(e))return e;let r=t.map(e=>i0(e)),n=[];return r.forEach(t=>{t instanceof rx?n.push(t):t instanceof rI&&(t.op===e.op?n.push(...t.filters):n.push(t))}),1===n.length?n[0]:rI.create(n,e.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(){this.Tn=new i2}addToCollectionParentIndex(e,t){return this.Tn.add(t),ef.resolve()}getCollectionParents(e,t){return ef.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return ef.resolve()}deleteFieldIndex(e,t){return ef.resolve()}deleteAllFieldIndexes(e){return ef.resolve()}createTargetIndexes(e,t){return ef.resolve()}getDocumentsMatchingTarget(e,t){return ef.resolve(null)}getIndexType(e,t){return ef.resolve(0)}getFieldIndexes(e,t){return ef.resolve([])}getNextCollectionGroupToUpdate(e){return ef.resolve(null)}getMinOffset(e,t){return ef.resolve(ea.min())}getMinOffsetFromCollectionGroup(e,t){return ef.resolve(ea.min())}updateCollectionGroup(e,t,r){return ef.resolve()}updateIndexEntries(e,t){return ef.resolve()}}class i2{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new tO(W.comparator),i=!n.has(r);return this.index[t]=n.add(r),i}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new tO(W.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i6="IndexedDbIndexManager",i5=new Uint8Array(0);class i3{constructor(e,t){this.databaseId=t,this.In=new i2,this.En=new r8(e=>rB(e),(e,t)=>rV(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.In.has(t)){let r=t.lastSegment(),n=t.popLast();e.addOnCommittedListener(()=>{this.In.add(t)});let i={collectionId:r,parent:eN(n)};return t_(e,e8).put(i)}return ef.resolve()}getCollectionParents(e,t){let r=[],n=IDBKeyRange.bound([t,""],[t+"\0",""],!1,!0);return t_(e,e8).G(n).next(e=>{for(let n of e){if(n.collectionId!==t)break;r.push(eO(n.parent))}return r})}addFieldIndex(e,t){let r=t_(e,tt),n={indexId:t.indexId,collectionGroup:t.collectionGroup,fields:t.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])};delete n.indexId;let i=r.add(n);if(t.indexState){let r=t_(e,tn);return i.next(e=>{r.put(iM(e,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){let r=t_(e,tt),n=t_(e,tn),i=t_(e,ta);return r.delete(t.indexId).next(()=>n.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){let t=t_(e,tt),r=t_(e,ta),n=t_(e,tn);return t.J().next(()=>r.J()).next(()=>n.J())}createTargetIndexes(e,t){return ef.forEach(this.dn(t),t=>this.getIndexType(e,t).next(r=>{if(0===r||1===r){let r=new iQ(t).Pn();if(null!=r)return this.addFieldIndex(e,r)}}))}getDocumentsMatchingTarget(e,t){let r=t_(e,ta),n=!0,i=new Map;return ef.forEach(this.dn(t),t=>this.An(e,t).next(e=>{n&&(n=!!e),i.set(t,e)})).next(()=>{if(n){let e=ni(),n=[];return ef.forEach(i,(i,s)=>{_(i6,`Using index id=${i.indexId}|cg=${i.collectionGroup}|f=${i.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")} to execute ${rB(t)}`);let o=function(e,t){let r=ee(t);if(void 0===r)return null;for(let t of rj(e,r.fieldPath))switch(t.op){case"array-contains-any":return t.value.arrayValue.values||[];case"array-contains":return[t.value]}return null}(s,i),a=function(e,t){let r=new Map;for(let n of et(t))for(let t of rj(e,n.fieldPath))switch(t.op){case"==":case"in":r.set(n.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return r.set(n.fieldPath.canonicalString(),t.value),Array.from(r.values())}return null}(s,i),l=function(e,t){let r=[],n=!0;for(let i of et(t)){let t=0===i.kind?rq(e,i.fieldPath,e.startAt):rz(e,i.fieldPath,e.startAt);r.push(t.value),n&&(n=t.inclusive)}return new rm(r,n)}(s,i),u=function(e,t){let r=[],n=!0;for(let i of et(t)){let t=0===i.kind?rz(e,i.fieldPath,e.endAt):rq(e,i.fieldPath,e.endAt);r.push(t.value),n&&(n=t.inclusive)}return new rm(r,n)}(s,i),h=this.Rn(i,s,l),c=this.Rn(i,s,u),f=this.Vn(i,s,a),d=this.mn(i.indexId,o,h,l.inclusive,c,u.inclusive,f);return ef.forEach(d,i=>r.H(i,t.limit).next(t=>{t.forEach(t=>{let r=X.fromSegments(t.documentKey);e.has(r)||(e=e.add(r),n.push(r))})}))}).next(()=>n)}return ef.resolve(null)})}dn(e){let t=this.En.get(e);return t||(t=0===e.filters.length?[e]:(function(e){if(0===e.getFilters().length)return[];let t=function e(t){if(t instanceof rx||t instanceof rI||A(),t instanceof rx)return t;if(1===t.filters.length)return e(t.filters[0]);let r=t.filters.map(t=>e(t)),n=rI.create(r,t.op);return iJ(n=i0(n))?n:(n instanceof rI||A(),rE(n)||A(),n.filters.length>1||A(),n.filters.reduce((e,t)=>iX(e,t)))}(/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e(t){var r,n;if(t instanceof rx||t instanceof rI||A(),t instanceof rx){if(t instanceof rR){let e=(null===(n=null===(r=t.value.arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.map(e=>rx.create(t.field,"==",e)))||[];return rI.create(e,"or")}return t}let i=t.filters.map(t=>e(t));return rI.create(i,t.op)}(e));return iJ(t)||A(),iW(t)||iY(t)?[t]:t.getFilters()})(rI.create(e.filters,"and")).map(t=>rF(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.En.set(e,t)),t}mn(e,t,r,n,i,s,o){let a=(null!=t?t.length:1)*Math.max(r.length,i.length),l=a/(null!=t?t.length:1),u=[];for(let h=0;h<a;++h){let a=t?this.fn(t[h/l]):i5,c=this.gn(e,a,r[h%l],n),f=this.pn(e,a,i[h%l],s),d=o.map(t=>this.gn(e,a,t,!0));u.push(...this.createRange(c,f,d))}return u}gn(e,t,r,n){let i=new iG(e,X.empty(),t,r);return n?i:i.nn()}pn(e,t,r,n){let i=new iG(e,X.empty(),t,r);return n?i.nn():i}An(e,t){let r=new iQ(t),n=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,n).next(e=>{let t=null;for(let n of e)r.un(n)&&(!t||n.fields.length>t.fields.length)&&(t=n);return t})}getIndexType(e,t){let r=2,n=this.dn(t);return ef.forEach(n,t=>this.An(e,t).next(e=>{e?0!==r&&e.fields.length<function(e){let t=new tO(J.comparator),r=!1;for(let n of e.filters)for(let e of n.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?r=!0:t=t.add(e.field));for(let r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+ +!!r}(t)&&(r=1):r=0})).next(()=>null!==t.limit&&n.length>1&&2===r?1:r)}yn(e,t){let r=new i$;for(let n of et(e)){let e=t.data.field(n.fieldPath);if(null==e)return null;let i=r.tn(n.kind);iV.xt.At(e,i)}return r.Yt()}fn(e){let t=new i$;return iV.xt.At(e,t.tn(0)),t.Yt()}wn(e,t){let r=new i$;return iV.xt.At(rr(this.databaseId,t),r.tn(function(e){let t=et(e);return 0===t.length?0:t[t.length-1].kind}(e))),r.Yt()}Vn(e,t,r){if(null===r)return[];let n=[];n.push(new i$);let i=0;for(let s of et(e)){let e=r[i++];for(let r of n)if(this.Sn(t,s.fieldPath)&&ri(e))n=this.bn(n,s,e);else{let t=r.tn(s.kind);iV.xt.At(e,t)}}return this.Dn(n)}Rn(e,t,r){return this.Vn(e,t,r.position)}Dn(e){let t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Yt();return t}bn(e,t,r){let n=[...e],i=[];for(let e of r.arrayValue.values||[])for(let r of n){let n=new i$;n.seed(r.Yt()),iV.xt.At(e,n.tn(t.kind)),i.push(n)}return i}Sn(e,t){return!!e.filters.find(e=>e instanceof rx&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){let r=t_(e,tt),n=t_(e,tn);return(t?r.G(tr,IDBKeyRange.bound(t,t)):r.G()).next(e=>{let t=[];return ef.forEach(e,e=>n.get([e.indexId,this.uid]).next(r=>{t.push(function(e,t){let r=t?new ei(t.sequenceNumber,new ea(iA(t.readTime),new X(eO(t.documentKey)),t.largestBatchId)):ei.empty(),n=e.fields.map(([e,t])=>new en(J.fromServerFormat(e),t));return new Z(e.indexId,e.collectionGroup,n,r)}(e,r))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{let r=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==r?r:z(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,r){let n=t_(e,tt),i=t_(e,tn);return this.vn(e).next(e=>n.G(tr,IDBKeyRange.bound(t,t)).next(t=>ef.forEach(t,t=>i.put(iM(t.indexId,this.uid,e,r)))))}updateIndexEntries(e,t){let r=new Map;return ef.forEach(t,(t,n)=>{let i=r.get(t.collectionGroup);return(i?ef.resolve(i):this.getFieldIndexes(e,t.collectionGroup)).next(i=>(r.set(t.collectionGroup,i),ef.forEach(i,r=>this.Cn(e,t,r).next(t=>{let i=this.Fn(n,r);return t.isEqual(i)?ef.resolve():this.Mn(e,n,r,t,i)}))))})}xn(e,t,r,n){return t_(e,ta).put({indexId:n.indexId,uid:this.uid,arrayValue:n.arrayValue,directionalValue:n.directionalValue,orderedDocumentKey:this.wn(r,t.key),documentKey:t.key.path.toArray()})}On(e,t,r,n){return t_(e,ta).delete([n.indexId,this.uid,n.arrayValue,n.directionalValue,this.wn(r,t.key),t.key.path.toArray()])}Cn(e,t,r){let n=t_(e,ta),i=new tO(iK);return n.Z({index:tu,range:IDBKeyRange.only([r.indexId,this.uid,this.wn(r,t)])},(e,n)=>{i=i.add(new iG(r.indexId,t,n.arrayValue,n.directionalValue))}).next(()=>i)}Fn(e,t){let r=new tO(iK),n=this.yn(t,e);if(null==n)return r;let i=ee(t);if(null!=i){let s=e.data.field(i.fieldPath);if(ri(s))for(let i of s.arrayValue.values||[])r=r.add(new iG(t.indexId,e.key,this.fn(i),n))}else r=r.add(new iG(t.indexId,e.key,i5,n));return r}Mn(e,t,r,n,i){_(i6,"Updating index entries for document '%s'",t.key);let s=[];return function(e,t,r,n,i){let s=e.getIterator(),o=t.getIterator(),a=tL(s),l=tL(o);for(;a||l;){let e=!1,t=!1;if(a&&l){let n=r(a,l);n<0?t=!0:n>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(n(l),l=tL(o)):t?(i(a),a=tL(s)):(a=tL(s),l=tL(o))}}(n,i,iK,n=>{s.push(this.xn(e,t,r,n))},n=>{s.push(this.On(e,t,r,n))}),ef.waitFor(s)}vn(e){let t=1;return t_(e,tn).Z({index:ts,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,r,n)=>{n.done(),t=r.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((e,t)=>iK(e,t)).filter((e,t,r)=>!t||0!==iK(e,r[t-1]));let n=[];for(let i of(n.push(e),r)){let r=iK(i,e),s=iK(i,t);if(0===r)n[0]=e.nn();else if(r>0&&s<0)n.push(i),n.push(i.nn());else if(s>0)break}n.push(t);let i=[];for(let e=0;e<n.length;e+=2){if(this.Nn(n[e],n[e+1]))return[];let t=[n[e].indexId,this.uid,n[e].arrayValue,n[e].directionalValue,i5,[]],r=[n[e+1].indexId,this.uid,n[e+1].arrayValue,n[e+1].directionalValue,i5,[]];i.push(IDBKeyRange.bound(t,r))}return i}Nn(e,t){return iK(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(i8)}getMinOffset(e,t){return ef.mapArray(this.dn(t),t=>this.An(e,t).next(e=>e||A())).next(i8)}}function i8(e){0!==e.length||A();let t=e[0].indexState.offset,r=t.largestBatchId;for(let n=1;n<e.length;n++){let i=e[n].indexState.offset;0>el(i,t)&&(t=i),r<i.largestBatchId&&(r=i.largestBatchId)}return new ea(t.readTime,t.documentKey,r)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i4={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class i9{static withCacheSize(e){return new i9(e,i9.DEFAULT_COLLECTION_PERCENTILE,i9.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i7(e,t,r){let n=e.store(eF),i=e.store(eq),s=[],o=IDBKeyRange.only(r.batchId),a=0,l=n.Z({range:o},(e,t,r)=>(a++,r.delete()));s.push(l.next(()=>{1===a||A()}));let u=[];for(let e of r.mutations){var h,c;let n=(h=e.key.path,c=r.batchId,[t,eN(h),c]);s.push(i.delete(n)),u.push(e.key)}return ef.waitFor(s).next(()=>u)}function se(e){let t;if(!e)return 0;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw A();t=e.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */i9.DEFAULT_COLLECTION_PERCENTILE=10,i9.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,i9.DEFAULT=new i9(0x2800000,i9.DEFAULT_COLLECTION_PERCENTILE,i9.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),i9.DISABLED=new i9(-1,0,0);class st{constructor(e,t,r,n){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=n,this.Bn={}}static It(e,t,r,n){return""!==e.uid||A(),new st(e.isAuthenticated()?e.uid:"",t,r,n)}checkEmpty(e){let t=!0,r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return sn(e).Z({index:eV,range:r},(e,r,n)=>{t=!1,n.done()}).next(()=>t)}addMutationBatch(e,t,r,n){let i=t_(e,eq),s=sn(e);return s.add({}).next(o=>{var a;"number"==typeof o||A();let l=new nL(o,t,r,n),u=function(e,t,r){let n=r.baseMutations.map(t=>ip(e.Tt,t)),i=r.mutations.map(t=>ip(e.Tt,t));return{userId:t,batchId:r.batchId,localWriteTimeMs:r.localWriteTime.toMillis(),baseMutations:n,mutations:i}}(this.serializer,this.userId,l),h=[],c=new tO((e,t)=>z(e.canonicalString(),t.canonicalString()));for(let e of n){let t=(a=this.userId,[a,eN(e.key.path),o]);c=c.add(e.key.path.popLast()),h.push(s.put(u)),h.push(i.put(t,ej))}return c.forEach(t=>{h.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Bn[o]=l.keys()}),ef.waitFor(h).next(()=>l)})}lookupMutationBatch(e,t){return sn(e).get(t).next(e=>e?(e.userId===this.userId||A(),iD(this.serializer,e)):null)}Ln(e,t){return this.Bn[t]?ef.resolve(this.Bn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){let r=e.keys();return this.Bn[t]=r,r}return null})}getNextMutationBatchAfterBatchId(e,t){let r=t+1,n=IDBKeyRange.lowerBound([this.userId,r]),i=null;return sn(e).Z({index:eV,range:n},(e,t,n)=>{t.userId===this.userId&&(t.batchId>=r||A(),i=iD(this.serializer,t)),n.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){let t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),r=-1;return sn(e).Z({index:eV,range:t,reverse:!0},(e,t,n)=>{r=t.batchId,n.done()}).next(()=>r)}getAllMutationBatches(e){let t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return sn(e).G(eV,t).next(e=>e.map(e=>iD(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){let r=[this.userId,eN(t.path)],n=IDBKeyRange.lowerBound(r),i=[];return t_(e,eq).Z({range:n},(r,n,s)=>{let[o,a,l]=r,u=eO(a);if(o===this.userId&&t.path.isEqual(u))return sn(e).get(l).next(e=>{if(!e)throw A();e.userId===this.userId||A(),i.push(iD(this.serializer,e))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new tO(z),n=[];return t.forEach(t=>{let i=[this.userId,eN(t.path)],s=IDBKeyRange.lowerBound(i),o=t_(e,eq).Z({range:s},(e,n,i)=>{let[s,o,a]=e,l=eO(o);s===this.userId&&t.path.isEqual(l)?r=r.add(a):i.done()});n.push(o)}),ef.waitFor(n).next(()=>this.kn(e,r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=[this.userId,eN(r)],s=IDBKeyRange.lowerBound(i),o=new tO(z);return t_(e,eq).Z({range:s},(e,t,i)=>{let[s,a,l]=e,u=eO(a);s===this.userId&&r.isPrefixOf(u)?u.length===n&&(o=o.add(l)):i.done()}).next(()=>this.kn(e,o))}kn(e,t){let r=[],n=[];return t.forEach(t=>{n.push(sn(e).get(t).next(e=>{if(null===e)throw A();e.userId===this.userId||A(),r.push(iD(this.serializer,e))}))}),ef.waitFor(n).next(()=>r)}removeMutationBatch(e,t){return i7(e.ue,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.qn(t.batchId)}),ef.forEach(r,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}qn(e){delete this.Bn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return ef.resolve();let r=IDBKeyRange.lowerBound([this.userId]),n=[];return t_(e,eq).Z({range:r},(e,t,r)=>{if(e[0]===this.userId){let t=eO(e[1]);n.push(t)}else r.done()}).next(()=>{0===n.length||A()})})}containsKey(e,t){return sr(e,this.userId,t)}Qn(e){return t_(e,eP).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function sr(e,t,r){let n=[t,eN(r.path)],i=n[1],s=IDBKeyRange.lowerBound(n),o=!1;return t_(e,eq).Z({range:s,Y:!0},(e,r,n)=>{let[s,a,l]=e;s===t&&a===i&&(o=!0),n.done()}).next(()=>o)}function sn(e){return t_(e,eF)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new si(0)}static Un(){return new si(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Wn(e).next(t=>{let r=new si(t.highestTargetId);return t.highestTargetId=r.next(),this.Gn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Wn(e).next(e=>K.fromTimestamp(new G(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Wn(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Wn(e).next(n=>(n.highestListenSequenceNumber=t,r&&(n.lastRemoteSnapshotVersion=r.toTimestamp()),t>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=t),this.Gn(e,n)))}addTargetData(e,t){return this.zn(e,t).next(()=>this.Wn(e).next(r=>(r.targetCount+=1,this.jn(t,r),this.Gn(e,r))))}updateTargetData(e,t){return this.zn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>t_(e,eJ).delete(t.targetId)).next(()=>this.Wn(e)).next(t=>(t.targetCount>0||A(),t.targetCount-=1,this.Gn(e,t)))}removeTargets(e,t,r){let n=0,i=[];return t_(e,eJ).Z((s,o)=>{let a=ik(o);a.sequenceNumber<=t&&null===r.get(a.targetId)&&(n++,i.push(this.removeTargetData(e,a)))}).next(()=>ef.waitFor(i)).next(()=>n)}forEachTarget(e,t){return t_(e,eJ).Z((e,r)=>{t(ik(r))})}Wn(e){return t_(e,e3).get(e5).next(e=>(null!==e||A(),e))}Gn(e,t){return t_(e,e3).put(e5,t)}zn(e,t){return t_(e,eJ).put(iN(this.serializer,t))}jn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Wn(e).next(e=>e.targetCount)}getTargetData(e,t){let r=rB(t),n=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]),i=null;return t_(e,eJ).Z({range:n,index:eX},(e,r,n)=>{let s=ik(r);rV(t,s.target)&&(i=s,n.done())}).next(()=>i)}addMatchingKeys(e,t,r){let n=[],i=so(e);return t.forEach(t=>{let s=eN(t.path);n.push(i.put({targetId:r,path:s})),n.push(this.referenceDelegate.addReference(e,r,t))}),ef.waitFor(n)}removeMatchingKeys(e,t,r){let n=so(e);return ef.forEach(t,t=>{let i=eN(t.path);return ef.waitFor([n.delete([r,i]),this.referenceDelegate.removeReference(e,r,t)])})}removeMatchingKeysForTargetId(e,t){let r=so(e),n=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(n)}getMatchingKeysForTargetId(e,t){let r=IDBKeyRange.bound([t],[t+1],!1,!0),n=so(e),i=ni();return n.Z({range:r,Y:!0},(e,t,r)=>{let n=new X(eO(e[1]));i=i.add(n)}).next(()=>i)}containsKey(e,t){let r=eN(t.path),n=IDBKeyRange.bound([r],[r+"\0"],!1,!0),i=0;return so(e).Z({index:e2,Y:!0,range:n},([e,t],r,n)=>{0!==e&&(i++,n.done())}).next(()=>i>0)}lt(e,t){return t_(e,eJ).get(t).next(e=>e?ik(e):null)}}function so(e){return t_(e,e0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sa="LruGarbageCollector";function sl([e,t],[r,n]){let i=z(e,r);return 0===i?z(t,n):i}class su{constructor(e){this.Hn=e,this.buffer=new tO(sl),this.Jn=0}Yn(){return++this.Jn}Zn(e){let t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>sl(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class sh{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Xn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return null!==this.Xn}er(e){_(sa,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ew(e)?_(sa,"Ignoring IndexedDB error during garbage collection: ",e):await ec(e)}await this.er(3e5)})}}class sc{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return ef.resolve(eC.ae);let r=new su(t);return this.tr.forEachTarget(e,e=>r.Zn(e.sequenceNumber)).next(()=>this.tr.rr(e,e=>r.Zn(e))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.tr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector","Garbage collection skipped; disabled"),ef.resolve(i4)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(_("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),i4):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let r,n,i,s,o,a,l;let u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(_("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),n=this.params.maximumSequenceNumbersToCollect):n=t,s=Date.now(),this.nthSequenceNumber(e,n))).next(n=>(r=n,o=Date.now(),this.removeTargets(e,r,t))).next(t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,r))).next(e=>(l=Date.now(),I()<=c.LogLevel.DEBUG&&_("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-u}ms
	Determined least recently used ${n} in `+(o-s)+"ms\n"+`	Removed ${i} targets in `+(a-o)+"ms\n"+`	Removed ${e} documents in `+(l-a)+"ms\n"+`Total Duration: ${l-u}ms`),ef.resolve({didRun:!0,sequenceNumbersCollected:n,targetsRemoved:i,documentsRemoved:e})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,t){this.db=e,this.garbageCollector=new sc(this,t)}nr(e){let t=this.sr(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}sr(e){let t=0;return this.rr(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}rr(e,t){return this._r(e,(e,r)=>t(r))}addReference(e,t,r){return sd(e,r)}removeReference(e,t,r){return sd(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return sd(e,t)}ar(e,t){let r;return r=!1,t_(e,eP).X(n=>sr(e,n,t).next(e=>(e&&(r=!0),ef.resolve(!e)))).next(()=>r)}removeOrphanedDocuments(e,t){let r=this.db.getRemoteDocumentCache().newChangeBuffer(),n=[],i=0;return this._r(e,(s,o)=>{if(o<=t){let t=this.ar(e,s).next(t=>{if(!t)return i++,r.getEntry(e,s).next(()=>(r.removeEntry(s,K.min()),so(e).delete([0,eN(s.path)])))});n.push(t)}}).next(()=>ef.waitFor(n)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return sd(e,t)}_r(e,t){let r=so(e),n,i=eC.ae;return r.Z({index:e2},([e,r],{path:s,sequenceNumber:o})=>{0===e?(i!==eC.ae&&t(new X(eO(n)),i),i=o,n=s):i=eC.ae}).next(()=>{i!==eC.ae&&t(new X(eO(n)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function sd(e,t){var r;return so(e).put((r=e.currentSequenceNumber,{targetId:0,path:eN(t.path),sequenceNumber:r}))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(){this.changes=new r8(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rg.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?ef.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return t_(e,ez).put(r)}removeEntry(e,t,r){return t_(e,ez).delete(function(e,t){let r=e.path.toArray();return[r.slice(0,r.length-2),r[r.length-2],iS(t),r[r.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.ur(e,r)))}getEntry(e,t){let r=rg.newInvalidDocument(t);return t_(e,ez).Z({index:eG,range:IDBKeyRange.only(sy(t))},(e,n)=>{r=this.cr(t,n)}).next(()=>r)}lr(e,t){let r={size:0,document:rg.newInvalidDocument(t)};return t_(e,ez).Z({index:eG,range:IDBKeyRange.only(sy(t))},(e,n)=>{r={document:this.cr(t,n),size:se(n)}}).next(()=>r)}getEntries(e,t){let r=r4;return this.hr(e,t,(e,t)=>{let n=this.cr(e,t);r=r.insert(e,n)}).next(()=>r)}Pr(e,t){let r=r4,n=new tD(X.comparator);return this.hr(e,t,(e,t)=>{let i=this.cr(e,t);r=r.insert(e,i),n=n.insert(e,se(t))}).next(()=>({documents:r,Tr:n}))}hr(e,t,r){if(t.isEmpty())return ef.resolve();let n=new tO(sw);t.forEach(e=>n=n.add(e));let i=IDBKeyRange.bound(sy(n.first()),sy(n.last())),s=n.getIterator(),o=s.getNext();return t_(e,ez).Z({index:eG,range:i},(e,t,n)=>{let i=X.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&0>sw(o,i);)r(o,null),o=s.getNext();o&&o.isEqual(i)&&(r(o,t),o=s.hasNext()?s.getNext():null),o?n.W(sy(o)):n.done()}).next(()=>{for(;o;)r(o,null),o=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,t,r,n,i){let s=t.path,o=[s.popLast().toArray(),s.lastSegment(),iS(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return t_(e,ez).G(IDBKeyRange.bound(o,a,!0)).next(e=>{null==i||i.incrementDocumentReadCount(e.length);let r=r4;for(let i of e){let e=this.cr(X.fromSegments(i.prefixPath.concat(i.collectionGroup,i.documentId)),i);e.isFoundDocument()&&(r6(t,e)||n.has(e.key))&&(r=r.insert(e.key,e))}return r})}getAllFromCollectionGroup(e,t,r,n){let i=r4,s=sv(t,r),o=sv(t,ea.max());return t_(e,ez).Z({index:eH,range:IDBKeyRange.bound(s,o,!0)},(e,t,r)=>{let s=this.cr(X.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);(i=i.insert(s.key,s)).size===n&&r.done()}).next(()=>i)}newChangeBuffer(e){return new sm(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return t_(e,eW).get(eY).next(e=>(e||A(),e))}ur(e,t){return t_(e,eW).put(eY,t)}cr(e,t){if(t){let e=function(e,t){let r;if(t.document)r=id(e.Tt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){let e=X.fromSegments(t.noDocument.path),n=iA(t.noDocument.readTime);r=rg.newNoDocument(e,n),t.hasCommittedMutations&&r.setHasCommittedMutations()}else{if(!t.unknownDocument)return A();{let e=X.fromSegments(t.unknownDocument.path),n=iA(t.unknownDocument.version);r=rg.newUnknownDocument(e,n)}}return t.readTime&&r.setReadTime(function(e){let t=new G(e[0],e[1]);return K.fromTimestamp(t)}(t.readTime)),r}(this.serializer,t);if(!(e.isNoDocument()&&e.version.isEqual(K.min())))return e}return rg.newInvalidDocument(e)}}class sm extends sp{constructor(e,t){super(),this.Ir=e,this.trackRemovals=t,this.Er=new r8(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){let t=[],r=0,n=new tO((e,t)=>z(e.canonicalString(),t.canonicalString()));return this.changes.forEach((i,s)=>{let o=this.Er.get(i);if(t.push(this.Ir.removeEntry(e,i,o.readTime)),s.isValidDocument()){let a=iT(this.Ir.serializer,s);n=n.add(i.path.popLast());let l=se(a);r+=l-o.size,t.push(this.Ir.addEntry(e,i,a))}else if(r-=o.size,this.trackRemovals){let r=iT(this.Ir.serializer,s.convertToNoDocument(K.min()));t.push(this.Ir.addEntry(e,i,r))}}),n.forEach(r=>{t.push(this.Ir.indexManager.addToCollectionParentIndex(e,r))}),t.push(this.Ir.updateMetadata(e,r)),ef.waitFor(t)}getFromCache(e,t){return this.Ir.lr(e,t).next(e=>(this.Er.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.Ir.Pr(e,t).next(({documents:e,Tr:t})=>(t.forEach((t,r)=>{this.Er.set(t,{size:r,readTime:e.get(t).readTime})}),e))}}function sy(e){let t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function sv(e,t){let r=t.documentKey.path.toArray();return[e,iS(t.readTime),r.slice(0,r.length-2),r.length>0?r[r.length-1]:""]}function sw(e,t){let r=e.path.toArray(),n=t.path.toArray(),i=0;for(let e=0;e<r.length-2&&e<n.length-2;++e)if(i=z(r[e],n[e]))return i;return(i=z(r.length,n.length))||(i=z(r[r.length-2],n[n.length-2]))||z(r[r.length-1],n[n.length-1])}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&nT(r.mutation,e,tM.empty(),G.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,ni()).next(()=>t))}getLocalViewOfDocuments(e,t,r=ni()){let n=nt();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=r7();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=nt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ni()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let i=r4,s=nt(),o=nt();return t.forEach((e,t)=>{let o=r.get(t.key);n.has(t.key)&&(void 0===o||o.mutation instanceof nA)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),nT(o.mutation,t,o.mutation.getFieldMask(),G.now())):s.set(t.key,tM.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var r;return o.set(e,new sb(t,null!==(r=s.get(e))&&void 0!==r?r:null))}),o))}recalculateAndSaveOverlays(e,t){let r=nt(),n=new tD((e,t)=>e-t),i=ni();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let o=r.get(e)||tM.empty();o=i.applyToLocalView(s,o),r.set(e,o);let a=(n.get(i.batchId)||ni()).add(e);n=n.insert(i.batchId,a)})}).next(()=>{let s=[],o=n.getReverseIterator();for(;o.hasNext();){let n=o.getNext(),a=n.key,l=n.value,u=nt();l.forEach(e=>{if(!i.has(e)){let n=n_(t.get(e),r.get(e));null!==n&&u.set(e,n),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return ef.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r,n){return X.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):rH(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(i=>{let s=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-i.size):ef.resolve(nt()),o=-1,a=i;return s.next(t=>ef.forEach(t,(t,r)=>(o<r.largestBatchId&&(o=r.largestBatchId),i.get(t)?ef.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,a,t,ni())).next(e=>({batchId:o,changes:ne(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next(e=>{let t=r7();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){let i=t.collectionGroup,s=r7();return this.indexManager.getCollectionParents(e,i).next(o=>ef.forEach(o,o=>{let a=new r$(o.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,a,r,n).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,n))).next(e=>{i.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,rg.newInvalidDocument(n)))});let r=r7();return e.forEach((e,n)=>{let s=i.get(e);void 0!==s&&nT(s.mutation,n,tM.empty(),G.now()),r6(t,n)&&(r=r.insert(e,n))}),r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return ef.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,{id:t.id,version:t.version,createTime:ie(t.createTime)}),ef.resolve()}getNamedQuery(e,t){return ef.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,{name:t.name,query:iO(t.bundledQuery),readTime:ie(t.readTime)}),ef.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(){this.overlays=new tD(X.comparator),this.Rr=new Map}getOverlay(e,t){return ef.resolve(this.overlays.get(t))}getOverlays(e,t){let r=nt();return ef.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.Et(e,t,n)}),ef.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.Rr.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.Rr.delete(r)),ef.resolve()}getOverlaysForCollection(e,t,r){let n=nt(),i=t.length+1,s=new X(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){let e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>r&&n.set(e.getKey(),e)}return ef.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let i=new tD((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=i.get(e.largestBatchId);null===t&&(t=nt(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let o=nt(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=n)););return ef.resolve(o)}Et(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.Rr.get(n.largestBatchId).delete(r.key);this.Rr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new nP(t,r));let i=this.Rr.get(t);void 0===i&&(i=ni(),this.Rr.set(t,i)),this.Rr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(){this.sessionToken=tB.EMPTY_BYTE_STRING}getSessionToken(e){return ef.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ef.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(){this.Vr=new tO(sS.mr),this.gr=new tO(sS.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){let r=new sS(e,t);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.wr(new sS(e,t))}Sr(e,t){e.forEach(e=>this.removeReference(e,t))}br(e){let t=new X(new W([])),r=new sS(t,e),n=new sS(t,e+1),i=[];return this.gr.forEachInRange([r,n],e=>{this.wr(e),i.push(e.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){let t=new X(new W([])),r=new sS(t,e),n=new sS(t,e+1),i=ni();return this.gr.forEachInRange([r,n],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new sS(e,0),r=this.Vr.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class sS{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return X.comparator(e.key,t.key)||z(e.Cr,t.Cr)}static pr(e,t){return z(e.Cr,t.Cr)||X.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new tO(sS.mr)}checkEmpty(e){return ef.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new nL(i,t,r,n);for(let t of(this.mutationQueue.push(s),n))this.Mr=this.Mr.add(new sS(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return ef.resolve(s)}lookupMutationBatch(e,t){return ef.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.Nr(t+1),n=r<0?0:r;return ef.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return ef.resolve(0===this.mutationQueue.length?-1:this.Fr-1)}getAllMutationBatches(e){return ef.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new sS(t,0),n=new sS(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,n],e=>{let t=this.Or(e.Cr);i.push(t)}),ef.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new tO(z);return t.forEach(e=>{let t=new sS(e,0),n=new sS(e,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([t,n],e=>{r=r.add(e.Cr)})}),ef.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=r;X.isDocumentKey(i)||(i=i.child(""));let s=new sS(new X(i),0),o=new tO(z);return this.Mr.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(o=o.add(e.Cr)),!0)},s),ef.resolve(this.Br(o))}Br(e){let t=[];return e.forEach(e=>{let r=this.Or(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){0===this.Lr(t.batchId,"removed")||A(),this.mutationQueue.shift();let r=this.Mr;return ef.forEach(t.mutations,n=>{let i=new sS(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,t){let r=new sS(t,0),n=this.Mr.firstAfterOrEqual(r);return ef.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,ef.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Or(e){let t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e){this.kr=e,this.docs=new tD(X.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),i=n?n.size:0,s=this.kr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return ef.resolve(r?r.document.mutableCopy():rg.newInvalidDocument(t))}getEntries(e,t){let r=r4;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():rg.newInvalidDocument(e))}),ef.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let i=r4,s=t.path,o=new X(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){let{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=el(eo(o),r)||(n.has(o.key)||r6(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return ef.resolve(i)}getAllFromCollectionGroup(e,t,r,n){A()}qr(e,t){return ef.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new sD(this)}getSize(e){return ef.resolve(this.size)}}class sD extends sp{constructor(e){super(),this.Ir=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.Ir.addEntry(e,n)):this.Ir.removeEntry(r)}),ef.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e){this.persistence=e,this.Qr=new r8(e=>rB(e),rV),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.$r=0,this.Kr=new sT,this.targetCount=0,this.Ur=si.Kn()}forEachTarget(e,t){return this.Qr.forEach((e,r)=>t(r)),ef.resolve()}getLastRemoteSnapshotVersion(e){return ef.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ef.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),ef.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.$r&&(this.$r=t),ef.resolve()}zn(e){this.Qr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Ur=new si(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,ef.resolve()}updateTargetData(e,t){return this.zn(t),ef.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.br(t.targetId),this.targetCount-=1,ef.resolve()}removeTargets(e,t,r){let n=0,i=[];return this.Qr.forEach((s,o)=>{o.sequenceNumber<=t&&null===r.get(o.targetId)&&(this.Qr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),n++)}),ef.waitFor(i).next(()=>n)}getTargetCount(e){return ef.resolve(this.targetCount)}getTargetData(e,t){let r=this.Qr.get(t)||null;return ef.resolve(r)}addMatchingKeys(e,t,r){return this.Kr.yr(t,r),ef.resolve()}removeMatchingKeys(e,t,r){this.Kr.Sr(t,r);let n=this.persistence.referenceDelegate,i=[];return n&&t.forEach(t=>{i.push(n.markPotentiallyOrphaned(e,t))}),ef.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Kr.br(t),ef.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Kr.vr(t);return ef.resolve(r)}containsKey(e,t){return ef.resolve(this.Kr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new eC(0),this.zr=!1,this.zr=!0,this.jr=new s_,this.referenceDelegate=e(this),this.Hr=new sk(this),this.indexManager=new i1,this.remoteDocumentCache=new sA(e=>this.referenceDelegate.Jr(e)),this.serializer=new i_(t),this.Yr=new sI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Wr[e.toKey()];return r||(r=new sC(t,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,r){_("MemoryPersistence","Starting transaction:",e);let n=new sO(this.Gr.next());return this.referenceDelegate.Zr(),r(n).next(e=>this.referenceDelegate.Xr(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}ei(e,t){return ef.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,t)))}}class sO extends eh{constructor(e){super(),this.currentSequenceNumber=e}}class sR{constructor(e){this.persistence=e,this.ti=new sT,this.ni=null}static ri(e){return new sR(e)}get ii(){if(this.ni)return this.ni;throw A()}addReference(e,t,r){return this.ti.addReference(r,t),this.ii.delete(r.toString()),ef.resolve()}removeReference(e,t,r){return this.ti.removeReference(r,t),this.ii.add(r.toString()),ef.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),ef.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(e=>this.ii.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.ii.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ef.forEach(this.ii,r=>{let n=X.fromPath(r);return this.si(e,n).next(e=>{e||t.removeEntry(n,K.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(e=>{e?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return ef.or([()=>ef.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class sL{constructor(e,t){this.persistence=e,this.oi=new r8(e=>eN(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new sc(this,t)}static ri(e,t){return new sL(e,t)}Zr(){}Xr(e){return ef.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){let t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}sr(e){let t=0;return this.rr(e,e=>{t++}).next(()=>t)}rr(e,t){return ef.forEach(this.oi,(r,n)=>this.ar(e,r,n).next(e=>e?ef.resolve():t(n)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,n=this.persistence.getRemoteDocumentCache(),i=n.newChangeBuffer();return n.qr(e,n=>this.ar(e,n,t).next(e=>{e||(r++,i.removeEntry(n,K.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),ef.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),ef.resolve()}removeReference(e,t,r){return this.oi.set(r,e.currentSequenceNumber),ef.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),ef.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(t3(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let r=tQ(t);return r?16+e(r):16;case 5:return 2*t.stringValue.length;case 6:return tq(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,r)=>t+e(r),0);case 10:case 11:var n;let i;return n=t.mapValue,i=0,tS(n.fields,(t,r)=>{i+=t.length+e(r)}),i;default:throw A()}}(e.data.value)),t}ar(e,t,r){return ef.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.oi.get(t);return ef.resolve(void 0!==e&&e>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sM{constructor(e){this.serializer=e}B(e,t,r,n){let i=new ep("createOrUpgrade",t);r<1&&n>=1&&(!function(e){e.createObjectStore(eL)}(e),e.createObjectStore(eP,{keyPath:"userId"}),e.createObjectStore(eF,{keyPath:eB,autoIncrement:!0}).createIndex(eV,eU,{unique:!0}),e.createObjectStore(eq),sP(e),function(e){e.createObjectStore(eR)}(e));let s=ef.resolve();return r<3&&n>=3&&(0!==r&&(e.deleteObjectStore(e0),e.deleteObjectStore(eJ),e.deleteObjectStore(e3),sP(e)),s=s.next(()=>(function(e){let t=e.store(e3),r={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:K.min().toTimestamp(),targetCount:0};return t.put(e5,r)})(i))),r<4&&n>=4&&(0!==r&&(s=s.next(()=>i.store(eF).G().next(t=>{e.deleteObjectStore(eF),e.createObjectStore(eF,{keyPath:eB,autoIncrement:!0}).createIndex(eV,eU,{unique:!0});let r=i.store(eF),n=t.map(e=>r.put(e));return ef.waitFor(n)}))),s=s.next(()=>{!function(e){e.createObjectStore(e9,{keyPath:"clientId"})}(e)})),r<5&&n>=5&&(s=s.next(()=>this._i(i))),r<6&&n>=6&&(s=s.next(()=>((function(e){e.createObjectStore(eW)})(e),this.ai(i)))),r<7&&n>=7&&(s=s.next(()=>this.ui(i))),r<8&&n>=8&&(s=s.next(()=>this.ci(e,i))),r<9&&n>=9&&(s=s.next(()=>{e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")})),r<10&&n>=10&&(s=s.next(()=>this.li(i))),r<11&&n>=11&&(s=s.next(()=>{(function(e){e.createObjectStore(e7,{keyPath:"bundleId"})})(e),function(e){e.createObjectStore(te,{keyPath:"name"})}(e)})),r<12&&n>=12&&(s=s.next(()=>{!function(e){let t=e.createObjectStore(tc,{keyPath:tf});t.createIndex(td,tp,{unique:!1}),t.createIndex(tg,tm,{unique:!1})}(e)})),r<13&&n>=13&&(s=s.next(()=>(function(e){let t=e.createObjectStore(ez,{keyPath:e$});t.createIndex(eG,eK),t.createIndex(eH,eQ)})(e)).next(()=>this.hi(e,i)).next(()=>e.deleteObjectStore(eR))),r<14&&n>=14&&(s=s.next(()=>this.Pi(e,i))),r<15&&n>=15&&(s=s.next(()=>{e.createObjectStore(tt,{keyPath:"indexId",autoIncrement:!0}).createIndex(tr,"collectionGroup",{unique:!1}),e.createObjectStore(tn,{keyPath:ti}).createIndex(ts,to,{unique:!1}),e.createObjectStore(ta,{keyPath:tl}).createIndex(tu,th,{unique:!1})})),r<16&&n>=16&&(s=s.next(()=>{t.objectStore(tn).clear()}).next(()=>{t.objectStore(ta).clear()})),r<17&&n>=17&&(s=s.next(()=>{!function(e){e.createObjectStore(ty,{keyPath:"name"})}(e)})),s}ai(e){let t=0;return e.store(eR).Z((e,r)=>{t+=se(r)}).next(()=>{let r={byteSize:t};return e.store(eW).put(eY,r)})}_i(e){let t=e.store(eP),r=e.store(eF);return t.G().next(t=>ef.forEach(t,t=>{let n=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return r.G(eV,n).next(r=>ef.forEach(r,r=>{r.userId===t.userId||A();let n=iD(this.serializer,r);return i7(e,t.userId,n).next(()=>{})}))}))}ui(e){let t=e.store(e0),r=e.store(eR);return e.store(e3).get(e5).next(e=>{let n=[];return r.Z((r,i)=>{let s=new W(r),o=[0,eN(s)];n.push(t.get(o).next(r=>r?ef.resolve():t.put({targetId:0,path:eN(s),sequenceNumber:e.highestListenSequenceNumber})))}).next(()=>ef.waitFor(n))})}ci(e,t){e.createObjectStore(e8,{keyPath:e4});let r=t.store(e8),n=new i2,i=e=>{if(n.add(e)){let t=e.lastSegment(),n=e.popLast();return r.put({collectionId:t,parent:eN(n)})}};return t.store(eR).Z({Y:!0},(e,t)=>i(new W(e).popLast())).next(()=>t.store(eq).Z({Y:!0},([e,t,r],n)=>i(eO(t).popLast())))}li(e){let t=e.store(eJ);return t.Z((e,r)=>{let n=ik(r),i=iN(this.serializer,n);return t.put(i)})}hi(e,t){let r=t.store(eR),n=[];return r.Z((e,r)=>{let i=t.store(ez),s=(r.document?new X(W.fromString(r.document.name).popFirst(5)):r.noDocument?X.fromSegments(r.noDocument.path):r.unknownDocument?X.fromSegments(r.unknownDocument.path):A()).path.toArray(),o={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:r.readTime||[0,0],unknownDocument:r.unknownDocument,noDocument:r.noDocument,document:r.document,hasCommittedMutations:!!r.hasCommittedMutations};n.push(i.put(o))}).next(()=>ef.waitFor(n))}Pi(e,t){let r=t.store(eF),n=new sg(this.serializer),i=new sN(sR.ri,this.serializer.Tt);return r.G().next(e=>{let r=new Map;return e.forEach(e=>{var t;let n=null!==(t=r.get(e.userId))&&void 0!==t?t:ni();iD(this.serializer,e).keys().forEach(e=>n=n.add(e)),r.set(e.userId,n)}),ef.forEach(r,(e,r)=>{let s=new w(r),o=iF.It(this.serializer,s),a=i.getIndexManager(s);return new sx(n,st.It(s,this.serializer,a,i.referenceDelegate),o,a).recalculateAndSaveOverlaysForDocumentKeys(new tE(t,eC.ae),e).next()})})}}function sP(e){e.createObjectStore(e0,{keyPath:e1}).createIndex(e2,e6,{unique:!0}),e.createObjectStore(eJ,{keyPath:"targetId"}).createIndex(eX,eZ,{unique:!0}),e.createObjectStore(e3)}let sF="IndexedDbPersistence",sB="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",sV="main";class sU{constructor(e,t,r,n,i,s,o,a,l,u,h=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ti=i,this.window=s,this.document=o,this.Ii=l,this.Ei=u,this.di=h,this.Gr=null,this.zr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ai=null,this.inForeground=!1,this.Ri=null,this.Vi=null,this.mi=Number.NEGATIVE_INFINITY,this.fi=e=>Promise.resolve(),!sU.D())throw new N(k.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new sf(this,n),this.gi=t+sV,this.serializer=new i_(a),this.pi=new eg(this.gi,this.di,new sM(this.serializer)),this.jr=new iB,this.Hr=new ss(this.referenceDelegate,this.serializer),this.remoteDocumentCache=new sg(this.serializer),this.Yr=new iP,this.window&&this.window.localStorage?this.yi=this.window.localStorage:(this.yi=null,!1===u&&T(sF,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.wi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new N(k.FAILED_PRECONDITION,sB);return this.Si(),this.bi(),this.Di(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Hr.getHighestSequenceNumber(e))}).then(e=>{this.Gr=new eC(e,this.Ii)}).then(()=>{this.zr=!0}).catch(e=>(this.pi&&this.pi.close(),Promise.reject(e)))}Ci(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.pi.k(async t=>{null===t.newVersion&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ti.enqueueAndForget(async()=>{this.started&&await this.wi()}))}wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>t_(e,e9).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Fi(e).next(e=>{e||(this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Mi(e)).next(t=>this.isPrimary&&!t?this.xi(e).next(()=>!1):!!t&&this.Oi(e).next(()=>!0))).catch(e=>{if(ew(e))return _(sF,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return _(sF,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ti.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Fi(e){return t_(e,eL).get(eM).next(e=>ef.resolve(this.Ni(e)))}Bi(e){return t_(e,e9).delete(this.clientId)}async Li(){if(this.isPrimary&&!this.ki(this.mi,18e5)){this.mi=Date.now();let e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{let t=t_(e,e9);return t.G().next(e=>{let r=this.qi(e,18e5),n=e.filter(e=>-1===r.indexOf(e));return ef.forEach(n,e=>t.delete(e.clientId)).next(()=>n)})}).catch(()=>[]);if(this.yi)for(let t of e)this.yi.removeItem(this.Qi(t.clientId))}}Di(){this.Vi=this.Ti.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.wi().then(()=>this.Li()).then(()=>this.Di()))}Ni(e){return!!e&&e.ownerId===this.clientId}Mi(e){return this.Ei?ef.resolve(!0):t_(e,eL).get(eM).next(t=>{if(null!==t&&this.ki(t.leaseTimestampMs,5e3)&&!this.$i(t.ownerId)){if(this.Ni(t)&&this.networkEnabled)return!0;if(!this.Ni(t)){if(!t.allowTabSynchronization)throw new N(k.FAILED_PRECONDITION,sB);return!1}}return!(!this.networkEnabled||!this.inForeground)||t_(e,e9).G().next(e=>void 0===this.qi(e,5e3).find(e=>{if(this.clientId!==e.clientId){let t=!this.networkEnabled&&e.networkEnabled,r=!this.inForeground&&e.inForeground,n=this.networkEnabled===e.networkEnabled;if(t||r&&n)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&_(sF,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.zr=!1,this.Ki(),this.Vi&&(this.Vi.cancel(),this.Vi=null),this.Ui(),this.Wi(),await this.pi.runTransaction("shutdown","readwrite",[eL,e9],e=>{let t=new tE(e,eC.ae);return this.xi(t).next(()=>this.Bi(t))}),this.pi.close(),this.Gi()}qi(e,t){return e.filter(e=>this.ki(e.updateTimeMs,t)&&!this.$i(e.clientId))}zi(){return this.runTransaction("getActiveClients","readonly",e=>t_(e,e9).G().next(e=>this.qi(e,18e5).map(e=>e.clientId)))}get started(){return this.zr}getGlobalsCache(){return this.jr}getMutationQueue(e,t){return st.It(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new i3(e,this.serializer.Tt.databaseId)}getDocumentOverlayCache(e){return iF.It(this.serializer,e)}getBundleCache(){return this.Yr}runTransaction(e,t,r){var n;let i;_(sF,"Starting transaction:",e);let s=17===(n=this.di)?tI:16===n?tx:15===n?tx:14===n?tb:13===n?tb:12===n?tw:11===n?tv:void A();return this.pi.runTransaction(e,"readonly"===t?"readonly":"readwrite",s,n=>(i=new tE(n,this.Gr?this.Gr.next():eC.ae),"readwrite-primary"===t?this.Fi(i).next(e=>!!e||this.Mi(i)).next(t=>{if(!t)throw T(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ti.enqueueRetryable(()=>this.fi(!1)),new N(k.FAILED_PRECONDITION,eu);return r(i)}).next(e=>this.Oi(i).next(()=>e)):this.ji(i).next(()=>r(i)))).then(e=>(i.raiseOnCommittedEvent(),e))}ji(e){return t_(e,eL).get(eM).next(e=>{if(null!==e&&this.ki(e.leaseTimestampMs,5e3)&&!this.$i(e.ownerId)&&!this.Ni(e)&&!(this.Ei||this.allowTabSynchronization&&e.allowTabSynchronization))throw new N(k.FAILED_PRECONDITION,sB)})}Oi(e){let t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return t_(e,eL).put(eM,t)}static D(){return eg.D()}xi(e){let t=t_(e,eL);return t.get(eM).next(e=>this.Ni(e)?(_(sF,"Releasing primary lease."),t.delete(eM)):ef.resolve())}ki(e,t){let r=Date.now();return!(e<r-t)&&(!(e>r)||(T(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Si(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ri=()=>{this.Ti.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.wi()))},this.document.addEventListener("visibilitychange",this.Ri),this.inForeground="visible"===this.document.visibilityState)}Ui(){this.Ri&&(this.document.removeEventListener("visibilitychange",this.Ri),this.Ri=null)}bi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Ai=()=>{this.Ki();let e=/(?:Version|Mobile)\/1[456]/;(0,f.isSafari)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Ti.enterRestrictedMode(!0),this.Ti.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ai))}Wi(){this.Ai&&(this.window.removeEventListener("pagehide",this.Ai),this.Ai=null)}$i(e){var t;try{let r=null!==(null===(t=this.yi)||void 0===t?void 0:t.getItem(this.Qi(e)));return _(sF,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(e){return T(sF,"Failed to get zombied client id.",e),!1}}Ki(){if(this.yi)try{this.yi.setItem(this.Qi(this.clientId),String(Date.now()))}catch(e){T("Failed to set zombie client id.",e)}}Gi(){if(this.yi)try{this.yi.removeItem(this.Qi(this.clientId))}catch(e){}}Qi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function sj(e,t){let r=e.projectId;return e.isDefaultDatabase||(r+="."+e.database),"firestore/"+t+"/"+r+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sq{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.Hi=r,this.Ji=n}static Yi(e,t){let r=ni(),n=ni();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new sq(e,t.fromCache,r,n)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sz{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s${constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=(0,f.isSafari)()?8:em((0,f.getUA)())>0?6:4}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,r,n){let i={result:null};return this.rs(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ss(e,t,n,r).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let r=new sz;return this._s(e,t,r).next(n=>{if(i.result=n,this.Xi)return this.us(e,t,r,n.size)})}).next(()=>i.result)}us(e,t,r,n){return r.documentReadCount<this.es?(I()<=c.LogLevel.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",r2(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),ef.resolve()):(I()<=c.LogLevel.DEBUG&&_("QueryEngine","Query:",r2(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.ts*n?(I()<=c.LogLevel.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",r2(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rW(t))):ef.resolve())}rs(e,t){if(rK(t))return ef.resolve(null);let r=rW(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=rW(t=rZ(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let i=ni(...n);return this.ns.getDocuments(e,i).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let s=this.cs(t,n);return this.ls(t,s,i,r.readTime)?this.rs(e,rZ(t,null,"F")):this.hs(e,s,t,r)}))})))}ss(e,t,r,n){return rK(t)||n.isEqual(K.min())?ef.resolve(null):this.ns.getDocuments(e,r).next(i=>{let s=this.cs(t,i);return this.ls(t,s,r,n)?ef.resolve(null):(I()<=c.LogLevel.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),r2(t)),this.hs(e,s,t,es(n,-1)).next(e=>e))})}cs(e,t){let r=new tO(r3(e));return t.forEach((t,n)=>{r6(e,n)&&(r=r.add(n))}),r}ls(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}_s(e,t,r){return I()<=c.LogLevel.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",r2(t)),this.ns.getDocumentsMatchingQuery(e,t,ea.min(),r)}hs(e,t,r,n){return this.ns.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sG="LocalStore";class sK{constructor(e,t,r,n){this.persistence=e,this.Ps=t,this.serializer=n,this.Ts=new tD(z),this.Is=new r8(e=>rB(e),rV),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sx(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}async function sH(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(i=>(n=i,e.As(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let i=[],s=[],o=ni();for(let e of n)for(let t of(i.push(e.batchId),e.mutations))o=o.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))o=o.add(t.key);return e.localDocuments.getDocuments(r,o).next(e=>({Rs:e,removedBatchIds:i,addedBatchIds:s}))})})}function sQ(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function sW(e,t,r){let n=ni(),i=ni();return r.forEach(e=>n=n.add(e)),t.getEntries(e,n).next(e=>{let n=r4;return r.forEach((r,s)=>{let o=e.get(r);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(r)),s.isNoDocument()&&s.version.isEqual(K.min())?(t.removeEntry(r,s.readTime),n=n.insert(r,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),n=n.insert(r,s)):_(sG,"Ignoring outdated watch update for ",r,". Current version:",o.version," Watch version:",s.version)}),{Vs:n,fs:i}})}function sY(e,t){return e.persistence.runTransaction("Allocate target","readwrite",r=>{let n;return e.Hr.getTargetData(r,t).next(i=>i?(n=i,ef.resolve(n)):e.Hr.allocateTargetId(r).next(i=>(n=new iE(t,i,"TargetPurposeListen",r.currentSequenceNumber),e.Hr.addTargetData(r,n).next(()=>n))))}).then(r=>{let n=e.Ts.get(r.targetId);return(null===n||r.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(r.targetId,r),e.Is.set(t,r.targetId)),r})}async function sJ(e,t,r){let n=e.Ts.get(t);try{r||await e.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!ew(e))throw e;_(sG,`Failed to update sequence numbers for target ${t}: ${e}`)}e.Ts=e.Ts.remove(t),e.Is.delete(n.target)}function sX(e,t,r){let n=K.min(),i=ni();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,r){let n=e.Is.get(r);return void 0!==n?ef.resolve(e.Ts.get(n)):e.Hr.getTargetData(t,r)})(e,s,rW(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.Hr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Ps.getDocumentsMatchingQuery(s,t,r?n:K.min(),r?i:ni())).next(r=>(s1(e,r5(t),r),{documents:r,gs:i})))}function sZ(e,t){let r=e.Hr,n=e.Ts.get(t);return n?Promise.resolve(n.target):e.persistence.runTransaction("Get target data","readonly",e=>r.lt(e,t).next(e=>e?e.target:null))}function s0(e,t){let r=e.Es.get(t)||K.min();return e.persistence.runTransaction("Get new document changes","readonly",n=>e.ds.getAllFromCollectionGroup(n,t,es(r,-1),Number.MAX_SAFE_INTEGER)).then(r=>(s1(e,t,r),r))}function s1(e,t,r){let n=e.Es.get(t)||K.min();r.forEach((e,t)=>{t.readTime.compareTo(n)>0&&(n=t.readTime)}),e.Es.set(t,n)}async function s2(e,t,r,n){let i=ni(),s=r4;for(let e of r){let r=t.ps(e.metadata.name);e.document&&(i=i.add(r));let n=t.ys(e);n.setReadTime(t.ws(e.metadata.readTime)),s=s.insert(r,n)}let o=e.ds.newChangeBuffer({trackRemovals:!0}),a=await sY(e,rW(rG(W.fromString(`__bundle__/docs/${n}`))));return e.persistence.runTransaction("Apply bundle documents","readwrite",t=>sW(t,o,s).next(e=>(o.apply(t),e)).next(r=>e.Hr.removeMatchingKeysForTargetId(t,a.targetId).next(()=>e.Hr.addMatchingKeys(t,i,a.targetId)).next(()=>e.localDocuments.getLocalViewOfDocuments(t,r.Vs,r.fs)).next(()=>r.Vs)))}async function s6(e,t,r=ni()){let n=await sY(e,rW(iO(t.bundledQuery)));return e.persistence.runTransaction("Save named query","readwrite",i=>{let s=ie(t.readTime);if(n.snapshotVersion.compareTo(s)>=0)return e.Yr.saveNamedQuery(i,t);let o=n.withResumeToken(tB.EMPTY_BYTE_STRING,s);return e.Ts=e.Ts.insert(o.targetId,o),e.Hr.updateTargetData(i,o).next(()=>e.Hr.removeMatchingKeysForTargetId(i,n.targetId)).next(()=>e.Hr.addMatchingKeys(i,r,n.targetId)).next(()=>e.Yr.saveNamedQuery(i,t))})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s5="firestore_clients";function s3(e,t){return`${s5}_${e}_${t}`}let s8="firestore_mutations";function s4(e,t,r){let n=`${s8}_${e}_${r}`;return t.isAuthenticated()&&(n+=`_${t.uid}`),n}let s9="firestore_targets";function s7(e,t){return`${s9}_${e}_${t}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oe="SharedClientState";class ot{constructor(e,t,r,n){this.user=e,this.batchId=t,this.state=r,this.error=n}static Ss(e,t,r){let n=JSON.parse(r),i,s="object"==typeof n&&-1!==["pending","acknowledged","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return s&&n.error&&(s="string"==typeof n.error.message&&"string"==typeof n.error.code)&&(i=new N(n.error.code,n.error.message)),s?new ot(e,t,n.state,i):(T(oe,`Failed to parse mutation state for ID '${t}': ${r}`),null)}bs(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class or{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ss(e,t){let r=JSON.parse(t),n,i="object"==typeof r&&-1!==["not-current","current","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return i&&r.error&&(i="string"==typeof r.error.message&&"string"==typeof r.error.code)&&(n=new N(r.error.code,r.error.message)),i?new or(e,r.state,n):(T(oe,`Failed to parse target state for ID '${e}': ${t}`),null)}bs(){let e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class on{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ss(e,t){let r=JSON.parse(t),n="object"==typeof r&&r.activeTargetIds instanceof Array,i=ns;for(let e=0;n&&e<r.activeTargetIds.length;++e)n=ek(r.activeTargetIds[e]),i=i.add(r.activeTargetIds[e]);return n?new on(e,i):(T(oe,`Failed to parse client data for instance '${e}': ${t}`),null)}}class oi{constructor(e,t){this.clientId=e,this.onlineState=t}static Ss(e){let t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new oi(t.clientId,t.onlineState):(T(oe,`Failed to parse online state: ${e}`),null)}}class os{constructor(){this.activeTargetIds=ns}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class oo{constructor(e,t,r,n,i){var s,o,a;this.window=e,this.Ti=t,this.persistenceKey=r,this.Cs=n,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Fs=this.Ms.bind(this),this.xs=new tD(z),this.started=!1,this.Os=[];let l=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ns=s3(this.persistenceKey,this.Cs),this.Bs=(s=this.persistenceKey,`firestore_sequence_number_${s}`),this.xs=this.xs.insert(this.Cs,new os),this.Ls=RegExp(`^${s5}_${l}_([^_]*)$`),this.ks=RegExp(`^${s8}_${l}_(\\d+)(?:_(.*))?$`),this.qs=RegExp(`^${s9}_${l}_(\\d+)$`),this.Qs=(o=this.persistenceKey,`firestore_online_state_${o}`),this.$s=(a=this.persistenceKey,`firestore_bundle_loaded_v2_${a}`),this.window.addEventListener("storage",this.Fs)}static D(e){return!(!e||!e.localStorage)}async start(){for(let e of(await this.syncEngine.zi())){if(e===this.Cs)continue;let t=this.getItem(s3(this.persistenceKey,e));if(t){let r=on.Ss(e,t);r&&(this.xs=this.xs.insert(r.clientId,r))}}this.Ks();let e=this.storage.getItem(this.Qs);if(e){let t=this.Us(e);t&&this.Ws(t)}for(let e of this.Os)this.Ms(e);this.Os=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Bs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Gs(this.xs)}isActiveQueryTarget(e){let t=!1;return this.xs.forEach((r,n)=>{n.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.zs(e,"pending")}updateMutationState(e,t,r){this.zs(e,t,r),this.js(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){let t=this.storage.getItem(s7(this.persistenceKey,e));if(t){let n=or.Ss(e,t);n&&(r=n.state)}}return t&&this.Hs.Ds(e),this.Ks(),r}removeLocalQueryTarget(e){this.Hs.vs(e),this.Ks()}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(s7(this.persistenceKey,e))}updateQueryState(e,t,r){this.Js(e,t,r)}handleUserChange(e,t,r){t.forEach(e=>{this.js(e)}),this.currentUser=e,r.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.Ys(e)}notifyBundleLoaded(e){this.Zs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Fs),this.removeItem(this.Ns),this.started=!1)}getItem(e){let t=this.storage.getItem(e);return _(oe,"READ",e,t),t}setItem(e,t){_(oe,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){_(oe,"REMOVE",e),this.storage.removeItem(e)}Ms(e){if(e.storageArea===this.storage){if(_(oe,"EVENT",e.key,e.newValue),e.key===this.Ns)return void T("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ti.enqueueRetryable(async()=>{if(this.started){if(null!==e.key){if(this.Ls.test(e.key)){if(null==e.newValue){let t=this.Xs(e.key);return this.eo(t,null)}{let t=this.no(e.key,e.newValue);if(t)return this.eo(t.clientId,t)}}else if(this.ks.test(e.key)){if(null!==e.newValue){let t=this.ro(e.key,e.newValue);if(t)return this.io(t)}}else if(this.qs.test(e.key)){if(null!==e.newValue){let t=this.so(e.key,e.newValue);if(t)return this.oo(t)}}else if(e.key===this.Qs){if(null!==e.newValue){let t=this.Us(e.newValue);if(t)return this.Ws(t)}}else if(e.key===this.Bs){let t=function(e){let t=eC.ae;if(null!=e)try{let r=JSON.parse(e);"number"==typeof r||A(),t=r}catch(e){T(oe,"Failed to read sequence number from WebStorage",e)}return t}(e.newValue);t!==eC.ae&&this.sequenceNumberHandler(t)}else if(e.key===this.$s){let t=this._o(e.newValue);await Promise.all(t.map(e=>this.syncEngine.ao(e)))}}}else this.Os.push(e)})}}get Hs(){return this.xs.get(this.Cs)}Ks(){this.setItem(this.Ns,this.Hs.bs())}zs(e,t,r){let n=new ot(this.currentUser,e,t,r),i=s4(this.persistenceKey,this.currentUser,e);this.setItem(i,n.bs())}js(e){let t=s4(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Ys(e){let t={clientId:this.Cs,onlineState:e};this.storage.setItem(this.Qs,JSON.stringify(t))}Js(e,t,r){let n=s7(this.persistenceKey,e),i=new or(e,t,r);this.setItem(n,i.bs())}Zs(e){let t=JSON.stringify(Array.from(e));this.setItem(this.$s,t)}Xs(e){let t=this.Ls.exec(e);return t?t[1]:null}no(e,t){let r=this.Xs(e);return on.Ss(r,t)}ro(e,t){let r=this.ks.exec(e),n=Number(r[1]),i=void 0!==r[2]?r[2]:null;return ot.Ss(new w(i),n,t)}so(e,t){let r=Number(this.qs.exec(e)[1]);return or.Ss(r,t)}Us(e){return oi.Ss(e)}_o(e){return JSON.parse(e)}async io(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.uo(e.batchId,e.state,e.error);_(oe,`Ignoring mutation for non-active user ${e.user.uid}`)}oo(e){return this.syncEngine.co(e.targetId,e.state,e.error)}eo(e,t){let r=t?this.xs.insert(e,t):this.xs.remove(e),n=this.Gs(this.xs),i=this.Gs(r),s=[],o=[];return i.forEach(e=>{n.has(e)||s.push(e)}),n.forEach(e=>{i.has(e)||o.push(e)}),this.syncEngine.lo(s,o).then(()=>{this.xs=r})}Ws(e){this.xs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Gs(e){let t=ns;return e.forEach((e,r)=>{t=t.unionWith(r.activeTargetIds)}),t}}class oa{constructor(){this.ho=new os,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,r){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new os,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ou="ConnectivityMonitor";class oh{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){for(let e of(_(ou,"Network connectivity changed: AVAILABLE"),this.Vo))e(0)}Ro(){for(let e of(_(ou,"Network connectivity changed: UNAVAILABLE"),this.Vo))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oc=null;function of(){return null===oc?oc=0x10000000+Math.round(0x80000000*Math.random()):oc++,"0x"+oc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let od="RestConnection",op={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class og{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${r}/databases/${n}`,this.wo=this.databaseId.database===tJ?`project_id=${r}`:`project_id=${r}&database_id=${n}`}So(e,t,r,n,i){let s=of(),o=this.bo(e,t.toUriEncodedString());_(od,`Sending RPC '${e}' ${s}:`,o,r);let a={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(a,n,i),this.vo(e,o,a,r).then(t=>(_(od,`Received RPC '${e}' ${s}: `,t),t),t=>{throw S(od,`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",r),t})}Co(e,t,r,n,i,s){return this.So(e,t,r,n,i)}Do(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+b,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}bo(e,t){let r=op[e];return`${this.po}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oy="WebChannelConnection";class ov extends og{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,r,n){let i=of();return new Promise((s,o)=>{let a=new p.XhrIo;a.setWithCredentials(!0),a.listenOnce(p.EventType.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case p.ErrorCode.NO_ERROR:let t=a.getResponseJson();_(oy,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case p.ErrorCode.TIMEOUT:_(oy,`RPC '${e}' ${i} timed out`),o(new N(k.DEADLINE_EXCEEDED,"Request time out"));break;case p.ErrorCode.HTTP_ERROR:let r=a.getStatus();if(_(oy,`RPC '${e}' ${i} failed with status:`,r,"response text:",a.getResponseText()),r>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(t)>=0?t:k.UNKNOWN}(t.status);o(new N(e,t.message))}else o(new N(k.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new N(k.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{_(oy,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(n);_(oy,`RPC '${e}' ${i} sending request:`,n),a.send(t,"POST",l,r,15)})}Wo(e,t,r){let n=of(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=(0,p.createWebChannelTransport)(),a=(0,p.getStatEventTarget)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let h=s.join("");_(oy,`Creating RPC '${e}' stream ${n}: ${h}`,l);let c=o.createWebChannel(h,l),f=!1,d=!1,g=new om({Fo:t=>{d?_(oy,`Not sending because RPC '${e}' stream ${n} is closed:`,t):(f||(_(oy,`Opening RPC '${e}' stream ${n} transport.`),c.open(),f=!0),_(oy,`RPC '${e}' stream ${n} sending:`,t),c.send(t))},Mo:()=>c.close()}),m=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return m(c,p.WebChannel.EventType.OPEN,()=>{d||(_(oy,`RPC '${e}' stream ${n} transport opened.`),g.Qo())}),m(c,p.WebChannel.EventType.CLOSE,()=>{d||(d=!0,_(oy,`RPC '${e}' stream ${n} transport closed`),g.Ko())}),m(c,p.WebChannel.EventType.ERROR,t=>{d||(d=!0,S(oy,`RPC '${e}' stream ${n} transport errored:`,t),g.Ko(new N(k.UNAVAILABLE,"The operation could not be completed")))}),m(c,p.WebChannel.EventType.MESSAGE,t=>{var r;if(!d){let s=t.data[0];s||A();let o=(null==s?void 0:s.error)||(null===(r=s[0])||void 0===r?void 0:r.error);if(o){_(oy,`RPC '${e}' stream ${n} received error:`,o);let t=o.status,r=function(e){let t=i[e];if(void 0!==t)return nU(t)}(t),s=o.message;void 0===r&&(r=k.INTERNAL,s="Unknown error status: "+t+" with message "+o.message),d=!0,g.Ko(new N(r,s)),c.close()}else _(oy,`RPC '${e}' stream ${n} received:`,s),g.Uo(s)}}),m(a,p.Event.STAT_EVENT,t=>{t.stat===p.Stat.PROXY?_(oy,`RPC '${e}' stream ${n} detected buffering proxy`):t.stat===p.Stat.NOPROXY&&_(oy,`RPC '${e}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{g.$o()},0),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(){return"undefined"!=typeof window?window:null}function ob(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ox(e){return new n8(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(e,t,r=1e3,n=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=r,this.zo=n,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();let t=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),n=Math.max(0,t-r);n>0&&_("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,n,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){null!==this.Jo&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){null!==this.Jo&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oE="PersistentStream";class o_{constructor(e,t,r,n,i,s,o,a){this.Ti=e,this.n_=r,this.r_=n,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new oI(e,t)}u_(){return 1===this.state||5===this.state||this.c_()}c_(){return 2===this.state||3===this.state}start(){this.__=0,4!==this.state?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&null===this.s_&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,4!==e?this.a_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(T(t.toString()),T("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===k.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;let e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.i_===t&&this.V_(e,r)},t=>{e(()=>{let e=new N(k.UNKNOWN,"Fetching auth token failed: "+t.message);return this.m_(e)})})}V_(e,t){let r=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(e=>{r(()=>this.m_(e))}),this.stream.onMessage(e=>{r(()=>1==++this.__?this.g_(e):this.onNext(e))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return _(oE,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(_(oE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oT extends o_{constructor(e,t,r,n,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();let t=function(e,t){let r;if("targetChange"in t){var n,i;t.targetChange;let s="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:A(),o=t.targetChange.targetIds||[],a=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||A(),tB.fromBase64String(i||"")):(void 0===i||i instanceof m||i instanceof Uint8Array||A(),tB.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;r=new nX(s,o,a,l&&new N(void 0===l.code?k.UNKNOWN:nU(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let i=io(e,n.document.name),s=ie(n.document.updateTime),o=n.document.createTime?ie(n.document.createTime):K.min(),a=new rp({mapValue:{fields:n.document.fields}}),l=rg.newFoundDocument(i,s,o,a);r=new nY(n.targetIds||[],n.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let i=io(e,n.document),s=n.readTime?ie(n.readTime):K.min(),o=rg.newNoDocument(i,s);r=new nY([],n.removedTargetIds||[],o.key,o)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let i=io(e,n.document);r=new nY([],n.removedTargetIds||[],i,null)}else{if(!("filter"in t))return A();{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:i}=e,s=new nB(n,i);r=new nJ(e.targetId,s)}}return r}(this.serializer,e),r=function(e){if(!("targetChange"in e))return K.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?K.min():t.readTime?ie(t.readTime):K.min()}(e);return this.listener.p_(t,r)}y_(e){let t={};t.database=iu(this.serializer),t.addTarget=function(e,t){let r;let n=t.target;if((r=rU(n)?{documents:im(e,n)}:{query:iy(e,n).ht}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){r.resumeToken=n7(e,t.resumeToken);let n=n4(e,t.expectedCount);null!==n&&(r.expectedCount=n)}else if(t.snapshotVersion.compareTo(K.min())>0){r.readTime=n9(e,t.snapshotVersion.toTimestamp());let n=n4(e,t.expectedCount);null!==n&&(r.expectedCount=n)}return r}(this.serializer,e);let r=function(e,t){let r=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A()}}(t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,e);r&&(t.labels=r),this.I_(t)}w_(e){let t={};t.database=iu(this.serializer),t.removeTarget=e,this.I_(t)}}class oS extends o_{constructor(e,t,r,n,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return e.streamToken||A(),this.lastStreamToken=e.streamToken,e.writeResults&&0!==e.writeResults.length&&A(),this.listener.D_()}onNext(e){var t,r;e.streamToken||A(),this.lastStreamToken=e.streamToken,this.a_.reset();let n=(t=e.writeResults,r=e.commitTime,t&&t.length>0?(void 0!==r||A(),t.map(e=>{let t;return(t=e.updateTime?ie(e.updateTime):ie(r)).isEqual(K.min())&&(t=ie(r)),new nb(t,e.transformResults||[])})):[]),i=ie(e.commitTime);return this.listener.v_(i,n)}C_(){let e={};e.database=iu(this.serializer),this.I_(e)}b_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>ip(this.serializer,e))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{}class oA extends oC{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.F_=!1}M_(){if(this.F_)throw new N(k.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,r,n){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.So(e,ir(t,r),n,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new N(k.UNKNOWN,e.toString())})}Co(e,t,r,n,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,ir(t,r),n,s,o,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new N(k.UNKNOWN,e.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class oD{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){0===this.x_&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){"Online"===this.state?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,"Online"===e&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(T(t),this.N_=!1):_("OnlineStateTracker",t)}Q_(){null!==this.O_&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ok="RemoteStore";class oN{constructor(e,t,r,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(e=>{r.enqueueAndForget(async()=>{oU(this)&&(_(ok,"Restarting streams for network reachability change."),await async function(e){e.W_.add(4),await oR(e),e.j_.set("Unknown"),e.W_.delete(4),await oO(e)}(this))})}),this.j_=new oD(r,n)}}async function oO(e){if(oU(e))for(let t of e.G_)await t(!0)}async function oR(e){for(let t of e.G_)await t(!1)}function oL(e,t){e.U_.has(t.targetId)||(e.U_.set(t.targetId,t),oV(e)?oB(e):o2(e).c_()&&oP(e,t))}function oM(e,t){let r=o2(e);e.U_.delete(t),r.c_()&&oF(e,t),0===e.U_.size&&(r.c_()?r.P_():oU(e)&&e.j_.set("Unknown"))}function oP(e,t){if(e.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(K.min())>0){let r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}o2(e).y_(t)}function oF(e,t){e.H_.Ne(t),o2(e).w_(t)}function oB(e){e.H_=new n0({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.U_.get(t)||null,it:()=>e.datastore.serializer.databaseId}),o2(e).start(),e.j_.B_()}function oV(e){return oU(e)&&!o2(e).u_()&&e.U_.size>0}function oU(e){return 0===e.W_.size}async function oj(e){e.j_.set("Online")}async function oq(e){e.U_.forEach((t,r)=>{oP(e,t)})}async function oz(e,t){e.H_=void 0,oV(e)?(e.j_.q_(t),oB(e)):e.j_.set("Unknown")}async function o$(e,t,r){if(e.j_.set("Online"),t instanceof nX&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.U_.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.U_.delete(n),e.H_.removeTarget(n))}(e,t)}catch(r){_(ok,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await oG(e,r)}else if(t instanceof nY?e.H_.We(t):t instanceof nJ?e.H_.Ze(t):e.H_.je(t),!r.isEqual(K.min()))try{let t=await sQ(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.H_.ot(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let i=e.U_.get(n);i&&e.U_.set(n,i.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach((t,r)=>{let n=e.U_.get(t);if(!n)return;e.U_.set(t,n.withResumeToken(tB.EMPTY_BYTE_STRING,n.snapshotVersion)),oF(e,t);let i=new iE(n.target,t,r,n.sequenceNumber);oP(e,i)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){_(ok,"Failed to raise snapshot:",t),await oG(e,t)}}async function oG(e,t,r){if(!ew(t))throw t;e.W_.add(1),await oR(e),e.j_.set("Offline"),r||(r=()=>sQ(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{_(ok,"Retrying IndexedDB access"),await r(),e.W_.delete(1),await oO(e)})}function oK(e,t){return t().catch(r=>oG(e,r,t))}async function oH(e){var t;let r=o6(e),n=e.K_.length>0?e.K_[e.K_.length-1].batchId:-1;for(;oU(t=e)&&t.K_.length<10;)try{let t=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}(e.localStore,n);if(null===t){0===e.K_.length&&r.P_();break}n=t.batchId,function(e,t){e.K_.push(t);let r=o6(e);r.c_()&&r.S_&&r.b_(t.mutations)}(e,t)}catch(t){await oG(e,t)}oQ(e)&&oW(e)}function oQ(e){return oU(e)&&!o6(e).u_()&&e.K_.length>0}function oW(e){o6(e).start()}async function oY(e){o6(e).C_()}async function oJ(e){let t=o6(e);for(let r of e.K_)t.b_(r.mutations)}async function oX(e,t,r){let n=e.K_.shift(),i=nM.from(n,t,r);await oK(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await oH(e)}async function oZ(e,t){t&&o6(e).S_&&await async function(e,t){var r;if(nV(r=t.code)&&r!==k.ABORTED){let r=e.K_.shift();o6(e).h_(),await oK(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await oH(e)}}(e,t),oQ(e)&&oW(e)}async function o0(e,t){e.asyncQueue.verifyOperationInProgress(),_(ok,"RemoteStore received new credentials");let r=oU(e);e.W_.add(3),await oR(e),r&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await oO(e)}async function o1(e,t){t?(e.W_.delete(2),await oO(e)):t||(e.W_.add(2),await oR(e),e.j_.set("Unknown"))}function o2(e){var t,r,n;return e.J_||(e.J_=(t=e.datastore,r=e.asyncQueue,n={xo:oj.bind(null,e),No:oq.bind(null,e),Lo:oz.bind(null,e),p_:o$.bind(null,e)},t.M_(),new oT(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.G_.push(async t=>{t?(e.J_.h_(),oV(e)?oB(e):e.j_.set("Unknown")):(await e.J_.stop(),e.H_=void 0)})),e.J_}function o6(e){var t,r,n;return e.Y_||(e.Y_=(t=e.datastore,r=e.asyncQueue,n={xo:()=>Promise.resolve(),No:oY.bind(null,e),Lo:oZ.bind(null,e),D_:oJ.bind(null,e),v_:oX.bind(null,e)},t.M_(),new oS(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.G_.push(async t=>{t?(e.Y_.h_(),await oH(e)):(await e.Y_.stop(),e.K_.length>0&&(_(ok,`Stopping write stream with ${e.K_.length} pending writes`),e.K_=[]))})),e.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o5{constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new O,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,i){let s=new o5(e,t,Date.now()+r,n,i);return s.start(r),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new N(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function o3(e,t){if(T("AsyncQueue",`${t}: ${e}`),ew(e))return new N(k.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o8{static emptySet(e){return new o8(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(e,t)=>X.comparator(e.key,t.key),this.keyedMap=r7(),this.sortedSet=new tD(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof o8)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new o8;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(){this.Z_=new tD(X.comparator)}track(e){let t=e.doc.key,r=this.Z_.get(t);r?0!==e.type&&3===r.type?this.Z_=this.Z_.insert(t,e):3===e.type&&1!==r.type?this.Z_=this.Z_.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.Z_=this.Z_.remove(t):1===e.type&&2===r.type?this.Z_=this.Z_.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):A():this.Z_=this.Z_.insert(t,e)}X_(){let e=[];return this.Z_.inorderTraversal((t,r)=>{e.push(r)}),e}}class o9{constructor(e,t,r,n,i,s,o,a,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new o9(e,t,o8.emptySet(t),s,r,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&r0(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o7{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class ae{constructor(){this.queries=at(),this.onlineState="Unknown",this.ia=new Set}terminate(){!function(e,t){let r=e.queries;e.queries=at(),r.forEach((e,r)=>{for(let e of r.ta)e.onError(t)})}(this,new N(k.ABORTED,"Firestore shutting down"))}}function at(){return new r8(e=>r1(e),r0)}async function ar(e,t){let r=3,n=t.query,i=e.queries.get(n);i?!i.na()&&t.ra()&&(r=2):(i=new o7,r=+!t.ra());try{switch(r){case 0:i.ea=await e.onListen(n,!0);break;case 1:i.ea=await e.onListen(n,!1);break;case 2:await e.onFirstRemoteStoreListen(n)}}catch(r){let e=o3(r,`Initialization of query '${r2(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.ta.push(t),t.sa(e.onlineState),i.ea&&t.oa(i.ea)&&ao(e)}async function an(e,t){let r=t.query,n=3,i=e.queries.get(r);if(i){let e=i.ta.indexOf(t);e>=0&&(i.ta.splice(e,1),0===i.ta.length?n=+!t.ra():!i.na()&&t.ra()&&(n=2))}switch(n){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function ai(e,t){let r=!1;for(let n of t){let t=n.query,i=e.queries.get(t);if(i){for(let e of i.ta)e.oa(n)&&(r=!0);i.ea=n}}r&&ao(e)}function as(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.ta)e.onError(r);e.queries.delete(t)}function ao(e){e.ia.forEach(e=>{e.next()})}(a=o||(o={}))._a="default",a.Cache="cache";class aa{constructor(e,t,r){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new o9(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){return!(e.fromCache&&this.ra())||(!this.options.Ta||"Offline"===t)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}la(e){if(e.docChanges.length>0)return!0;let t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Pa(e){e=o9.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==o.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t){this.Ia=e,this.byteLength=t}Ea(){return"metadata"in this.Ia}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e){this.serializer=e}ps(e){return io(this.serializer,e)}ys(e){return e.metadata.exists?id(this.serializer,e.document,!1):rg.newNoDocument(this.ps(e.metadata.name),this.ws(e.metadata.readTime))}ws(e){return ie(e)}}class ah{constructor(e,t,r){this.da=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=ac(e)}Aa(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Ia.namedQuery)this.queries.push(e.Ia.namedQuery);else if(e.Ia.documentMetadata){this.documents.push({metadata:e.Ia.documentMetadata}),e.Ia.documentMetadata.exists||++t;let r=W.fromString(e.Ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Ia.document&&(this.documents[this.documents.length-1].document=e.Ia.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ra(e){let t=new Map,r=new au(this.serializer);for(let n of e)if(n.metadata.queries){let e=r.ps(n.metadata.name);for(let r of n.metadata.queries){let n=(t.get(r)||ni()).add(e);t.set(r,n)}}return t}async complete(){let e=await s2(this.localStore,new au(this.serializer),this.documents,this.da.id),t=this.Ra(this.documents);for(let e of this.queries)await s6(this.localStore,e,t.get(e.name));return this.progress.taskState="Success",{progress:this.progress,Va:this.collectionGroups,ma:e}}}function ac(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e){this.key=e}}class ad{constructor(e){this.key=e}}class ap{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=ni(),this.mutatedKeys=ni(),this.ya=r3(e),this.wa=new o8(this.ya)}get Sa(){return this.fa}ba(e,t){let r=t?t.Da:new o4,n=t?t.wa:this.wa,i=t?t.mutatedKeys:this.mutatedKeys,s=n,o=!1,a="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let u=n.get(e),h=r6(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),f=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),d=!1;u&&h?u.data.isEqual(h.data)?c!==f&&(r.track({type:3,doc:h}),d=!0):this.va(u,h)||(r.track({type:2,doc:h}),d=!0,(a&&this.ya(h,a)>0||l&&0>this.ya(h,l))&&(o=!0)):!u&&h?(r.track({type:0,doc:h}),d=!0):u&&!h&&(r.track({type:1,doc:u}),d=!0,(a||l)&&(o=!0)),d&&(h?(s=s.add(h),i=f?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),r.track({type:1,doc:e})}return{wa:s,Da:r,ls:o,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,n){let i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;let s=e.Da.X_();s.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return r(e)-r(t)})(e.type,t.type)||this.ya(e.doc,t.doc)),this.Ca(r),n=null!=n&&n;let o=t&&!n?this.Fa():[],a=0===this.pa.size&&this.current&&!n?1:0,l=a!==this.ga;return(this.ga=a,0!==s.length||l)?{snapshot:new o9(this.query,e.wa,i,s,e.mutatedKeys,0===a,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:o}:{Ma:o}}sa(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({wa:this.wa,Da:new o4,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=e.current)}Fa(){if(!this.current)return[];let e=this.pa;this.pa=ni(),this.wa.forEach(e=>{this.xa(e.key)&&(this.pa=this.pa.add(e.key))});let t=[];return e.forEach(e=>{this.pa.has(e)||t.push(new ad(e))}),this.pa.forEach(r=>{e.has(r)||t.push(new af(r))}),t}Oa(e){this.fa=e.gs,this.pa=ni();let t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return o9.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,0===this.ga,this.hasCachedResults)}}let ag="SyncEngine";class am{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class ay{constructor(e){this.key=e,this.Ba=!1}}class av{constructor(e,t,r,n,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.La={},this.ka=new r8(e=>r1(e),r0),this.qa=new Map,this.Qa=new Set,this.$a=new tD(X.comparator),this.Ka=new Map,this.Ua=new sT,this.Wa={},this.Ga=new Map,this.za=si.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return!0===this.ja}}async function aw(e,t,r=!0){let n;let i=aY(e),s=i.ka.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),n=s.view.Na()):n=await ax(i,t,r,!0),n}async function ab(e,t){let r=aY(e);await ax(r,t,!0,!1)}async function ax(e,t,r,n){let i;let s=await sY(e.localStore,rW(t)),o=s.targetId,a=e.sharedClientState.addLocalQueryTarget(o,r);return n&&(i=await aI(e,t,o,"current"===a,s.resumeToken)),e.isPrimaryClient&&r&&oL(e.remoteStore,s),i}async function aI(e,t,r,n,i){e.Ha=(t,r,n)=>(async function(e,t,r,n){let i=t.view.ba(r);i.ls&&(i=await sX(e.localStore,t.query,!1).then(({documents:e})=>t.view.ba(e,i)));let s=n&&n.targetChanges.get(t.targetId),o=n&&null!=n.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return aP(e,t.targetId,a.Ma),a.snapshot})(e,t,r,n);let s=await sX(e.localStore,t,!0),o=new ap(t,s.gs),a=o.ba(s.documents),l=nW.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,l);aP(e,r,u.Ma);let h=new am(t,r,o);return e.ka.set(t,h),e.qa.has(r)?e.qa.get(r).push(t):e.qa.set(r,[t]),u.snapshot}async function aE(e,t,r){let n=e.ka.get(t),i=e.qa.get(n.targetId);if(i.length>1)return e.qa.set(n.targetId,i.filter(e=>!r0(e,t))),void e.ka.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await sJ(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),r&&oM(e.remoteStore,n.targetId),aL(e,n.targetId)}).catch(ec)):(aL(e,n.targetId),await sJ(e.localStore,n.targetId,!0))}async function a_(e,t){let r=e.ka.get(t),n=e.qa.get(r.targetId);e.isPrimaryClient&&1===n.length&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),oM(e.remoteStore,r.targetId))}async function aT(e,t,r){let n=aJ(e);try{var i;let e;let s=await function(e,t){let r,n;let i=G.now(),s=t.reduce((e,t)=>e.add(t.key),ni());return e.persistence.runTransaction("Locally write mutations","readwrite",o=>{let a=r4,l=ni();return e.ds.getEntries(o,s).next(e=>{(a=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(o,a)).next(n=>{r=n;let s=[];for(let e of t){let t=function(e,t){let r=null;for(let n of e.fieldTransforms){let e=t.data.field(n.field),i=nh(n.transform,e||null);null!=i&&(null===r&&(r=rp.empty()),r.set(n.field,i))}return r||null}(e,r.get(e.key).overlayedDocument);null!=t&&s.push(new nA(e.key,t,function e(t){let r=[];return tS(t.fields,(t,n)=>{let i=new J([t]);if(ra(n)){let t=e(n.mapValue).fields;if(0===t.length)r.push(i);else for(let e of t)r.push(i.child(e))}else r.push(i)}),new tM(r)}(t.value.mapValue),nx.exists(!0)))}return e.mutationQueue.addMutationBatch(o,i,s,t)}).next(t=>{n=t;let i=t.applyToLocalDocumentSet(r,l);return e.documentOverlayCache.saveOverlays(o,t.batchId,i)})}).then(()=>({batchId:n.batchId,changes:ne(r)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),i=s.batchId,(e=n.Wa[n.currentUser.toKey()])||(e=new tD(z)),e=e.insert(i,r),n.Wa[n.currentUser.toKey()]=e,await aB(n,s.changes),await oH(n.remoteStore)}catch(t){let e=o3(t,"Failed to persist write");r.reject(e)}}async function aS(e,t){try{let r=await function(e,t){let r=t.snapshotVersion,n=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{let s=e.ds.newChangeBuffer({trackRemovals:!0});n=e.Ts;let o=[];t.targetChanges.forEach((s,a)=>{var l;let u=n.get(a);if(!u)return;o.push(e.Hr.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.Hr.addMatchingKeys(i,s.addedDocuments,a)));let h=u.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(tB.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,r)),n=n.insert(a,h),l=h,(0===u.resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&o.push(e.Hr.updateTargetData(i,h))});let a=r4,l=ni();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(e.persistence.referenceDelegate.updateLimboDocument(i,r))}),o.push(sW(i,s,t.documentUpdates).next(e=>{a=e.Vs,l=e.fs})),!r.isEqual(K.min())){let t=e.Hr.getLastRemoteSnapshotVersion(i).next(t=>e.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));o.push(t)}return ef.waitFor(o).next(()=>s.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,a,l)).next(()=>a)}).then(t=>(e.Ts=n,t))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.Ka.get(r);n&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||A(),t.addedDocuments.size>0?n.Ba=!0:t.modifiedDocuments.size>0?n.Ba||A():t.removedDocuments.size>0&&(n.Ba||A(),n.Ba=!1))}),await aB(e,r,t)}catch(e){await ec(e)}}function aC(e,t,r){var n;if(e.isPrimaryClient&&0===r||!e.isPrimaryClient&&1===r){let r;let i=[];e.ka.forEach((e,r)=>{let n=r.view.sa(t);n.snapshot&&i.push(n.snapshot)}),(n=e.eventManager).onlineState=t,r=!1,n.queries.forEach((e,n)=>{for(let e of n.ta)e.sa(t)&&(r=!0)}),r&&ao(n),i.length&&e.La.p_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function aA(e,t,r){e.sharedClientState.updateQueryState(t,"rejected",r);let n=e.Ka.get(t),i=n&&n.key;if(i){let r=new tD(X.comparator);r=r.insert(i,rg.newNoDocument(i,K.min()));let n=ni().add(i),s=new nQ(K.min(),new Map,new tD(z),r,n);await aS(e,s),e.$a=e.$a.remove(i),e.Ka.delete(t),aF(e)}else await sJ(e.localStore,t,!1).then(()=>aL(e,t,r)).catch(ec)}async function aD(e,t){var r;let n=t.batch.batchId;try{let i=await (r=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let n=t.batch.keys(),i=r.ds.newChangeBuffer({trackRemovals:!0});return(function(e,t,r,n){let i=r.batch,s=i.keys(),o=ef.resolve();return s.forEach(e=>{o=o.next(()=>n.getEntry(t,e)).next(t=>{let s=r.docVersions.get(e);null!==s||A(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,r),t.isValidDocument()&&(t.setReadTime(r.commitVersion),n.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(r,e,t,i).next(()=>i.apply(e)).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=ni();for(let r=0;r<e.mutationResults.length;++r)e.mutationResults[r].transformResults.length>0&&(t=t.add(e.batch.mutations[r].key));return t}(t))).next(()=>r.localDocuments.getDocuments(e,n))});aR(e,n,null),aO(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await aB(e,i)}catch(e){await ec(e)}}async function ak(e,t,r){var n;try{let i=await (n=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||A(),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))});aR(e,t,r),aO(e,t),e.sharedClientState.updateMutationState(t,"rejected",r),await aB(e,i)}catch(e){await ec(e)}}async function aN(e,t){var r;oU(e.remoteStore)||_(ag,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{let n=await (r=e.localStore).persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>r.mutationQueue.getHighestUnacknowledgedBatchId(e));if(-1===n)return void t.resolve();let i=e.Ga.get(n)||[];i.push(t),e.Ga.set(n,i)}catch(r){let e=o3(r,"Initialization of waitForPendingWrites() operation failed");t.reject(e)}}function aO(e,t){(e.Ga.get(t)||[]).forEach(e=>{e.resolve()}),e.Ga.delete(t)}function aR(e,t,r){let n=e.Wa[e.currentUser.toKey()];if(n){let i=n.get(t);i&&(r?i.reject(r):i.resolve(),n=n.remove(t)),e.Wa[e.currentUser.toKey()]=n}}function aL(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.qa.get(t)))e.ka.delete(n),r&&e.La.Ja(n,r);e.qa.delete(t),e.isPrimaryClient&&e.Ua.br(t).forEach(t=>{e.Ua.containsKey(t)||aM(e,t)})}function aM(e,t){e.Qa.delete(t.path.canonicalString());let r=e.$a.get(t);null!==r&&(oM(e.remoteStore,r),e.$a=e.$a.remove(t),e.Ka.delete(r),aF(e))}function aP(e,t,r){for(let n of r)n instanceof af?(e.Ua.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.$a.get(r)||e.Qa.has(n)||(_(ag,"New document in limbo: "+r),e.Qa.add(n),aF(e))}(e,n)):n instanceof ad?(_(ag,"Document no longer in limbo: "+n.key),e.Ua.removeReference(n.key,t),e.Ua.containsKey(n.key)||aM(e,n.key)):A()}function aF(e){for(;e.Qa.size>0&&e.$a.size<e.maxConcurrentLimboResolutions;){let t=e.Qa.values().next().value;e.Qa.delete(t);let r=new X(W.fromString(t)),n=e.za.next();e.Ka.set(n,new ay(r)),e.$a=e.$a.insert(r,n),oL(e.remoteStore,new iE(rW(rG(r.path)),n,"TargetPurposeLimboResolution",eC.ae))}}async function aB(e,t,r){let n=[],i=[],s=[];e.ka.isEmpty()||(e.ka.forEach((o,a)=>{s.push(e.Ha(a,t,r).then(t=>{var s;if((t||r)&&e.isPrimaryClient){let n=t?!t.fromCache:null===(s=null==r?void 0:r.targetChanges.get(a.targetId))||void 0===s?void 0:s.current;e.sharedClientState.updateQueryState(a.targetId,n?"current":"not-current")}if(t){n.push(t);let e=sq.Yi(a.targetId,t);i.push(e)}}))}),await Promise.all(s),e.La.p_(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>ef.forEach(t,t=>ef.forEach(t.Hi,n=>e.persistence.referenceDelegate.addReference(r,t.targetId,n)).next(()=>ef.forEach(t.Ji,n=>e.persistence.referenceDelegate.removeReference(r,t.targetId,n)))))}catch(e){if(!ew(e))throw e;_(sG,"Failed to update sequence numbers: "+e)}for(let r of t){let t=r.targetId;if(!r.fromCache){let r=e.Ts.get(t),n=r.snapshotVersion,i=r.withLastLimboFreeSnapshotVersion(n);e.Ts=e.Ts.insert(t,i)}}}(e.localStore,i))}async function aV(e,t){var r;if(!e.currentUser.isEqual(t)){_(ag,"User change. New user:",t.toKey());let n=await sH(e.localStore,t);e.currentUser=t,r="'waitForPendingWrites' promise is rejected due to a user change.",e.Ga.forEach(e=>{e.forEach(e=>{e.reject(new N(k.CANCELLED,r))})}),e.Ga.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await aB(e,n.Rs)}}function aU(e,t){let r=e.Ka.get(t);if(r&&r.Ba)return ni().add(r.key);{let r=ni(),n=e.qa.get(t);if(!n)return r;for(let t of n){let n=e.ka.get(t);r=r.unionWith(n.view.Sa)}return r}}async function aj(e,t){let r=await sX(e.localStore,t.query,!0),n=t.view.Oa(r);return e.isPrimaryClient&&aP(e,t.targetId,n.Ma),n}async function aq(e,t){return s0(e.localStore,t).then(t=>aB(e,t))}async function az(e,t,r,n){let i=await function(e,t){let r=e.mutationQueue;return e.persistence.runTransaction("Lookup mutation documents","readonly",n=>r.Ln(n,t).next(t=>t?e.localDocuments.getDocuments(n,t):ef.resolve(null)))}(e.localStore,t);null!==i?("pending"===r?await oH(e.remoteStore):"acknowledged"===r||"rejected"===r?(aR(e,t,n||null),aO(e,t),function(e,t){e.mutationQueue.qn(t)}(e.localStore,t)):A(),await aB(e,i)):_(ag,"Cannot apply mutation batch with id: "+t)}async function a$(e,t){if(aY(e),aJ(e),!0===t&&!0!==e.ja){let t=e.sharedClientState.getAllActiveQueryTargets(),r=await aG(e,t.toArray());for(let t of(e.ja=!0,await o1(e.remoteStore,!0),r))oL(e.remoteStore,t)}else if(!1===t&&!1!==e.ja){let t=[],r=Promise.resolve();e.qa.forEach((n,i)=>{e.sharedClientState.isLocalQueryTarget(i)?t.push(i):r=r.then(()=>(aL(e,i),sJ(e.localStore,i,!0))),oM(e.remoteStore,i)}),await r,await aG(e,t),e.Ka.forEach((t,r)=>{oM(e.remoteStore,r)}),e.Ua.Dr(),e.Ka=new Map,e.$a=new tD(X.comparator),e.ja=!1,await o1(e.remoteStore,!1)}}async function aG(e,t,r){let n=[],i=[];for(let r of t){let t;let s=e.qa.get(r);if(s&&0!==s.length)for(let r of(t=await sY(e.localStore,rW(s[0])),s)){let t=e.ka.get(r),n=await aj(e,t);n.snapshot&&i.push(n.snapshot)}else{let n=await sZ(e.localStore,r);t=await sY(e.localStore,n),await aI(e,aK(n),r,!1,t.resumeToken)}n.push(t)}return e.La.p_(i),n}function aK(e){var t,r,n,i,s;return t=e.path,r=e.collectionGroup,n=e.orderBy,i=e.filters,s=e.limit,new r$(t,r,n,i,s,"F",e.startAt,e.endAt)}function aH(e){return e.localStore.persistence.zi()}async function aQ(e,t,r,n){if(e.ja)return void _(ag,"Ignoring unexpected query state notification.");let i=e.qa.get(t);if(i&&i.length>0)switch(r){case"current":case"not-current":{let n=await s0(e.localStore,r5(i[0])),s=nQ.createSynthesizedRemoteEventForCurrentChange(t,"current"===r,tB.EMPTY_BYTE_STRING);await aB(e,n,s);break}case"rejected":await sJ(e.localStore,t,!0),aL(e,t,n);break;default:A()}}async function aW(e,t,r){let n=aY(e);if(n.ja){for(let e of t){if(n.qa.has(e)&&n.sharedClientState.isActiveQueryTarget(e)){_(ag,"Adding an already active target "+e);continue}let t=await sZ(n.localStore,e),r=await sY(n.localStore,t);await aI(n,aK(t),r.targetId,!1,r.resumeToken),oL(n.remoteStore,r)}for(let e of r)n.qa.has(e)&&await sJ(n.localStore,e,!1).then(()=>{oM(n.remoteStore,e),aL(n,e)}).catch(ec)}}function aY(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=aS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aU.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=aA.bind(null,e),e.La.p_=ai.bind(null,e.eventManager),e.La.Ja=as.bind(null,e.eventManager),e}function aJ(e){return e.remoteStore.remoteSyncer.applySuccessfulWrite=aD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ak.bind(null,e),e}class aX{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ox(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){var t,r;return t=this.persistence,r=new s$,new sK(t,r,e.initialUser,this.serializer)}Xa(e){return new sN(sR.ri,this.serializer)}Za(e){return new oa}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}aX.provider={build:()=>new aX};class aZ extends aX{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){return this.persistence.referenceDelegate instanceof sL||A(),new sh(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}Xa(e){let t=void 0!==this.cacheSizeBytes?i9.withCacheSize(this.cacheSizeBytes):i9.DEFAULT;return new sN(e=>sL.ri(e,t),this.serializer)}}class a0 extends aX{constructor(e,t,r){super(),this.ru=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ru.initialize(this,e),await aJ(this.ru.syncEngine),await oH(this.ru.remoteStore),await this.persistence.Ci(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}eu(e){var t,r;return t=this.persistence,r=new s$,new sK(t,r,e.initialUser,this.serializer)}tu(e,t){return new sh(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}nu(e,t){let r=new eS(t,this.persistence);return new eT(e.asyncQueue,r)}Xa(e){let t=sj(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=void 0!==this.cacheSizeBytes?i9.withCacheSize(this.cacheSizeBytes):i9.DEFAULT;return new sU(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,ow(),ob(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Za(e){return new oa}}class a1 extends a0{constructor(e,t){super(e,t,!1),this.ru=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);let t=this.ru.syncEngine;this.sharedClientState instanceof oo&&(this.sharedClientState.syncEngine={uo:az.bind(null,t),co:aQ.bind(null,t),lo:aW.bind(null,t),zi:aH.bind(null,t),ao:aq.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ci(async e=>{await a$(this.ru.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}Za(e){let t=ow();if(!oo.D(t))throw new N(k.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");let r=sj(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new oo(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class a2{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>aC(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=aV.bind(null,this.syncEngine),await o1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new ae}createDatastore(e){var t;let r=ox(e.databaseInfo.databaseId),n=new ov(e.databaseInfo);return t=e.authCredentials,new oA(t,e.appCheckCredentials,n,r)}createRemoteStore(e){var t,r;return t=this.localStore,r=this.datastore,new oN(t,r,e.asyncQueue,e=>aC(this.syncEngine,e,0),oh.D()?new oh:new ol)}createSyncEngine(e,t){return function(e,t,r,n,i,s,o){let a=new av(e,t,r,n,i,s);return o&&(a.ja=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){_(ok,"RemoteStore shutting down."),e.W_.add(5),await oR(e),e.z_.shutdown(),e.j_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}function a6(e,t=10240){let r=0;return{async read(){if(r<e.byteLength){let n={value:e.slice(r,r+t),done:!1};return r+=t,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}a2.provider={build:()=>new a2};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a5{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):T("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a3{constructor(e,t){this.ou=e,this.serializer=t,this.metadata=new O,this.buffer=new Uint8Array,this._u=new TextDecoder("utf-8"),this.au().then(e=>{e&&e.Ea()?this.metadata.resolve(e.Ia.metadata):this.metadata.reject(Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(null==e?void 0:e.Ia)}`))},e=>this.metadata.reject(e))}close(){return this.ou.cancel()}async getMetadata(){return this.metadata.promise}async Ya(){return await this.getMetadata(),this.au()}async au(){let e=await this.uu();if(null===e)return null;let t=this._u.decode(e),r=Number(t);return isNaN(r)&&this.cu(`length string (${t}) is not valid number`),new al(JSON.parse(await this.lu(r)),e.length+r)}hu(){return this.buffer.findIndex(e=>123===e)}async uu(){for(;0>this.hu()&&!await this.Pu(););if(0===this.buffer.length)return null;let e=this.hu();e<0&&this.cu("Reached the end of bundle when a length string is expected.");let t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async lu(e){for(;this.buffer.length<e;)await this.Pu()&&this.cu("Reached the end of bundle when more is expected.");let t=this._u.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}cu(e){throw this.ou.cancel(),Error(`Invalid bundle format: ${e}`)}async Pu(){let e=await this.ou.read();if(!e.done){let t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a8{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new N(k.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;let t=await async function(e,t){let r={documents:t.map(t=>is(e.serializer,t))},n=await e.Co("BatchGetDocuments",e.serializer.databaseId,W.emptyPath(),r,t.length),i=new Map;n.forEach(t=>{var r;let n=(r=e.serializer,"found"in t?function(e,t){t.found||A(),t.found.name,t.found.updateTime;let r=io(e,t.found.name),n=ie(t.found.updateTime),i=t.found.createTime?ie(t.found.createTime):K.min(),s=new rp({mapValue:{fields:t.found.fields}});return rg.newFoundDocument(r,n,i,s)}(r,t):"missing"in t?function(e,t){t.missing||A(),t.readTime||A();let r=io(e,t.missing),n=ie(t.readTime);return rg.newNoDocument(r,n)}(r,t):A());i.set(n.key.toString(),n)});let s=[];return t.forEach(e=>{let t=i.get(e.toString());t||A(),s.push(t)}),s}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastTransactionError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new nO(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;let e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{let r=X.fromPath(t);this.mutations.push(new nR(r,this.precondition(r)))}),await async function(e,t){let r={writes:t.map(t=>ip(e.serializer,t))};await e.So("Commit",e.serializer.databaseId,W.emptyPath(),r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw A();t=K.min()}let r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new N(k.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){let t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(K.min())?nx.exists(!1):nx.updateTime(t):nx.none()}preconditionForUpdate(e){let t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(K.min()))throw new N(k.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return nx.updateTime(t)}return nx.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(e,t,r,n,i){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=n,this.deferred=i,this.Tu=r.maxAttempts,this.a_=new oI(this.asyncQueue,"transaction_retry")}Iu(){this.Tu-=1,this.Eu()}Eu(){this.a_.Xo(async()=>{let e=new a8(this.datastore),t=this.du(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Au(e)}))}).catch(e=>{this.Au(e)})})}du(e){try{let t=this.updateFunction(e);return!eA(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Au(e){this.Tu>0&&this.Ru(e)?(this.Tu-=1,this.asyncQueue.enqueueAndForget(()=>(this.Eu(),Promise.resolve()))):this.deferred.reject(e)}Ru(e){if("FirebaseError"===e.name){let t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!nV(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a9="FirestoreClient";class a7{constructor(e,t,r,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=w.UNAUTHENTICATED,this.clientId=q.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async e=>{_(a9,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(_(a9,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new O;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=o3(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function le(e,t){e.asyncQueue.verifyOperationInProgress(),_(a9,"Initializing OfflineComponentProvider");let r=e.configuration;await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await sH(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function lt(e,t){e.asyncQueue.verifyOperationInProgress();let r=await lr(e);_(a9,"Initializing OnlineComponentProvider"),await t.initialize(r,e.configuration),e.setCredentialChangeListener(e=>o0(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>o0(t.remoteStore,r)),e._onlineComponents=t}async function lr(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){_(a9,"Using user provided OfflineComponentProvider");try{await le(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===k.FAILED_PRECONDITION||t.code===k.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;S("Error using user provided cache. Falling back to memory cache: "+t),await le(e,new aX)}}else _(a9,"Using default OfflineComponentProvider"),await le(e,new aZ(void 0))}return e._offlineComponents}async function ln(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(_(a9,"Using user provided OnlineComponentProvider"),await lt(e,e._uninitializedComponentsProvider._online)):(_(a9,"Using default OnlineComponentProvider"),await lt(e,new a2))),e._onlineComponents}function li(e){return lr(e).then(e=>e.persistence)}function ls(e){return lr(e).then(e=>e.localStore)}function lo(e){return ln(e).then(e=>e.remoteStore)}function la(e){return ln(e).then(e=>e.syncEngine)}function ll(e){return ln(e).then(e=>e.datastore)}async function lu(e){let t=await ln(e),r=t.eventManager;return r.onListen=aw.bind(null,t.syncEngine),r.onUnlisten=aE.bind(null,t.syncEngine),r.onFirstRemoteStoreListen=ab.bind(null,t.syncEngine),r.onLastRemoteStoreUnlisten=a_.bind(null,t.syncEngine),r}function lh(e,t,r={}){let n=new O;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new a5({next:a=>{s.su(),t.enqueueAndForget(()=>an(e,o));let l=a.docs.has(r);!l&&a.fromCache?i.reject(new N(k.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&a.fromCache&&n&&"server"===n.source?i.reject(new N(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:e=>i.reject(e)}),o=new aa(rG(r.path),s,{includeMetadataChanges:!0,Ta:!0});return ar(e,o)})(await lu(e),e.asyncQueue,t,r,n)),n.promise}function lc(e,t,r={}){let n=new O;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new a5({next:r=>{s.su(),t.enqueueAndForget(()=>an(e,o)),r.fromCache&&"server"===n.source?i.reject(new N(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(r)},error:e=>i.reject(e)}),o=new aa(r,s,{includeMetadataChanges:!0,Ta:!0});return ar(e,o)})(await lu(e),e.asyncQueue,t,r,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ld=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(e,t,r){if(!r)throw new N(k.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function lg(e,t,r,n){if(!0===t&&!0===n)throw new N(k.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)}function lm(e){if(!X.isDocumentKey(e))throw new N(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ly(e){if(X.isDocumentKey(e))throw new N(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function lv(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":A()}function lw(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new N(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=lv(e);throw new N(k.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}function lb(e,t){if(t<=0)throw new N(k.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lx="firestore.googleapis.com";class lI{constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new N(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lx,this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=0x2800000;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new N(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lf(null!==(r=e.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new N(k.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new N(k.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new N(k.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,r;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lE{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lI({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new N(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lI(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new L;switch(e.type){case"firstParty":return new B(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new N(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=ld.get(e);t&&(_("ComponentProvider","Removing Datastore"),ld.delete(e),t.terminate())}(this),Promise.resolve()}}function l_(e,t,r,n={}){var i;let s=(e=lw(e,lE))._getSettings(),o=`${t}:${r}`;if(s.host!==lx&&s.host!==o&&S("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),n.mockUserToken){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=w.MOCK_USER;else{t=(0,f.createMockUserToken)(n.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new N(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new w(s)}e._authCredentials=new M(new R(t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lT(this.firestore,e,this._query)}}class lS{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new lC(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lS(this.firestore,e,this._key)}}class lC extends lT{constructor(e,t,r){super(e,t,rG(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new lS(this.firestore,null,new X(e))}withConverter(e){return new lC(this.firestore,e,this._path)}}function lA(e,t,...r){if(e=(0,f.getModularInstance)(e),lp("collection","path",t),e instanceof lE){let n=W.fromString(t,...r);return ly(n),new lC(e,null,n)}{if(!(e instanceof lS||e instanceof lC))throw new N(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(W.fromString(t,...r));return ly(n),new lC(e.firestore,null,n)}}function lD(e,t){if(e=lw(e,lE),lp("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new N(k.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new lT(e,null,new r$(W.emptyPath(),t))}function lk(e,t,...r){if(e=(0,f.getModularInstance)(e),1==arguments.length&&(t=q.newId()),lp("doc","path",t),e instanceof lE){let n=W.fromString(t,...r);return lm(n),new lS(e,null,new X(n))}{if(!(e instanceof lS||e instanceof lC))throw new N(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(W.fromString(t,...r));return lm(n),new lS(e.firestore,e instanceof lC?e.converter:null,new X(n))}}function lN(e,t){return e=(0,f.getModularInstance)(e),t=(0,f.getModularInstance)(t),(e instanceof lS||e instanceof lC)&&(t instanceof lS||t instanceof lC)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function lO(e,t){return e=(0,f.getModularInstance)(e),t=(0,f.getModularInstance)(t),e instanceof lT&&t instanceof lT&&e.firestore===t.firestore&&r0(e._query,t._query)&&e.converter===t.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lR="AsyncQueue";class lL{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new oI(this,"async_queue_retry"),this.Su=()=>{let e=ob();e&&_(lR,"Visibility state changed to "+e.visibilityState),this.a_.t_()},this.bu=e;let t=ob();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;let t=ob();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});let t=new O;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(0!==this.Vu.length){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ew(e))throw e;_(lR,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){let t=this.bu.then(()=>(this.pu=!0,e().catch(e=>{let t;throw this.gu=e,this.pu=!1,T("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.pu=!1,e))));return this.bu=t,t}enqueueAfterDelay(e,t,r){this.Du(),this.wu.indexOf(e)>-1&&(t=0);let n=o5.createAndSchedule(this,e,t,r,e=>this.Fu(e));return this.fu.push(n),n}Du(){this.gu&&A()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(let t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{for(let t of(this.fu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.fu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){let t=this.fu.indexOf(e);this.fu.splice(t,1)}}function lM(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])}class lP{constructor(){this._progressObserver={},this._taskCompletionResolver=new O,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lF=-1;class lB extends lE{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new lL,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new lL(e),this._firestoreClient=void 0,await e}}}function lV(e,t,r){r||(r=tJ);let n=(0,u._getProvider)(e,"firestore");if(n.isInitialized(r)){let e=n.getImmediate({identifier:r}),i=n.getOptions(r);if((0,f.deepEqual)(i,t))return e;throw new N(k.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==t.cacheSizeBytes&&void 0!==t.localCache)throw new N(k.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(void 0!==t.cacheSizeBytes&&-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new N(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:t,instanceIdentifier:r})}function lU(e,t){let r="object"==typeof e?e:(0,u.getApp)(),n="string"==typeof e?e:t||tJ,i=(0,u._getProvider)(r,"firestore").getImmediate({identifier:n});if(!i._initialized){let e=(0,f.getDefaultEmulatorHostnameAndPort)("firestore");e&&l_(i,...e)}return i}function lj(e){if(e._terminated)throw new N(k.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||lq(e),e._firestoreClient}function lq(e){var t,r,n,i,s;let o=e._freezeSettings(),a=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",new tY(i,s,e._persistenceKey,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,lf(o.experimentalLongPollingOptions),o.useFetchStreams));e._componentsProvider||(null===(r=o.localCache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=o.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),e._firestoreClient=new a7(e._authCredentials,e._appCheckCredentials,e._queue,a,e._componentsProvider&&function(e){let t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}function lz(e,t){S("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let r=e._freezeSettings();return lG(e,a2.provider,{build:e=>new a0(e,r.cacheSizeBytes,null==t?void 0:t.forceOwnership)}),Promise.resolve()}async function l$(e){S("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");let t=e._freezeSettings();lG(e,a2.provider,{build:e=>new a1(e,t.cacheSizeBytes)})}function lG(e,t,r){if((e=lw(e,lB))._firestoreClient||e._terminated)throw new N(k.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(e._componentsProvider||e._getSettings().localCache)throw new N(k.FAILED_PRECONDITION,"SDK cache is already specified.");e._componentsProvider={_online:t,_offline:r},lq(e)}function lK(e){if(e._initialized&&!e._terminated)throw new N(k.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");let t=new O;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!eg.D())return Promise.resolve();await eg.delete(e+sV)}(sj(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function lH(e){return function(e){let t=new O;return e.asyncQueue.enqueueAndForget(async()=>aN(await la(e),t)),t.promise}(lj(e=lw(e,lB)))}function lQ(e){var t;return(t=lj(e=lw(e,lB))).asyncQueue.enqueue(async()=>{let e=await li(t),r=await lo(t);return e.setNetworkEnabled(!0),r.W_.delete(0),oO(r)})}function lW(e){var t;return(t=lj(e=lw(e,lB))).asyncQueue.enqueue(async()=>{let e=await li(t),r=await lo(t);return e.setNetworkEnabled(!1),async function(e){e.W_.add(0),await oR(e),e.j_.set("Offline")}(r)})}function lY(e){return(0,u._removeServiceInstance)(e.app,"firestore",e._databaseId.database),e._delete()}function lJ(e,t){let r=lj(e=lw(e,lB)),n=new lP;return function(e,t,r,n){var i;let s=(i=ox(t),new a3(function(e,t){if(e instanceof Uint8Array)return a6(e,void 0);if(e instanceof ArrayBuffer)return a6(new Uint8Array(e),void 0);if(e instanceof ReadableStream)return e.getReader();throw Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}("string"==typeof r?nq().encode(r):r),i));e.asyncQueue.enqueueAndForget(async()=>{!function(e,t,r){(async function(e,t,r){try{var n;let i=await t.getMetadata();if(await function(e,t){let r=ie(t.createTime);return e.persistence.runTransaction("hasNewerBundle","readonly",r=>e.Yr.getBundleMetadata(r,t.id)).then(e=>!!e&&e.createTime.compareTo(r)>=0)}(e.localStore,i))return await t.close(),r._completeWith({taskState:"Success",documentsLoaded:i.totalDocuments,bytesLoaded:i.totalBytes,totalDocuments:i.totalDocuments,totalBytes:i.totalBytes}),Promise.resolve(new Set);r._updateProgress(ac(i));let s=new ah(i,e.localStore,t.serializer),o=await t.Ya();for(;o;){let e=await s.Aa(o);e&&r._updateProgress(e),o=await t.Ya()}let a=await s.complete();return await aB(e,a.ma,void 0),await (n=e.localStore).persistence.runTransaction("Save bundle","readwrite",e=>n.Yr.saveBundleMetadata(e,i)),r._completeWith(a.progress),Promise.resolve(a.Va)}catch(e){return S(ag,`Loading bundle failed with ${e}`),r._failWith(e),Promise.resolve(new Set)}})(e,t,r).then(t=>{e.sharedClientState.notifyBundleLoaded(t)})}(await la(e),s,n)})}(r,e._databaseId,t,n),n}function lX(e,t){var r;return(r=lj(e=lw(e,lB))).asyncQueue.enqueue(async()=>{var e;return(e=await ls(r)).persistence.runTransaction("Get named query","readonly",r=>e.Yr.getNamedQuery(r,t))}).then(t=>t?new lT(e,null,t.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lZ{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class l0{constructor(e,t,r){this._userDataWriter=t,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e){this._byteString=e}static fromBase64String(e){try{return new l1(tB.fromBase64String(e))}catch(e){throw new N(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new l1(tB.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new N(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new J(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function l6(){return new l2(H)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l5{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l3{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new N(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new N(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return z(this._lat,e._lat)||z(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l8{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let l4=/^__.*__$/;class l9{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return null!==this.fieldMask?new nA(e,this.data,this.fieldMask,t,this.fieldTransforms):new nC(e,this.data,t,this.fieldTransforms)}}class l7{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new nA(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ue(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class ut{constructor(e,t,r,n,i,s){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===i&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new ut(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.ku({path:r,Qu:!1});return n.$u(e),n}Ku(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.ku({path:r,Qu:!1});return n.Bu(),n}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return ux(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(0===e.length)throw this.Wu("Document fields must not be empty");if(ue(this.Lu)&&l4.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class ur{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ox(e)}ju(e,t,r,n=!1){return new ut({Lu:e,methodName:t,zu:r,path:J.emptyPath(),Qu:!1,Gu:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function un(e){let t=e._freezeSettings(),r=ox(e._databaseId);return new ur(e._databaseId,!!t.ignoreUndefinedProperties,r)}function ui(e,t,r,n,i,s={}){let o,a;let l=e.ju(s.merge||s.mergeFields?2:0,t,r,i);uy("Data must be an object, but it was:",l,n);let u=ug(n,l);if(s.merge)o=new tM(l.fieldMask),a=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let n of s.mergeFields){let i=uv(t,n,r);if(!l.contains(i))throw new N(k.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);uI(e,i)||e.push(i)}o=new tM(e),a=l.fieldTransforms.filter(e=>o.covers(e.field))}else o=null,a=l.fieldTransforms;return new l9(new rp(u),o,a)}class us extends l5{_toFieldTransform(e){if(2!==e.Lu)throw 1===e.Lu?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof us}}function uo(e,t,r){return new ut({Lu:3,zu:t.settings.zu,methodName:e._methodName,Qu:r},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class ua extends l5{_toFieldTransform(e){return new nw(e.path,new nc)}isEqual(e){return e instanceof ua}}class ul extends l5{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){let t=uo(this,e,!0),r=new nf(this.Hu.map(e=>up(e,t)));return new nw(e.path,r)}isEqual(e){return e instanceof ul&&(0,f.deepEqual)(this.Hu,e.Hu)}}class uu extends l5{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){let t=uo(this,e,!0),r=new np(this.Hu.map(e=>up(e,t)));return new nw(e.path,r)}isEqual(e){return e instanceof uu&&(0,f.deepEqual)(this.Hu,e.Hu)}}class uh extends l5{constructor(e,t){super(e),this.Ju=t}_toFieldTransform(e){let t=new nm(e.serializer,nl(e.serializer,this.Ju));return new nw(e.path,t)}isEqual(e){return e instanceof uh&&this.Ju===e.Ju}}function uc(e,t,r,n){let i=e.ju(1,t,r);uy("Data must be an object, but it was:",i,n);let s=[],o=rp.empty();return tS(n,(e,n)=>{let a=ub(t,e,r);n=(0,f.getModularInstance)(n);let l=i.Ku(a);if(n instanceof us)s.push(a);else{let e=up(n,l);null!=e&&(s.push(a),o.set(a,e))}}),new l7(o,new tM(s),i.fieldTransforms)}function uf(e,t,r,n,i,s){let o=e.ju(1,t,r),a=[uv(t,n,r)],l=[i];if(s.length%2!=0)throw new N(k.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)a.push(uv(t,s[e])),l.push(s[e+1]);let u=[],h=rp.empty();for(let e=a.length-1;e>=0;--e)if(!uI(u,a[e])){let t=a[e],r=l[e];r=(0,f.getModularInstance)(r);let n=o.Ku(t);if(r instanceof us)u.push(t);else{let e=up(r,n);null!=e&&(u.push(t),h.set(t,e))}}return new l7(h,new tM(u),o.fieldTransforms)}function ud(e,t,r,n=!1){return up(r,e.ju(n?4:3,t))}function up(e,t){if(um(e=(0,f.getModularInstance)(e)))return uy("Unsupported field value:",t,e),ug(e,t);if(e instanceof l5)return function(e,t){if(!ue(t.Lu))throw t.Wu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Wu(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Qu&&4!==t.Lu)throw t.Wu("Nested arrays are not supported");return function(e,t){let r=[],n=0;for(let i of e){let e=up(i,t.Uu(n));null==e&&(e={nullValue:"NULL_VALUE"}),r.push(e),n++}return{arrayValue:{values:r}}}(e,t)}return function(e,t){if(null===(e=(0,f.getModularInstance)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return nl(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let r=G.fromDate(e);return{timestampValue:n9(t.serializer,r)}}if(e instanceof G){let r=new G(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:n9(t.serializer,r)}}if(e instanceof l3)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof l1)return{bytesValue:n7(t.serializer,e._byteString)};if(e instanceof lS){let r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.Wu(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:it(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof l8)return{mapValue:{fields:{[tZ]:{stringValue:t2},[t6]:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.Wu("VectorValues must only contain numeric values.");return no(t.serializer,e)})}}}}};throw t.Wu(`Unsupported field value: ${lv(e)}`)}(e,t)}function ug(e,t){let r={};return tA(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):tS(e,(e,n)=>{let i=up(n,t.qu(e));null!=i&&(r[e]=i)}),{mapValue:{fields:r}}}function um(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof G||e instanceof l3||e instanceof l1||e instanceof lS||e instanceof l5||e instanceof l8)}function uy(e,t,r){if(!um(r)||"object"!=typeof r||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r)){let n=lv(r);throw"an object"===n?t.Wu(e+" a custom object"):t.Wu(e+" "+n)}}function uv(e,t,r){if((t=(0,f.getModularInstance)(t))instanceof l2)return t._internalPath;if("string"==typeof t)return ub(e,t);throw ux("Field path arguments must be of type string or ",e,!1,void 0,r)}let uw=RegExp("[~\\*/\\[\\]]");function ub(e,t,r){if(t.search(uw)>=0)throw ux(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new l2(...t.split("."))._internalPath}catch(n){throw ux(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}function ux(e,t,r,n,i){let s=n&&!n.isEmpty(),o=void 0!==i,a=`Function ${t}() called with invalid data`;r&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${n}`),o&&(l+=` in document ${i}`),l+=")"),new N(k.INVALID_ARGUMENT,a+e+l)}function uI(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,t,r,n,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new lS(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new u_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(uT("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class u_ extends uE{data(){return super.data()}}function uT(e,t){return"string"==typeof t?ub(e,t):t instanceof l2?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new N(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class uC{}class uA extends uC{}function uD(e,t,...r){let n=[];for(let i of(t instanceof uC&&n.push(t),function(e){let t=e.filter(e=>e instanceof uO).length,r=e.filter(e=>e instanceof uk).length;if(t>1||t>0&&r>0)throw new N(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n=n.concat(r)),n))e=i._apply(e);return e}class uk extends uA{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new uk(e,t,r)}_apply(e){let t=this._parse(e);return uW(e._query,t),new lT(e.firestore,e.converter,rX(e._query,t))}_parse(e){let t=un(e.firestore);return function(e,t,r,n,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new N(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){uQ(o,s);let t=[];for(let r of o)t.push(uH(n,e,r));a={arrayValue:{values:t}}}else a=uH(n,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||uQ(o,s),a=ud(r,t,o,"in"===s||"not-in"===s);return rx.create(i,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function uN(e,t,r){let n=uT("where",e);return uk._create(n,t,r)}class uO extends uC{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new uO(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:rI.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let r=e;for(let e of t.getFlattenedFilters())uW(r,e),r=rX(r,e)}(e._query,t),new lT(e.firestore,e.converter,rX(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function uR(...e){return e.forEach(e=>uY("or",e)),uO._create("or",e)}function uL(...e){return e.forEach(e=>uY("and",e)),uO._create("and",e)}class uM extends uA{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new uM(e,t)}_apply(e){let t=function(e,t,r){if(null!==e.startAt)throw new N(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new N(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new rw(t,r)}(e._query,this._field,this._direction);return new lT(e.firestore,e.converter,function(e,t){let r=e.explicitOrderBy.concat([t]);return new r$(e.path,e.collectionGroup,r,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function uP(e,t="asc"){let r=uT("orderBy",e);return uM._create(r,t)}class uF extends uA{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new uF(e,t,r)}_apply(e){return new lT(e.firestore,e.converter,rZ(e._query,this._limit,this._limitType))}}function uB(e){return lb("limit",e),uF._create("limit",e,"F")}function uV(e){return lb("limitToLast",e),uF._create("limitToLast",e,"L")}class uU extends uA{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new uU(e,t,r)}_apply(e){var t;let r=uK(e,this.type,this._docOrFields,this._inclusive);return new lT(e.firestore,e.converter,new r$((t=e._query).path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,r,t.endAt))}}function uj(...e){return uU._create("startAt",e,!0)}function uq(...e){return uU._create("startAfter",e,!1)}class uz extends uA{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new uz(e,t,r)}_apply(e){var t;let r=uK(e,this.type,this._docOrFields,this._inclusive);return new lT(e.firestore,e.converter,new r$((t=e._query).path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,r))}}function u$(...e){return uz._create("endBefore",e,!1)}function uG(...e){return uz._create("endAt",e,!0)}function uK(e,t,r,n){if(r[0]=(0,f.getModularInstance)(r[0]),r[0]instanceof uE)return function(e,t,r,n,i){if(!n)throw new N(k.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${r}().`);let s=[];for(let r of rQ(e))if(r.field.isKeyField())s.push(rr(t,n.key));else{let e=n.data.field(r.field);if(tH(e))throw new N(k.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+r.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){let e=r.field.canonicalString();throw new N(k.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new rm(s,i)}(e._query,e.firestore._databaseId,t,r[0]._document,n);{let i=un(e.firestore);return function(e,t,r,n,i,s){let o=e.explicitOrderBy;if(i.length>o.length)throw new N(k.INVALID_ARGUMENT,`Too many arguments provided to ${n}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let a=[];for(let s=0;s<i.length;s++){let l=i[s];if(o[s].field.isKeyField()){if("string"!=typeof l)throw new N(k.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${n}(), but got a ${typeof l}`);if(!rH(e)&&-1!==l.indexOf("/"))throw new N(k.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${n}() must be a plain document ID, but '${l}' contains a slash.`);let r=e.path.child(W.fromString(l));if(!X.isDocumentKey(r))throw new N(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${n}() must result in a valid document path, but '${r}' is not because it contains an odd number of segments.`);let i=new X(r);a.push(rr(t,i))}else{let e=ud(r,n,l);a.push(e)}}return new rm(a,s)}(e._query,e.firestore._databaseId,i,t,r,n)}}function uH(e,t,r){if("string"==typeof(r=(0,f.getModularInstance)(r))){if(""===r)throw new N(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!rH(t)&&-1!==r.indexOf("/"))throw new N(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);let n=t.path.child(W.fromString(r));if(!X.isDocumentKey(n))throw new N(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return rr(e,new X(n))}if(r instanceof lS)return rr(e,r._key);throw new N(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lv(r)}.`)}function uQ(e,t){if(!Array.isArray(e)||0===e.length)throw new N(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function uW(e,t){let r=function(e,t){for(let r of e)for(let e of r.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==r)throw r===t.op?new N(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new N(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${r.toString()}' filters.`)}function uY(e,t){if(!(t instanceof uk||t instanceof uO))throw new N(k.INVALID_ARGUMENT,`Function ${e}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class uJ{convertValue(e,t="none"){switch(t3(e)){case 0:return null;case 1:return e.booleanValue;case 2:return tj(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(tq(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw A()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return tS(e,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertVectorValue(e){var t,r,n;return new l8(null===(n=null===(r=null===(t=e.fields)||void 0===t?void 0:t[t6].arrayValue)||void 0===r?void 0:r.values)||void 0===n?void 0:n.map(e=>tj(e.doubleValue)))}convertGeoPoint(e){return new l3(tj(e.latitude),tj(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=tQ(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(tW(e));default:return null}}convertTimestamp(e){let t=tU(e);return new G(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=W.fromString(e);iI(r)||A();let n=new tX(r.get(1),r.get(3)),i=new X(r.popFirst(5));return n.isEqual(t)||T(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uX(e,t,r){return e?r&&(r.merge||r.mergeFields)?e.toFirestore(t,r):e.toFirestore(t):t}class uZ extends uJ{constructor(e){super(),this.firestore=e}convertBytes(e){return new l1(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new lS(this.firestore,null,t)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(e){return new lZ("sum",uv("sum",e))}function u1(e){return new lZ("avg",uv("average",e))}function u2(){return new lZ("count")}function u6(e,t){var r,n;return e instanceof lZ&&t instanceof lZ&&e.aggregateType===t.aggregateType&&(null===(r=e._internalFieldPath)||void 0===r?void 0:r.canonicalString())===(null===(n=t._internalFieldPath)||void 0===n?void 0:n.canonicalString())}function u5(e,t){return lO(e.query,t.query)&&(0,f.deepEqual)(e.data(),t.data())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u3{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class u8 extends uE{constructor(e,t,r,n,i,s){super(e,t,r,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new u4(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(uT("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class u4 extends u8{data(e={}){return super.data(e)}}class u9{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new u3(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new u4(this._firestore,this._userDataWriter,r.key,r,new u3(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new N(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new u4(e._firestore,e._userDataWriter,r.doc.key,r.doc,new u3(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new u4(e._firestore,e._userDataWriter,t.doc.key,t.doc,new u3(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return A()}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function u7(e,t){return e instanceof u8&&t instanceof u8?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof u9&&t instanceof u9&&e._firestore===t._firestore&&lO(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){e=lw(e,lS);let t=lw(e.firestore,lB);return lh(lj(t),e._key).then(r=>hp(t,e,r))}class ht extends uJ{constructor(e){super(),this.firestore=e}convertBytes(e){return new l1(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new lS(this.firestore,null,t)}}function hr(e){e=lw(e,lS);let t=lw(e.firestore,lB),r=lj(t),n=new ht(t);return(function(e,t){let r=new O;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,r){try{let n=await e.persistence.runTransaction("read document","readonly",r=>e.localDocuments.getDocument(r,t));n.isFoundDocument()?r.resolve(n):n.isNoDocument()?r.resolve(null):r.reject(new N(k.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(n){let e=o3(n,`Failed to get document '${t} from cache`);r.reject(e)}})(await ls(e),t,r)),r.promise})(r,e._key).then(r=>new u8(t,n,e._key,r,new u3(null!==r&&r.hasLocalMutations,!0),e.converter))}function hn(e){e=lw(e,lS);let t=lw(e.firestore,lB);return lh(lj(t),e._key,{source:"server"}).then(r=>hp(t,e,r))}function hi(e){e=lw(e,lT);let t=lw(e.firestore,lB),r=lj(t),n=new ht(t);return uS(e._query),lc(r,e._query).then(r=>new u9(t,n,e,r))}function hs(e){e=lw(e,lT);let t=lw(e.firestore,lB),r=lj(t),n=new ht(t);return(function(e,t){let r=new O;return e.asyncQueue.enqueueAndForget(async()=>(async function(e,t,r){try{let n=await sX(e,t,!0),i=new ap(t,n.gs),s=i.ba(n.documents),o=i.applyChanges(s,!1);r.resolve(o.snapshot)}catch(n){let e=o3(n,`Failed to execute query '${t} against cache`);r.reject(e)}})(await ls(e),t,r)),r.promise})(r,e._query).then(r=>new u9(t,n,e,r))}function ho(e){e=lw(e,lT);let t=lw(e.firestore,lB),r=lj(t),n=new ht(t);return lc(r,e._query,{source:"server"}).then(r=>new u9(t,n,e,r))}function ha(e,t,r){e=lw(e,lS);let n=lw(e.firestore,lB),i=uX(e.converter,t,r);return hd(n,[ui(un(n),"setDoc",e._key,i,null!==e.converter,r).toMutation(e._key,nx.none())])}function hl(e,t,r,...n){e=lw(e,lS);let i=lw(e.firestore,lB),s=un(i);return hd(i,[("string"==typeof(t=(0,f.getModularInstance)(t))||t instanceof l2?uf(s,"updateDoc",e._key,t,r,n):uc(s,"updateDoc",e._key,t)).toMutation(e._key,nx.exists(!0))])}function hu(e){return hd(lw(e.firestore,lB),[new nO(e._key,nx.none())])}function hh(e,t){let r=lw(e.firestore,lB),n=lk(e),i=uX(e.converter,t);return hd(r,[ui(un(e.firestore),"addDoc",n._key,i,null!==e.converter,{}).toMutation(n._key,nx.exists(!1))]).then(()=>n)}function hc(e,...t){var r,n,i;let s,o,a;e=(0,f.getModularInstance)(e);let l={includeMetadataChanges:!1,source:"default"},u=0;"object"!=typeof t[0]||lM(t[u])||(l=t[u],u++);let h={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(lM(t[u])){let e=t[u];t[u]=null===(r=e.next)||void 0===r?void 0:r.bind(e),t[u+1]=null===(n=e.error)||void 0===n?void 0:n.bind(e),t[u+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}if(e instanceof lS)o=lw(e.firestore,lB),a=rG(e._key.path),s={next:r=>{t[u]&&t[u](hp(o,e,r))},error:t[u+1],complete:t[u+2]};else{let r=lw(e,lT);o=lw(r.firestore,lB),a=r._query;let n=new ht(o);s={next:e=>{t[u]&&t[u](new u9(o,n,r,e))},error:t[u+1],complete:t[u+2]},uS(e._query)}return function(e,t,r,n){let i=new a5(n),s=new aa(t,i,r);return e.asyncQueue.enqueueAndForget(async()=>ar(await lu(e),s)),()=>{i.su(),e.asyncQueue.enqueueAndForget(async()=>an(await lu(e),s))}}(lj(o),a,h,s)}function hf(e,t){return function(e,t){let r=new a5(t);return e.asyncQueue.enqueueAndForget(async()=>{(await lu(e)).ia.add(r),r.next()}),()=>{r.su(),e.asyncQueue.enqueueAndForget(async()=>(function(e,t){e.ia.delete(t)})(await lu(e),r))}}(lj(e=lw(e,lB)),lM(t)?t:{next:t})}function hd(e,t){return function(e,t){let r=new O;return e.asyncQueue.enqueueAndForget(async()=>aT(await la(e),t,r)),r.promise}(lj(e),t)}function hp(e,t,r){let n=r.docs.get(t._key),i=new ht(e);return new u8(e,i,t._key,n,new u3(r.hasPendingWrites,r.fromCache),t.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(e){return hm(e,{count:u2()})}function hm(e,t){let r=lw(e.firestore,lB),n=lj(r),i=tC(t,(e,t)=>new nF(t,e.aggregateType,e._internalFieldPath));return(function(e,t,r){let n=new O;return e.asyncQueue.enqueueAndForget(async()=>{try{let i=await ll(e);n.resolve(async function(e,t,r){var n;let{request:i,Pt:s,parent:o}=iv(e.serializer,rY(t),r);e.connection.fo||delete i.parent;let a=(await e.Co("RunAggregationQuery",e.serializer.databaseId,o,i,1)).filter(e=>!!e.result);1===a.length||A();let l=null===(n=a[0].result)||void 0===n?void 0:n.aggregateFields;return Object.keys(l).reduce((e,t)=>(e[s[t]]=l[t],e),{})}(i,t,r))}catch(e){n.reject(e)}}),n.promise})(n,e._query,i).then(t=>new l0(e,new ht(r),t))}class hy{constructor(e){this.kind="memory",this._onlineComponentProvider=a2.provider,(null==e?void 0:e.garbageCollector)?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider={build:()=>new aZ(void 0)}}toJSON(){return{kind:this.kind}}}class hv{constructor(e){let t;this.kind="persistent",(null==e?void 0:e.tabManager)?(e.tabManager._initialize(e),t=e.tabManager):(t=hC(void 0))._initialize(e),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class hw{constructor(){this.kind="memoryEager",this._offlineComponentProvider=aX.provider}toJSON(){return{kind:this.kind}}}class hb{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new aZ(e)}}toJSON(){return{kind:this.kind}}}function hx(){return new hw}function hI(e){return new hb(null==e?void 0:e.cacheSizeBytes)}function hE(e){return new hy(e)}function h_(e){return new hv(e)}class hT{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=a2.provider,this._offlineComponentProvider={build:t=>new a0(t,null==e?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class hS{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=a2.provider,this._offlineComponentProvider={build:t=>new a1(t,null==e?void 0:e.cacheSizeBytes)}}}function hC(e){return new hT(null==e?void 0:e.forceOwnership)}function hA(){return new hS}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hD={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=un(e)}set(e,t,r){this._verifyNotCommitted();let n=hN(e,this._firestore),i=uX(n.converter,t,r),s=ui(this._dataReader,"WriteBatch.set",n._key,i,null!==n.converter,r);return this._mutations.push(s.toMutation(n._key,nx.none())),this}update(e,t,r,...n){let i;this._verifyNotCommitted();let s=hN(e,this._firestore);return i="string"==typeof(t=(0,f.getModularInstance)(t))||t instanceof l2?uf(this._dataReader,"WriteBatch.update",s._key,t,r,n):uc(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(i.toMutation(s._key,nx.exists(!0))),this}delete(e){this._verifyNotCommitted();let t=hN(e,this._firestore);return this._mutations=this._mutations.concat(new nO(t._key,nx.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new N(k.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function hN(e,t){if((e=(0,f.getModularInstance)(e)).firestore!==t)throw new N(k.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=un(e)}get(e){let t=hN(e,this._firestore),r=new uZ(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return A();let n=e[0];if(n.isFoundDocument())return new uE(this._firestore,r,n.key,n,t.converter);if(n.isNoDocument())return new uE(this._firestore,r,t._key,null,t.converter);throw A()})}set(e,t,r){let n=hN(e,this._firestore),i=uX(n.converter,t,r),s=ui(this._dataReader,"Transaction.set",n._key,i,null!==n.converter,r);return this._transaction.set(n._key,s),this}update(e,t,r,...n){let i;let s=hN(e,this._firestore);return i="string"==typeof(t=(0,f.getModularInstance)(t))||t instanceof l2?uf(this._dataReader,"Transaction.update",s._key,t,r,n):uc(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,i),this}delete(e){let t=hN(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR extends hO{constructor(e,t){super(e,t),this._firestore=e}get(e){let t=hN(e,this._firestore),r=new ht(this._firestore);return super.get(e).then(e=>new u8(this._firestore,r,t._key,e._document,new u3(!1,!1),t.converter))}}function hL(e,t,r){e=lw(e,lB);let n=Object.assign(Object.assign({},hD),r);return!function(e){if(e.maxAttempts<1)throw new N(k.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(e,t,r){let n=new O;return e.asyncQueue.enqueueAndForget(async()=>{let i=await ll(e);new a4(e.asyncQueue,i,r,t,n).Iu()}),n.promise}(lj(e),r=>t(new hR(e,r)),n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(){return new us("deleteField")}function hP(){return new ua("serverTimestamp")}function hF(...e){return new ul("arrayUnion",e)}function hB(...e){return new uu("arrayRemove",e)}function hV(e){return new uh("increment",e)}function hU(e){return new l8(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hj(e){return lj(e=lw(e,lB)),new hk(e,t=>hd(e,t))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hq(e,t){let r=lj(e=lw(e,lB));if(!r._uninitializedComponentsProvider||"memory"===r._uninitializedComponentsProvider._offline.kind)return S("Cannot enable indexes when persistence is disabled"),Promise.resolve();let n=function(e){let t="string"==typeof e?function(e){try{return JSON.parse(e)}catch(e){throw new N(k.INVALID_ARGUMENT,"Failed to parse JSON: "+(null==e?void 0:e.message))}}(e):e,r=[];if(Array.isArray(t.indexes))for(let e of t.indexes){let t=hz(e,"collectionGroup"),n=[];if(Array.isArray(e.fields))for(let t of e.fields){let e=ub("setIndexConfiguration",hz(t,"fieldPath"));"CONTAINS"===t.arrayConfig?n.push(new en(e,2)):"ASCENDING"===t.order?n.push(new en(e,0)):"DESCENDING"===t.order&&n.push(new en(e,1))}r.push(new Z(Z.UNKNOWN_ID,t,n,ei.empty()))}return r}(t);return r.asyncQueue.enqueue(async()=>(async function(e,t){let r=e.indexManager,n=[];return e.persistence.runTransaction("Configure indexes","readwrite",e=>r.getFieldIndexes(e).next(i=>/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e,t,r,n,i){t=[...t],(e=[...e]).sort(r),t.sort(r);let s=e.length,o=t.length,a=0,l=0;for(;a<o&&l<s;){let s=r(e[l],t[a]);s<0?i(e[l++]):s>0?n(t[a++]):(a++,l++)}for(;a<o;)n(t[a++]);for(;l<s;)i(e[l++])})(i,t,er,t=>{n.push(r.addFieldIndex(e,t))},t=>{n.push(r.deleteFieldIndex(e,t))})).next(()=>ef.waitFor(n)))})(await ls(r),n))}function hz(e,t){if("string"!=typeof e[t])throw new N(k.INVALID_ARGUMENT,"Missing string value for: "+t);return e[t]}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h${constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function hG(e){var t;e=lw(e,lB);let r=hY.get(e);if(r)return r;if("persistent"!==(null===(t=lj(e)._uninitializedComponentsProvider)||void 0===t?void 0:t._offline.kind))return null;let n=new h$(e);return hY.set(e,n),n}function hK(e){hW(e,!0)}function hH(e){hW(e,!1)}function hQ(e){var t;(t=lj(e._firestore)).asyncQueue.enqueue(async()=>(function(e){let t=e.indexManager;return e.persistence.runTransaction("Delete All Indexes","readwrite",e=>t.deleteAllFieldIndexes(e))})(await ls(t))).then(e=>_("deleting all persistent cache indexes succeeded")).catch(e=>S("deleting all persistent cache indexes failed",e))}function hW(e,t){var r;(r=lj(e._firestore)).asyncQueue.enqueue(async()=>{(await ls(r)).Ps.Xi=t}).then(e=>_(`setting persistent cache index auto creation isEnabled=${t} succeeded`)).catch(e=>S(`setting persistent cache index auto creation isEnabled=${t} failed`,e))}let hY=new WeakMap;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hJ(e){var t;let r=null===(t=lj(lw(e.firestore,lB))._onlineComponents)||void 0===t?void 0:t.datastore.serializer;return void 0===r?null:iy(r,rW(e._query)).ht}function hX(e,t){var r;let n=tC(t,(e,t)=>new nF(t,e.aggregateType,e._internalFieldPath)),i=null===(r=lj(lw(e.firestore,lB))._onlineComponents)||void 0===r?void 0:r.datastore.serializer;return void 0===i?null:iv(i,rY(e._query),n,!0).request}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hZ{constructor(){throw Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return h0.instance.onExistenceFilterMismatch(e)}}class h0{constructor(){this.Yu=new Map}static get instance(){return h1||function(e){if(nj)throw Error("a TestingHooksSpi instance is already set");nj=e}(h1=new h0),h1}rt(e){this.Yu.forEach(t=>t(e))}onExistenceFilterMismatch(e){let t=Symbol(),r=this.Yu;return r.set(t,e),()=>r.delete(t)}}let h1=null;!function(e,t=!0){b=u.SDK_VERSION,(0,u._registerComponent)(new(0,h.Component)("firestore",(e,{instanceIdentifier:r,options:n})=>{let i=e.getProvider("app").getImmediate(),s=new lB(new P(e.getProvider("auth-internal")),new U(i,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new N(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tX(e.options.projectId,t)}(i,r),i);return n=Object.assign({useFetchStreams:t},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),(0,u.registerVersion)(y,v,void 0),(0,u.registerVersion)(y,v,"esm2017")}()},{"1f357d3d806fe63b":"5QIF0",d0007d14bc1ab93c:"l5Twm","@firebase/app":"3eFbF","@firebase/component":"7Ufrc","@firebase/logger":"2Swcv","@firebase/util":"hGlpW","@firebase/webchannel-wrapper/bloom-blob":"6IEaz","@firebase/webchannel-wrapper/webchannel-blob":"146Zc","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"5QIF0":[function(e,t,r,n){var i,s,o,a=t.exports={};function l(){throw Error("setTimeout has not been defined")}function u(){throw Error("clearTimeout has not been defined")}function h(e){if(i===setTimeout)return setTimeout(e,0);if((i===l||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}!function(){try{i="function"==typeof setTimeout?setTimeout:l}catch(e){i=l}try{s="function"==typeof clearTimeout?clearTimeout:u}catch(e){s=u}}();var c=[],f=!1,d=-1;function p(){f&&o&&(f=!1,o.length?c=o.concat(c):d=-1,c.length&&g())}function g(){if(!f){var e=h(p);f=!0;for(var t=c.length;t;){for(o=c,c=[];++d<t;)o&&o[d].run();d=-1,t=c.length}o=null,f=!1,function(e){if(s===clearTimeout)return clearTimeout(e);if((s===u||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function y(){}a.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new m(e,t)),1!==c.length||f||h(g)},m.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=y,a.addListener=y,a.once=y,a.off=y,a.removeListener=y,a.removeAllListeners=y,a.emit=y,a.prependListener=y,a.prependOnceListener=y,a.listeners=function(e){return[]},a.binding=function(e){throw Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw Error("process.chdir is not supported")},a.umask=function(){return 0}},{}],l5Twm:[function(e,t,r,n){let i=e("9c62938f1dccc73c"),s=e("aceacb6a4531a9d2"),o="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function a(e){if(e>0x7fffffff)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,l.prototype),t}function l(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return c(e)}return u(e,t,r)}function u(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!l.isEncoding(t))throw TypeError("Unknown encoding: "+t);let r=0|g(e,t),n=a(r),i=n.write(e,t);return i!==r&&(n=n.slice(0,i)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(B(e,Uint8Array)){let t=new Uint8Array(e);return d(t.buffer,t.byteOffset,t.byteLength)}return f(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(B(e,ArrayBuffer)||e&&B(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(B(e,SharedArrayBuffer)||e&&B(e.buffer,SharedArrayBuffer)))return d(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return l.from(n,t,r);let i=function(e){if(l.isBuffer(e)){let t=0|p(e.length),r=a(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||function(e){return e!=e}(e.length)?a(0):f(e):"Buffer"===e.type&&Array.isArray(e.data)?f(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return l.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function h(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function c(e){return h(e),a(e<0?0:0|p(e))}function f(e){let t=e.length<0?0:0|p(e.length),r=a(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function d(e,t,r){let n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),l.prototype),n}function p(e){if(e>=0x7fffffff)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function g(e,t){if(l.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||B(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return M(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return P(e).length;default:if(i)return n?-1:M(e).length;t=(""+t).toLowerCase(),i=!0}}function m(e,t,r){let n=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=t;n<r;++n)i+=V[e[n]];return i}(this,t,r);case"utf8":case"utf-8":return b(this,t,r);case"ascii":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":var s,o,a;return s=this,o=t,a=r,0===o&&a===s.length?i.fromByteArray(s):i.fromByteArray(s.slice(o,a));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let n=e.slice(t,r),i="";for(let e=0;e<n.length-1;e+=2)i+=String.fromCharCode(n[e]+256*n[e+1]);return i}(this,t,r);default:if(n)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function y(e,t,r){let n=e[t];e[t]=e[r],e[r]=n}function v(e,t,r,n,i){var s;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>0x7fffffff?r=0x7fffffff:r<-0x80000000&&(r=-0x80000000),(s=r*=1)!=s&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return -1;r=e.length-1}else if(r<0){if(!i)return -1;r=0}if("string"==typeof t&&(t=l.from(t,n)),l.isBuffer(t))return 0===t.length?-1:w(e,t,r,n,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):w(e,[t],r,n,i);throw TypeError("val must be string, number or Buffer")}function w(e,t,r,n,i){let s,o=1,a=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;o=2,a/=2,l/=2,r/=2}function u(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){let n=-1;for(s=r;s<a;s++)if(u(e,s)===u(t,-1===n?0:s-n)){if(-1===n&&(n=s),s-n+1===l)return n*o}else -1!==n&&(s-=s-n),n=-1}else for(r+l>a&&(r=a-l),s=r;s>=0;s--){let r=!0;for(let n=0;n<l;n++)if(u(e,s+n)!==u(t,n)){r=!1;break}if(r)return s}return -1}function b(e,t,r){r=Math.min(e.length,r);let n=[],i=t;for(;i<r;){let t=e[i],s=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=r){let r,n,a,l;switch(o){case 1:t<128&&(s=t);break;case 2:(192&(r=e[i+1]))==128&&(l=(31&t)<<6|63&r)>127&&(s=l);break;case 3:r=e[i+1],n=e[i+2],(192&r)==128&&(192&n)==128&&(l=(15&t)<<12|(63&r)<<6|63&n)>2047&&(l<55296||l>57343)&&(s=l);break;case 4:r=e[i+1],n=e[i+2],a=e[i+3],(192&r)==128&&(192&n)==128&&(192&a)==128&&(l=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&a)>65535&&l<1114112&&(s=l)}}null===s?(s=65533,o=1):s>65535&&(s-=65536,n.push(s>>>10&1023|55296),s=56320|1023&s),n.push(s),i+=o}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}function x(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function I(e,t,r,n,i,s){if(!l.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function E(e,t,r,n,i){N(t,n,i,e,r,7);let s=Number(t&BigInt(0xffffffff));e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s,s>>=8,e[r++]=s;let o=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,r}function _(e,t,r,n,i){N(t,n,i,e,r,7);let s=Number(t&BigInt(0xffffffff));e[r+7]=s,s>>=8,e[r+6]=s,s>>=8,e[r+5]=s,s>>=8,e[r+4]=s;let o=Number(t>>BigInt(32)&BigInt(0xffffffff));return e[r+3]=o,o>>=8,e[r+2]=o,o>>=8,e[r+1]=o,o>>=8,e[r]=o,r+8}function T(e,t,r,n,i,s){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function S(e,t,r,n,i){return t*=1,r>>>=0,i||T(e,t,r,4,34028234663852886e22,-34028234663852886e22),s.write(e,t,r,n,23,4),r+4}function C(e,t,r,n,i){return t*=1,r>>>=0,i||T(e,t,r,8,17976931348623157e292,-17976931348623157e292),s.write(e,t,r,n,52,8),r+8}r.Buffer=l,r.SlowBuffer=function(e){return+e!=e&&(e=0),l.alloc(+e)},r.INSPECT_MAX_BYTES=50,r.kMaxLength=0x7fffffff,l.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),l.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}}),l.poolSize=8192,l.from=function(e,t,r){return u(e,t,r)},Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array),l.alloc=function(e,t,r){return(h(e),e<=0)?a(e):void 0!==t?"string"==typeof r?a(e).fill(t,r):a(e).fill(t):a(e)},l.allocUnsafe=function(e){return c(e)},l.allocUnsafeSlow=function(e){return c(e)},l.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==l.prototype},l.compare=function(e,t){if(B(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),B(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(e)||!l.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let i=0,s=Math.min(r,n);i<s;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:+(n<r)},l.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return l.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let n=l.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){let t=e[r];if(B(t,Uint8Array))i+t.length>n.length?(l.isBuffer(t)||(t=l.from(t)),t.copy(n,i)):Uint8Array.prototype.set.call(n,t,i);else if(l.isBuffer(t))t.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=t.length}return n},l.byteLength=g,l.prototype._isBuffer=!0,l.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)y(this,t,t+1);return this},l.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)y(this,t,t+3),y(this,t+1,t+2);return this},l.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)y(this,t,t+7),y(this,t+1,t+6),y(this,t+2,t+5),y(this,t+3,t+4);return this},l.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?b(this,0,e):m.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(e){if(!l.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===l.compare(this,e)},l.prototype.inspect=function(){let e="",t=r.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},o&&(l.prototype[o]=l.prototype.inspect),l.prototype.compare=function(e,t,r,n,i){if(B(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;let s=i-n,o=r-t,a=Math.min(s,o),u=this.slice(n,i),h=e.slice(t,r);for(let e=0;e<a;++e)if(u[e]!==h[e]){s=u[e],o=h[e];break}return s<o?-1:+(o<s)},l.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},l.prototype.indexOf=function(e,t,r){return v(this,e,t,r,!0)},l.prototype.lastIndexOf=function(e,t,r){return v(this,e,t,r,!1)},l.prototype.write=function(e,t,r,n){var i,s,o,a,l,u,h,c;if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let f=this.length-t;if((void 0===r||r>f)&&(r=f),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let d=!1;for(;;)switch(n){case"hex":return function(e,t,r,n){let i;r=Number(r)||0;let s=e.length-r;n?(n=Number(n))>s&&(n=s):n=s;let o=t.length;for(n>o/2&&(n=o/2),i=0;i<n;++i){var a;let n=parseInt(t.substr(2*i,2),16);if((a=n)!=a)break;e[r+i]=n}return i}(this,e,t,r);case"utf8":case"utf-8":return i=t,s=r,F(M(e,this.length-i),this,i,s);case"ascii":case"latin1":case"binary":return o=t,a=r,F(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,o,a);case"base64":return l=t,u=r,F(P(e),this,l,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return h=t,c=r,F(function(e,t){let r,n;let i=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)n=(r=e.charCodeAt(s))>>8,i.push(r%256),i.push(n);return i}(e,this.length-h),this,h,c);default:if(d)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),d=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},l.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,l.prototype),n},l.prototype.readUintLE=l.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||x(e,t,this.length);let n=this[e],i=1,s=0;for(;++s<t&&(i*=256);)n+=this[e+s]*i;return n},l.prototype.readUintBE=l.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||x(e,t,this.length);let n=this[e+--t],i=1;for(;t>0&&(i*=256);)n+=this[e+--t]*i;return n},l.prototype.readUint8=l.prototype.readUInt8=function(e,t){return e>>>=0,t||x(e,1,this.length),this[e]},l.prototype.readUint16LE=l.prototype.readUInt16LE=function(e,t){return e>>>=0,t||x(e,2,this.length),this[e]|this[e+1]<<8},l.prototype.readUint16BE=l.prototype.readUInt16BE=function(e,t){return e>>>=0,t||x(e,2,this.length),this[e]<<8|this[e+1]},l.prototype.readUint32LE=l.prototype.readUInt32LE=function(e,t){return e>>>=0,t||x(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+0x1000000*this[e+3]},l.prototype.readUint32BE=l.prototype.readUInt32BE=function(e,t){return e>>>=0,t||x(e,4,this.length),0x1000000*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},l.prototype.readBigUInt64LE=U(function(e){O(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&R(e,this.length-8);let n=t+256*this[++e]+65536*this[++e]+0x1000000*this[++e],i=this[++e]+256*this[++e]+65536*this[++e]+0x1000000*r;return BigInt(n)+(BigInt(i)<<BigInt(32))}),l.prototype.readBigUInt64BE=U(function(e){O(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&R(e,this.length-8);let n=0x1000000*t+65536*this[++e]+256*this[++e]+this[++e],i=0x1000000*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)}),l.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||x(e,t,this.length);let n=this[e],i=1,s=0;for(;++s<t&&(i*=256);)n+=this[e+s]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},l.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||x(e,t,this.length);let n=t,i=1,s=this[e+--n];for(;n>0&&(i*=256);)s+=this[e+--n]*i;return s>=(i*=128)&&(s-=Math.pow(2,8*t)),s},l.prototype.readInt8=function(e,t){return(e>>>=0,t||x(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},l.prototype.readInt16LE=function(e,t){e>>>=0,t||x(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?0xffff0000|r:r},l.prototype.readInt16BE=function(e,t){e>>>=0,t||x(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?0xffff0000|r:r},l.prototype.readInt32LE=function(e,t){return e>>>=0,t||x(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},l.prototype.readInt32BE=function(e,t){return e>>>=0,t||x(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},l.prototype.readBigInt64LE=U(function(e){O(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&R(e,this.length-8),(BigInt(this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24))<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+0x1000000*this[++e])}),l.prototype.readBigInt64BE=U(function(e){O(e>>>=0,"offset");let t=this[e],r=this[e+7];return(void 0===t||void 0===r)&&R(e,this.length-8),(BigInt((t<<24)+65536*this[++e]+256*this[++e]+this[++e])<<BigInt(32))+BigInt(0x1000000*this[++e]+65536*this[++e]+256*this[++e]+r)}),l.prototype.readFloatLE=function(e,t){return e>>>=0,t||x(e,4,this.length),s.read(this,e,!0,23,4)},l.prototype.readFloatBE=function(e,t){return e>>>=0,t||x(e,4,this.length),s.read(this,e,!1,23,4)},l.prototype.readDoubleLE=function(e,t){return e>>>=0,t||x(e,8,this.length),s.read(this,e,!0,52,8)},l.prototype.readDoubleBE=function(e,t){return e>>>=0,t||x(e,8,this.length),s.read(this,e,!1,52,8)},l.prototype.writeUintLE=l.prototype.writeUIntLE=function(e,t,r,n){if(e*=1,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;I(this,e,t,r,n,0)}let i=1,s=0;for(this[t]=255&e;++s<r&&(i*=256);)this[t+s]=e/i&255;return t+r},l.prototype.writeUintBE=l.prototype.writeUIntBE=function(e,t,r,n){if(e*=1,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;I(this,e,t,r,n,0)}let i=r-1,s=1;for(this[t+i]=255&e;--i>=0&&(s*=256);)this[t+i]=e/s&255;return t+r},l.prototype.writeUint8=l.prototype.writeUInt8=function(e,t,r){return e*=1,t>>>=0,r||I(this,e,t,1,255,0),this[t]=255&e,t+1},l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(e,t,r){return e*=1,t>>>=0,r||I(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(e,t,r){return e*=1,t>>>=0,r||I(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(e,t,r){return e*=1,t>>>=0,r||I(this,e,t,4,0xffffffff,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(e,t,r){return e*=1,t>>>=0,r||I(this,e,t,4,0xffffffff,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeBigUInt64LE=U(function(e,t=0){return E(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),l.prototype.writeBigUInt64BE=U(function(e,t=0){return _(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),l.prototype.writeIntLE=function(e,t,r,n){if(e*=1,t>>>=0,!n){let n=Math.pow(2,8*r-1);I(this,e,t,r,n-1,-n)}let i=0,s=1,o=0;for(this[t]=255&e;++i<r&&(s*=256);)e<0&&0===o&&0!==this[t+i-1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+r},l.prototype.writeIntBE=function(e,t,r,n){if(e*=1,t>>>=0,!n){let n=Math.pow(2,8*r-1);I(this,e,t,r,n-1,-n)}let i=r-1,s=1,o=0;for(this[t+i]=255&e;--i>=0&&(s*=256);)e<0&&0===o&&0!==this[t+i+1]&&(o=1),this[t+i]=(e/s>>0)-o&255;return t+r},l.prototype.writeInt8=function(e,t,r){return e*=1,t>>>=0,r||I(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},l.prototype.writeInt16LE=function(e,t,r){return e*=1,t>>>=0,r||I(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},l.prototype.writeInt16BE=function(e,t,r){return e*=1,t>>>=0,r||I(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},l.prototype.writeInt32LE=function(e,t,r){return e*=1,t>>>=0,r||I(this,e,t,4,0x7fffffff,-0x80000000),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},l.prototype.writeInt32BE=function(e,t,r){return e*=1,t>>>=0,r||I(this,e,t,4,0x7fffffff,-0x80000000),e<0&&(e=0xffffffff+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},l.prototype.writeBigInt64LE=U(function(e,t=0){return E(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),l.prototype.writeBigInt64BE=U(function(e,t=0){return _(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),l.prototype.writeFloatLE=function(e,t,r){return S(this,e,t,!0,r)},l.prototype.writeFloatBE=function(e,t,r){return S(this,e,t,!1,r)},l.prototype.writeDoubleLE=function(e,t,r){return C(this,e,t,!0,r)},l.prototype.writeDoubleBE=function(e,t,r){return C(this,e,t,!1,r)},l.prototype.copy=function(e,t,r,n){if(!l.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);let i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},l.prototype.fill=function(e,t,r,n){let i;if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!l.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){let t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{let s=l.isBuffer(e)?e:l.from(e,n),o=s.length;if(0===o)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=s[i%o]}return this};let A={};function D(e,t,r){A[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function k(e){let t="",r=e.length,n=+("-"===e[0]);for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function N(e,t,r,n,i,s){if(e>r||e<t){let n;let i="bigint"==typeof t?"n":"";throw n=s>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${(s+1)*8}${i}`:`>= -(2${i} ** ${(s+1)*8-1}${i}) and < 2 ** ${(s+1)*8-1}${i}`:`>= ${t}${i} and <= ${r}${i}`,new A.ERR_OUT_OF_RANGE("value",n,e)}O(i,"offset"),(void 0===n[i]||void 0===n[i+s])&&R(i,n.length-(s+1))}function O(e,t){if("number"!=typeof e)throw new A.ERR_INVALID_ARG_TYPE(t,"number",e)}function R(e,t,r){if(Math.floor(e)!==e)throw O(e,r),new A.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new A.ERR_BUFFER_OUT_OF_BOUNDS;throw new A.ERR_OUT_OF_RANGE(r||"offset",`>= ${+!!r} and <= ${t}`,e)}D("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),D("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),D("ERR_OUT_OF_RANGE",function(e,t,r){let n=`The value of "${e}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>0x100000000?i=k(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=k(i)),i+="n"),n+=` It must be ${t}. Received ${i}`},RangeError);let L=/[^+/0-9A-Za-z-_]/g;function M(e,t){let r;t=t||1/0;let n=e.length,i=null,s=[];for(let o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!i){if(r>56319||o+1===n){(t-=3)>-1&&s.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&s.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;s.push(r)}else if(r<2048){if((t-=2)<0)break;s.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return s}function P(e){return i.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(L,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function F(e,t,r,n){let i;for(i=0;i<n&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}function B(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}let V=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let i=0;i<16;++i)t[n+i]=e[r]+e[i]}return t}();function U(e){return"undefined"==typeof BigInt?j:e}function j(){throw Error("BigInt not supported")}},{"9c62938f1dccc73c":"6Pb1S",aceacb6a4531a9d2:"6ifNR"}],"6Pb1S":[function(e,t,r,n){r.byteLength=function(e){var t=h(e),r=t[0],n=t[1];return(r+n)*3/4-n},r.toByteArray=function(e){var t,r,n=h(e),i=n[0],a=n[1],l=new o((i+a)*3/4-a),u=0,c=a>0?i-4:i;for(r=0;r<c;r+=4)t=s[e.charCodeAt(r)]<<18|s[e.charCodeAt(r+1)]<<12|s[e.charCodeAt(r+2)]<<6|s[e.charCodeAt(r+3)],l[u++]=t>>16&255,l[u++]=t>>8&255,l[u++]=255&t;return 2===a&&(t=s[e.charCodeAt(r)]<<2|s[e.charCodeAt(r+1)]>>4,l[u++]=255&t),1===a&&(t=s[e.charCodeAt(r)]<<10|s[e.charCodeAt(r+1)]<<4|s[e.charCodeAt(r+2)]>>2,l[u++]=t>>8&255,l[u++]=255&t),l},r.fromByteArray=function(e){for(var t,r=e.length,n=r%3,s=[],o=0,a=r-n;o<a;o+=16383)s.push(function(e,t,r){for(var n,s=[],o=t;o<r;o+=3)n=(e[o]<<16&0xff0000)+(e[o+1]<<8&65280)+(255&e[o+2]),s.push(i[n>>18&63]+i[n>>12&63]+i[n>>6&63]+i[63&n]);return s.join("")}(e,o,o+16383>a?a:o+16383));return 1===n?s.push(i[(t=e[r-1])>>2]+i[t<<4&63]+"=="):2===n&&s.push(i[(t=(e[r-2]<<8)+e[r-1])>>10]+i[t>>4&63]+i[t<<2&63]+"="),s.join("")};for(var i=[],s=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0,u=a.length;l<u;++l)i[l]=a[l],s[a.charCodeAt(l)]=l;function h(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}s["-".charCodeAt(0)]=62,s["_".charCodeAt(0)]=63},{}],"6ifNR":[function(e,t,r,n){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */r.read=function(e,t,r,n,i){var s,o,a=8*i-n-1,l=(1<<a)-1,u=l>>1,h=-7,c=r?i-1:0,f=r?-1:1,d=e[t+c];for(c+=f,s=d&(1<<-h)-1,d>>=-h,h+=a;h>0;s=256*s+e[t+c],c+=f,h-=8);for(o=s&(1<<-h)-1,s>>=-h,h+=n;h>0;o=256*o+e[t+c],c+=f,h-=8);if(0===s)s=1-u;else{if(s===l)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,n),s-=u}return(d?-1:1)*o*Math.pow(2,s-n)},r.write=function(e,t,r,n,i,s){var o,a,l,u=8*s-i-1,h=(1<<u)-1,c=h>>1,f=5960464477539062e-23*(23===i),d=n?0:s-1,p=n?1:-1,g=+(t<0||0===t&&1/t<0);for(isNaN(t=Math.abs(t))||t===1/0?(a=+!!isNaN(t),o=h):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+c>=1?t+=f/l:t+=f*Math.pow(2,1-c),t*l>=2&&(o++,l/=2),o+c>=h?(a=0,o=h):o+c>=1?(a=(t*l-1)*Math.pow(2,i),o+=c):(a=t*Math.pow(2,c-1)*Math.pow(2,i),o=0));i>=8;e[r+d]=255&a,d+=p,a/=256,i-=8);for(o=o<<i|a,u+=i;u>0;e[r+d]=255&o,d+=p,o/=256,u-=8);e[r+d-p]|=128*g}},{}],"3eFbF":[function(e,t,r,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r),i.export(r,"FirebaseError",()=>a.FirebaseError),i.export(r,"SDK_VERSION",()=>k),i.export(r,"_DEFAULT_ENTRY_NAME",()=>d),i.export(r,"_addComponent",()=>v),i.export(r,"_addOrOverwriteComponent",()=>w),i.export(r,"_apps",()=>g),i.export(r,"_clearComponents",()=>T),i.export(r,"_components",()=>y),i.export(r,"_getProvider",()=>x),i.export(r,"_isFirebaseApp",()=>E),i.export(r,"_isFirebaseServerApp",()=>_),i.export(r,"_registerComponent",()=>b),i.export(r,"_removeServiceInstance",()=>I),i.export(r,"_serverApps",()=>m),i.export(r,"deleteApp",()=>M),i.export(r,"getApp",()=>R),i.export(r,"getApps",()=>L),i.export(r,"initializeApp",()=>N),i.export(r,"initializeServerApp",()=>O),i.export(r,"onLog",()=>F),i.export(r,"registerVersion",()=>P),i.export(r,"setLogLevel",()=>B);var s=e("@firebase/component"),o=e("@firebase/logger"),a=e("@firebase/util"),l=e("idb");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let h="@firebase/app",c="0.11.1",f=new o.Logger("@firebase/app"),d="[DEFAULT]",p={[h]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},g=new Map,m=new Map,y=new Map;function v(e,t){try{e.container.addComponent(t)}catch(r){f.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function w(e,t){e.container.addOrOverwriteComponent(t)}function b(e){let t=e.name;if(y.has(t))return f.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(y.set(t,e),g.values()))v(r,e);for(let t of m.values())v(t,e);return!0}function x(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function I(e,t,r=d){x(e,t).clearInstance(r)}function E(e){return void 0!==e.options}function _(e){return null!=e&&void 0!==e.settings}function T(){y.clear()}let S=new a.ErrorFactory("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new s.Component("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw S.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e,t){let r=(0,a.base64Decode)(e.split(".")[1]);if(null===r){console.error(`FirebaseServerApp ${t} is invalid: second part could not be parsed.`);return}if(void 0===JSON.parse(r).exp){console.error(`FirebaseServerApp ${t} is invalid: expiration claim could not be parsed`);return}let n=1e3*JSON.parse(r).exp;n-new Date().getTime()<=0&&console.error(`FirebaseServerApp ${t} is invalid: the token has expired.`)}class D extends C{constructor(e,t,r,n){let i=void 0!==t.automaticDataCollectionEnabled&&t.automaticDataCollectionEnabled,s={name:r,automaticDataCollectionEnabled:i};void 0!==e.apiKey?super(e,s,n):super(e.options,s,n),this._serverConfig=Object.assign({automaticDataCollectionEnabled:i},t),this._serverConfig.authIdToken&&A(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&A(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,"undefined"!=typeof FinalizationRegistry&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,P(h,c,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,void 0!==e&&null!==this._finalizationRegistry&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){M(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw S.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let k="11.3.1";function N(e,t={}){let r=e;"object"!=typeof t&&(t={name:t});let n=Object.assign({name:d,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw S.create("bad-app-name",{appName:String(i)});if(r||(r=(0,a.getDefaultAppConfig)()),!r)throw S.create("no-options");let o=g.get(i);if(o){if((0,a.deepEqual)(r,o.options)&&(0,a.deepEqual)(n,o.config))return o;throw S.create("duplicate-app",{appName:i})}let l=new s.ComponentContainer(i);for(let e of y.values())l.addComponent(e);let u=new C(r,n,l);return g.set(i,u),u}function O(e,t){let r;if((0,a.isBrowser)()&&!(0,a.isWebWorker)())throw S.create("invalid-server-app-environment");void 0===t.automaticDataCollectionEnabled&&(t.automaticDataCollectionEnabled=!1),r=E(e)?e.options:e;let n=Object.assign(Object.assign({},t),r);if(void 0!==n.releaseOnDeref&&delete n.releaseOnDeref,void 0!==t.releaseOnDeref&&"undefined"==typeof FinalizationRegistry)throw S.create("finalization-registry-not-supported",{});let i=""+[...JSON.stringify(n)].reduce((e,t)=>Math.imul(31,e)+t.charCodeAt(0)|0,0),o=m.get(i);if(o)return o.incRefCount(t.releaseOnDeref),o;let l=new s.ComponentContainer(i);for(let e of y.values())l.addComponent(e);let u=new D(r,t,i,l);return m.set(i,u),u}function R(e=d){let t=g.get(e);if(!t&&e===d&&(0,a.getDefaultAppConfig)())return N();if(!t)throw S.create("no-app",{appName:e});return t}function L(){return Array.from(g.values())}async function M(e){let t=!1,r=e.name;g.has(r)?(t=!0,g.delete(r)):m.has(r)&&0>=e.decRefCount()&&(m.delete(r),t=!0),t&&(await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function P(e,t,r){var n;let i=null!==(n=p[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let o=i.match(/\s|\//),a=t.match(/\s|\//);if(o||a){let e=[`Unable to register library "${i}" with version "${t}":`];o&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),f.warn(e.join(" "));return}b(new s.Component(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}function F(e,t){if(null!==e&&"function"!=typeof e)throw S.create("invalid-log-argument");(0,o.setUserLogHandler)(e,t)}function B(e){(0,o.setLogLevel)(e)}let V="firebase-heartbeat-store",U=null;function j(){return U||(U=(0,l.openDB)("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(V)}catch(e){console.warn(e)}}}).catch(e=>{throw S.create("idb-open",{originalErrorMessage:e.message})})),U}async function q(e){try{let t=(await j()).transaction(V),r=await t.objectStore(V).get($(e));return await t.done,r}catch(e){if(e instanceof a.FirebaseError)f.warn(e.message);else{let t=S.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});f.warn(t.message)}}}async function z(e,t){try{let r=(await j()).transaction(V,"readwrite"),n=r.objectStore(V);await n.put(t,$(e)),await r.done}catch(e){if(e instanceof a.FirebaseError)f.warn(e.message);else{let t=S.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});f.warn(t.message)}}}function $(e){return`${e.name}!${e.options.appId}`}class G{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new H(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;try{let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=K();if((null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats.length>30){let e=function(e){if(0===e.length)return -1;let t=0,r=e[0].date;for(let n=1;n<e.length;n++)e[n].date<r&&(r=e[n].date,t=n);return t}(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){f.warn(e)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=K(),{heartbeatsToSend:r,unsentEntries:n}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),Q(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),Q(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),i=(0,a.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return f.warn(e),""}}}function K(){return new Date().toISOString().substring(0,10)}class H{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,a.isIndexedDBAvailable)()&&(0,a.validateIndexedDBOpenable)().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await q(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return z(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return z(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function Q(e){return(0,a.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}b(new s.Component("platform-logger",e=>new u(e),"PRIVATE")),b(new s.Component("heartbeat",e=>new G(e),"PRIVATE")),P(h,c,""),P(h,c,"esm2017"),P("fire-js","")},{"@firebase/component":"7Ufrc","@firebase/logger":"2Swcv","@firebase/util":"hGlpW",idb:"cePoi","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"7Ufrc":[function(e,t,r,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r),i.export(r,"Component",()=>o),i.export(r,"ComponentContainer",()=>u),i.export(r,"Provider",()=>l);var s=e("@firebase/util");class o{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new s.Deferred;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:a})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=a){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=a){return this.instances.has(e)}getOptions(e=a){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let s=this.instances.get(n);return s&&e(s,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){var r;let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e)===a?void 0:r,options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}return n||null}normalizeInstanceIdentifier(e=a){return this.component?this.component.multipleInstances?e:a:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new l(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},{"@firebase/util":"hGlpW","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],hGlpW:[function(e,t,r,n){/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r),i.export(r,"CONSTANTS",()=>a),i.export(r,"DecodeBase64StringError",()=>d),i.export(r,"Deferred",()=>A),i.export(r,"ErrorFactory",()=>H),i.export(r,"FirebaseError",()=>K),i.export(r,"MAX_VALUE_MILLIS",()=>eE),i.export(r,"RANDOM_FACTOR",()=>e_),i.export(r,"Sha1",()=>ec),i.export(r,"areCookiesEnabled",()=>G),i.export(r,"assert",()=>l),i.export(r,"assertionError",()=>u),i.export(r,"async",()=>ep),i.export(r,"base64",()=>f),i.export(r,"base64Decode",()=>m),i.export(r,"base64Encode",()=>p),i.export(r,"base64urlEncodeWithoutPadding",()=>g),i.export(r,"calculateBackoffMillis",()=>eT),i.export(r,"contains",()=>er),i.export(r,"createMockUserToken",()=>D),i.export(r,"createSubscribe",()=>ef),i.export(r,"decode",()=>J),i.export(r,"deepCopy",()=>y),i.export(r,"deepEqual",()=>function e(t,r){if(t===r)return!0;let n=Object.keys(t),i=Object.keys(r);for(let s of n){if(!i.includes(s))return!1;let n=t[s],o=r[s];if(eo(n)&&eo(o)){if(!e(n,o))return!1}else if(n!==o)return!1}for(let e of i)if(!n.includes(e))return!1;return!0}),i.export(r,"deepExtend",()=>v),i.export(r,"errorPrefix",()=>ey),i.export(r,"extractQuerystring",()=>eh),i.export(r,"getDefaultAppConfig",()=>S),i.export(r,"getDefaultEmulatorHost",()=>_),i.export(r,"getDefaultEmulatorHostnameAndPort",()=>T),i.export(r,"getDefaults",()=>E),i.export(r,"getExperimentalSetting",()=>C),i.export(r,"getGlobal",()=>w),i.export(r,"getModularInstance",()=>eC),i.export(r,"getUA",()=>k),i.export(r,"isAdmin",()=>et),i.export(r,"isBrowser",()=>R),i.export(r,"isBrowserExtension",()=>P),i.export(r,"isCloudflareWorker",()=>M),i.export(r,"isElectron",()=>B),i.export(r,"isEmpty",()=>ei),i.export(r,"isIE",()=>V),i.export(r,"isIndexedDBAvailable",()=>z),i.export(r,"isMobileCordova",()=>N),i.export(r,"isNode",()=>O),i.export(r,"isNodeSdk",()=>j),i.export(r,"isReactNative",()=>F),i.export(r,"isSafari",()=>q),i.export(r,"isUWP",()=>U),i.export(r,"isValidFormat",()=>ee),i.export(r,"isValidTimestamp",()=>X),i.export(r,"isWebWorker",()=>L),i.export(r,"issuedAtTime",()=>Z),i.export(r,"jsonEval",()=>W),i.export(r,"map",()=>es),i.export(r,"ordinal",()=>eS),i.export(r,"promiseWithTimeout",()=>ea),i.export(r,"querystring",()=>el),i.export(r,"querystringDecode",()=>eu),i.export(r,"safeGet",()=>en),i.export(r,"stringLength",()=>eI),i.export(r,"stringToByteArray",()=>ex),i.export(r,"stringify",()=>Y),i.export(r,"validateArgCount",()=>em),i.export(r,"validateCallback",()=>ew),i.export(r,"validateContextObject",()=>eb),i.export(r,"validateIndexedDBOpenable",()=>$),i.export(r,"validateNamespace",()=>ev);var s=arguments[3],o=e("d07263985281b344");let a={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},l=function(e,t){if(!e)throw u(t)},u=function(e){return Error("Firebase Database ("+a.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},h=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},c=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=e[r++],o=((7&i)<<18|(63&s)<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{let s=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},f={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,u=i>>2,h=(3&i)<<4|o>>4,c=(15&o)<<2|l>>6,f=63&l;a||(f=64,s||(c=64)),n.push(r[u],r[h],r[c],r[f])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(h(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):c(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],s=t<e.length?r[e.charAt(t)]:0,o=++t<e.length?r[e.charAt(t)]:64,a=++t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==s||null==o||null==a)throw new d;let l=i<<2|s>>4;if(n.push(l),64!==o){let e=s<<4&240|o>>2;if(n.push(e),64!==a){let e=o<<6&192|a;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class d extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let p=function(e){let t=h(e);return f.encodeByteArray(t,!0)},g=function(e){return p(e).replace(/\./g,"")},m=function(e){try{return f.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e){return v(void 0,e)}function v(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(let r in t)t.hasOwnProperty(r)&&"__proto__"!==r&&(e[r]=v(e[r],t[r]));return e}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==s)return s;throw Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b=()=>w().__FIREBASE_DEFAULTS__,x=()=>{if(void 0===o||void 0===o.env)return;let e=void 0;if(e)return JSON.parse(e)},I=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&m(e[1]);return t&&JSON.parse(t)},E=()=>{try{return b()||x()||I()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},_=e=>{var t,r;return null===(r=null===(t=E())||void 0===t?void 0:t.emulatorHosts)||void 0===r?void 0:r[e]},T=e=>{let t=_(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]},S=()=>{var e;return null===(e=E())||void 0===e?void 0:e.config},C=e=>{var t;return null===(t=E())||void 0===t?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[g(JSON.stringify({alg:"none",type:"JWT"})),g(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function N(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(k())}function O(){var e;let t=null===(e=E())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(s.process)}catch(e){return!1}}function R(){return"undefined"!=typeof window||L()}function L(){return"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}function M(){return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent}function P(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function F(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function B(){return k().indexOf("Electron/")>=0}function V(){let e=k();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function U(){return k().indexOf("MSAppHost/")>=0}function j(){return!0===a.NODE_CLIENT||!0===a.NODE_ADMIN}function q(){return!O()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function z(){try{return"object"==typeof indexedDB}catch(e){return!1}}function $(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}function G(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}class K extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,K.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,H.prototype.create)}}class H{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){var r,n;let i=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?(r=o,n=i,r.replace(Q,(e,t)=>{let r=n[t];return null!=r?String(r):`<${t}?>`})):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new K(s,l,i)}}let Q=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){return JSON.parse(e)}function Y(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let J=function(e){let t={},r={},n={},i="";try{let s=e.split(".");t=W(m(s[0])||""),r=W(m(s[1])||""),i=s[2],n=r.d||{},delete r.d}catch(e){}return{header:t,claims:r,data:n,signature:i}},X=function(e){let t=J(e).claims,r=Math.floor(new Date().getTime()/1e3),n=0,i=0;return"object"==typeof t&&(t.hasOwnProperty("nbf")?n=t.nbf:t.hasOwnProperty("iat")&&(n=t.iat),i=t.hasOwnProperty("exp")?t.exp:n+86400),!!r&&!!n&&!!i&&r>=n&&r<=i},Z=function(e){let t=J(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null},ee=function(e){let t=J(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},et=function(e){let t=J(e).claims;return"object"==typeof t&&!0===t.admin};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function en(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ei(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function es(e,t,r){let n={};for(let i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=t.call(r,e[i],i,e));return n}function eo(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(e,t=2e3){let r=new A;return setTimeout(()=>r.reject("timeout!"),t),e.then(r.resolve,r.reject),r.promise}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function eu(e){let t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function eh(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=0x67452301,this.chain_[1]=0xefcdab89,this.chain_[2]=0x98badcfe,this.chain_[3]=0x10325476,this.chain_[4]=0xc3d2e1f0,this.inbuf_=0,this.total_=0}compress_(e,t){let r,n;t||(t=0);let i=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)i[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)i[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){let t=i[e-3]^i[e-8]^i[e-14]^i[e-16];i[e]=(t<<1|t>>>31)&0xffffffff}let s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],u=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=l^o&(a^l),n=0x5a827999):(r=o^a^l,n=0x6ed9eba1):e<60?(r=o&a|l&(o|a),n=0x8f1bbcdc):(r=o^a^l,n=0xca62c1d6);let t=(s<<5|s>>>27)+r+u+n+i[e]&0xffffffff;u=l,l=a,a=(o<<30|o>>>2)&0xffffffff,o=s,s=t}this.chain_[0]=this.chain_[0]+s&0xffffffff,this.chain_[1]=this.chain_[1]+o&0xffffffff,this.chain_[2]=this.chain_[2]+a&0xffffffff,this.chain_[3]=this.chain_[3]+l&0xffffffff,this.chain_[4]=this.chain_[4]+u&0xffffffff}update(e,t){if(null==e)return;void 0===t&&(t=e.length);let r=t-this.blockSize,n=0,i=this.buf_,s=this.inbuf_;for(;n<t;){if(0===s)for(;n<=r;)this.compress_(e,n),n+=this.blockSize;if("string"==typeof e){for(;n<t;)if(i[s]=e.charCodeAt(n),++s,++n,s===this.blockSize){this.compress_(i),s=0;break}}else for(;n<t;)if(i[s]=e[n],++s,++n,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){let e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let r=0;for(let t=0;t<5;t++)for(let n=24;n>=0;n-=8)e[r]=this.chain_[t]>>n&255,++r;return e}}function ef(e,t){let r=new ed(e,t);return r.subscribe.bind(r)}class ed{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=eg),void 0===n.error&&(n.error=eg),void 0===n.complete&&(n.complete=eg);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ep(e,t){return(...r)=>{Promise.resolve(!0).then(()=>{e(...r)}).catch(e=>{t&&t(e)})}}function eg(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let em=function(e,t,r,n){let i;if(n<t?i="at least "+t:n>r&&(i=0===r?"none":"no more than "+r),i)throw Error(e+" failed: Was called with "+n+(1===n?" argument.":" arguments.")+" Expects "+i+".")};function ey(e,t){return`${e} failed: ${t} argument `}function ev(e,t,r){if((!r||t)&&"string"!=typeof t)throw Error(ey(e,"namespace")+"must be a valid firebase namespace.")}function ew(e,t,r,n){if((!n||r)&&"function"!=typeof r)throw Error(ey(e,t)+"must be a valid function.")}function eb(e,t,r,n){if((!n||r)&&("object"!=typeof r||null===r))throw Error(ey(e,t)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ex=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);if(i>=55296&&i<=56319){let t=i-55296;l(++n<e.length,"Surrogate pair missing trail surrogate."),i=65536+(t<<10)+(e.charCodeAt(n)-56320)}i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:(i<65536?t[r++]=i>>12|224:(t[r++]=i>>18|240,t[r++]=i>>12&63|128),t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},eI=function(e){let t=0;for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);n<128?t++:n<2048?t+=2:n>=55296&&n<=56319?(t+=4,r++):t+=3}return t},eE=144e5,e_=.5;function eT(e,t=1e3,r=2){let n=t*Math.pow(r,e),i=Math.round(e_*n*(Math.random()-.5)*2);return Math.min(eE,n+i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(e){return Number.isFinite(e)?e+function(e){let t=(e=Math.abs(e))%100;if(t>=10&&t<=20)return"th";let r=e%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"}(e):`${e}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(e){return e&&e._delegate?e._delegate:e}},{d07263985281b344:"5QIF0","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],k3151:[function(e,t,r,n){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach(function(r){"default"===r||"__esModule"===r||Object.prototype.hasOwnProperty.call(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})}),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}],"2Swcv":[function(e,t,r,n){/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var i,s,o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"LogLevel",()=>s),o.export(r,"Logger",()=>f),o.export(r,"setLogLevel",()=>d),o.export(r,"setUserLogHandler",()=>p);let a=[];(i=s||(s={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let l={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},u=s.INFO,h={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=h[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class f{constructor(e){this.name=e,this._logLevel=u,this._logHandler=c,this._userLogHandler=null,a.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in s))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?l[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...e),this._logHandler(this,s.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...e),this._logHandler(this,s.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,s.INFO,...e),this._logHandler(this,s.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,s.WARN,...e),this._logHandler(this,s.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...e),this._logHandler(this,s.ERROR,...e)}}function d(e){a.forEach(t=>{t.setLogLevel(e)})}function p(e,t){for(let r of a){let n=null;t&&t.level&&(n=l[t.level]),null===e?r.userLogHandler=null:r.userLogHandler=(t,r,...i)=>{let o=i.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");r>=(null!=n?n:t.logLevel)&&e({level:s[r].toLowerCase(),message:o,args:i,type:t.name})}}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],cePoi:[function(e,t,r,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r),i.export(r,"unwrap",()=>s.u),i.export(r,"wrap",()=>s.w),i.export(r,"deleteDB",()=>a),i.export(r,"openDB",()=>o);var s=e("./wrap-idb-value.js");function o(e,t,{blocked:r,upgrade:n,blocking:i,terminated:a}={}){let l=indexedDB.open(e,t),u=(0,s.w)(l);return n&&l.addEventListener("upgradeneeded",e=>{n((0,s.w)(l.result),e.oldVersion,e.newVersion,(0,s.w)(l.transaction),e)}),r&&l.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),u.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),u}function a(e,{blocked:t}={}){let r=indexedDB.deleteDatabase(e);return t&&r.addEventListener("blocked",e=>t(e.oldVersion,e)),(0,s.w)(r).then(()=>void 0)}let l=["get","getKey","getAll","getAllKeys","count"],u=["put","add","delete","clear"],h=new Map;function c(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(h.get(t))return h.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=u.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||l.includes(r)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&s.done]))[0]};return h.set(t,s),s}(0,s.r)(e=>({...e,get:(t,r,n)=>c(t,r)||e.get(t,r,n),has:(t,r)=>!!c(t,r)||e.has(t,r)}))},{"./wrap-idb-value.js":"fB1kC","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],fB1kC:[function(e,t,r,n){let i,s;var o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"a",()=>f),o.export(r,"i",()=>a),o.export(r,"r",()=>p),o.export(r,"u",()=>m),o.export(r,"w",()=>g);let a=(e,t)=>t.some(t=>e instanceof t),l=new WeakMap,u=new WeakMap,h=new WeakMap,c=new WeakMap,f=new WeakMap,d={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return u.get(e);if("objectStoreNames"===t)return e.objectStoreNames||h.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return g(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function p(e){d=e(d)}function g(e){if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(g(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&l.set(t,e)}).catch(()=>{}),f.set(t,e),t}(e);if(c.has(e))return c.get(e);let t=function(e){if("function"==typeof e)return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(m(this),t),g(l.get(this))}:function(...t){return g(e.apply(m(this),t))}:function(t,...r){let n=e.call(m(this),t,...r);return h.set(n,t.sort?t.sort():[t]),g(n)};return(e instanceof IDBTransaction&&function(e){if(u.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});u.set(e,t)}(e),a(e,i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(e,d):e}(e);return t!==e&&(c.set(e,t),f.set(t,e)),t}let m=e=>f.get(e)},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"6IEaz":[function(e,t,r,n){var i,s,o=e("@parcel/transformer-js/src/esmodule-helpers.js");o.defineInteropFlag(r),o.export(r,"Integer",()=>i),o.export(r,"Md5",()=>s),o.export(r,"default",()=>u);var a=arguments[3],l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==a?a:"undefined"!=typeof self?self:{},u={};(function(){function e(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function t(e,t,r){r||(r=0);var n=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)n[i]=t.charCodeAt(r++)|t.charCodeAt(r++)<<8|t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<24;else for(i=0;16>i;++i)n[i]=t[r++]|t[r++]<<8|t[r++]<<16|t[r++]<<24;t=e.g[0],r=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^r&(i^s))+n[0]+0xd76aa478&0xffffffff;o=s+(i^(t=r+(o<<7&0xffffffff|o>>>25))&(r^i))+n[1]+0xe8c7b756&0xffffffff,o=i+(r^(s=t+(o<<12&0xffffffff|o>>>20))&(t^r))+n[2]+0x242070db&0xffffffff,o=r+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+n[3]+0xc1bdceee&0xffffffff,o=t+(s^(r=i+(o<<22&0xffffffff|o>>>10))&(i^s))+n[4]+0xf57c0faf&0xffffffff,o=s+(i^(t=r+(o<<7&0xffffffff|o>>>25))&(r^i))+n[5]+0x4787c62a&0xffffffff,o=i+(r^(s=t+(o<<12&0xffffffff|o>>>20))&(t^r))+n[6]+0xa8304613&0xffffffff,o=r+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+n[7]+0xfd469501&0xffffffff,o=t+(s^(r=i+(o<<22&0xffffffff|o>>>10))&(i^s))+n[8]+0x698098d8&0xffffffff,o=s+(i^(t=r+(o<<7&0xffffffff|o>>>25))&(r^i))+n[9]+0x8b44f7af&0xffffffff,o=i+(r^(s=t+(o<<12&0xffffffff|o>>>20))&(t^r))+n[10]+0xffff5bb1&0xffffffff,o=r+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+n[11]+0x895cd7be&0xffffffff,o=t+(s^(r=i+(o<<22&0xffffffff|o>>>10))&(i^s))+n[12]+0x6b901122&0xffffffff,o=s+(i^(t=r+(o<<7&0xffffffff|o>>>25))&(r^i))+n[13]+0xfd987193&0xffffffff,o=i+(r^(s=t+(o<<12&0xffffffff|o>>>20))&(t^r))+n[14]+0xa679438e&0xffffffff,o=r+(t^(i=s+(o<<17&0xffffffff|o>>>15))&(s^t))+n[15]+0x49b40821&0xffffffff,r=i+(o<<22&0xffffffff|o>>>10),o=t+(i^s&(r^i))+n[1]+0xf61e2562&0xffffffff,t=r+(o<<5&0xffffffff|o>>>27),o=s+(r^i&(t^r))+n[6]+0xc040b340&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^r&(s^t))+n[11]+0x265e5a51&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=r+(s^t&(i^s))+n[0]+0xe9b6c7aa&0xffffffff,r=i+(o<<20&0xffffffff|o>>>12),o=t+(i^s&(r^i))+n[5]+0xd62f105d&0xffffffff,t=r+(o<<5&0xffffffff|o>>>27),o=s+(r^i&(t^r))+n[10]+0x2441453&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^r&(s^t))+n[15]+0xd8a1e681&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=r+(s^t&(i^s))+n[4]+0xe7d3fbc8&0xffffffff,r=i+(o<<20&0xffffffff|o>>>12),o=t+(i^s&(r^i))+n[9]+0x21e1cde6&0xffffffff,t=r+(o<<5&0xffffffff|o>>>27),o=s+(r^i&(t^r))+n[14]+0xc33707d6&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^r&(s^t))+n[3]+0xf4d50d87&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=r+(s^t&(i^s))+n[8]+0x455a14ed&0xffffffff,r=i+(o<<20&0xffffffff|o>>>12),o=t+(i^s&(r^i))+n[13]+0xa9e3e905&0xffffffff,t=r+(o<<5&0xffffffff|o>>>27),o=s+(r^i&(t^r))+n[2]+0xfcefa3f8&0xffffffff,s=t+(o<<9&0xffffffff|o>>>23),o=i+(t^r&(s^t))+n[7]+0x676f02d9&0xffffffff,i=s+(o<<14&0xffffffff|o>>>18),o=r+(s^t&(i^s))+n[12]+0x8d2a4c8a&0xffffffff,o=t+((r=i+(o<<20&0xffffffff|o>>>12))^i^s)+n[5]+0xfffa3942&0xffffffff,o=s+((t=r+(o<<4&0xffffffff|o>>>28))^r^i)+n[8]+0x8771f681&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^r)+n[11]+0x6d9d6122&0xffffffff,o=r+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+n[14]+0xfde5380c&0xffffffff,o=t+((r=i+(o<<23&0xffffffff|o>>>9))^i^s)+n[1]+0xa4beea44&0xffffffff,o=s+((t=r+(o<<4&0xffffffff|o>>>28))^r^i)+n[4]+0x4bdecfa9&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^r)+n[7]+0xf6bb4b60&0xffffffff,o=r+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+n[10]+0xbebfbc70&0xffffffff,o=t+((r=i+(o<<23&0xffffffff|o>>>9))^i^s)+n[13]+0x289b7ec6&0xffffffff,o=s+((t=r+(o<<4&0xffffffff|o>>>28))^r^i)+n[0]+0xeaa127fa&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^r)+n[3]+0xd4ef3085&0xffffffff,o=r+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+n[6]+0x4881d05&0xffffffff,o=t+((r=i+(o<<23&0xffffffff|o>>>9))^i^s)+n[9]+0xd9d4d039&0xffffffff,o=s+((t=r+(o<<4&0xffffffff|o>>>28))^r^i)+n[12]+0xe6db99e5&0xffffffff,o=i+((s=t+(o<<11&0xffffffff|o>>>21))^t^r)+n[15]+0x1fa27cf8&0xffffffff,o=r+((i=s+(o<<16&0xffffffff|o>>>16))^s^t)+n[2]+0xc4ac5665&0xffffffff,r=i+(o<<23&0xffffffff|o>>>9),o=t+(i^(r|~s))+n[0]+0xf4292244&0xffffffff,t=r+(o<<6&0xffffffff|o>>>26),o=s+(r^(t|~i))+n[7]+0x432aff97&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~r))+n[14]+0xab9423a7&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=r+(s^(i|~t))+n[5]+0xfc93a039&0xffffffff,r=i+(o<<21&0xffffffff|o>>>11),o=t+(i^(r|~s))+n[12]+0x655b59c3&0xffffffff,t=r+(o<<6&0xffffffff|o>>>26),o=s+(r^(t|~i))+n[3]+0x8f0ccc92&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~r))+n[10]+0xffeff47d&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=r+(s^(i|~t))+n[1]+0x85845dd1&0xffffffff,r=i+(o<<21&0xffffffff|o>>>11),o=t+(i^(r|~s))+n[8]+0x6fa87e4f&0xffffffff,t=r+(o<<6&0xffffffff|o>>>26),o=s+(r^(t|~i))+n[15]+0xfe2ce6e0&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~r))+n[6]+0xa3014314&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=r+(s^(i|~t))+n[13]+0x4e0811a1&0xffffffff,r=i+(o<<21&0xffffffff|o>>>11),o=t+(i^(r|~s))+n[4]+0xf7537e82&0xffffffff,t=r+(o<<6&0xffffffff|o>>>26),o=s+(r^(t|~i))+n[11]+0xbd3af235&0xffffffff,s=t+(o<<10&0xffffffff|o>>>22),o=i+(t^(s|~r))+n[2]+0x2ad7d2bb&0xffffffff,i=s+(o<<15&0xffffffff|o>>>17),o=r+(s^(i|~t))+n[9]+0xeb86d391&0xffffffff,e.g[0]=e.g[0]+t&0xffffffff,e.g[1]=e.g[1]+(i+(o<<21&0xffffffff|o>>>11))&0xffffffff,e.g[2]=e.g[2]+i&0xffffffff,e.g[3]=e.g[3]+s&0xffffffff}function r(e,t){this.h=t;for(var r=[],n=!0,i=e.length-1;0<=i;i--){var s=0|e[i];n&&s==t||(r[i]=s,n=!1)}this.g=r}!function(e,t){function r(){}r.prototype=t.prototype,e.D=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.C=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}(e,function(){this.blockSize=-1}),e.prototype.s=function(){this.g[0]=0x67452301,this.g[1]=0xefcdab89,this.g[2]=0x98badcfe,this.g[3]=0x10325476,this.o=this.h=0},e.prototype.u=function(e,r){void 0===r&&(r=e.length);for(var n=r-this.blockSize,i=this.B,s=this.h,o=0;o<r;){if(0==s)for(;o<=n;)t(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<r;)if(i[s++]=e.charCodeAt(o++),s==this.blockSize){t(this,i),s=0;break}}else for(;o<r;)if(i[s++]=e[o++],s==this.blockSize){t(this,i),s=0;break}}this.h=s,this.o+=r},e.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var r=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&r,r/=256;for(this.u(e),e=Array(16),t=r=0;4>t;++t)for(var n=0;32>n;n+=8)e[r++]=this.g[t]>>>n&255;return e};var n,o={};function a(e){var t;return -128<=e&&128>e?(t=function(e){return new r([0|e],0>e?-1:0)},Object.prototype.hasOwnProperty.call(o,e)?o[e]:o[e]=t(e)):new r([0|e],0>e?-1:0)}function l(e){if(isNaN(e)||!isFinite(e))return h;if(0>e)return g(l(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=0x100000000;return new r(t,0)}var h=a(0),c=a(1),f=a(0x1000000);function d(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function p(e){return -1==e.h}function g(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(c)}function m(e,t){return e.add(g(t))}function y(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function v(e,t){this.g=e,this.h=t}function w(e,t){if(d(t))throw Error("division by zero");if(d(e))return new v(h,h);if(p(e))return t=w(g(e),t),new v(g(t.g),g(t.h));if(p(t))return t=w(e,g(t)),new v(g(t.g),t.h);if(30<e.g.length){if(p(e)||p(t))throw Error("slowDivide_ only works with positive integers.");for(var r=c,n=t;0>=n.l(e);)r=b(r),n=b(n);var i=x(r,1),s=x(n,1);for(n=x(n,2),r=x(r,2);!d(n);){var o=s.add(n);0>=o.l(e)&&(i=i.add(r),s=o),n=x(n,1),r=x(r,1)}return t=m(e,i.j(t)),new v(i,t)}for(i=h;0<=e.l(t);){for(n=48>=(n=Math.ceil(Math.log(r=Math.max(1,Math.floor(e.m()/t.m())))/Math.LN2))?1:Math.pow(2,n-48),o=(s=l(r)).j(t);p(o)||0<o.l(e);)r-=n,o=(s=l(r)).j(t);d(s)&&(s=c),i=i.add(s),e=m(e,o)}return new v(i,e)}function b(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function x(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],o=0;o<i;o++)s[o]=0<t?e.i(o+n)>>>t|e.i(o+n+1)<<32-t:e.i(o+n);return new r(s,e.h)}(n=r.prototype).m=function(){if(p(this))return-g(this).m();for(var e=0,t=1,r=0;r<this.g.length;r++){var n=this.i(r);e+=(0<=n?n:0x100000000+n)*t,t*=0x100000000}return e},n.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(d(this))return"0";if(p(this))return"-"+g(this).toString(e);for(var t=l(Math.pow(e,6)),r=this,n="";;){var i=w(r,t).g,s=((0<(r=m(r,i.j(t))).g.length?r.g[0]:r.h)>>>0).toString(e);if(d(r=i))return s+n;for(;6>s.length;)s="0"+s;n=s+n}},n.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},n.l=function(e){return p(e=m(this,e))?-1:+!d(e)},n.abs=function(){return p(this)?g(this):this},n.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var o=i+(65535&this.i(s))+(65535&e.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,n[s]=a<<16|o}return new r(n,-0x80000000&n[n.length-1]?-1:0)},n.j=function(e){if(d(this)||d(e))return h;if(p(this))return p(e)?g(this).j(g(e)):g(g(this).j(e));if(p(e))return g(this.j(g(e)));if(0>this.l(f)&&0>e.l(f))return l(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var o=this.i(i)>>>16,a=65535&this.i(i),u=e.i(s)>>>16,c=65535&e.i(s);n[2*i+2*s]+=a*c,y(n,2*i+2*s),n[2*i+2*s+1]+=o*c,y(n,2*i+2*s+1),n[2*i+2*s+1]+=a*u,y(n,2*i+2*s+1),n[2*i+2*s+2]+=o*u,y(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},n.A=function(e){return w(this,e).h},n.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},n.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},n.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,s=u.Md5=e,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=l,r.fromString=function e(t,r){if(0==t.length)throw Error("number format error: empty string");if(2>(r=r||10)||36<r)throw Error("radix out of range: "+r);if("-"==t.charAt(0))return g(e(t.substring(1),r));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=l(Math.pow(r,8)),i=h,s=0;s<t.length;s+=8){var o=Math.min(8,t.length-s),a=parseInt(t.substring(s,s+o),r);8>o?(o=l(Math.pow(r,o)),i=i.j(o).add(l(a))):i=(i=i.j(n)).add(l(a))}return i},i=u.Integer=r}).apply(void 0!==l?l:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"146Zc":[function(e,t,r,n){var i,s,o,a,l,u,h,c,f,d=e("@parcel/transformer-js/src/esmodule-helpers.js");d.defineInteropFlag(r),d.export(r,"ErrorCode",()=>l),d.export(r,"Event",()=>h),d.export(r,"EventType",()=>a),d.export(r,"FetchXmlHttpFactory",()=>s),d.export(r,"Stat",()=>u),d.export(r,"WebChannel",()=>o),d.export(r,"XhrIo",()=>i),d.export(r,"createWebChannelTransport",()=>f),d.export(r,"default",()=>m),d.export(r,"getStatEventTarget",()=>c);var p=arguments[3],g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==p?p:"undefined"!=typeof self?self:{},m={};(function(){var e,t,r,n="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,r){return e==Array.prototype||e==Object.prototype||(e[t]=r.value),e},d=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof g&&g];for(var t=0;t<e.length;++t){var r=e[t];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}(this);!function(e,t){if(t)e:{var r=d;e=e.split(".");for(var i=0;i<e.length-1;i++){var s=e[i];if(!(s in r))break e;r=r[s]}(t=t(i=r[e=e[e.length-1]]))!=i&&null!=t&&n(r,e,{configurable:!0,writable:!0,value:t})}}("Array.prototype.values",function(e){return e||function(){var e,t,r,n,i;return e=this,t=function(e,t){return t},e instanceof String&&(e+=""),r=0,n=!1,(i={next:function(){if(!n&&r<e.length){var i=r++;return{value:t(i,e[i]),done:!1}}return n=!0,{done:!0,value:void 0}}})[Symbol.iterator]=function(){return i},i}});var p=p||{},y=this||self;function v(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function w(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function b(e,t,r){return e.call.apply(e.bind,arguments)}function x(e,t,r){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,n),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function I(e,t,r){return(I=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?b:x).apply(null,arguments)}function E(e,t){var r=Array.prototype.slice.call(arguments,1);return function(){var t=r.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function _(e,t){function r(){}r.prototype=t.prototype,e.aa=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.Qb=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}function T(e){let t=e.length;if(0<t){let r=Array(t);for(let n=0;n<t;n++)r[n]=e[n];return r}return[]}function S(e,t){for(let t=1;t<arguments.length;t++){let r=arguments[t];if(v(r)){let t=e.length||0,n=r.length||0;e.length=t+n;for(let i=0;i<n;i++)e[t+i]=r[i]}else e.push(r)}}function C(e){return/^[\s\xa0]*$/.test(e)}function A(){var e=y.navigator;return e&&(e=e.userAgent)?e:""}function D(e){return D[" "](e),e}D[" "]=function(){};var k=-1!=A().indexOf("Gecko")&&(-1==A().toLowerCase().indexOf("webkit")||-1!=A().indexOf("Edge"))&&-1==A().indexOf("Trident")&&-1==A().indexOf("MSIE")&&-1==A().indexOf("Edge");function N(e,t,r){for(let n in e)t.call(r,e[n],n,e)}function O(e){let t={};for(let r in e)t[r]=e[r];return t}let R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function L(e,t){let r,n;for(let t=1;t<arguments.length;t++){for(r in n=arguments[t])e[r]=n[r];for(let t=0;t<R.length;t++)r=R[t],Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}}var M=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new P,e=>e.reset());class P{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let F,B=!1,V=new class{constructor(){this.h=this.g=null}add(e,t){let r=M.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}},U=()=>{let e=y.Promise.resolve(void 0);F=()=>{e.then(j)}};var j=()=>{let e;for(var t;e=null,V.g&&(e=V.g,V.g=V.g.next,V.g||(V.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){y.setTimeout(()=>{throw e},0)}(e)}M.j(t),100>M.h&&(M.h++,t.next=M.g,M.g=t)}B=!1};function q(){this.s=this.s,this.C=this.C}function z(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},z.prototype.h=function(){this.defaultPrevented=!0};var $=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};y.addEventListener("test",e,t),y.removeEventListener("test",e,t)}catch(e){}return e}();function G(e,t){if(z.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var r=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(k){e:{try{D(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==r?t=e.fromElement:"mouseout"==r&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:K[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&G.aa.h.call(this)}}_(G,z);var K={2:"touch",3:"pen",4:"mouse"};G.prototype.h=function(){G.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var H="closure_listenable_"+(1e6*Math.random()|0),Q=0;function W(e,t,r,n,i){this.listener=e,this.proxy=null,this.src=t,this.type=r,this.capture=!!n,this.ha=i,this.key=++Q,this.da=this.fa=!1}function Y(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function J(e){this.src=e,this.g={},this.h=0}function X(e,t){var r=t.type;if(r in e.g){var n,i=e.g[r],s=Array.prototype.indexOf.call(i,t,void 0);(n=0<=s)&&Array.prototype.splice.call(i,s,1),n&&(Y(t),0==e.g[r].length&&(delete e.g[r],e.h--))}}function Z(e,t,r,n){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&!!r==s.capture&&s.ha==n)return i}return -1}J.prototype.add=function(e,t,r,n,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=Z(e,t,n,i);return -1<o?(t=e[o],r||(t.fa=!1)):((t=new W(t,this.src,s,!!n,i)).fa=r,e.push(t)),t};var ee="closure_lm_"+(1e6*Math.random()|0),et={};function er(e,t,r,n,i,s){if(!t)throw Error("Invalid event type");var o=w(i)?!!i.capture:!!i,a=eo(e);if(a||(e[ee]=a=new J(e)),(r=a.add(t,r,n,o,s)).proxy)return r;if(n=function e(t){return es.call(e.src,e.listener,t)},r.proxy=n,n.src=e,n.listener=r,e.addEventListener)$||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),n,i);else if(e.attachEvent)e.attachEvent(ei(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return r}function en(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[H])X(t.i,e);else{var r=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(r,n,e.capture):t.detachEvent?t.detachEvent(ei(r),n):t.addListener&&t.removeListener&&t.removeListener(n),(r=eo(t))?(X(r,e),0==r.h&&(r.src=null,t[ee]=null)):Y(e)}}}function ei(e){return e in et?et[e]:et[e]="on"+e}function es(e,t){if(e.da)e=!0;else{t=new G(t,this);var r=e.listener,n=e.ha||e.src;e.fa&&en(e),e=r.call(n,t)}return e}function eo(e){return(e=e[ee])instanceof J?e:null}var ea="__closure_events_fn_"+(1e9*Math.random()>>>0);function el(e){return"function"==typeof e?e:(e[ea]||(e[ea]=function(t){return e.handleEvent(t)}),e[ea])}function eu(){q.call(this),this.i=new J(this),this.M=this,this.F=null}function eh(e,t){var r,n=e.F;if(n)for(r=[];n;n=n.F)r.push(n);if(e=e.M,n=t.type||t,"string"==typeof t)t=new z(t,e);else if(t instanceof z)t.target=t.target||e;else{var i=t;L(t=new z(n,e),i)}if(i=!0,r)for(var s=r.length-1;0<=s;s--){var o=t.g=r[s];i=ec(o,n,!0,t)&&i}if(i=ec(o=t.g=e,n,!0,t)&&i,i=ec(o,n,!1,t)&&i,r)for(s=0;s<r.length;s++)i=ec(o=t.g=r[s],n,!1,t)&&i}function ec(e,t,r,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==r){var a=o.listener,l=o.ha||o.src;o.fa&&X(e.i,o),i=!1!==a.call(l,n)&&i}}return i&&!n.defaultPrevented}function ef(e,t,r){if("function"==typeof e)r&&(e=I(e,r));else if(e&&"function"==typeof e.handleEvent)e=I(e.handleEvent,e);else throw Error("Invalid listener argument");return 0x7fffffff<Number(t)?-1:y.setTimeout(e,t||0)}_(eu,q),eu.prototype[H]=!0,eu.prototype.removeEventListener=function(e,t,r,n){!function e(t,r,n,i,s){if(Array.isArray(r))for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);else(i=w(i)?!!i.capture:!!i,n=el(n),t&&t[H])?(t=t.i,(r=String(r).toString())in t.g&&-1<(n=Z(o=t.g[r],n,i,s))&&(Y(o[n]),Array.prototype.splice.call(o,n,1),0==o.length&&(delete t.g[r],t.h--))):t&&(t=eo(t))&&(r=t.g[r.toString()],t=-1,r&&(t=Z(r,n,i,s)),(n=-1<t?r[t]:null)&&en(n))}(this,e,t,r,n)},eu.prototype.N=function(){if(eu.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var r=t.g[e],n=0;n<r.length;n++)Y(r[n]);delete t.g[e],t.h--}}this.F=null},eu.prototype.K=function(e,t,r,n){return this.i.add(String(e),t,!1,r,n)},eu.prototype.L=function(e,t,r,n){return this.i.add(String(e),t,!0,r,n)};class ed extends q{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=ef(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.l);let r=t.h;t.h=null,t.m.apply(null,r)}(this)}N(){super.N(),this.g&&(y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ep(e){q.call(this),this.h=e,this.g={}}_(ep,q);var eg=[];function em(e){N(e.g,function(e,t){this.g.hasOwnProperty(t)&&en(e)},e),e.g={}}ep.prototype.N=function(){ep.aa.N.call(this),em(this)},ep.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ey=y.JSON.stringify,ev=y.JSON.parse,ew=class{stringify(e){return y.JSON.stringify(e,void 0)}parse(e){return y.JSON.parse(e,void 0)}};function eb(){}function ex(e){return e.h||(e.h=e.i())}function eI(){}eb.prototype.h=null;var eE={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function e_(){z.call(this,"d")}function eT(){z.call(this,"c")}_(e_,z),_(eT,z);var eS={},eC=null;function eA(){return eC=eC||new eu}function eD(e){z.call(this,eS.La,e)}function ek(e){let t=eA();eh(t,new eD(t))}function eN(e,t){z.call(this,eS.STAT_EVENT,e),this.stat=t}function eO(e){let t=eA();eh(t,new eN(t,e))}function eR(e,t){z.call(this,eS.Ma,e),this.size=t}function eL(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return y.setTimeout(function(){e()},t)}function eM(){this.g=!0}function eP(e,t,r,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var r=JSON.parse(t);if(r){for(e=0;e<r.length;e++)if(Array.isArray(r[e])){var n=r[e];if(!(2>n.length)){var i=n[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}}return ey(r)}catch(e){return t}}(e,r)+(n?" "+n:"")})}eS.La="serverreachability",_(eD,z),eS.STAT_EVENT="statevent",_(eN,z),eS.Ma="timingevent",_(eR,z),eM.prototype.xa=function(){this.g=!1},eM.prototype.info=function(){};var eF={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eB={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function eV(){}function eU(e,t,r,n){this.j=e,this.i=t,this.l=r,this.R=n||1,this.U=new ep(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ej}function ej(){this.i=null,this.g="",this.h=!1}_(eV,eb),eV.prototype.g=function(){return new XMLHttpRequest},eV.prototype.i=function(){return{}},t=new eV;var eq={},ez={};function e$(e,t,r){e.L=1,e.v=ts(te(t)),e.m=r,e.P=!0,eG(e,null)}function eG(e,t){e.F=Date.now(),eH(e),e.A=te(e.v);var r=e.A,n=e.R;Array.isArray(n)||(n=[String(n)]),tv(r.i,"t",n),e.C=0,r=e.j.J,e.h=new ej,e.g=t5(e.j,r?t:null,!e.m),0<e.O&&(e.M=new ed(I(e.Y,e,e.g),e.O)),t=e.U,r=e.g,n=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(eg[0]=i.toString()),i=eg);for(var s=0;s<i.length;s++){var o=function e(t,r,n,i,s){if(i&&i.once)return function e(t,r,n,i,s){if(Array.isArray(r)){for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);return null}return n=el(n),t&&t[H]?t.L(r,n,w(i)?!!i.capture:!!i,s):er(t,r,n,!0,i,s)}(t,r,n,i,s);if(Array.isArray(r)){for(var o=0;o<r.length;o++)e(t,r[o],n,i,s);return null}return n=el(n),t&&t[H]?t.K(r,n,w(i)?!!i.capture:!!i,s):er(t,r,n,!1,i,s)}(r,i[s],n||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?O(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ek(),function(e,t,r,n,i,s){e.info(function(){if(e.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");o=2<=c.length&&"type"==c[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+n+") [attempt "+i+"]: "+t+"\n"+r+"\n"+o})}(e.i,e.u,e.A,e.l,e.R,e.m)}function eK(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.j.Ca}function eH(e){e.S=Date.now()+e.I,eQ(e,e.I)}function eQ(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=eL(I(e.ba,e),t)}function eW(e){e.B&&(y.clearTimeout(e.B),e.B=null)}function eY(e){0==e.j.G||e.J||tZ(e.j,e)}function eJ(e){eW(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,em(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function eX(e,t){try{var r=e.j;if(0!=r.G&&(r.g==e||e6(r.h,e))){if(!e.K&&e6(r.h,e)&&3==r.G){try{var n=r.Da.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var i=n;if(0==i[0]){e:if(!r.u){if(r.g){if(r.g.F+3e3<e.F)tX(r),tq(r);else break e}tW(r),eO(18)}}else r.za=i[1],0<r.za-r.T&&37500>i[2]&&r.F&&0==r.v&&!r.C&&(r.C=eL(I(r.Za,r),6e3));if(1>=e2(r.h)&&r.ca){try{r.ca()}catch(e){}r.ca=void 0}}else t1(r,11)}else if((e.K||r.g==e)&&tX(r),!C(t))for(i=r.Da.g.parse(t),t=0;t<i.length;t++){let a=i[t];if(r.T=a[0],a=a[1],2==r.G){if("c"==a[0]){r.K=a[1],r.ia=a[2];let t=a[3];null!=t&&(r.la=t,r.j.info("VER="+r.la));let i=a[4];null!=i&&(r.Aa=i,r.j.info("SVER="+r.Aa));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(n=1.5*l,r.L=n,r.j.info("backChannelRequestTimeoutMs_="+n)),n=r;let u=e.g;if(u){let e=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(e5(s,s.h),s.h=null))}if(n.D){let e=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.ya=e,ti(n.I,n.D,e))}}if(r.G=3,r.l&&r.l.ua(),r.ba&&(r.R=Date.now()-e.F,r.j.info("Handshake RTT: "+r.R+"ms")),(n=r).qa=t6(n,n.J?n.ia:null,n.W),e.K){e3(n.h,e);var o=n.L;o&&(e.I=o),e.B&&(eW(e),eH(e)),n.g=e}else tQ(n);0<r.i.length&&t$(r)}else"stop"!=a[0]&&"close"!=a[0]||t1(r,7)}else 3==r.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?t1(r,7):tj(r):"noop"!=a[0]&&r.l&&r.l.ta(a),r.v=0)}}ek(4)}catch(e){}}eU.prototype.ca=function(e){e=e.target;let t=this.M;t&&3==tF(e)?t.j():this.Y(e)},eU.prototype.Y=function(e){try{if(e==this.g)e:{let c=tF(this.g);var t=this.g.Ba();let f=this.g.Z();if(!(3>c)&&(3!=c||this.g&&(this.h.h||this.g.oa()||tB(this.g)))){this.J||4!=c||7==t||(8==t||0>=f?ek(3):ek(2)),eW(this);var r=this.g.Z();this.X=r;t:if(eK(this)){var n=tB(this.g);e="";var i=n.length,s=4==tF(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){eJ(this),eY(this);var o="";break t}this.h.i=new y.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(n[t],{stream:!(s&&t==i-1)});n.length=0,this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==r,function(e,t,r,n,i,s,o){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+i+"]: "+t+"\n"+r+"\n"+s+" "+o})}(this.i,this.u,this.A,this.l,this.R,c,r),this.o){if(this.T&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(a)){var u=a;break t}}u=null}if(r=u)eP(this.i,this.l,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eX(this,r);else{this.o=!1,this.s=3,eO(12),eJ(this),eY(this);break e}}if(this.P){let e;for(r=!0;!this.J&&this.C<o.length;)if((e=function(e,t){var r=e.C,n=t.indexOf("\n",r);return -1==n?ez:isNaN(r=Number(t.substring(r,n)))?eq:(n+=1)+r>t.length?ez:(t=t.slice(n,n+r),e.C=n+r,t)}(this,o))==ez){4==c&&(this.s=4,eO(14),r=!1),eP(this.i,this.l,null,"[Incomplete Response]");break}else if(e==eq){this.s=4,eO(15),eP(this.i,this.l,o,"[Invalid Chunk]"),r=!1;break}else eP(this.i,this.l,e,null),eX(this,e);if(eK(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=c||0!=o.length||this.h.h||(this.s=1,eO(16),r=!1),this.o=this.o&&r,r){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),tY(h),h.M=!0,eO(11))}}else eP(this.i,this.l,o,"[Invalid Chunked Response]"),eJ(this),eY(this)}else eP(this.i,this.l,o,null),eX(this,o);4==c&&eJ(this),this.o&&!this.J&&(4==c?tZ(this.j,this):(this.o=!1,eH(this)))}else(function(e){let t={};e=(e.g&&2<=tF(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(C(e[n]))continue;var r=function(e){var t=1;e=e.split(":");let r=[];for(;0<t&&e.length;)r.push(e.shift()),t--;return e.length&&r.push(e.join(":")),r}(e[n]);let i=r[0];if("string"!=typeof(r=r[1]))continue;r=r.trim();let s=t[i]||[];t[i]=s,s.push(r)}!function(e,t){for(let r in e)t.call(void 0,e[r],r,e)}(t,function(e){return e.join(", ")})})(this.g),400==r&&0<o.indexOf("Unknown SID")?(this.s=3,eO(12)):(this.s=0,eO(13)),eJ(this),eY(this)}}}catch(e){}finally{}},eU.prototype.cancel=function(){this.J=!0,eJ(this)},eU.prototype.ba=function(){this.B=null;let e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(ek(),eO(17)),eJ(this),this.s=2,eY(this)):eQ(this,this.S-e)};var eZ=class{constructor(e,t){this.g=e,this.map=t}};function e0(e){this.l=e||10,e=y.PerformanceNavigationTiming?0<(e=y.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(y.chrome&&y.chrome.loadTimes&&y.chrome.loadTimes()&&y.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function e1(e){return!!e.h||!!e.g&&e.g.size>=e.j}function e2(e){return e.h?1:e.g?e.g.size:0}function e6(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function e5(e,t){e.g?e.g.add(t):e.h=t}function e3(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function e8(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let r of e.g.values())t=t.concat(r.D);return t}return T(e.i)}function e4(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(v(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var r=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(v(e)||"string"==typeof e){var t=[];e=e.length;for(var r=0;r<e;r++)t.push(r);return t}for(let n in t=[],r=0,e)t[r++]=n;return t}}}(e),n=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(v(e)){for(var t=[],r=e.length,n=0;n<r;n++)t.push(e[n]);return t}for(n in t=[],r=0,e)t[r++]=e[n];return t}(e),i=n.length,s=0;s<i;s++)t.call(void 0,n[s],r&&r[s],e)}e0.prototype.cancel=function(){if(this.i=e8(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var e9=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function e7(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof e7){this.h=e.h,tt(this,e.j),this.o=e.o,this.g=e.g,tr(this,e.s),this.l=e.l;var t=e.i,r=new tp;r.i=t.i,t.g&&(r.g=new Map(t.g),r.h=t.h),tn(this,r),this.m=e.m}else e&&(t=String(e).match(e9))?(this.h=!1,tt(this,t[1]||"",!0),this.o=to(t[2]||""),this.g=to(t[3]||"",!0),tr(this,t[4]),this.l=to(t[5]||"",!0),tn(this,t[6]||"",!0),this.m=to(t[7]||"")):(this.h=!1,this.i=new tp(null,this.h))}function te(e){return new e7(e)}function tt(e,t,r){e.j=r?to(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function tr(e,t){if(t){if(isNaN(t=Number(t))||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function tn(e,t,r){var n,i;t instanceof tp?(e.i=t,n=e.i,(i=e.h)&&!n.j&&(tg(n),n.i=null,n.g.forEach(function(e,t){var r=t.toLowerCase();t!=r&&(tm(this,t),tv(this,r,e))},n)),n.j=i):(r||(t=ta(t,tf)),e.i=new tp(t,e.h))}function ti(e,t,r){e.i.set(t,r)}function ts(e){return ti(e,"zx",Math.floor(0x80000000*Math.random()).toString(36)+Math.abs(Math.floor(0x80000000*Math.random())^Date.now()).toString(36)),e}function to(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ta(e,t,r){return"string"==typeof e?(e=encodeURI(e).replace(t,tl),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tl(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}e7.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ta(t,tu,!0),":");var r=this.g;return(r||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(ta(t,tu,!0),"@"),e.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(r=this.s)&&e.push(":",String(r))),(r=this.l)&&(this.g&&"/"!=r.charAt(0)&&e.push("/"),e.push(ta(r,"/"==r.charAt(0)?tc:th,!0))),(r=this.i.toString())&&e.push("?",r),(r=this.m)&&e.push("#",ta(r,td)),e.join("")};var tu=/[#\/\?@]/g,th=/[#\?:]/g,tc=/[#\?]/g,tf=/[#\?@]/g,td=/#/g;function tp(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function tg(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var r=0;r<e.length;r++){var n=e[r].indexOf("="),i=null;if(0<=n){var s=e[r].substring(0,n);i=e[r].substring(n+1)}else s=e[r];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,r){e.add(decodeURIComponent(t.replace(/\+/g," ")),r)}))}function tm(e,t){tg(e),t=tw(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ty(e,t){return tg(e),t=tw(e,t),e.g.has(t)}function tv(e,t,r){tm(e,t),0<r.length&&(e.i=null,e.g.set(tw(e,t),T(r)),e.h+=r.length)}function tw(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function tb(e,t,r,n,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),n(r)}catch(e){}}function tx(){this.g=new ew}function tI(e){this.l=e.Ub||null,this.j=e.eb||!1}function tE(e,t){eu.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function t_(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function tT(e){e.readyState=4,e.l=null,e.j=null,e.v=null,tS(e)}function tS(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function tC(e){let t="";return N(e,function(e,r){t+=r,t+=":",t+=e,t+="\r\n"}),t}function tA(e,t,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=tC(r),"string"==typeof e?null!=r&&encodeURIComponent(String(r)):ti(e,t,r))}function tD(e){eu.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(r=tp.prototype).add=function(e,t){tg(this),this.i=null,e=tw(this,e);var r=this.g.get(e);return r||this.g.set(e,r=[]),r.push(t),this.h+=1,this},r.forEach=function(e,t){tg(this),this.g.forEach(function(r,n){r.forEach(function(r){e.call(t,r,n,this)},this)},this)},r.na=function(){tg(this);let e=Array.from(this.g.values()),t=Array.from(this.g.keys()),r=[];for(let n=0;n<t.length;n++){let i=e[n];for(let e=0;e<i.length;e++)r.push(t[n])}return r},r.V=function(e){tg(this);let t=[];if("string"==typeof e)ty(this,e)&&(t=t.concat(this.g.get(tw(this,e))));else{e=Array.from(this.g.values());for(let r=0;r<e.length;r++)t=t.concat(e[r])}return t},r.set=function(e,t){return tg(this),this.i=null,ty(this,e=tw(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(var r=0;r<t.length;r++){var n=t[r];let s=encodeURIComponent(String(n)),o=this.V(n);for(n=0;n<o.length;n++){var i=s;""!==o[n]&&(i+="="+encodeURIComponent(String(o[n]))),e.push(i)}}return this.i=e.join("&")},_(tI,eb),tI.prototype.g=function(){return new tE(this.l,this.j)},tI.prototype.i=(e={},function(){return e}),_(tE,eu),(r=tE.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,tS(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||y).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,tT(this)),this.readyState=0},r.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tS(this)),this.g&&(this.readyState=3,tS(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==y.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;t_(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))}},r.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tT(this):tS(this),3==this.readyState&&t_(this)}},r.Ra=function(e){this.g&&(this.response=this.responseText=e,tT(this))},r.Qa=function(e){this.g&&(this.response=e,tT(this))},r.ga=function(){this.g&&tT(this)},r.setRequestHeader=function(e,t){this.u.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var r=t.next();!r.done;)e.push((r=r.value)[0]+": "+r[1]),r=t.next();return e.join("\r\n")},Object.defineProperty(tE.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),_(tD,eu);var tk=/^https?$/i,tN=["POST","PUT"];function tO(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,tR(e),tM(e)}function tR(e){e.A||(e.A=!0,eh(e,"complete"),eh(e,"error"))}function tL(e){if(e.h&&void 0!==p&&(!e.v[1]||4!=tF(e)||2!=e.Z())){if(e.u&&4==tF(e))ef(e.Ea,0,e);else if(eh(e,"readystatechange"),4==tF(e)){e.h=!1;try{let o=e.Z();switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,r,n=!0;break;default:n=!1}if(!(t=n)){if(r=0===o){var i=String(e.D).match(e9)[1]||null;!i&&y.self&&y.self.location&&(i=y.self.location.protocol.slice(0,-1)),r=!tk.test(i?i.toLowerCase():"")}t=r}if(t)eh(e,"complete"),eh(e,"success");else{e.m=6;try{var s=2<tF(e)?e.g.statusText:""}catch(e){s=""}e.l=s+" ["+e.Z()+"]",tR(e)}}finally{tM(e)}}}}function tM(e,t){if(e.g){tP(e);let r=e.g,n=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||eh(e,"ready");try{r.onreadystatechange=n}catch(e){}}}function tP(e){e.I&&(y.clearTimeout(e.I),e.I=null)}function tF(e){return e.g?e.g.readyState:0}function tB(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tV(e,t,r){return r&&r.internalChannelParams&&r.internalChannelParams[e]||t}function tU(e){this.Aa=0,this.i=[],this.j=new eM,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tV("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tV("baseRetryDelayMs",5e3,e),this.cb=tV("retryDelaySeedMs",1e4,e),this.Wa=tV("forwardChannelMaxRetries",2,e),this.wa=tV("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new e0(e&&e.concurrentRequestLimit),this.Da=new tx,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function tj(e){if(tz(e),3==e.G){var t=e.U++,r=te(e.I);if(ti(r,"SID",e.K),ti(r,"RID",t),ti(r,"TYPE","terminate"),tK(e,r),(t=new eU(e,e.j,t)).L=2,t.v=ts(te(r)),r=!1,y.navigator&&y.navigator.sendBeacon)try{r=y.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!r&&y.Image&&((new Image).src=t.v,r=!0),r||(t.g=t5(t.j,null),t.g.ea(t.v)),t.F=Date.now(),eH(t)}t2(e)}function tq(e){e.g&&(tY(e),e.g.cancel(),e.g=null)}function tz(e){tq(e),e.u&&(y.clearTimeout(e.u),e.u=null),tX(e),e.h.cancel(),e.s&&("number"==typeof e.s&&y.clearTimeout(e.s),e.s=null)}function t$(e){if(!e1(e.h)&&!e.s){e.s=!0;var t=e.Ga;F||U(),B||(F(),B=!0),V.add(t,e),e.B=0}}function tG(e,t){var r;r=t?t.l:e.U++;let n=te(e.I);ti(n,"SID",e.K),ti(n,"RID",r),ti(n,"AID",e.T),tK(e,n),e.m&&e.o&&tA(n,e.m,e.o),r=new eU(e,e.j,r,e.B+1),null===e.m&&(r.H=e.o),t&&(e.i=t.D.concat(e.i)),t=tH(e,r,1e3),r.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),e5(e.h,r),e$(r,n,t)}function tK(e,t){e.H&&N(e.H,function(e,r){ti(t,r,e)}),e.l&&e4({},function(e,r){ti(t,r,e)})}function tH(e,t,r){r=Math.min(e.i.length,r);var n=e.l?I(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){let e=["count="+r];-1==t?0<r?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<r;o++){let r=i[o].g,a=i[o].map;if(0>(r-=t))t=Math.max(0,i[o].g-100),s=!1;else try{!function(e,t,r){let n=r||"";try{e4(e,function(e,r){let i=e;w(e)&&(i=ey(e)),t.push(n+r+"="+encodeURIComponent(i))})}catch(e){throw t.push(n+"type="+encodeURIComponent("_badmap")),e}}(a,e,"req"+r+"_")}catch(e){n&&n(a)}}if(s){n=e.join("&");break e}}}return e=e.i.splice(0,r),t.D=e,n}function tQ(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;F||U(),B||(F(),B=!0),V.add(t,e),e.v=0}}function tW(e){return!e.g&&!e.u&&!(3<=e.v)&&(e.Y++,e.u=eL(I(e.Fa,e),t0(e,e.v)),e.v++,!0)}function tY(e){null!=e.A&&(y.clearTimeout(e.A),e.A=null)}function tJ(e){e.g=new eU(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=te(e.qa);ti(t,"RID","rpc"),ti(t,"SID",e.K),ti(t,"AID",e.T),ti(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&ti(t,"TO",e.ja),ti(t,"TYPE","xmlhttp"),tK(e,t),e.m&&e.o&&tA(t,e.m,e.o),e.L&&(e.g.I=e.L);var r=e.g;e=e.ia,r.L=1,r.v=ts(te(t)),r.m=null,r.P=!0,eG(r,e)}function tX(e){null!=e.C&&(y.clearTimeout(e.C),e.C=null)}function tZ(e,t){var r=null;if(e.g==t){tX(e),tY(e),e.g=null;var n=2}else{if(!e6(e.h,t))return;r=t.D,e3(e.h,t),n=1}if(0!=e.G){if(t.o){if(1==n){r=t.m?t.m.length:0,t=Date.now()-t.F;var i,s=e.B;eh(n=eA(),new eR(n,r)),t$(e)}else tQ(e)}else if(3==(s=t.s)||0==s&&0<t.X||!(1==n&&(i=t,!(e2(e.h)>=e.h.j-+!!e.s)&&(e.s?(e.i=i.D.concat(e.i),!0):1!=e.G&&2!=e.G&&!(e.B>=(e.Va?0:e.Wa))&&(e.s=eL(I(e.Ga,e,i),t0(e,e.B)),e.B++,!0)))||2==n&&tW(e)))switch(r&&0<r.length&&((t=e.h).i=t.i.concat(r)),s){case 1:t1(e,5);break;case 4:t1(e,10);break;case 3:t1(e,6);break;default:t1(e,2)}}}function t0(e,t){let r=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(r*=2),r*t}function t1(e,t){if(e.j.info("Error code "+t),2==t){var r=I(e.fb,e),n=e.Xa;let t=!n;n=new e7(n||"//www.google.com/images/cleardot.gif"),y.location&&"http"==y.location.protocol||tt(n,"https"),ts(n),t?function(e,t){let r=new eM;if(y.Image){let n=new Image;n.onload=E(tb,r,"TestLoadImage: loaded",!0,t,n),n.onerror=E(tb,r,"TestLoadImage: error",!1,t,n),n.onabort=E(tb,r,"TestLoadImage: abort",!1,t,n),n.ontimeout=E(tb,r,"TestLoadImage: timeout",!1,t,n),y.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(n.toString(),r):function(e,t){let r=new eM,n=new AbortController,i=setTimeout(()=>{n.abort(),tb(r,"TestPingServer: timeout",!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(i),e.ok?tb(r,"TestPingServer: ok",!0,t):tb(r,"TestPingServer: server error",!1,t)}).catch(()=>{clearTimeout(i),tb(r,"TestPingServer: error",!1,t)})}(n.toString(),r)}else eO(2);e.G=0,e.l&&e.l.sa(t),t2(e),tz(e)}function t2(e){if(e.G=0,e.ka=[],e.l){let t=e8(e.h);(0!=t.length||0!=e.i.length)&&(S(e.ka,t),S(e.ka,e.i),e.h.i.length=0,T(e.i),e.i.length=0),e.l.ra()}}function t6(e,t,r){var n=r instanceof e7?te(r):new e7(r);if(""!=n.g)t&&(n.g=t+"."+n.g),tr(n,n.s);else{var i=y.location;n=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new e7(null);n&&tt(s,n),t&&(s.g=t),i&&tr(s,i),r&&(s.l=r),n=s}return r=e.D,t=e.ya,r&&t&&ti(n,r,t),ti(n,"VER",e.la),tK(e,n),n}function t5(e,t,r){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tD(e.Ca&&!e.pa?new tI({eb:r}):e.pa)).Ha(e.J),t}function t3(){}function t8(){}function t4(e,t){eu.call(this),this.g=new tU(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!C(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!C(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new re(this)}function t9(e){e_.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let r in t){e=r;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function t7(){eT.call(this),this.status=1}function re(e){this.g=e}(r=tD.prototype).Ha=function(e){this.J=e},r.ea=function(e,r,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);r=r?r.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():t.g(),this.v=this.o?ex(this.o):ex(t),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(r,String(e),!0),this.B=!1}catch(e){tO(this,e);return}if(e=n||"",n=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let e of i.keys())n.set(e,i.get(e));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[t,o]of(i=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),s=y.FormData&&e instanceof y.FormData,!(0<=Array.prototype.indexOf.call(tN,r,void 0))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(t,o);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{tP(this),this.u=!0,this.g.send(e),this.u=!1}catch(e){tO(this,e)}},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,eh(this,"complete"),eh(this,"abort"),tM(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tM(this,!0)),tD.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?tL(this):this.bb())},r.bb=function(){tL(this)},r.isActive=function(){return!!this.g},r.Z=function(){try{return 2<tF(this)?this.g.status:-1}catch(e){return -1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ev(t)}},r.Ba=function(){return this.m},r.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(r=tU.prototype).la=8,r.G=1,r.connect=function(e,t,r,n){eO(0),this.W=e,this.H=t||{},r&&void 0!==n&&(this.H.OSID=r,this.H.OAID=n),this.F=this.X,this.I=t6(this,null,this.W),t$(this)},r.Ga=function(e){if(this.s){if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;let i=new eU(this,this.j,e),s=this.o;if(this.S&&(s?L(s=O(s),this.S):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,r=0;r<this.i.length;r++){t:{var n=this.i[r];if("__data__"in n.map&&"string"==typeof(n=n.map.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if(4096<(t+=n)){t=r;break e}if(4096===t||r===this.i.length-1){t=r+1;break e}}t=1e3}else t=1e3;t=tH(this,i,t),ti(r=te(this.I),"RID",e),ti(r,"CVER",22),this.D&&ti(r,"X-HTTP-Session-Id",this.D),tK(this,r),s&&(this.O?t="headers="+encodeURIComponent(String(tC(s)))+"&"+t:this.m&&tA(r,this.m,s)),e5(this.h,i),this.Ua&&ti(r,"TYPE","init"),this.P?(ti(r,"$req",t),ti(r,"SID","null"),i.T=!0,e$(i,r,null)):e$(i,r,t),this.G=2}}else 3==this.G&&(e?tG(this,e):0==this.i.length||e1(this.h)||tG(this))}},r.Fa=function(){if(this.u=null,tJ(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=eL(I(this.ab,this),e)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,eO(10),tq(this),tJ(this))},r.Za=function(){null!=this.C&&(this.C=null,tq(this),tW(this),eO(19))},r.fb=function(e){e?(this.j.info("Successfully pinged google.com"),eO(2)):(this.j.info("Failed to ping google.com"),eO(1))},r.isActive=function(){return!!this.l&&this.l.isActive(this)},(r=t3.prototype).ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){},t8.prototype.g=function(e,t){return new t4(e,t)},_(t4,eu),t4.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},t4.prototype.close=function(){tj(this.g)},t4.prototype.o=function(e){var t=this.g;if("string"==typeof e){var r={};r.__data__=e,e=r}else this.u&&((r={}).__data__=ey(e),e=r);t.i.push(new eZ(t.Ya++,e)),3==t.G&&t$(t)},t4.prototype.N=function(){this.g.l=null,delete this.j,tj(this.g),delete this.g,t4.aa.N.call(this)},_(t9,e_),_(t7,eT),_(re,t3),re.prototype.ua=function(){eh(this.g,"a")},re.prototype.ta=function(e){eh(this.g,new t9(e))},re.prototype.sa=function(e){eh(this.g,new t7)},re.prototype.ra=function(){eh(this.g,"b")},t8.prototype.createWebChannel=t8.prototype.g,t4.prototype.send=t4.prototype.o,t4.prototype.open=t4.prototype.m,t4.prototype.close=t4.prototype.close,f=m.createWebChannelTransport=function(){return new t8},c=m.getStatEventTarget=function(){return eA()},h=m.Event=eS,u=m.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},eF.NO_ERROR=0,eF.TIMEOUT=8,eF.HTTP_ERROR=6,l=m.ErrorCode=eF,eB.COMPLETE="complete",a=m.EventType=eB,eI.EventType=eE,eE.OPEN="a",eE.CLOSE="b",eE.ERROR="c",eE.MESSAGE="d",eu.prototype.listen=eu.prototype.K,o=m.WebChannel=eI,s=m.FetchXmlHttpFactory=tI,tD.prototype.listenOnce=tD.prototype.L,tD.prototype.getLastError=tD.prototype.Ka,tD.prototype.getLastErrorCode=tD.prototype.Ba,tD.prototype.getStatus=tD.prototype.Z,tD.prototype.getResponseJson=tD.prototype.Oa,tD.prototype.getResponseText=tD.prototype.oa,tD.prototype.send=tD.prototype.ea,tD.prototype.setWithCredentials=tD.prototype.Ha,i=m.XhrIo=tD}).apply(void 0!==g?g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],ciChV:[function(e,t,r,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r),i.export(r,"db",()=>u),i.export(r,"firebaseConfig",()=>a),i.export(r,"app",()=>l);var s=e("firebase/app"),o=e("firebase/firestore");let a={apiKey:"AIzaSyDs2-eBksIDdQNQnWgHV_j0LHPKPPNvQC4",authDomain:"webtrendwebassignment.firebaseapp.com",projectId:"webtrendwebassignment",storageBucket:"webtrendwebassignment.firebaseapp.com",messagingSenderId:"114226384449",appId:"1:114226384449:web:8eb2172a903346607800c0"},l=(0,s.initializeApp)(a),u=(0,o.getFirestore)(l)},{"firebase/app":"7mwHT","firebase/firestore":"59KHr","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}],"7mwHT":[function(e,t,r,n){var i=e("@parcel/transformer-js/src/esmodule-helpers.js");i.defineInteropFlag(r);var s=e("@firebase/app");i.exportAll(s,r),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,s.registerVersion)("firebase","11.3.1","app")},{"@firebase/app":"3eFbF","@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},["anU40"],"anU40","parcelRequire94c2");
//# sourceMappingURL=index.01a89ed2.js.map
