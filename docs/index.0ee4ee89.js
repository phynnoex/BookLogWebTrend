!function(e,t,n,o,s){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof i[o]&&i[o],r=a.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(t,n){if(!r[t]){if(!e[t]){var s="function"==typeof i[o]&&i[o];if(!n&&s)return s(t,!0);if(a)return a(t,!0);if(l&&"string"==typeof t)return l(t);var d=Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}f.resolve=function(n){var o=e[t][1][n];return null!=o?o:n},f.cache={};var u=r[t]=new c.Module(t);e[t][0].call(u.exports,f,u,u.exports,i)}return r[t].exports;function f(e){var t=f.resolve(e);return!1===t?{}:c(t)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=r,c.parent=a,c.register=function(t,n){e[t]=[function(e,t){t.exports=n},{}]},Object.defineProperty(c,"root",{get:function(){return i[o]}}),i[o]=c;for(var d=0;d<t.length;d++)c(t[d]);if(n){var u=c(n);"object"==typeof exports&&"undefined"!=typeof module?module.exports=u:"function"==typeof define&&define.amd&&define(function(){return u})}}({fOCBn:[function(e,t,n,o){var s,i,a=e("../js/firebaseConfig.js"),r=e("firebase/firestore"),l=e("@google/generative-ai"),c=e("./script.js");let d=document.getElementById("send-btn"),u=document.getElementById("chat-input"),f=document.getElementById("chat-history");async function h(){try{s=(await (0,r.getDoc)((0,r.doc)(a.db,"apiKey","googlegenai"))).data().key,console.log("API Key:",s),i=new l.GoogleGenerativeAI(s).getGenerativeModel({model:"gemini-1.5-flash"})}catch(e){console.error("Error getting API key:",e),g("Failed to initialize AI.")}}function g(e,t=!1){let n=document.createElement("div");n.textContent=e,n.className=t?"user-history":"ai-history",f.appendChild(n),u.value=""}async function p(e){g((await i.generateContent(e)).response.text())}d.addEventListener("click",async()=>{let e=u.value.trim().toLowerCase();e?(g(e,!0),!function(e){if(e.startsWith("add book")){let t=e.replace("add book","").trim();if(t){let e=t.split(",").map(e=>e.trim());if(4===e.length){let t=e[0],n=e[1],o=e[2],s=e[3];(0,c.addBook)(t,n,o,s).then(()=>{console.log("Book added successfully"),g(`Book added! Title: ${t}, Author: ${n}, Genre: ${o}, Rating: ${s}`),(0,c.updateFeedback)("Book added successfully","success")}).catch(e=>{console.error("Error adding book:",e)})}else g("Please follow the format: 'add book title, author, genre, rating'");(0,c.displayBooks)(c.currentSort,c.uniqueCategory)}else g("Use this template to add a book: 'add book title, author, genre, rating'");return!0}return!1}(e)&&await p(e)):g("Please enter a prompt",!0)}),u.addEventListener("keypress",function(e){"Enter"===e.key&&d.click()}),window.addEventListener("load",async()=>{await h()})},{"../js/firebaseConfig.js":"ciChV","firebase/firestore":"59KHr","@google/generative-ai":"2jUEE","./script.js":"anU40"}],"2jUEE":[function(e,t,n,o){var s,i,a,r,l,c,d,u,f,h,g,p,E,m,C,y,O,v,I,_,T,A,N,R,S=e("@parcel/transformer-js/src/esmodule-helpers.js");S.defineInteropFlag(n),S.export(n,"BlockReason",()=>I),S.export(n,"ChatSession",()=>en),S.export(n,"DynamicRetrievalMode",()=>N),S.export(n,"ExecutableCodeLanguage",()=>m),S.export(n,"FinishReason",()=>_),S.export(n,"FunctionCallingMode",()=>A),S.export(n,"GenerativeModel",()=>ea),S.export(n,"GoogleGenerativeAI",()=>er),S.export(n,"GoogleGenerativeAIError",()=>w),S.export(n,"GoogleGenerativeAIFetchError",()=>x),S.export(n,"GoogleGenerativeAIRequestInputError",()=>L),S.export(n,"GoogleGenerativeAIResponseError",()=>M),S.export(n,"HarmBlockThreshold",()=>O),S.export(n,"HarmCategory",()=>y),S.export(n,"HarmProbability",()=>v),S.export(n,"Outcome",()=>C),S.export(n,"POSSIBLE_ROLES",()=>b),S.export(n,"SchemaType",()=>E),S.export(n,"TaskType",()=>T),(s=E||(E={})).STRING="string",s.NUMBER="number",s.INTEGER="integer",s.BOOLEAN="boolean",s.ARRAY="array",s.OBJECT="object",(i=m||(m={})).LANGUAGE_UNSPECIFIED="language_unspecified",i.PYTHON="python",(a=C||(C={})).OUTCOME_UNSPECIFIED="outcome_unspecified",a.OUTCOME_OK="outcome_ok",a.OUTCOME_FAILED="outcome_failed",a.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded";/**
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
 */let b=["user","model","function","system"];(r=y||(y={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",r.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",r.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",r.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",r.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",(l=O||(O={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",l.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",l.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",l.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",l.BLOCK_NONE="BLOCK_NONE",(c=v||(v={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",c.NEGLIGIBLE="NEGLIGIBLE",c.LOW="LOW",c.MEDIUM="MEDIUM",c.HIGH="HIGH",(d=I||(I={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",d.SAFETY="SAFETY",d.OTHER="OTHER",(u=_||(_={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",u.STOP="STOP",u.MAX_TOKENS="MAX_TOKENS",u.SAFETY="SAFETY",u.RECITATION="RECITATION",u.LANGUAGE="LANGUAGE",u.BLOCKLIST="BLOCKLIST",u.PROHIBITED_CONTENT="PROHIBITED_CONTENT",u.SPII="SPII",u.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",u.OTHER="OTHER",(f=T||(T={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",f.RETRIEVAL_QUERY="RETRIEVAL_QUERY",f.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",f.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",f.CLASSIFICATION="CLASSIFICATION",f.CLUSTERING="CLUSTERING",(h=A||(A={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",h.AUTO="AUTO",h.ANY="ANY",h.NONE="NONE",(g=N||(N={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",g.MODE_DYNAMIC="MODE_DYNAMIC";/**
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
 */class w extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class M extends w{constructor(e,t){super(e),this.response=t}}class x extends w{constructor(e,t,n,o){super(e),this.status=t,this.statusText=n,this.errorDetails=o}}class L extends w{}(p=R||(R={})).GENERATE_CONTENT="generateContent",p.STREAM_GENERATE_CONTENT="streamGenerateContent",p.COUNT_TOKENS="countTokens",p.EMBED_CONTENT="embedContent",p.BATCH_EMBED_CONTENTS="batchEmbedContents";class D{constructor(e,t,n,o,s){this.model=e,this.task=t,this.apiKey=n,this.stream=o,this.requestOptions=s}toString(){var e,t;let n=(null===(e=this.requestOptions)||void 0===e?void 0:e.apiVersion)||"v1beta",o=(null===(t=this.requestOptions)||void 0===t?void 0:t.baseUrl)||"https://generativelanguage.googleapis.com",s=`${o}/${n}/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}}async function G(e){var t;let n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(e){let t=[];return(null==e?void 0:e.apiClient)&&t.push(e.apiClient),t.push("genai-js/0.22.0"),t.join(" ")}(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let o=null===(t=e.requestOptions)||void 0===t?void 0:t.customHeaders;if(o){if(!(o instanceof Headers))try{o=new Headers(o)}catch(e){throw new L(`unable to convert customHeaders value ${JSON.stringify(o)} to Headers: ${e.message}`)}for(let[e,t]of o.entries()){if("x-goog-api-key"===e)throw new L(`Cannot set reserved header name ${e}`);if("x-goog-api-client"===e)throw new L(`Header name ${e} can only be set using the apiClient field`);n.append(e,t)}}return n}async function P(e,t,n,o,s,i){let a=new D(e,t,n,o,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},function(e){let t={};if((null==e?void 0:e.signal)!==void 0||(null==e?void 0:e.timeout)>=0){let n=new AbortController;(null==e?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),(null==e?void 0:e.signal)&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}(i)),{method:"POST",headers:await G(a),body:s})}}async function F(e,t,n,o,s,i={},a=fetch){let{url:r,fetchOptions:l}=await P(e,t,n,o,s,i);return H(r,l,a)}async function H(e,t,n=fetch){let o;try{o=await n(e,t)}catch(t){!function(e,t){let n=e;throw e instanceof x||e instanceof L||((n=new w(`Error fetching from ${t.toString()}: ${e.message}`)).stack=e.stack),n}(t,e)}return o.ok||await U(o,e),o}async function U(e,t){let n,o="";try{let t=await e.json();o=t.error.message,t.error.details&&(o+=` ${JSON.stringify(t.error.details)}`,n=t.error.details)}catch(e){}throw new x(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${o}`,e.status,e.statusText,n)}/**
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
 */function j(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),$(e.candidates[0]))throw new M(`${K(e)}`,e);return function(e){var t,n,o,s;let i=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(s=null===(o=e.candidates)||void 0===o?void 0:o[0].content)||void 0===s?void 0:s.parts)t.text&&i.push(t.text),t.executableCode&&i.push("\n```"+t.executableCode.language+"\n"+t.executableCode.code+"\n```\n"),t.codeExecutionResult&&i.push("\n```\n"+t.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}(e)}if(e.promptFeedback)throw new M(`Text not available. ${K(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),$(e.candidates[0]))throw new M(`${K(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),k(e)[0]}if(e.promptFeedback)throw new M(`Function call not available. ${K(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),$(e.candidates[0]))throw new M(`${K(e)}`,e);return k(e)}if(e.promptFeedback)throw new M(`Function call not available. ${K(e)}`,e)},e}function k(e){var t,n,o,s;let i=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(let t of null===(s=null===(o=e.candidates)||void 0===o?void 0:o[0].content)||void 0===s?void 0:s.parts)t.functionCall&&i.push(t.functionCall);return i.length>0?i:void 0}let B=[_.RECITATION,_.SAFETY,_.LANGUAGE];function $(e){return!!e.finishReason&&B.includes(e.finishReason)}function K(e){var t,n,o;let s="";if((!e.candidates||0===e.candidates.length)&&e.promptFeedback)s+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(s+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(s+=`: ${e.promptFeedback.blockReasonMessage}`);else if(null===(o=e.candidates)||void 0===o?void 0:o[0]){let t=e.candidates[0];$(t)&&(s+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(s+=`: ${t.finishMessage}`))}return s}function Y(e){return this instanceof Y?(this.v=e,this):new Y(e)}"function"==typeof SuppressedError&&SuppressedError;/**
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
 */let q=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function J(e){let t=[],n=e.getReader();for(;;){let{done:e,value:o}=await n.read();if(e)return j(function(e){let t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(let t of e){if(t.candidates){let e=0;for(let o of t.candidates)if(n.candidates||(n.candidates=[]),n.candidates[e]||(n.candidates[e]={index:e}),n.candidates[e].citationMetadata=o.citationMetadata,n.candidates[e].groundingMetadata=o.groundingMetadata,n.candidates[e].finishReason=o.finishReason,n.candidates[e].finishMessage=o.finishMessage,n.candidates[e].safetyRatings=o.safetyRatings,o.content&&o.content.parts){n.candidates[e].content||(n.candidates[e].content={role:o.content.role||"user",parts:[]});let t={};for(let s of o.content.parts)s.text&&(t.text=s.text),s.functionCall&&(t.functionCall=s.functionCall),s.executableCode&&(t.executableCode=s.executableCode),s.codeExecutionResult&&(t.codeExecutionResult=s.codeExecutionResult),0===Object.keys(t).length&&(t.text=""),n.candidates[e].content.parts.push(t)}e++}t.usageMetadata&&(n.usageMetadata=t.usageMetadata)}return n}(t));t.push(o)}}/**
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
 */async function V(e,t,n,o){return function(e){let[t,n]=(function(e){let t=e.getReader();return new ReadableStream({start(e){let n="";return function o(){return t.read().then(({value:t,done:s})=>{let i;if(s){if(n.trim()){e.error(new w("Failed to parse stream"));return}e.close();return}let a=(n+=t).match(q);for(;a;){try{i=JSON.parse(a[1])}catch(t){e.error(new w(`Error parsing JSON response: "${a[1]}"`));return}e.enqueue(i),a=(n=n.substring(a[0].length)).match(q)}return o()})}()}})})(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))).tee();return{stream:function(e){return function(e,t,n){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var o,s=n.apply(e,t||[]),i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(e){s[e]&&(o[e]=function(t){return new Promise(function(n,o){i.push([e,t,n,o])>1||r(e,t)})})}function r(e,t){try{var n;(n=s[e](t)).value instanceof Y?Promise.resolve(n.value.v).then(l,c):d(i[0][2],n)}catch(e){d(i[0][3],e)}}function l(e){r("next",e)}function c(e){r("throw",e)}function d(e,t){e(t),i.shift(),i.length&&r(i[0][0],i[0][1])}}(this,arguments,function*(){let t=e.getReader();for(;;){let{value:e,done:n}=yield Y(t.read());if(n)break;yield yield Y(j(e))}})}(t),response:J(n)}}(await F(t,R.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),o))}async function W(e,t,n,o){let s=await F(t,R.GENERATE_CONTENT,e,!1,JSON.stringify(n),o);return{response:j(await s.json())}}/**
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
 */function X(e){if(null!=e){if("string"==typeof e)return{role:"system",parts:[{text:e}]};if(e.text)return{role:"system",parts:[e]};if(e.parts)return e.role?e:{role:"system",parts:e.parts}}}function Q(e){let t=[];if("string"==typeof e)t=[{text:e}];else for(let n of e)"string"==typeof n?t.push({text:n}):t.push(n);return function(e){let t={role:"user",parts:[]},n={role:"function",parts:[]},o=!1,s=!1;for(let i of e)"functionResponse"in i?(n.parts.push(i),s=!0):(t.parts.push(i),o=!0);if(o&&s)throw new w("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!o&&!s)throw new w("No content is provided for sending chat message.");return o?t:n}(t)}function z(e){let t;return t=e.contents?e:{contents:[Q(e)]},e.systemInstruction&&(t.systemInstruction=X(e.systemInstruction)),t}/**
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
 */let Z=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],ee={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]},et="SILENT_ERROR";class en{constructor(e,t,n,o={}){this.model=t,this.params=n,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null==n?void 0:n.history)&&(function(e){let t=!1;for(let n of e){let{role:e,parts:o}=n;if(!t&&"user"!==e)throw new w(`First content should be with role 'user', got ${e}`);if(!b.includes(e))throw new w(`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(b)}`);if(!Array.isArray(o))throw new w("Content should have 'parts' property with an array of Parts");if(0===o.length)throw new w("Each Content should have at least one part");let s={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(let e of o)for(let t of Z)t in e&&(s[t]+=1);let i=ee[e];for(let t of Z)if(!i.includes(t)&&s[t]>0)throw new w(`Content with role '${e}' can't contain '${t}' part`);t=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var n,o,s,i,a,r;let l;await this._sendPromise;let c=Q(e),d={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(o=this.params)||void 0===o?void 0:o.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,c]},u=Object.assign(Object.assign({},this._requestOptions),t);return this._sendPromise=this._sendPromise.then(()=>W(this._apiKey,this.model,d,u)).then(e=>{var t,n;if(e.response.candidates&&e.response.candidates.length>0&&(null===(t=e.response.candidates[0])||void 0===t?void 0:t.content)!==void 0){this._history.push(c);let t=Object.assign({parts:[],role:"model"},null===(n=e.response.candidates)||void 0===n?void 0:n[0].content);this._history.push(t)}else{let t=K(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}l=e}),await this._sendPromise,l}async sendMessageStream(e,t={}){var n,o,s,i,a,r;await this._sendPromise;let l=Q(e),c={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(o=this.params)||void 0===o?void 0:o.generationConfig,tools:null===(s=this.params)||void 0===s?void 0:s.tools,toolConfig:null===(i=this.params)||void 0===i?void 0:i.toolConfig,systemInstruction:null===(a=this.params)||void 0===a?void 0:a.systemInstruction,cachedContent:null===(r=this.params)||void 0===r?void 0:r.cachedContent,contents:[...this._history,l]},d=Object.assign(Object.assign({},this._requestOptions),t),u=V(this._apiKey,this.model,c,d);return this._sendPromise=this._sendPromise.then(()=>u).catch(e=>{throw Error(et)}).then(e=>e.response).then(e=>{var t;if(e.candidates&&e.candidates.length>0&&(null===(t=e.candidates[0])||void 0===t?void 0:t.content)!==void 0){this._history.push(l);let t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{let t=K(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==et&&console.error(e)}),u}}/**
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
 */async function eo(e,t,n,o){return(await F(t,R.COUNT_TOKENS,e,!1,JSON.stringify(n),o)).json()}/**
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
 */async function es(e,t,n,o){return(await F(t,R.EMBED_CONTENT,e,!1,JSON.stringify(n),o)).json()}async function ei(e,t,n,o){let s=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await F(t,R.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:s}),o)).json()}/**
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
 */class ea{constructor(e,t,n={}){this.apiKey=e,this._requestOptions=n,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=X(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var n;let o=z(e),s=Object.assign(Object.assign({},this._requestOptions),t);return W(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},o),s)}async generateContentStream(e,t={}){var n;let o=z(e),s=Object.assign(Object.assign({},this._requestOptions),t);return V(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},o),s)}startChat(e){var t;return new en(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(t=this.cachedContent)||void 0===t?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){let n=function(e,t){var n;let o={model:null==t?void 0:t.model,generationConfig:null==t?void 0:t.generationConfig,safetySettings:null==t?void 0:t.safetySettings,tools:null==t?void 0:t.tools,toolConfig:null==t?void 0:t.toolConfig,systemInstruction:null==t?void 0:t.systemInstruction,cachedContent:null===(n=null==t?void 0:t.cachedContent)||void 0===n?void 0:n.name,contents:[]},s=null!=e.generateContentRequest;if(e.contents){if(s)throw new L("CountTokensRequest must have one of contents or generateContentRequest, not both.");o.contents=e.contents}else if(s)o=Object.assign(Object.assign({},o),e.generateContentRequest);else{let t=Q(e);o.contents=[t]}return{generateContentRequest:o}}(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),t);return eo(this.apiKey,this.model,n,o)}async embedContent(e,t={}){let n="string"==typeof e||Array.isArray(e)?{content:Q(e)}:e,o=Object.assign(Object.assign({},this._requestOptions),t);return es(this.apiKey,this.model,n,o)}async batchEmbedContents(e,t={}){let n=Object.assign(Object.assign({},this._requestOptions),t);return ei(this.apiKey,this.model,e,n)}}/**
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
 */class er{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new w("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new ea(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,n){if(!e.name)throw new L("Cached content must contain a `name` field.");if(!e.model)throw new L("Cached content must contain a `model` field.");for(let n of["model","systemInstruction"])if((null==t?void 0:t[n])&&e[n]&&(null==t?void 0:t[n])!==e[n]){if("model"===n&&(t.model.startsWith("models/")?t.model.replace("models/",""):t.model)===(e.model.startsWith("models/")?e.model.replace("models/",""):e.model))continue;throw new L(`Different value for "${n}" specified in modelParams (${t[n]}) and cachedContent (${e[n]})`)}let o=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new ea(this.apiKey,o,n)}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"k3151"}]},["fOCBn"],"fOCBn","parcelRequire94c2");
//# sourceMappingURL=index.0ee4ee89.js.map
