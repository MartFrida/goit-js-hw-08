const e={formEl:document.querySelector("form.feedback-form")};function t(){const t=function(e){try{return JSON.parse(localStorage.getItem(e))}catch(e){console.log("error",e)}}("feedback-form-state")||{};for(const o of Object.keys(t))e.formEl.elements[o].value=t[o];return t}e.formEl.addEventListener("input",(function(t){const o={};new FormData(e.formEl).forEach(((e,t)=>{o[t]=e,function(e,t){localStorage.setItem(e,JSON.stringify(t))}("feedback-form-state",o)}))})),t(),e.formEl.addEventListener("submit",(e=>{e.preventDefault(),console.log(t()),localStorage.removeItem("feedback-form-state"),e.target.reset()}));
//# sourceMappingURL=03-feedback.839031dd.js.map
