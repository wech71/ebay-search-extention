function isOverrideOptionValid(option)
{
	return (option === OVERRIDE_OPTIONS.COUNTRY_ONLY ||
		    option === OVERRIDE_OPTIONS.CONTINENT_ONLY ||
		    option === OVERRIDE_OPTIONS.CONTINENTAL_REGION_ONLY ||
		    option === OVERRIDE_OPTIONS.DISABLE);
}

function isSortOverrideOptionValid(option)
{
	return (option === SORT_OVERRIDE_OPTIONS.BEST_RESULTS ||
		    option === SORT_OVERRIDE_OPTIONS.CHEAPEST_WITH_DELIVERY_ONLY ||
		    option === SORT_OVERRIDE_OPTIONS.NEWEST_FIRST ||
		    option === SORT_OVERRIDE_OPTIONS.DISABLE);
}

function log(message, messageType)
{
	if(shouldLog === true) 
	{
		switch(messageType)
		{
			case MESSAGE_TYPES.DEBUG:
			{
				console.log(message);
				break;
			}
			case MESSAGE_TYPES.ERROR:
			{
				console.error(message);
				break;
			}
			default:
			{
				console.log(message);
			}
		}
	}
}

function getOverrideOptionFromStorage(callBack)
{
	getStorage(function(items) {
		callBack(items.overrideOption, items.sortOverrideOption);
	});
}

function saveOverrideOptionToStorage(overrideOption, sortOverrideOption, callBack)
{
	setStorage(STORAGE_KEYS.OVERRIDE_OPTION, overrideOption, function(){
		callBack();
	});

	setStorage(STORAGE_KEYS.SORT_OVERRIDE_OPTION, sortOverrideOption, function(){
		callBack();
	});
}


function saveLocationOverrideOptionToStorage(overrideOption, callBack)
{
	setStorage(STORAGE_KEYS.OVERRIDE_OPTION, overrideOption, function(){
		callBack();
	});
}


function saveSortOverrideOptionToStorage(sortOverrideOption, callBack)
{
	setStorage(STORAGE_KEYS.SORT_OVERRIDE_OPTION, sortOverrideOption, function(){
		callBack();
	});
}


function getStorage(callBack)
{
	chrome.storage.sync.get(null, function(items) {
		callBack(items);
	});
}

function setStorage(storageKey, value, callBack)
{
	let key = {};
	key[storageKey] = value;
	
	chrome.storage.sync.set(key, function() {
		callBack();
	});
}