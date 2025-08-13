log("Settings page loaded.", MESSAGE_TYPES.DEBUG);

function setOverrideOption(overrideOption) 
{
	if (!isOverrideOptionValid(overrideOption)) 
	{
		overrideOption = defaultOverride;

		saveOverrideOptionToStorage(overrideOption, function(){
			log("Override option set to default: " + overrideOption);
		});
	}

	setWidgetChecked(overrideOption, true);
}

function setSortOverrideOption(sortOverrideOption) 
{
	if (!isSortOverrideOptionValid(sortOverrideOption)) 
	{
		sortOverrideOption = defaultSortOverride;

		saveSortOverrideOptionToStorage(sortOverrideOption, function(){
			log("Override sort option set to default: " + sortOverrideOption);
		});
	}

	setWidgetChecked(sortOverrideOption, true);
}

function initOptions() 
{
	getOverrideOptionFromStorage(function(currentOverrideOption, sortOverrideOption) {
		setOverrideOption(currentOverrideOption);
		setSortOverrideOption(sortOverrideOption);
	});
}

function saveOptions()
{
	var modified = false;
	let overrideOption = getSelectedOverrideOption();
	let optionKey = {};

	if(isOverrideOptionValid(overrideOption))
	{
		optionKey[STORAGE_KEYS.OVERRIDE_OPTION] = overrideOption;
		modified = true;
	}
	else
	{
		log("Got an invalid option, not saving: " + overrideOption, MESSAGE_TYPES.ERROR);
	}
	
	let sortOverrideOption = getSelectedSortOverrideOption();

	if(isSortOverrideOptionValid(sortOverrideOption))
	{
		optionKey[STORAGE_KEYS.SORT_OVERRIDE_OPTION] = sortOverrideOption;	
		modified = true;
	}
	else
	{
		log("Got an invalid sort option, not saving: " + sortOverrideOption, MESSAGE_TYPES.ERROR);
	}

	if (modified)
		chrome.storage.sync.set(optionKey, function() {
		let status = document.getElementById('status');
		status.textContent = 'Options saved.';
		setTimeout(function() { status.textContent = ''; }, 750);
	});
}

function getSelectedOverrideOption()
{
	if(isWidgetChecked(OVERRIDE_OPTIONS.COUNTRY_ONLY))
	{
		return OVERRIDE_OPTIONS.COUNTRY_ONLY;
	}

	if(isWidgetChecked(OVERRIDE_OPTIONS.CONTINENT_ONLY))
	{
		return OVERRIDE_OPTIONS.CONTINENT_ONLY;
	}

	if(isWidgetChecked(OVERRIDE_OPTIONS.CONTINENTAL_REGION_ONLY))
	{
		return OVERRIDE_OPTIONS.CONTINENTAL_REGION_ONLY;
	}

	if(isWidgetChecked(OVERRIDE_OPTIONS.DISABLE))
	{
		return OVERRIDE_OPTIONS.DISABLE;
	}
}


function getSelectedSortOverrideOption()
{
	if(isWidgetChecked(SORT_OVERRIDE_OPTIONS.BEST_RESULTS))
	{
		return SORT_OVERRIDE_OPTIONS.BEST_RESULTS;
	}

	if(isWidgetChecked(SORT_OVERRIDE_OPTIONS.CHEAPEST_WITH_DELIVERY_ONLY))
	{
		return SORT_OVERRIDE_OPTIONS.CHEAPEST_WITH_DELIVERY_ONLY;
	}

	if(isWidgetChecked(SORT_OVERRIDE_OPTIONS.NEWEST_FIRST))
	{
		return SORT_OVERRIDE_OPTIONS.NEWEST_FIRST;
	}

	if(isWidgetChecked(OVERRIDE_OPTIONS.DISABLE))
	{
		return SORT_OVERRIDE_OPTIONS.DISABLE;
	}
}



function isWidgetChecked(widgetId)
{
	let widget = document.getElementById(widgetId);

	return (widget !== undefined && widget.checked === true)
}

function setWidgetChecked(widgetId, checked)
{
	let widget = document.getElementById(widgetId);

	if(widget !== undefined)
	{
		widget.checked = (typeof(checked) === "boolean") ? checked : false;
	}
}

document.addEventListener('DOMContentLoaded', initOptions);
document.getElementById(OVERRIDE_OPTIONS.COUNTRY_ONLY).addEventListener('click', saveOptions);
document.getElementById(OVERRIDE_OPTIONS.CONTINENT_ONLY).addEventListener('click', saveOptions);
document.getElementById(OVERRIDE_OPTIONS.CONTINENTAL_REGION_ONLY).addEventListener('click', saveOptions);
document.getElementById(OVERRIDE_OPTIONS.DISABLE).addEventListener('click',  saveOptions);

document.getElementById(SORT_OVERRIDE_OPTIONS.BEST_RESULTS).addEventListener('click', saveOptions);
document.getElementById(SORT_OVERRIDE_OPTIONS.CHEAPEST_WITH_DELIVERY_ONLY).addEventListener('click', saveOptions);
document.getElementById(SORT_OVERRIDE_OPTIONS.NEWEST_FIRST).addEventListener('click', saveOptions);
document.getElementById(SORT_OVERRIDE_OPTIONS.DISABLE).addEventListener('click',  saveOptions);
