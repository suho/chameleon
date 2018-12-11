let data = null;
let template = `
	<div class="card text-left mt-2">
	  <div class="card-header">
		<div class="card-title h5 d-inline"><strong></strong></div>
		<button class="btn btn-error btn-sm d-block mt-2">Delete</button>
	  </div>
	  <div class="divider"></div>
	  <div class="card-body">
	    <div class="container ">
	      <div class="columns">
	        <div class="column col-xs-6">
				<label class="form-switch">
					<input type="checkbox">
					<i class="form-icon"></i> Disable auth header
				</label>
				<label class="form-switch">
					<input type="checkbox">
					<i class="form-icon"></i> Disable Referer
				</label>
				<label class="form-switch">
					<input type="checkbox">
					<i class="form-icon"></i> Disable WebSocket
				</label>
	        </div>
	        <div class="column col-xs-6">
	            <label class="form-switch">
	                <input type="checkbox">
	                <i class="form-icon"></i> Enable Accept-Language
	            </label>
	            <label class="form-switch">
	                <input type="checkbox">
	                <i class="form-icon"></i> Enable IP headers
	            </label>
	            <label class="form-switch">
	                <input type="checkbox">
	                <i class="form-icon"></i> Enable Screen Spoofing
	            </label>
	        </div>
	      </div>
	    </div>		  
	    <label class="form-checkbox">
	        <input type="checkbox">
	        <i class="form-icon"></i> Regex enabled
	    </label>
	    <input class="form-input" type="text" placeholder="Name">
	  </div>
	</div>
`;

let patternTemplate = (pattern, regexEnabled, disabled) => {
	return regexEnabled ? `<input class="form-input" type="text" value="${pattern}" ${disabled ? "disabled" : ""}>` : "";
};

function get(key) {
	return new Promise((resolve) => {
		chrome.storage.local.get(key, (item) => {
			typeof key == "string" ? resolve(item[key]) : resolve(item);
		});
	});
}

function buildWhitelist(rules) {
	let ruleElement = document.getElementById('rules');

	for (var rule of rules) {
		ruleElement.insertAdjacentHTML('beforeend', `
		<div class="card text-left mt-2" id="${rule.url}">
		  <div class="card-header">
			<div class="card-title h5 d-block"><strong>${rule.url}</strong></div>
			<button class="btn btn-primary btn-sm d-inline-block mt-2">Edit</button>
			<button class="btn btn-success btn-sm d-inline-block d-hide mt-2">Save</button>
			<button class="btn btn-error btn-sm d-inline-block mt-2">Delete</button>
		  </div>
  		  <div class="divider"></div>
		  <div class="card-body d-hide">
		    <div class="container ">
		      <div class="columns">
		        <div class="column col-xs-6">
					<label class="form-switch">
						<input type="checkbox" ${rule.options.auth ? "checked" : ""} disabled>
						<i class="form-icon"></i> Disable auth header
					</label>
					<label class="form-switch">
						<input type="checkbox" ${rule.options.ref ? "checked" : ""} disabled>
						<i class="form-icon"></i> Disable Referer
					</label>
					<label class="form-switch">
						<input type="checkbox" ${rule.options.websocket ? "checked" : ""} disabled>
						<i class="form-icon"></i> Disable WebSocket
					</label>
		        </div>
		        <div class="column col-xs-6">
		            <label class="form-switch">
		                <input type="checkbox" ${rule.options.ip ? "checked" : ""} disabled>
		                <i class="form-icon"></i> Enable IP headers
		            </label>
		            <label class="form-switch">
		                <input type="checkbox" ${rule.options.winName ? "checked" : ""} disabled>
		                <i class="form-icon"></i> Enable Protect window name
		            </label>
		            <label class="form-switch">
		                <input type="checkbox" ${rule.options.screen ? "checked" : ""} disabled>
		                <i class="form-icon"></i> Enable Screen Spoofing
		            </label>
		        </div>
		      </div>
		    </div>  
		    <label class="form-checkbox">
		        <input type="checkbox" ${rule.re ? "checked" : ""} disabled>
		        <i class="form-icon"></i> Regex enabled
		    </label>
		   ${patternTemplate(rule.pattern, rule.re, true)}
		  </div>
		</div>`)
	}
}

document.addEventListener('DOMContentLoaded', async function() {
	data = await get(null);

	buildWhitelist(data.whitelist.urlList);

	$(document).click(function(e) {
		if (e.target.nodeName == "BUTTON") {
			if (e.target.innerText == "Delete") {
				$(e.target).parent()[0].insertAdjacentHTML('beforeend', `
				<div class="confirmation">
					<h5>Are you sure you want to delete this rule?</h5>
					<button class="btn btn-success btn-sm d-inline-block mt-2">Yes</button>
					<button class="btn btn-error btn-sm d-inline-block mt-2">No</button>
				</div>
				`);
			} else if (e.target.innerText == "Edit") {
				var parent = $(e.target).parent().parent();
				var buttons = parent.find(':button');

				parent.find(":input").prop("disabled", false);
				parent.find('.card-body').toggleClass('d-hide');
				$(buttons[0]).toggleClass('d-hide');
				$(buttons[1]).toggleClass('d-hide');
			} else if (e.target.innerText == "Save") {
				var parent = $(e.target).parent().parent();
				var buttons = parent.find(':button');
				var inputs = parent.find(':input');

				if (inputs[9].checked && inputs[10].value == "") {
					$(inputs[10]).toggleClass('is-error');
					return;
				}

				$(inputs[10]).removeClass('is-error');

				let index = data.whitelist.urlList.findIndex(rule => rule.url == parent[0].id);
				data.whitelist.urlList[index] = {
					"url": parent[0].id,
					"re": inputs[9].checked,
					"pattern": inputs[9].checked ? inputs[10].value : "",
					"options": {
						"auth": inputs[3].checked,
						"ip": inputs[6].checked,
						"ref": inputs[4].checked,
						"screen": inputs[8].checked,
						"websocket": inputs[5].checked,
						"winName": inputs[7].checked
					}
				};

				chrome.runtime.sendMessage({
					action: "whitelist",
					data: {
						key: "wl_urls",
						value: JSON.stringify(data.whitelist.urlList)
					}
				});

				parent.find(":input[type='checkbox'], input[type='text']").prop("disabled", true);
				parent.find('.card-body').toggleClass('d-hide');
				$(buttons[0]).toggleClass('d-hide');
				$(buttons[1]).toggleClass('d-hide');
			} else if (e.target.innerText == "Yes") {
				var parent = $(e.target).parent().parent().parent()[0];
				let index = data.whitelist.urlList.findIndex(rule => rule.url == parent.id);
				data.whitelist.urlList.splice(index, 1);

				chrome.runtime.sendMessage({
					action: "whitelist",
					data: {
						key: "wl_urls",
						value: JSON.stringify(data.whitelist.urlList)
					}
				});

				parent.remove();
			} else if (e.target.innerText == "No") {
				$(e.target).parent()[0].remove();
			} else if (e.target.innerText == "Create") {
				var parent = $(e.target).parent().parent();
				var inputs = parent.find(':input');
				var index = data.whitelist.urlList.findIndex(rule => rule.url == inputs[0].value);

				if (inputs[0].value == "" || index > -1 || !/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(inputs[0].value)) {
					$(inputs[0]).addClass('is-error');
					return;
				}

				$(inputs[0]).removeClass('is-error');

				if (inputs[9].checked && inputs[10].value == "") {
					$(inputs[10]).toggleClass('is-error');
					return;
				}

				$(inputs[10]).removeClass('is-error');

				data.whitelist.urlList.push({
					"url": inputs[0].value,
					"re": inputs[9].checked,
					"pattern": inputs[9].checked ? inputs[10].value : "",
					"options": {
						"auth": inputs[3].checked,
						"ip": inputs[6].checked,
						"ref": inputs[4].checked,
						"screen": inputs[8].checked,
						"websocket": inputs[5].checked,
						"winName": inputs[7].checked
					}
				});

				chrome.runtime.sendMessage({
					action: "whitelist",
					data: {
						key: "wl_urls",
						value: JSON.stringify(data.whitelist.urlList)
					}
				});

				window.location.reload(false);
			} else if (e.target.innerText == "Close") {
				document.getElementById('create').remove();
			} else if (e.target.innerText == "Create new rule") {
				var newRule = document.getElementById('create');

				if (newRule) newRule.remove();

				$('.content')[0].insertAdjacentHTML('afterbegin', `
					<div class="card text-left mt-2" style="background-color: #f7f8f9;" id="create">
					  <div class="card-header">
						<input class="form-input" type="text" placeholder="Enter domain">
						<button class="btn btn-success btn-sm d-inline-block mt-2">Create</button>
						<button class="btn btn-error btn-sm d-inline-block mt-2">Close</button>
					  </div>
					  <div class="divider"></div>
					  <div class="card-body">
					    <div class="container ">
					      <div class="columns">
					        <div class="column col-xs-6">
								<label class="form-switch">
									<input type="checkbox">
									<i class="form-icon"></i> Disable auth header
								</label>
								<label class="form-switch">
									<input type="checkbox">
									<i class="form-icon"></i> Disable Referer
								</label>
								<label class="form-switch">
									<input type="checkbox">
									<i class="form-icon"></i> Disable WebSocket
								</label>
					        </div>
					        <div class="column col-xs-6">
					            <label class="form-switch">
					                <input type="checkbox">
					                <i class="form-icon"></i> Enable IP headers
					            </label>
					            <label class="form-switch">
					                <input type="checkbox">
					                <i class="form-icon"></i> Enable Protect window name
					            </label>
					            <label class="form-switch">
					                <input type="checkbox">
					                <i class="form-icon"></i> Enable Screen Spoofing
					            </label>
					        </div>
					      </div>
					    </div>  
					    <label class="form-checkbox">
					        <input type="checkbox">
					        <i class="form-icon"></i> Regex enabled
					    </label>
					  </div>
					</div>
					`);	
			}
		} else if (e.target.parentNode.innerText == "Regex enabled") {
			if (e.target.checked) {
				$(e.target).parent().parent()[0].insertAdjacentHTML('beforeend', patternTemplate("",1, false));
			} else {
				$(e.target).parent().parent().find('input[type="text"]').remove();
			}
		}
	});
});
